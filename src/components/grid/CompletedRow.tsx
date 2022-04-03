import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(guess)
  const splitGuess = unicodeSplit(guess)

  return (
    <div className="flex justify-center">
      <div>
        <div className="mb-5">
          {[0, 3, 6].map(i => (
              <div className="flex justify-center mb-1">
                {splitGuess.slice(i, i + 3).map((letter, j) => (
                    <Cell
                        key={i + j}
                        value={letter}
                        status={statuses[i + j]}
                        position={i + j}
                        isRevealing={isRevealing}
                        isCompleted
                    />
                ))}
              </div>
          ))}
        </div>
      </div>
      <div className="flex items-center mb-5 ml-10">
        <Cell key={99} value={guess} isFinal={true} />
      </div>
    </div>
  )
}
