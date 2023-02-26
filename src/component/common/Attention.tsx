import {Popover,PopoverTrigger,PopoverContent,PopoverBody,PopoverArrow} from '@chakra-ui/react'
import { Icon } from '@iconify-icon/react'
export default function Attention() {
  return (
    <>
      <Popover trigger="hover">
        <PopoverTrigger>
            <button><Icon icon="ic:baseline-error-outline" /></button>
        </PopoverTrigger>     
        <PopoverContent>
            <PopoverArrow />
            {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
            <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  )
}
