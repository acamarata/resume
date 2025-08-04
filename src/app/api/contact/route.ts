import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  message: string
}

// Email service using ElasticEmail
async function sendEmail(data: ContactFormData) {
  const elasticEmailApiKey = process.env.ELASTICEMAIL_API
  
  if (!elasticEmailApiKey) {
    // If no API key, log to console (for development)
    console.log('No ElasticEmail API key found. Contact form submission:', data)
    return true
  }
  
  console.log('Attempting to send email via ElasticEmail...')
  console.log('API Key present:', elasticEmailApiKey.substring(0, 10) + '...')

  try {
    const emailParams = {
      apikey: elasticEmailApiKey,
      from: process.env.ELASTICEMAIL_FROM || 'noreply@ussunnah.org', // Using verified domain
      fromName: data.name,
      replyTo: data.email,
      replyToName: data.name,
      to: 'aric.camarata@gmail.com',
      subject: `Contact Form: Message from ${data.name}`,
      isTransactional: 'true',
      bodyHtml: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
      bodyText: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Message:
${data.message}
      `,
    }
    
    console.log('Email params (without API key):', {
      ...emailParams,
      apikey: '[REDACTED]'
    })

    const response = await fetch('https://api.elasticemail.com/v2/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(emailParams),
    })

    console.log('ElasticEmail response status:', response.status)
    const responseText = await response.text()
    console.log('ElasticEmail response:', responseText)
    
    let result
    try {
      result = JSON.parse(responseText)
    } catch (e) {
      console.error('Failed to parse response as JSON:', responseText)
      throw new Error(`Invalid response from ElasticEmail: ${responseText}`)
    }
    
    if (!result.success) {
      console.error('ElasticEmail failed:', result)
      throw new Error(result.error || 'Email send failed')
    }

    console.log('Email sent successfully!')
    return true
  } catch (error) {
    console.error('ElasticEmail error:', error)
    throw error
  }
}

// Telegram notification
async function sendTelegramNotification(data: ContactFormData) {
  const telegramBotToken = process.env.TELEGRAM_BOT
  const telegramChatId = process.env.TELEGRAM_CHAT
  
  if (!telegramBotToken || !telegramChatId) {
    return // Skip if not configured
  }

  try {
    const message = `
🔔 *New Contact Form Submission*

*Site:* ariccamarata.com
*Name:* ${data.name}
*Email:* ${data.email}

*Message:*
${data.message}
    `

    const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
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
