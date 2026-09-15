import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState, type ReactNode } from 'react'
import { profile } from '../data/profile'

type LoaderProps = {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      onComplete()
      return
    }

    const start = performance.now()
    const duration = 2100
    let frame = 0
    let timeout = 0

    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - start) / duration) * 100))
      setProgress(next)
      if (next < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        timeout = window.setTimeout(onComplete, 420)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timeout)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <p className="font-mono text-[11px] tracking-[0.42em] text-copper uppercase">
        Portfolio / 2026
      </p>
      <div className="mt-8 overflow-hidden">
        <motion.h1
          className="px-6 text-center font-display text-4xl font-light tracking-tight text-ivory sm:text-6xl md:text-7xl"
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.firstName}
          <span className="italic text-copper"> {profile.lastName}</span>
        </motion.h1>
      </div>
      <div className="mt-16 h-px w-48 overflow-hidden bg-line">
        <motion.div
          className="h-full bg-copper"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'linear', duration: 0.1 }}
        />
      </div>
      <p className="mt-4 font-mono text-[11px] text-muted tabular-nums">
        {String(progress).padStart(3, '0')}
      </p>
    </motion.div>
  )
}

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  onView?: boolean
}

export function Reveal({ children, delay = 0, className, onView = true }: RevealProps) {
  const classes = className ?? ''
  const hidden = { opacity: 0, y: 28 }
  const shown = { opacity: 1, y: 0 }
  const transition = { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const }

  if (!onView) {
    return (
      <motion.div className={classes} initial={hidden} animate={shown} transition={transition}>
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={classes}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.12 }}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

type MagneticProps = {
  children: ReactNode
  className?: string
  href: string
  download?: boolean
  external?: boolean
}

export function MagneticLink({
  children,
  className,
  href,
  download,
  external,
}: MagneticProps) {
  return (
    <motion.a
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={className}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      data-cursor="hover"
    >
      {children}
    </motion.a>
  )
}

export function SectionKicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="font-mono text-[11px] tracking-[0.28em] text-copper uppercase">
        {index}
      </span>
      <span className="h-px w-10 bg-copper/50" />
      <span className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
        {label}
      </span>
    </div>
  )
}

export function Presence({ show, children }: { show: boolean; children: ReactNode }) {
  return <AnimatePresence>{show ? children : null}</AnimatePresence>
}
