import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SolarIcon, MoonIcon, CalendarIcon, VeteransIcon, BlockchainIcon } from '@/components/ProjectIcons'
import logoNself from '@/images/logos/nself.png'

function ProjectIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const projects = [
  {
    name: 'Nself - Backend Infrastructure CLI',
    description:
      'Open-source CLI that deploys complete backend infrastructure with a single command. Includes PostgreSQL, GraphQL, authentication, storage, and serverless functions. Built to simplify Nhost stack deployment.',
    link: { href: 'https://github.com/acamarata/nself', label: 'github.com/acamarata/nself' },
    logo: logoNself,
    isImage: true,
  },
  {
    name: 'NREL Solar Position Algorithm',
    description:
      'High-precision JavaScript implementation of NREL\'s Solar Position Algorithm with ±0.0003° accuracy. Calculates solar zenith, azimuth, and incidence angles for any location from year -2000 to 6000. Essential for solar tracking systems and resource assessment.',
    link: { href: 'https://github.com/acamarata/nrel-spa', label: 'github.com/acamarata/nrel-spa' },
    icon: SolarIcon,
  },
  {
    name: 'Moon Cycle - Lunar Phase Mapping',
    description:
      'JavaScript library mapping dates to precise lunar phases with NASA imagery. Features 8,760 yearly images for astronomical photography planning, farming calendars, and outdoor event scheduling. Includes high-resolution visualizations.',
    link: { href: 'https://github.com/acamarata/moon-cycle', label: 'github.com/acamarata/moon-cycle' },
    icon: MoonIcon,
  },
  {
    name: 'Luxon Hijri - Islamic Calendar',
    description:
      'TypeScript library for Umm al-Qura Hijri calendar conversions with 130+ weekly downloads. Powers religious event planning, Ramadan scheduling, and Islamic financial applications. Supports full localization and custom formatting.',
    link: { href: 'https://github.com/acamarata/luxon-hijri', label: 'github.com/acamarata/luxon-hijri' },
    icon: CalendarIcon,
  },
  {
    name: 'Veterans.Pro - Support Platform',
    description:
      'Comprehensive platform connecting veterans with resources, benefits, and community support. Features real-time chat, resource directories, benefit calculators, and appointment scheduling for VA services.',
    link: { href: 'https://www.veterans.pro', label: 'veterans.pro' },
    icon: VeteransIcon,
  },
  {
    name: 'VetBen.org - Benefits Organization',
    description:
      'Non-profit platform helping veterans navigate and access earned benefits. Provides educational resources, claim assistance, advocacy support, and direct connections to veteran service officers.',
    link: { href: 'https://vetben.org', label: 'vetben.org' },
    icon: VeteransIcon,
  },
  {
    name: 'Blockchain Trading & Wallet Tools',
    description:
      'Suite of DeFi tools including multi-chain wallet management, automated trading bots, liquidity provision calculators, and smart contract interaction interfaces. Built for security and efficiency.',
    link: { href: 'https://github.com/acamarata', label: 'github.com/acamarata' },
    icon: BlockchainIcon,
  },
  {
    name: 'Enterprise Blockchain Solutions',
    description:
      'Smart contracts and DApps for supply chain tracking, tokenization platforms, and decentralized identity systems. Deployed production contracts handling millions in TVL across multiple chains.',
    link: { href: 'https://github.com/acamarata', label: 'github.com/acamarata' },
    icon: BlockchainIcon,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects - Aric Camarata',
  description: 'Innovative software projects including Nself backend infrastructure CLI, blockchain smart contracts, and enterprise solutions. Open-source and commercial work.',
  keywords: 'software projects, Nself CLI, blockchain projects, smart contracts, open source, enterprise solutions, full-stack development',
  openGraph: {
    title: 'Projects - Aric Camarata',
    description: 'Innovative software projects including Nself backend infrastructure CLI and blockchain solutions.',
    type: 'website',
    images: [{ url: '/photos/aric.jpg', width: 1200, height: 630, alt: 'Aric Camarata Projects' }],
  },
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Innovative solutions I've built throughout my career."
      intro="From blockchain smart contracts to enterprise serverless architectures, these projects showcase my expertise in modern web technologies, distributed systems, and innovative software development. Many are open-source contributions to the developer community."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {project.isImage && project.logo ? (
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 object-contain"
                  unoptimized
                />
              ) : project.icon ? (
                <project.icon className="h-8 w-8" />
              ) : (
                <ProjectIcon className="h-8 w-8" />
              )}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
