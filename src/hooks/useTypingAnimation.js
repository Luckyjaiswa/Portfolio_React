// src/hooks/useTypingAnimation.js
// Custom hook: cycles through an array of strings with a typing/deleting
// animation. Returns the currently displayed text so the component can
// render it with a blinking cursor beside it.
//
// Flow: type one char at a time → pause → delete one char at a time → next string

import { useState, useEffect, useRef } from 'react'

export function useTypingAnimation(words = [], typingSpeed = 80, deletingSpeed = 50, pauseMs = 1800) {
  const [displayedText, setDisplayedText] = useState('')
  const [wordIndex, setWordIndex]         = useState(0)
  const [isDeleting, setIsDeleting]       = useState(false)

  // Use a ref for the timeout so we can clear it on unmount
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]

    const tick = () => {
      if (isDeleting) {
        // Remove one character
        setDisplayedText(prev => prev.slice(0, prev.length - 1))

        // When fully deleted, move to the next word
        if (displayedText.length <= 1) {
          setIsDeleting(false)
          setWordIndex(prev => (prev + 1) % words.length)
        }
      } else {
        // Add one character
        setDisplayedText(currentWord.slice(0, displayedText.length + 1))

        // When fully typed, pause then start deleting
        if (displayedText.length === currentWord.length) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseMs)
          return
        }
      }
    }

    // Schedule the next tick
    timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)

    // Cleanup on re-render
    return () => clearTimeout(timeoutRef.current)
  }, [displayedText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs])

  return displayedText
}
