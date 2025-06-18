import React from 'react'

type HangManWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export function HangManWord ({guessedLetters, wordToGuess}: HangManWordProps) {
   
  // If wordToGuess is not available, show loading or empty state
  if (!wordToGuess) {
    return (
      <div 
        style={{ 
          display: 'flex', 
          gap: '.25em', 
          fontSize: '6rem', 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          fontFamily: 'monospace'
        }}
      >
        Loading...
      </div>
    )
  }
   
  return (
    <div 
      style={{ 
        display: 'flex', 
        gap: '.25em', 
        fontSize: '6rem', 
        fontWeight: 'bold', 
        textTransform: 'uppercase', 
        fontFamily: 'monospace'
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black'}} key={index}>
          <span style={{ visibility: guessedLetters.map(l => l.toLowerCase()).includes(letter.toLowerCase()) ? 'visible' : 'hidden'}}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
} 