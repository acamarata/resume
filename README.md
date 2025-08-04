# Aric Camarata - Senior Software Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

Welcome to my personal portfolio repository. This site showcases my 17+ years of software development experience, open-source contributions, and technical expertise.

🌐 **Live Site**: [ariccamarata.com](https://ariccamarata.com)

## 🚀 About This Project

This portfolio represents more than just a resume—it's a demonstration of modern web development practices and my commitment to clean, performant code. Built with the latest technologies, it serves as both a professional showcase and a testament to my technical capabilities.

### Key Features

- **Performance First**: Achieves perfect Lighthouse scores with optimized images (AVIF/WebP), lazy loading, and efficient code splitting
- **Responsive Design**: Fully responsive with mobile-first approach and dark mode support
- **SEO Optimized**: Complete with meta tags, structured data, sitemap, and RSS feed
- **Technical Blog**: MDX-powered blog featuring in-depth articles on algorithms, astronomy, and web development
- **Interactive Contact Form**: Real-time form handling with email notifications via ElasticEmail API
- **Type-Safe**: 100% TypeScript with strict type checking throughout

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.4.4](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org) 
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with custom design system
- **Content**: MDX for rich blog posts with syntax highlighting
- **Deployment**: [Vercel](https://vercel.com) with automatic CI/CD
- **Email Service**: ElasticEmail for contact form submissions
- **Development**: Turbopack for lightning-fast HMR

## 📊 Performance Metrics

- **Build Size**: < 100KB First Load JS (shared by all pages)
- **Performance Score**: 100/100 Lighthouse
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO Score**: 100/100
- **Best Practices**: 100/100

## 🏗️ Architecture Highlights

### Code Organization
```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
├── lib/             # Utility functions and helpers
└── images/          # Optimized assets
```

### Notable Implementation Details

- **Image Optimization**: Multi-format support (AVIF, WebP, PNG) with automatic format selection
- **Type Safety**: Comprehensive TypeScript interfaces for all data structures
- **Component Architecture**: Modular, reusable components following React best practices
- **API Design**: RESTful endpoints with proper error handling and validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/acamarata/resume.git
cd resume

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site in development mode.

### Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

## 🧪 Development Workflow

- **Code Quality**: ESLint and Prettier configured for consistent code style
- **Type Checking**: Strict TypeScript configuration with no implicit any
- **Git Hooks**: Pre-commit hooks for linting and type checking (coming soon)
- **Testing**: Component and integration tests (coming soon)

## 📝 Content Management

### Blog Posts
Blog posts are written in MDX format in `src/app/blog/[slug]/page.mdx`. Each post includes:
- Metadata for SEO
- Syntax highlighting for code blocks
- Responsive images
- Custom React components

### Adding New Projects
Projects are managed in `src/app/projects/page.tsx` with custom SVG icons for each project type.

## 🔐 Environment Variables

```env
# Site configuration
NEXT_PUBLIC_SITE_URL=https://ariccamarata.com

# Email notifications (optional)
ELASTICEMAIL_API=your_api_key
ELASTICEMAIL_FROM=noreply@yourdomain.com

# Telegram notifications (optional)
TELEGRAM_BOT=your_bot_token
TELEGRAM_CHAT=your_chat_id
```

## 📈 Analytics & Monitoring

- Vercel Analytics for performance monitoring
- Real User Metrics (RUM) for user experience tracking
- Error tracking and logging in production

## 🤝 Open Source Contributions

This portfolio highlights several of my open-source projects:
- **[NREL-SPA](https://github.com/acamarata/nrel-spa)**: JavaScript port of NREL's Solar Position Algorithm
- **[Moon Positioning](https://github.com/acamarata/moon-positioning)**: Lunar phase calculations with NASA imagery
- **[Luxon Hijri](https://github.com/acamarata/luxon-hijri)**: Islamic calendar integration for Luxon.js
- **[Nself CLI](https://nself.org)**: Modern CLI tool for Nhost development

## 📬 Contact

Feel free to reach out through the contact form on the site or connect with me on:
- [LinkedIn](https://linkedin.com/in/ariccamarata)
- [GitHub](https://github.com/acamarata)

## 📄 License

© 2025 Aric Camarata. All rights reserved.

This repository is public for transparency and to showcase my work, but the content and design remain my intellectual property. Feel free to draw inspiration, but please do not copy the site directly.