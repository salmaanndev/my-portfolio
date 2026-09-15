import { experience } from '../data/profile'
import { Reveal, SectionKicker } from './Motion'

export function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-ink-2/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionKicker index="02" label="Experience" />
          <h2 className="max-w-3xl font-display text-4xl leading-tight font-light md:text-6xl">
            Shipping frontend in rooms where the details matter.
          </h2>
        </Reveal>

        <ol className="mt-16 space-y-6">
          {experience.map((job, index) => (
            <li key={job.company}>
              <Reveal delay={index * 0.08}>
                <article className="grid gap-6 rounded-[28px] border border-line bg-ink p-6 md:grid-cols-[220px_1fr] md:p-10">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.2em] text-copper uppercase">
                      {job.period}
                    </p>
                    <p className="mt-3 text-sm text-muted">{job.location}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl italic">
                      {job.role}
                      <span className="mt-1 block font-sans text-lg not-italic text-ivory/70">
                        {job.company}
                      </span>
                    </h3>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-muted uppercase"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-6 space-y-3">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:top-2 before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-copper"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
