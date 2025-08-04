import { type ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { formatDate } from '@/lib/formatDate'

export function BlogLayout({
  article,
  children,
}: {
  article: {
    title: string
    description: string
    author: string
    date: string
  }
  children: ReactNode
}) {
  return (
    <>
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>
            <div className="mt-8 prose dark:prose-invert">{children}</div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}