import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
        <a href="#top" className="text-ivory" data-cursor="hover">
          Back to top
        </a>
      </div>
    </footer>
  )
}
