import { useState } from "react"
import words from './wordList.json'
import { HangManDrawing } from "./components/HangManDrawing"
import { HangManWord } from "./components/HangManWord"
import { Keyboard } from "./components/Keyboard"
import { Hint } from "./components/Hint"
import { Confetti } from "./components/Confetti"


function App() {
  // These state variables will be used in future implementation
  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  // Calculate incorrect letters (letters that are guessed but not in the word)
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.toLowerCase().includes(letter.toLowerCase())
  )

  // Check if player has won
  const isWinner = wordToGuess
    .toLowerCase()
    .split("")
    .every(letter => guessedLetters.map(l => l.toLowerCase()).includes(letter))

  // Check if player has lost
  const isLoser = incorrectLetters.length >= 6

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }

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

      <Confetti isActive={isWinner} />
      
      <div style={{ fontSize: '2rem', textAlign: 'center'}}>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
      </div>
      <HangManDrawing numberOfGuesses={incorrectLetters.length} />
      <HangManWord 
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <Hint wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch'}}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter =>
            wordToGuess.toLowerCase().includes(letter.toLowerCase())
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
      
    </div>
  )
}

export default App
