// src/hooks/useScrollAnimation.js
// Custom hook: returns a Framer Motion ref + animation controls.
// When the element attached to `ref` enters the viewport, `controls.start('visible')`
// is called — which triggers any motion element using those controls to animate.
//
// v2 FIX: consolidated imports into one line; added a fallback `controls.start('visible')`
// immediately if the ref is already in view on mount (e.g. sections near the top).

import { useEffect, useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'

export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null)

  // useInView tracks when the ref element becomes at least `threshold` visible.
  // `once: true` means the animation only fires the first time (no re-trigger on scroll-up).
  const isInView = useInView(ref, { once: true, amount: threshold })

  // useAnimation gives us an imperative handle to start/stop named variants on motion elements.
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      // Fire the 'visible' variant — motion elements using `animate={controls}` will respond
      controls.start('visible')
    }
  }, [isInView, controls])

  return { ref, controls }
}
