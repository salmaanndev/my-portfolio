import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches) return

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    const onMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) lenis.stop()
      else lenis.start()
    }
    motion.addEventListener('change', onMotionChange)

    return () => {
      motion.removeEventListener('change', onMotionChange)
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return null
}
