import { interests, languages, profile } from '../data/profile'
import { Reveal, SectionKicker } from './Motion'

export function About() {
  return (
    <section id="about" className="border-y border-line bg-ink-2/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-32">
        <Reveal>
          <SectionKicker index="04" label="About" />
          <h2 className="font-display text-4xl leading-tight font-light md:text-6xl">
            Calm under complexity.
            <span className="block italic text-copper">Precise in the pixels.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-xl space-y-5 text-base leading-relaxed text-muted md:pt-12">
            <p>{profile.summary}</p>
            <p>{profile.focus}</p>
            <p>
              Before specializing in React and TypeScript, I spent years at the intersection of
              frontend engineering and graphic design — which is why I still care about whether a
              layout breathes, not just whether it compiles.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="font-mono text-[11px] tracking-[0.22em] text-copper uppercase">
                  Languages
                </p>
                <ul className="mt-3 space-y-1 text-ivory">
                  {languages.map((language) => (
                    <li key={language.name}>
                      {language.name}
                      <span className="text-muted"> · {language.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-[0.22em] text-copper uppercase">
                  Off-screen
                </p>
                <ul className="mt-3 space-y-1 text-ivory">
                  {interests.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
