import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH))

  return (
    <div className="justify-center mb-5">
        {[0, 3, 6].map(i => (
            <div className="flex justify-center mb-1">
                {emptyCells.slice(i, i + 3).map((letter, j) => (
                    <Cell key={i + j} />
                ))}
            </div>
        ))}
    </div>
  )
}
