import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        I'm thinking of a Minecraft crafting recipe, and you have 3 guesses (of
        actual recipes) to get it.
        <br/><br/>
        After each guess, the color of the tiles
        changes to show how close your guess was to the word.
      </p>

      <div className="mt-4 mb-2">
        <div className="flex justify-center mb-1">
            <Cell value="I" status="correct"/>
            <Cell value=" " status="present"/>
            <Cell value="I" status="present"/>
        </div>
        <div className="flex justify-center mb-1 ">
          <Cell value="I" status="correct"/>
          <Cell value="S" status="correct"/>
          <Cell value="I" status="absent"/>
        </div>
        <div className="flex justify-center mb-1 ">
          <Cell value="I" status="absent"/>
          <Cell value=" " status="present"/>
          <Cell value="I" status="absent"/>
        </div>
      </div>
    <p className="text-sm text-gray-500 dark:text-gray-300">
        <i>Green: This block is in the right spot.<br/>
        Yellow: Block is in the recipe but wrong spot.<br/>
        Gray: No (more) copies of block in the recipe.</i>
        <br/><br/>
        Items smaller than 3x3 are centered, otherwise in the bottom-left (except for helmets, they are on top).
        Tools always use iron.
    </p>
    </BaseModal>
  )
}
