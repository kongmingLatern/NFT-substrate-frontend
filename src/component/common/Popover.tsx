import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  useDisclosure,
  Button,
  Portal,
  ButtonGroup,
} from '@chakra-ui/react'
import { Icon } from '@iconify-icon/react'

interface propsType {
  onDelete: (id) => void
  deleteId: string
  render: (props?) => JSX.Element
}

export default function Modalalert({
  onDelete,
  deleteId,
  render,
}: propsType) {
  const { onOpen, onClose, isOpen } = useDisclosure()
  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          {render && render()}
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <label className="text-red-500">
                <Icon icon="ic:baseline-error-outline" />
                确定要删除？
              </label>
            </PopoverBody>
            <PopoverFooter
              display="flex"
              justifyContent="flex-end"
            >
              <ButtonGroup>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    onDelete(deleteId)
                    onClose()
                  }}
                >
                  确定
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={onClose}
                >
                  取消
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  )
}
