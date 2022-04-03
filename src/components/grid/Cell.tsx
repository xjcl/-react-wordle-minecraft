import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import { RECIPES_RAW } from "../../constants/wordlist";

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
  isFinal?: boolean
}

const keyToImgUrl : Record<string, string> = {
    'P': 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png',
    'S': 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Stick_JE1_BE1.png',
    'C': 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/67/Cobblestone.png',
    'I': 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Iron_Ingot_JE3_BE2.png',
    'R': 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e1/Redstone_Dust_JE2_BE2.png',
    ' ': '',
}

function getRecipeURL(value: string) {
    const ls = RECIPES_RAW.filter(r => r.recipe.toUpperCase() === value)
    if (ls.length === 0)
        return ''
    return ls[0].imgurl
}

function getLetterURL(value: string) {
    if (!(value in keyToImgUrl))
        return ''
    return keyToImgUrl[value]
}

export function makeImgUrl(value: string | undefined) {
    if (value === undefined)
        return ''

    const url = (value.length === 9) ? getRecipeURL(value) : getLetterURL(value)

    const name = url.slice(0, -4).split('/').pop()
    return <img src={url} alt={name}/>
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
  isFinal = false,
}: Props) => {
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const hasValidValue = isFinal ? value?.length === 9 : value?.length === 1
  const isFilled = hasValidValue && !isCompleted
  const image = hasValidValue ? makeImgUrl(value) : ''

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': hasValidValue && !status,
      'absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
        status === 'absent',
      'correct shadowed bg-orange-500 text-white border-orange-500':
        status === 'correct' && isHighContrast,
      'present shadowed bg-cyan-500 text-white border-cyan-500':
        status === 'present' && isHighContrast,
      'correct shadowed bg-green-500 text-white border-green-500':
        status === 'correct' && !isHighContrast,
      'present shadowed bg-yellow-500 text-white border-yellow-500':
        status === 'present' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
          {image}
      </div>
    </div>
  )
}
