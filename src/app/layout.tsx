import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ariccamarata.com'),
  title: {
    template: '%s - Aric Camarata',
    default: 'Aric Camarata - Senior Software Engineer & Technology Leader',
  },
  description:
    "I'm Aric Camarata, a senior software engineer and technology leader based in Cleveland, OH. With over 17 years of professional experience, I specialize in blockchain, Web3, and enterprise software development.",
  keywords: [
    'Aric Camarata',
    'Software Engineer',
    'Blockchain Developer',
    'Web3',
    'Full Stack Developer',
    'NodeJS',
    'React',
    'Cleveland',
    'Unity',
    'US Foundation',
  ],
  authors: [{ name: 'Aric Camarata', url: 'https://ariccamarata.com' }],
  creator: 'Aric Camarata',
  publisher: 'Aric Camarata',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ariccamarata.com',
    siteName: 'Aric Camarata',
    title: 'Aric Camarata - Senior Software Engineer & Technology Leader',
    description: 'Senior software engineer with 17+ years experience in blockchain, Web3, and enterprise development. Currently Lead Developer at Unity.',
    images: [
      {
        url: '/photos/aric.jpg',
        width: 1200,
        height: 630,
        alt: 'Aric Camarata - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aric Camarata - Senior Software Engineer',
    description: 'Senior software engineer specializing in blockchain, Web3, and enterprise development.',
    images: ['/photos/aric.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aric Camarata",
              "jobTitle": "Senior Software Engineer",
              "description": "Senior software engineer with 17+ years of experience specializing in blockchain, Web3, and enterprise development.",
              "url": "https://ariccamarata.com",
              "image": "https://ariccamarata.com/photos/aric.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cleveland",
                "addressRegion": "OH",
                "addressCountry": "US"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Unity",
                  "description": "Lead Developer"
                },
                {
                  "@type": "Organization", 
                  "name": "US Foundation",
                  "description": "Founder"
                }
              ],
              "knowsAbout": [
                "JavaScript",
                "TypeScript", 
                "NodeJS",
                "React",
                "Blockchain",
                "Web3",
                "Smart Contracts",
                "AWS",
                "PostgreSQL",
                "GraphQL"
              ],
              "sameAs": [
                "https://github.com/acamarata",
                "https://www.linkedin.com/in/ariccamarata/"
              ]
            })
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
