interface HangManWordProps {
  reveal: boolean
  guessedLetters: string[]
  wordToGuess: string
}

export function HangManWord ({ reveal, guessedLetters, wordToGuess }: HangManWordProps) {
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
            <span style={{ 
              visibility: guessedLetters.includes(letter.toLowerCase()) || reveal ? 'visible' : 'hidden',
              color: !guessedLetters.includes(letter.toLowerCase()) && reveal ? 'red' : 'black'
            }}>
                {letter}
            </span>
        </span>
    ))}
    </div>
  )
}
