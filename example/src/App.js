import React from 'react'
import { TypingText, LastWordTypingText, Marquee } from 'react-supertext' // Adjust the path as needed

const App = () => {
  const texts = [
		"This is a typing text component.",
		"This is a typing text to.",
	];
	const speed = 50; // Typing speed in milliseconds

  return (
    <>
      <TypingText
        textArray={texts}
        typingSpeed={speed}
        loop={false}
        fontSize='38px'
        fontWeight='bold'
        color='black'
        className='custom-typing-text'
        triggerOnce={false}
      />
      <LastWordTypingText
        text='This is a simple '
        typingSpeed={150}
        loop={true}
        lastWords={['example.', 'component.', 'effect.', 'features.']}
        fontSize='29px'
        fontWeight='bold'
        color='blue'
        className='custom-text'
      />
      <Marquee
        text='This is a scrolling text. '
        speed={1}
        fontSize='20px'
        fontWeight='bold'
        color='blue'
        className='custom-marquee'
        pauseOnHover={false}
        scrolldirection='right'
      />
    </>
  )
}

export default App
