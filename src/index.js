import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
// TypingText.js
const TypingText = ({
  textArray,
  typingSpeed,
  loop,
  fontSize,
  fontWeight,
  color,
  triggerOnce,
  className
}) => {
  const [currentText, setCurrentText] = useState('')
  const [textIndex, setTextIndex] = useState(0)

  const textStyle = {
    fontSize: fontSize || '16px',
    fontWeight: fontWeight || 'normal',
    color: color || 'black'
  }
  const [ref, inView] = useInView({
    triggerOnce: triggerOnce !== undefined ? triggerOnce : true,
    rootMargin: '10px'
  })

  useEffect(() => {
    if (inView) {
      const textToType = textArray[textIndex]

      if (currentText === textToType) {
        const timeout = setTimeout(() => {
          if (textIndex === textArray.length - 1 && !loop) {
            return
          }

          setCurrentText('')
          setTextIndex((prevIndex) =>
            prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
          )
        }, 1500)

        return () => clearTimeout(timeout)
      }

      const timeout = setTimeout(() => {
        setCurrentText((prevText) => textToType.slice(0, prevText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else {
      // Reset typing animation when out of view
      setCurrentText('')
    }
  }, [currentText, textArray, textIndex, loop, typingSpeed, inView])

  return (
    <div ref={ref} className={className}>
      <p style={textStyle}>{currentText}</p>
    </div>
  )
}
//LastWordTypingText
const LastWordTypingText = ({
  text,
  typingSpeed,
  lastWords,
  loop,
  fontSize,
  fontWeight,
  color,
  className
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentWord = lastWords[currentWordIndex]

    if (isTyping) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, typingSpeed)

        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
      }
    } else if (currentWordIndex < lastWords.length - 1 || loop) {
      const timeout = setTimeout(() => {
        setCurrentText('')
        setCurrentWordIndex((currentWordIndex + 1) % lastWords.length)
        setIsTyping(true)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [currentText, typingSpeed, lastWords, currentWordIndex, isTyping, loop])

  const textStyle = {
    fontSize: fontSize || '16px',
    fontWeight: fontWeight || 'normal',
    color: color || 'black'
  }

  return (
    <div className={className}>
      <p style={textStyle}>
        {text}
        {currentText}
      </p>
    </div>
  )
}
//Marquee
const Marquee = ({
  text,
  speed,
  fontSize,
  fontWeight,
  color,
  className,
  pauseOnHover,
  scrolldirection
}) => {
  const [position, setPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const textWidth = text.length * 10

    const scrollText = () => {
      if (!isPaused) {
        setPosition((prevPosition) => {
          if (scrolldirection === 'left') {
            // Scroll to the left
            if (prevPosition <= -textWidth) {
              // Reset to the starting position when it goes out of view
              return window.innerWidth
            } else {
              // Move the text to the left
              return prevPosition - speed
            }
          } else if (scrolldirection === 'right') {
            // For the right
            if (prevPosition >= window.innerWidth) {
              // Reset to ...
              return -textWidth
            } else {
              // Move text to the right
              return prevPosition + speed
            }
          }
          return prevPosition
        })
      }
    }

    const intervalId = setInterval(scrollText, 16)

    return () => {
      clearInterval(intervalId)
    }
  }, [text, speed, isPaused, scrolldirection])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false)
    }
  }

  const marqueeStyle = {
    whiteSpace: 'nowrap',
    position: 'relative',
    left: position + 'px',
    fontSize: fontSize || '16px',
    fontWeight: fontWeight || 'normal',
    color: color || 'black'
  }

  return (
    <div
      className={className}
      style={marqueeStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </div>
  )
}

export { TypingText, LastWordTypingText, Marquee }
