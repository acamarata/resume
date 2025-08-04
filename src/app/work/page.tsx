import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
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

interface WorkExperience {
  company: string
  title: string
  logo: any
  start: string
  end: string
  location?: string
  description: string[]
}

function WorkItem({ work }: { work: WorkExperience }) {
  return (
    <article className="group relative flex flex-col items-start">
      <div className="flex items-center gap-4">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={work.logo}
            alt=""
            className="h-8 w-8 object-contain"
            unoptimized
          />
        </div>
        <div>
          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
            <span className="relative z-10">{work.title}</span>
          </h2>
          <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
            {work.company} • {work.start} - {work.end}
            {work.location && ` • ${work.location}`}
          </p>
        </div>
      </div>
      <div className="relative z-10 mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        <ul className="list-disc pl-5 space-y-1">
          {work.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

interface Skill {
  name: string
  years: number
  category: string
  proficiency: number // 1-100
}

const skills: Skill[] = [
  // Languages
  { name: 'Linux', years: 20, category: 'DevOps', proficiency: 100 },
  { name: 'PHP', years: 18, category: 'Languages', proficiency: 100 },
  { name: 'JavaScript', years: 17, category: 'Languages', proficiency: 100 },
  { name: 'REST APIs', years: 17, category: 'Backend', proficiency: 100 },
  { name: 'HTML5', years: 17, category: 'Frontend', proficiency: 100 },
  { name: 'CSS3/SASS', years: 17, category: 'Frontend', proficiency: 100 },
  { name: 'MySQL', years: 15, category: 'Databases', proficiency: 100 },
  { name: 'WordPress', years: 15, category: 'CMS', proficiency: 100 },
  { name: 'PostgreSQL', years: 12, category: 'Databases', proficiency: 80 },
  { name: 'Node.js', years: 12, category: 'Backend', proficiency: 80 },
  { name: 'Express', years: 12, category: 'Backend', proficiency: 80 },
  { name: 'TypeScript', years: 10, category: 'Languages', proficiency: 67 },
  { name: 'React', years: 10, category: 'Frontend', proficiency: 67 },
  { name: 'Drupal', years: 10, category: 'CMS', proficiency: 67 },
  { name: 'AWS', years: 10, category: 'DevOps', proficiency: 67 },
  { name: 'C/C++', years: 10, category: 'Languages', proficiency: 67 },
  { name: 'jQuery', years: 9, category: 'Frontend', proficiency: 60 },
  { name: 'MongoDB', years: 8, category: 'Databases', proficiency: 53 },
  { name: 'CI/CD', years: 8, category: 'DevOps', proficiency: 53 },
  { name: 'Python', years: 8, category: 'Languages', proficiency: 53 },
  { name: 'Docker', years: 7, category: 'DevOps', proficiency: 47 },
  { name: 'Redis', years: 7, category: 'Databases', proficiency: 47 },
  { name: 'Hasura', years: 7, category: 'Backend', proficiency: 47 },
  { name: 'Next.js', years: 7, category: 'Frontend', proficiency: 47 },
  { name: 'GraphQL', years: 6, category: 'Backend', proficiency: 40 },
  { name: 'Blockchain', years: 6, category: 'Emerging', proficiency: 40 },
  { name: 'Perl', years: 6, category: 'Languages', proficiency: 40 },
  { name: 'Solidity', years: 5, category: 'Languages', proficiency: 33 },
  { name: 'Java', years: 5, category: 'Languages', proficiency: 33 },
  { name: 'NestJS', years: 5, category: 'Backend', proficiency: 33 },
  { name: 'DynamoDB', years: 5, category: 'Databases', proficiency: 33 },
  { name: 'Laravel', years: 5, category: 'CMS', proficiency: 33 },
  { name: 'Kubernetes', years: 5, category: 'DevOps', proficiency: 33 },
  { name: 'Web3', years: 5, category: 'Emerging', proficiency: 33 },
  { name: 'TensorFlow', years: 5, category: 'AI/ML', proficiency: 33 },
  { name: 'Angular', years: 4, category: 'Frontend', proficiency: 27 },
  { name: 'Vue.js', years: 4, category: 'Frontend', proficiency: 27 },
  { name: 'Go', years: 4, category: 'Languages', proficiency: 27 },
  { name: 'Spring', years: 4, category: 'Backend', proficiency: 27 },
  { name: 'R', years: 4, category: 'Languages', proficiency: 27 },
  { name: 'PyTorch', years: 4, category: 'AI/ML', proficiency: 27 },
  { name: 'Rust', years: 3, category: 'Languages', proficiency: 20 },
  { name: 'Dart/Flutter', years: 3, category: 'Mobile', proficiency: 20 },
  { name: 'Supabase', years: 3, category: 'Backend', proficiency: 20 },
  { name: 'Vercel', years: 3, category: 'DevOps', proficiency: 20 },
  { name: 'Tailwind CSS', years: 3, category: 'Frontend', proficiency: 20 },
]

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
          {skill.name}
        </span>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          {skill.years} {skill.years === 1 ? 'year' : 'years'}
        </span>
      </div>
      <div className="w-full bg-zinc-200 rounded-full h-1.5 dark:bg-zinc-700">
        <div
          className="bg-teal-600 h-1.5 rounded-full dark:bg-teal-400 transition-all duration-1000 ease-out"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </div>
  )
}

function SkillsSection() {
  const categories = ['Languages', 'Frontend', 'Backend', 'Databases', 'CMS', 'DevOps', 'Mobile', 'AI/ML', 'Emerging']
  
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
        Technical Skills & Experience
      </h2>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
        Years of experience (15+ years = 100%)
      </p>
      <div className="space-y-6">
        {categories.map((category) => {
          const categorySkills = skills
            .filter((skill) => skill.category === category)
            .sort((a, b) => b.years - a.years)
          
          if (categorySkills.length === 0) return null
          
          return (
            <div key={category}>
              <h3 className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wider">
                {category}
              </h3>
              <div className="space-y-1">
                {categorySkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const workExperience: WorkExperience[] = [
  {
    company: 'Unity',
    title: 'Lead Developer',
    logo: logoUnity,
    start: 'Jan 2018',
    end: 'Present',
    description: [
      'Led multiple enterprise client contracts including Credit Karma, CMD, Progress, The Institutes, Enterprise, Lexia Learning, Walmart, and Cigna',
      'Developed blockchain solutions, smart contracts, and digital wallet integrations',
      'Built productivity app integrations and enterprise-scale applications',
      'Architected modern full-stack solutions using Nhost stack with Next.js frontends',
      'Technologies: Next.js, React, TypeScript, Node.js, NestJS, GraphQL, Hasura, PostgreSQL, Nhost, Web3, Solidity, AWS, Docker, Kubernetes'
    ]
  },
  {
    company: 'US Foundation',
    title: 'Founder',
    logo: logoUSFoundation,
    start: 'Jan 2014',
    end: 'Present',
    description: [
      'Founded and operated international charity organization',
      'Developed and maintained foundation websites using modern web technologies',
      'Managed international teams and coordinated charitable operations',
      'Built custom CMS and donation platforms with real-time features',
      'Technologies: Next.js, React, Node.js, PostgreSQL, GraphQL, Hasura, Nhost, AWS, Stripe API, WebSockets'
    ]
  },
  {
    company: 'United States Institute of Peace',
    title: 'Sr. Developer',
    logo: logoUSIP,
    start: 'Apr 2013',
    end: 'Dec 2013',
    description: [
      'Developed and customized Drupal sites for government organization',
      'Implemented security improvements and managed Drupal 6 to 7 migration',
      'Architected solutions for complex content management requirements',
      'Integrated modern frontend frameworks with Drupal backend',
      'Technologies: Drupal 7, PHP, MySQL, JavaScript, jQuery, React, Node.js, SASS, Git'
    ]
  },
  {
    company: 'Double Prime',
    title: 'Sr. Developer',
    logo: logoDoublePrime,
    start: 'Feb 2013',
    end: 'Apr 2013',
    description: [
      'Maintained global Drupal deployments across multiple regions',
      'Architected server infrastructure improvements',
      'Implemented regional sites and configured advanced caching systems',
      'Built custom modules with modern JavaScript frameworks',
      'Technologies: Drupal 7, PHP, MySQL, JavaScript, Backbone.js, Node.js, Varnish, Redis, AWS'
    ]
  },
  {
    company: 'Northrop Grumman',
    title: 'Lead Developer/Architect',
    logo: logoNorthrop,
    start: 'Jul 2011',
    end: 'Feb 2013',
    location: 'U.S. Treasury',
    description: [
      'Lead engineer for web development projects at U.S. Treasury',
      'Worked on cyber security projects with top-secret clearance',
      'Architected and implemented secure government applications',
      'Led team of developers on critical infrastructure projects',
      'Technologies: React, Node.js, Express, MongoDB, PostgreSQL, Java, Spring, Angular, Bootstrap, AWS GovCloud'
    ]
  },
  {
    company: 'College Board',
    title: 'Sr. Developer',
    logo: logoCollegeBoard,
    start: 'Apr 2011',
    end: 'Jul 2011',
    description: [
      'UI Engineer for Tier I Big Future site',
      'Developed front-end solutions using Spring MVC framework',
      'Implemented responsive design and accessibility features',
      'Built interactive components with emerging HTML5 technologies',
      'Technologies: Java, Spring MVC, JavaScript, jQuery, HTML5, CSS3, SASS, Bootstrap, JSP'
    ]
  },
  {
    company: 'Able Engineering',
    title: 'Sr. Developer',
    logo: logoAble,
    start: 'Jan 2011',
    end: 'Apr 2011',
    description: [
      'Developed employee evaluation system using Spring MVC',
      'Implemented comprehensive reporting and analytics features',
      'Created intuitive user interfaces for HR processes',
      'Early adopter of HTML5 and emerging web technologies',
      'Technologies: Java, Spring MVC, Hibernate, MySQL, JavaScript, jQuery, HTML5, CSS3, Ajax'
    ]
  },
  {
    company: 'Capgemini',
    title: 'Sr. Developer',
    logo: logoCapgemini,
    start: 'Oct 2010',
    end: 'Jan 2011',
    description: [
      'Developed Zend Framework applications for enterprise clients',
      'Built ticketing, helpdesk, and monitoring systems',
      'Implemented integrations with third-party services',
      'Created RESTful APIs and web services',
      'Technologies: PHP, Zend Framework, MySQL, JavaScript, jQuery, SOAP/REST APIs, Linux, Apache'
    ]
  },
  {
    company: 'Pearson',
    title: 'Sr. Developer',
    logo: logoPearson,
    start: 'Jul 2010',
    end: 'Oct 2010',
    description: [
      'Developed and integrated internal tools using various CMS technologies',
      'Improved content management workflows and processes',
      'Created custom modules for educational content delivery',
      'Built web applications for educational platforms',
      'Technologies: PHP, WordPress, Drupal, MySQL, JavaScript, jQuery, HTML, CSS, LAMP Stack'
    ]
  },
  {
    company: 'Apple',
    title: 'Developer',
    logo: logoApple,
    start: 'Oct 2009',
    end: 'Jul 2010',
    location: 'Cupertino, CA',
    description: [
      'Worked on internal tools and applications',
      'Contributed to development of consumer-facing products',
      'Collaborated with cross-functional teams on innovative solutions',
      'Developed web applications and services',
      'Technologies: PHP, Objective-C, MySQL, PostgreSQL, JavaScript, jQuery, Ruby, Python, Unix/Linux'
    ]
  },
  {
    company: 'AT&T',
    title: 'Sr. Developer',
    logo: logoATT,
    start: '2008',
    end: '2009',
    description: [
      'Developed telecommunications applications and services',
      'Worked on large-scale enterprise systems',
      'Implemented performance optimizations for high-traffic applications',
      'Built customer portals and billing systems',
      'Technologies: PHP, Perl, MySQL, JavaScript, jQuery, HTML, CSS, Apache, Linux, Shell Scripting'
    ]
  },
  {
    company: 'Roxbury Group',
    title: 'Developer',
    logo: logoRoxbury,
    start: '2007',
    end: '2008',
    description: [
      'Full-stack web development for client projects',
      'Built custom CMS solutions and e-commerce platforms',
      'Provided technical consulting services',
      'Developed custom PHP applications and WordPress sites',
      'Technologies: PHP, MySQL, WordPress, JavaScript, jQuery, HTML, CSS, Apache, LAMP Stack'
    ]
  }
]

export const metadata: Metadata = {
  title: 'Work Experience - Aric Camarata',
  description:
    'Detailed work experience spanning 17+ years at leading technology companies including Unity, Apple, AT&T, Northrop Grumman, and more. Expertise in blockchain, Web3, and enterprise development.',
  keywords: 'work experience, software engineer career, Unity, Apple, AT&T, Northrop Grumman, blockchain developer, enterprise development',
  openGraph: {
    title: 'Work Experience - Aric Camarata',
    description: '17+ years of professional software development experience at leading technology companies.',
    type: 'website',
    images: [{ url: '/photos/aric.jpg', width: 1200, height: 630, alt: 'Aric Camarata Work Experience' }],
  },
}

export default function WorkExperience() {
  return (
    <SimpleLayout
      title="My professional journey in software development."
      intro="Started coding in 2000 during high school, turning passion into profession since 2007. Over 17 years of professional experience building innovative solutions at leading technology companies, from startups to Fortune 500 enterprises."
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          {workExperience.map((work, index) => (
            <WorkItem key={index} work={work} />
          ))}
        </div>
        <div className="lg:col-span-1">
          <SkillsSection />
        </div>
      </div>
    </SimpleLayout>
  )
}