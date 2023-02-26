import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import { Icon } from '@iconify-icon/react'
import { useRef } from 'react'

import Item from './Item'
import Attention from '../common/Attention'

export default function Shoppingcart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <span onClick={onOpen}>
      <span className="flex" ref={btnRef}>
        <Icon
          icon="material-symbols:shopping-cart-rounded"
          color="rgba(204, 204, 204, 0.8)"
          width={25}
          height={25}
        />
        <span className="leading-relaxed">
          &nbsp;购物车
        </span>
      </span>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent my="4" mr="2.5" borderRadius="3xl">
          <DrawerCloseButton />
          <DrawerHeader>
            您的购物车
            <Attention />{' '}
          </DrawerHeader>
          <div className="text-sm mx-4">
            <div className="float-left">总数:1</div>
            <button className="float-right hover:text-gray-500">
              全部清除
            </button>
          </div>
          <DrawerBody w="full">
            {/* 购物车内的商品 */}
            <Item></Item>
          </DrawerBody>

          <DrawerFooter display="block">
            <div className="w-full font-bold">
              <div className="float-left">总价</div>
              <button className="float-right hover:text-gray-500">
                ￥100.00
              </button>
            </div>
            <button
              className="w-full mt-2 btn btn-secondary"
              onClick={onClose}
            >
              购买
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </span>
  )
}
