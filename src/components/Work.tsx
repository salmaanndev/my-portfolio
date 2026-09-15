import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/profile'
import { MagneticLink, Reveal, SectionKicker } from './Motion'

export function Work() {
  const featured = projects.filter((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionKicker index="01" label="Selected work" />
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-4xl leading-tight font-light tracking-tight md:text-6xl">
            Product surfaces that have to hold up in production.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Healthcare SaaS, inventory tools, and focused web apps — from Figma to AWS.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8">
        {featured.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="group overflow-hidden rounded-[28px] border border-line bg-ink-2">
              {project.image ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-cursor="hover"
                >
                  <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/15" />
                    <div className="absolute right-6 bottom-6 left-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="font-mono text-[11px] tracking-[0.24em] text-copper uppercase">
                          {project.subtitle} · {project.year}
                        </p>
                        <h3 className="mt-2 font-display text-3xl italic md:text-5xl">
                          {project.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm text-ivory">
                        Visit live
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative overflow-hidden px-6 py-12 md:px-10 md:py-16">
                  <p className="pointer-events-none absolute -right-4 -bottom-8 font-display text-[22vw] leading-none font-light text-ivory/5 italic md:text-[8rem]">
                    Plan
                  </p>
                  <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.24em] text-copper uppercase">
                        {project.subtitle} · {project.year}
                      </p>
                      <h3 className="mt-3 font-display text-4xl italic md:text-5xl">
                        {project.title}
                      </h3>
                    </div>
                    <MagneticLink
                      href={project.live}
                      external
                      className="inline-flex items-center gap-2 text-sm"
                    >
                      Visit live
                      <ArrowUpRight className="h-4 w-4" />
                    </MagneticLink>
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-5 px-6 py-6 md:flex-row md:items-start md:justify-between md:px-8">
                <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-ivory/80 uppercase"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {rest.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="flex h-full flex-col justify-between rounded-[24px] border border-line bg-ink-2 p-6 transition hover:border-copper/50">
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] text-copper uppercase">
                  {project.subtitle}
                </p>
                <h3 className="mt-3 font-display text-2xl italic">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
              </div>
              <div className="mt-8">
                <ul className="mb-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted uppercase"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <MagneticLink href={project.live} external className="text-sm text-ivory">
                    Live <ArrowUpRight className="inline h-3.5 w-3.5" />
                  </MagneticLink>
                  {project.repo ? (
                    <MagneticLink href={project.repo} external className="text-sm text-muted">
                      Code
                    </MagneticLink>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
