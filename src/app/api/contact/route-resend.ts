// Alternative implementation using Resend (Vercel's recommended email service)
// To use this instead of ElasticEmail:
// 1. Sign up at https://resend.com
// 2. Get your API key
// 3. Replace ELASTICEMAIL_API with RESEND_API_KEY in your .env
// 4. Rename this file to route.ts

import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  message: string
}

// Email service using Resend
async function sendEmail(data: ContactFormData) {
  const resendApiKey = process.env.RESEND_API_KEY
  
  if (!resendApiKey) {
    // If no API key, log to console (for development)
    console.log('Contact form submission:', data)
    return true
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain
        to: 'aric.camarata@gmail.com',
        reply_to: data.email,
        subject: `Contact Form: Message from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
        text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Message:
${data.message}
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Email send failed')
    }

    return true
  } catch (error) {
    console.error('Resend error:', error)
    throw error
  }
}

// Telegram notification (same as before)
async function sendTelegramNotification(data: ContactFormData) {
  const telegramApiKey = process.env.TELEGRAM_API
  const telegramChatId = process.env.TELEGRAM_CHATID
  
  if (!telegramApiKey || !telegramChatId) {
    return // Skip if not configured
  }

  try {
    const message = `
🔔 *New Contact Form Submission*

*Name:* ${data.name}
*Email:* ${data.email}

*Message:*
${data.message}
    `

    const response = await fetch(`https://api.telegram.org/bot${telegramApiKey}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    const result = await response.json()
    
    if (!result.ok) {
      console.error('Telegram notification failed:', result)
    }
  } catch (error) {
    console.error('Telegram error:', error)
    // Don't throw - we don't want Telegram failures to break the form
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate input
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send notifications in parallel
    await Promise.all([
      sendEmail(data),
      sendTelegramNotification(data),
    ])

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}

// Disable caching for this route
export const dynamic = 'force-dynamic'