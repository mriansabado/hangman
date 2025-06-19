import { useEffect, useState } from 'react'

interface ConfettiProps {
  isActive: boolean
}

export const Confetti = ({ isActive }: ConfettiProps) => {
  const [confetti, setConfetti] = useState<Array<{
    id: number
    left: number
    animationDelay: number
    animationDuration: number
    color: string
  }>>([])

  useEffect(() => {
    if (isActive) {
      // Generate confetti pieces
      const pieces = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 3,
        animationDuration: 3 + Math.random() * 2,
        color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'][Math.floor(Math.random() * 7)]
      }))
      setConfetti(pieces)
    } else {
      setConfetti([])
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1000,
      overflow: 'hidden'
    }}>
      {confetti.map(piece => (
        <div
          key={piece.id}
          style={{
            position: 'absolute',
            top: '-10px',
            left: `${piece.left}%`,
            width: '10px',
            height: '10px',
            backgroundColor: piece.color,
            borderRadius: '50%',
            animation: `fall ${piece.animationDuration}s linear ${piece.animationDelay}s infinite`,
            transform: 'rotate(0deg)',
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
} 