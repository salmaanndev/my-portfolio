import { education, skillGroups } from '../data/profile'
import { Reveal, SectionKicker } from './Motion'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionKicker index="03" label="Capabilities" />
        <h2 className="max-w-2xl font-display text-4xl leading-tight font-light md:text-6xl">
          A stack shaped by dashboards, design systems, and deploys.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <article className="h-full rounded-[24px] border border-line p-7">
              <h3 className="font-display text-3xl italic text-copper">{group.title}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-ivory/5 px-3 py-1.5 text-sm text-ivory/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-8 rounded-[24px] border border-line px-7 py-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-copper uppercase">
              Education
            </p>
            <h3 className="mt-2 font-display text-2xl italic">{education.degree}</h3>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted uppercase md:mt-0">
            {education.period}
            <br />
            {education.meta}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
