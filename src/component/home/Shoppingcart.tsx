import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { Icon } from '@iconify-icon/react'
import Item from './Item'
import Attention from '../common/Attention'
export default function Shoppingcart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
      <>
        <button  className='flex' ref={btnRef}  onClick={onOpen}>
          <div className=''>
              <Icon
              icon="material-symbols:shopping-cart-rounded"
              color="rgba(204, 204, 204, 0.8)"
              width={25}
              height={25}
              />
          </div>
          <span className='leading-relaxed'> 购物车</span>
        </button>
            <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent my="4" mr="2.5" borderRadius="3xl">
                <DrawerCloseButton />
                <DrawerHeader>您的购物车<Attention /> </DrawerHeader>
                <div className='text-sm mx-4'>
                  <div className='float-left'>总数:1</div>
                  <button className='float-right hover:text-gray-500'>全部清除</button>
                </div>
                <DrawerBody w="full" >
                  <Item></Item>
                </DrawerBody>
    
                <DrawerFooter display="block" >
                <div className='w-full font-bold'>
                  <div className='float-left'>总价</div>
                  <button className='float-right hover:text-gray-500'>12355</button>
                </div>
                <Button className='w-full bg-blue-400 mt-2' variant='outline' mx={2} onClick={onClose}>购买</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
    )
}