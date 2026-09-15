import { ArrowDownRight, Download } from 'lucide-react'
import { MagneticLink, Reveal } from './Motion'
import { marquee, profile } from '../data/profile'

export function Hero() {
  return (
    <section id="top" className="relative min-h-svh overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-20%] h-48 w-48 rounded-full bg-copper/10 blur-3xl md:h-[520px] md:w-[520px]" />
        <div className="absolute bottom-[-10%] left-[-20%] h-40 w-40 rounded-full bg-mint/5 blur-3xl md:h-[420px] md:w-[420px]" />
      </div>

      <div className="relative mx-auto grid w-full min-w-0 max-w-7xl items-start gap-12 px-5 pt-6 pb-10 md:min-h-[calc(100svh-8.5rem)] md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:items-end md:px-8 md:pt-0">
        <div className="min-w-0 pb-6">
          <Reveal onView={false}>
            <p className="font-mono text-[10px] tracking-[0.18em] text-copper uppercase sm:text-[11px] sm:tracking-[0.38em]">
              <span className="sm:hidden">{profile.role}</span>
              <span className="hidden sm:inline">
                {profile.role} · {profile.location}
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.08} onView={false}>
            <h1 className="mt-6 font-display text-[14vw] leading-[0.88] font-light tracking-[-0.04em] text-ivory sm:text-[12vw] lg:text-[9.4rem]">
              {profile.firstName}
              <span className="block italic text-copper-bright">{profile.lastName}.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16} onView={false}>
            <p className="mt-8 w-full text-base leading-relaxed font-light text-muted md:max-w-xl md:text-xl">
              {profile.headline} I build production-ready React interfaces for dashboards,
              care-plan workflows, and lasting design systems.
            </p>
          </Reveal>

          <Reveal delay={0.24} onView={false}>
            <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <MagneticLink
                href="#work"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-ivory px-6 py-3 text-sm tracking-wide text-ink hover:bg-copper-bright"
              >
                Selected work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </MagneticLink>
              <MagneticLink
                href={profile.resume}
                download
                className="inline-flex items-center justify-center gap-3 rounded-full border border-line px-6 py-3 text-sm tracking-wide text-ivory hover:border-copper"
              >
                <Download className="h-4 w-4 text-copper" />
                Download CV
              </MagneticLink>
            </div>
          </Reveal>

          <Reveal delay={0.3} onView={false}>
            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-line pt-6 sm:mt-14 sm:gap-6 sm:pt-8">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase sm:text-[10px] sm:tracking-[0.2em]">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl italic text-ivory">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="hidden md:block">
          <Reveal delay={0.2} onView={false}>
            <div className="relative mx-auto mb-8 aspect-square w-full max-w-md">
              <HeroOrbit />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative w-full overflow-hidden border-y border-line bg-ink-2/60 py-4" aria-hidden>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {marquee.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="px-6 font-mono text-[11px] tracking-[0.32em] text-muted uppercase"
                  >
                    {item}
                    <span className="ml-6 text-copper">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const orbitChips = ['React', 'TypeScript', 'Redux', 'AWS', 'Figma', 'CI/CD'] as const

function HeroOrbit() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-[8%] rounded-full border border-line" />
      <div className="orbit absolute inset-[18%] rounded-full border border-dashed border-copper/30" />
      <div className="orbit-rev absolute inset-[30%] rounded-full border border-line" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-36 w-36 place-items-center rounded-full bg-gradient-to-br from-copper/20 to-transparent ring-1 ring-copper/40">
          <div className="text-center">
            <p className="font-display text-4xl italic text-copper">SA</p>
            <p className="mt-1 font-mono text-[9px] tracking-[0.24em] text-muted uppercase">
              Est. 2021
            </p>
          </div>
        </div>
      </div>
      {orbitChips.map((chip, index) => {
        const angle = (index / orbitChips.length) * Math.PI * 2 - Math.PI / 2
        const x = 50 + Math.cos(angle) * 42
        const y = 50 + Math.sin(angle) * 42
        return (
          <span
            key={chip}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-ink/80 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-ivory uppercase backdrop-blur"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {chip}
          </span>
        )
      })}
    </div>
  )
}
