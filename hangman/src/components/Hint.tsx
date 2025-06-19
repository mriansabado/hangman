import hints from '../wordListWithHints.json'

interface HintProps {
    wordToGuess: string
}

export function Hint ({ wordToGuess }: HintProps) {
    const hint = hints[wordToGuess.toLowerCase() as keyof typeof hints];
    
    return (
        <div>
            <h2>Hint: "{hint || 'No hint available'}"</h2>
        </div>
    )
}