import { type Metadata } from 'next'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ContactForm } from '@/components/ContactForm'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
// Portrait image will be referenced directly in Image component
import logoUnity from '@/images/logos/unity.png'
import logoUSFoundation from '@/images/logos/usfoundation.png'
import logoUSIP from '@/images/logos/usip.png'
import logoDoublePrime from '@/images/logos/doubleprime.png'
import logoNorthrop from '@/images/logos/northropgrumman.png'
import logoCollegeBoard from '@/images/logos/collegeboard.png'
import logoAble from '@/images/logos/able.png'
import logoCapgemini from '@/images/logos/capgemini.png'
import logoPearson from '@/images/logos/pearson.png'
import logoApple from '@/images/logos/apple.png'
import logoATT from '@/images/logos/att.png'
import logoRoxbury from '@/images/logos/roxbury.svg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function LocationIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7 object-contain" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Unity',
      title: 'Lead Developer',
      logo: logoUnity,
      start: '2018',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'US Foundation',
      title: 'Founder',
      logo: logoUSFoundation,
      start: '2014',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'USIP',
      title: 'Sr. Developer',
      logo: logoUSIP,
      start: '2013',
      end: '2013',
    },
    {
      company: 'Double Prime',
      title: 'Sr. Developer',
      logo: logoDoublePrime,
      start: '2013',
      end: '2013',
    },
    {
      company: 'Northrop Grumman',
      title: 'Lead Developer/Architect',
      logo: logoNorthrop,
      start: '2011',
      end: '2013',
    },
    {
      company: 'College Board',
      title: 'Sr. Developer',
      logo: logoCollegeBoard,
      start: '2011',
      end: '2011',
    },
    {
      company: 'Able Engineering',
      title: 'Sr. Developer',
      logo: logoAble,
      start: '2011',
      end: '2011',
    },
    {
      company: 'Capgemini',
      title: 'Sr. Developer',
      logo: logoCapgemini,
      start: '2010',
      end: '2011',
    },
    {
      company: 'Pearson',
      title: 'Sr. Developer',
      logo: logoPearson,
      start: '2010',
      end: '2010',
    },
    {
      company: 'Apple',
      title: 'Developer',
      logo: logoApple,
      start: '2009',
      end: '2010',
    },
    {
      company: 'AT&T',
      title: 'Sr. Developer',
      logo: logoATT,
      start: '2008',
      end: '2009',
    },
    {
      company: 'Roxbury Group',
      title: 'Developer',
      logo: logoRoxbury,
      start: '2007',
      end: '2008',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="/Aric%20Camarata%20-%20Resume%20-%20Sr.%20Software%20Engineer.pdf" variant="secondary" className="group mt-6 w-full">
        Download Resume (PDF)
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
      <Button href="/Aric%20Camarata%20-%20Resume%20-%20Sr.%20Software%20Engineer.docx" variant="secondary" className="group mt-2 w-full">
        Download Resume (DOCX)
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}


