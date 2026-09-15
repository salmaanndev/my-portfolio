import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-ink/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-baseline gap-2" data-cursor="hover">
          <span className="font-display text-2xl italic text-copper">SA</span>
          <span className="hidden font-mono text-[10px] tracking-[0.28em] text-muted uppercase sm:inline">
            {profile.role}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.22em] text-ivory/80 uppercase transition-colors hover:text-copper"
              data-cursor="hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 lg:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {profile.availability}
            </span>
          </span>
          <button
            type="button"
            className="fixed top-4 right-5 z-[60] rounded-full border border-copper bg-ink px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-copper uppercase md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-ink pt-24 pr-6 pb-10 pl-6 md:hidden"
        >
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-4xl italic"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
