export function SolarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle
        cx="12"
        cy="12"
        r="5"
        className="fill-yellow-400 stroke-yellow-600 dark:fill-yellow-500 dark:stroke-yellow-400"
        strokeWidth="2"
      />
      <path
        d="M12 2v4M12 18v4M22 12h-4M6 12H2M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76L4.93 4.93"
        className="stroke-yellow-600 dark:stroke-yellow-400"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        className="fill-slate-200 stroke-slate-600 dark:fill-slate-700 dark:stroke-slate-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        ry="2"
        className="fill-emerald-100 stroke-emerald-600 dark:fill-emerald-900/20 dark:stroke-emerald-500"
        strokeWidth="2"
      />
      <path
        d="M16 2v4M8 2v4M3 10h18"
        className="stroke-emerald-600 dark:stroke-emerald-500"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"
        className="stroke-emerald-600 dark:stroke-emerald-500"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function VeteransIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        className="fill-blue-500 stroke-blue-700 dark:fill-blue-600 dark:stroke-blue-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BlockchainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 2L2 7v10l10 5 10-5V7L12 2z"
        className="fill-purple-100 stroke-purple-600 dark:fill-purple-900/20 dark:stroke-purple-500"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V12M2 7l10 5 10-5M12 2v10"
        className="stroke-purple-600 dark:stroke-purple-500"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}