export const metadata: Metadata = {
  title: 'Aric Camarata - Senior Software Engineer & Technology Leader',
  description:
    'Senior software engineer with 17+ years experience in blockchain, Web3, and enterprise development. Currently Lead Developer at Unity, specializing in full-stack solutions.',
  keywords: 'Aric Camarata, software engineer, blockchain developer, Web3, full-stack developer, Unity, Cleveland Ohio, enterprise development',
  openGraph: {
    title: 'Aric Camarata - Senior Software Engineer',
    description: 'Senior software engineer specializing in blockchain, Web3, and enterprise development with 17+ years of experience.',
    type: 'profile',
    images: [{ url: '/photos/aric.jpg', width: 1200, height: 630, alt: 'Aric Camarata' }],
  },
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/photos/aric.avif"
              alt="Aric Camarata"
              width={512}
              height={512}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Aric Camarata
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My passion for software development ignited as a teenager when I enrolled in 
              advanced Computer Networking courses and special programs focused on operating 
              systems and web development. While my peers were learning basics, I was already 
              building websites for friends and gaming communities, experimenting with early 
              versions of PHP, and diving deep into system architecture. This early immersion 
              in technology set the foundation for what would become a lifelong dedication to 
              crafting innovative digital solutions.
            </p>
            <p>
              After high school, I served as a combat veteran in the U.S. Army (2001-2004), 
              where I learned invaluable lessons in discipline, leadership, and maintaining 
              composure under extreme pressure. These military-forged skills became the 
              cornerstone of my professional approach, enabling me to tackle complex technical 
              challenges with strategic thinking and unwavering focus. The transition from 
              military service to IT work was natural, as both demanded precision, adaptability, 
              and the ability to execute mission-critical objectives.
            </p>
            <p>
              Beginning my tech career in IT support roles, I spent evenings and weekends 
              teaching myself advanced web development, eventually launching my professional 
              development career in 2007 with Roxbury Group. Over the next 15+ years, I 
              mastered PHP and traditional LAMP stack development, building enterprise 
              applications for industry giants like Apple, AT&T, and Northrop Grumman. 
              Around 2014, I recognized the industry shift toward modern JavaScript frameworks 
              and orchestrated my own transition, spending the last 10+ years becoming an 
              expert in React, Node.js, TypeScript, and emerging Web3 technologies.
            </p>
            <p>
              Currently, I work as a contract Lead Developer through Unity, delivering 
              solutions for major clients including Credit Karma, CMD, Progress, Walmart, 
              and Cigna. <strong>I am actively seeking new full-time opportunities where I 
              can bring my extensive experience and passion for innovation to a forward-thinking 
              organization.</strong> My technical repertoire extends far beyond web development - 
              I&apos;ve worked extensively with Perl, Python, Go, Rust, C, and C++, contributing 
              to numerous open-source projects and pushing the boundaries of what&apos;s possible 
              with code.
            </p>
            <p>
              Among my notable achievements, I converted the complex C-based NREL SPA (Solar 
              Position Algorithm) to TypeScript while maintaining near-native performance, 
              demonstrating my ability to bridge low-level systems programming with modern 
              web technologies. My Nself project showcases my full-stack expertise, providing 
              developers with a complete backend infrastructure solution deployable with a 
              single command. These projects reflect my commitment to making sophisticated 
              technology accessible and efficient.
            </p>
            <p>
              The past few years have seen me dive deep into artificial intelligence and 
              machine learning, developing custom AI agents, conducting advanced data analysis 
              with Python and R, and leveraging TensorFlow for predictive modeling. I&apos;ve 
              integrated AI capabilities into production applications, created intelligent 
              automation systems, and explored the intersection of blockchain and AI technologies. 
              My approach to staying current is simple: my passion for development merged with 
              my career long ago, so exploring new frameworks, best practices, and emerging 
              technologies isn&apos;t just professional development - it&apos;s what I genuinely 
              enjoy doing in my free time.
            </p>
            <p>
              Beyond my technical work, I remain deeply committed to using technology for 
              social good through my role as founder and part-time leader at US Foundation, 
              where we leverage modern tech infrastructure to maximize humanitarian impact. 
              This dual focus on cutting-edge development and meaningful application defines 
              my approach to technology: always pushing forward, always seeking ways to make 
              a positive difference, and always ready for the next challenge.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            <LocationIcon className="h-4 w-4 fill-zinc-500 dark:fill-zinc-400" />
            <span>Cleveland, OH</span>
          </div>
          <ul role="list">
            <SocialLink href="https://github.com/acamarata" icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/ariccamarata/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:aric.camarata@gmail.com"
              icon={MailIcon}
              className="mt-4"
            >
              aric.camarata@gmail.com
            </SocialLink>
          </ul>
          <div className="mt-10 space-y-6">
            <Resume />
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  )
}
