import { ArrowUpRight, Copy, Mail, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { MagneticLink, Reveal, SectionKicker } from './Motion'

export function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timeout)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionKicker index="05" label="Contact" />
        <p className="font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
          {profile.availability}
        </p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] font-light md:text-7xl">
          Let&apos;s build the next
          <span className="block italic text-copper">serious interface.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-12 flex items-end justify-between border-b border-line py-6"
          data-cursor="hover"
        >
          <span className="font-display text-2xl break-all italic sm:text-4xl md:text-5xl">
            {profile.email}
          </span>
          <ArrowUpRight className="mb-1 h-7 w-7 shrink-0 text-copper transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-10 flex flex-wrap gap-3">
          <MagneticLink
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ivory px-5 py-3 text-sm text-ink hover:bg-copper-bright"
          >
            <Mail className="h-4 w-4" />
            Write an email
          </MagneticLink>
          <MagneticLink
            href={profile.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm"
          >
            <Phone className="h-4 w-4 text-copper" />
            {profile.phone}
          </MagneticLink>
          <MagneticLink
            href={profile.github}
            external
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm"
          >
            GitHub / {profile.githubHandle}
            <ArrowUpRight className="h-4 w-4" />
          </MagneticLink>
          <button
            type="button"
            onClick={() => void copyEmail()}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm"
            data-cursor="hover"
            aria-live="polite"
          >
            <Copy className="h-4 w-4 text-copper" />
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>
      </Reveal>
    </section>
  )
}
