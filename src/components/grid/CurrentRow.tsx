import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  className: string
}

export const CurrentRow = ({ guess, className }: Props) => {
  const splitGuess = unicodeSplit(guess)
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splitGuess.length))
  const classes = `justify-center mb-5 ${className}`
  const cells = splitGuess.concat(emptyCells)

  return (
    <div className={classes}>
      {[0, 3, 6].map(i => (
          <div className="flex justify-center mb-1">
            {cells.slice(i, i + 3).map((val: any, j) => (
                <Cell key={i + j} value={val} />
            ))}
          </div>
      ))}

    </div>
  )
}
