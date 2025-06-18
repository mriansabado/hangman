import React from 'react'
import styles from '../Keyboard.module.css'

const KEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Add props type
interface KeyboardProps {
  guessedLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({ guessedLetters, addGuessedLetter }: KeyboardProps) {
  return <div 
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
                gap: '.5rem'
             }}>
            {KEYS.map(key => {
                const isGuessed = guessedLetters.includes(key)
                return <button 
                  className={`${styles.btn} ${isGuessed ? styles.inactive : ''}`}
                  key={key}
                  onClick={() => addGuessedLetter(key)}
                  disabled={isGuessed}
                >{key}</button>
            })}
        </div>
} 