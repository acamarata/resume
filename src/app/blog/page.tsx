import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'

interface BlogPost {
  title: string
  date: string
  description: string
  slug: string
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex items-center">
        <span className="flex min-w-0 flex-auto p-px">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
          />
        </span>
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Article({ article }: { article: BlogPost }) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formattedDate}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 max-md:hidden"
      >
        {formattedDate}
      </Card.Eyebrow>
    </article>
  )
}

const blogPosts: BlogPost[] = [
  {
    title: 'Introducing Nself - Self-Hosted Backend Infrastructure CLI',
    date: '2025-08-03',
    description: 'Today I\'m excited to release Nself, an open-source CLI that deploys complete backend infrastructure with a single command. Built for developers who want to eliminate infrastructure complexity.',
    slug: 'introducing-nself-cli'
  },
  {
    title: 'Luxon Hijri: Bridging Islamic and Gregorian Calendars in TypeScript',
    date: '2023-12-01',
    description: 'Creating a TypeScript library for accurate Hijri calendar conversions using the Umm al-Qura system, enabling developers to build culturally-aware applications.',
    slug: 'luxon-hijri-islamic-calendar'
  },
  {
    title: 'Moon Cycle: Bringing NASA\'s Lunar Imagery to JavaScript Developers',
    date: '2023-11-14',
    description: 'Building a JavaScript library that maps dates to precise lunar phases using NASA\'s high-resolution moon imagery for photographers, astronomers, and developers.',
    slug: 'moon-cycle-lunar-phase-tracking'
  },
  {
    title: 'Converting NREL\'s Solar Position Algorithm to JavaScript: A Journey in Precision',
    date: '2023-11-11',
    description: 'How I converted the C-based NREL Solar Position Algorithm to JavaScript while maintaining near-native performance and ±0.0003° accuracy for solar calculations.',
    slug: 'converting-nrel-spa-to-javascript'
  },
  {
    title: 'Solar SPA: Achieving Near-Native Performance with WebAssembly',
    date: '2023-10-15',
    description: 'How I leveraged WebAssembly to create a high-performance solar position calculator that runs at near-native speeds in Node.js environments.',
    slug: 'solar-spa-webassembly-performance'
  }
]

export const metadata: Metadata = {
  title: 'Blog - Aric Camarata',
  description:
    'Technical blog posts on software development, blockchain technology, Web3, and building innovative solutions. Insights from 17+ years of professional development experience.',
  keywords: 'software development blog, blockchain articles, Web3 development, technical writing, programming insights, developer blog',
  openGraph: {
    title: 'Blog - Aric Camarata',
    description: 'Technical insights and articles on software development, blockchain, and Web3 technologies.',
    type: 'website',
    images: [{ url: '/photos/aric.jpg', width: 1200, height: 630, alt: 'Aric Camarata Blog' }],
  },
}

export default function BlogIndex() {
  // Sort posts by date in descending order (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  
  return (
    <SimpleLayout
      title="Writing on software development and innovation."
      intro="Insights from my journey building software, exploring blockchain technology, and creating tools for developers."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {sortedPosts.map((post) => (
            <Article key={post.slug} article={post} />
          ))}
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <Newsletter />
      </div>
    </SimpleLayout>
  )
}