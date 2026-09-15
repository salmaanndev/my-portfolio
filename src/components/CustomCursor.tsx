import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const activated = useRef(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 280, damping: 28, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 280, damping: 28, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const motionOk = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || motionOk.matches) return

    const activate = () => {
      if (activated.current) return
      activated.current = true
      setEnabled(true)
      document.body.classList.add('custom-cursor')
    }

    const move = (event: MouseEvent) => {
      activate()
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      setHovering(Boolean(target?.closest('a, button, [data-cursor="hover"]')))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.body.classList.remove('custom-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[80] mix-blend-difference"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      >
        <div
          className={`rounded-full border border-ivory/80 transition-all duration-300 ${
            hovering ? 'h-16 w-16 bg-ivory/10' : 'h-9 w-9'
          }`}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[81] h-1.5 w-1.5 rounded-full bg-copper"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
