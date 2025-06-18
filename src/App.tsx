import React from 'react'
import { useEffect, useState, useCallback } from "react"
import words from './wordList.json'
import { HangManDrawing } from "./components/HangManDrawing"
import { HangManWord } from "./components/HangManWord"
import { Keyboard } from "./components/Keyboard"

// Debug: Check if words array is properly imported
console.log('Words array length:', words.length)
console.log('First few words:', words.slice(0, 5))

function App() {
  // These state variables will be used in future implementation
  const [wordToGuess] = useState(() => {
    const selectedWord = words[Math.floor(Math.random() * words.length)]
    console.log('Selected word:', selectedWord)
    return selectedWord
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  },[addGuessedLetter])

  
  console.log('Current wordToGuess:', wordToGuess)
  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center'
      }}>

      <div style={{ fontSize: '2rem', textAlign: 'center'}}>Lose Win</div>
      <HangManDrawing numberOfGuesses={incorrectLetters.length} />
      <HangManWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch'}}>
        <Keyboard guessedLetters={guessedLetters} addGuessedLetter={addGuessedLetter} />
      </div>
      
    </div>
  )
}

export default App 