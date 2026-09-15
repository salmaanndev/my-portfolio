import { useCallback, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Loader, Presence } from './components/Motion'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import { SmoothScroll } from './components/SmoothScroll'
import { Work } from './components/Work'

export default function App() {
  const [ready, setReady] = useState(() => {
    if (typeof window === 'undefined') return false
    return new URLSearchParams(window.location.search).get('intro') === '0'
  })
  const complete = useCallback(() => setReady(true), [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="grain" />
      <div className="vignette" />
      <CustomCursor />
      <Presence show={!ready}>
        <Loader key="loader" onComplete={complete} />
      </Presence>
      {ready ? <SmoothScroll /> : null}
      <div
        className={ready ? 'opacity-100' : 'pointer-events-none opacity-0'}
        inert={!ready}
        aria-hidden={!ready}
      >
        <Navbar />
        <main id="main">
          <Hero />
          <Work />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
