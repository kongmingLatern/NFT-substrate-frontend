import React, { useState } from 'react'
import { Input,Button } from '@chakra-ui/react'
import Facebox from '@/component/common/Facebox'
export default function Login() {
  const [display,setdisplay]=useState(false)
  function changedisplay(value){
    setdisplay(value)
  }
  return (
    <div className='w-full h-full top-0  right-0 bg-gray-200 z-50' >
      <div className='fixed  w-52 h-24 top-1/3 left-1/2 -ml-24 mt-12  text-cnter'>
        <Input  w={52} opacity={0.5} ></Input>
        <div className='flex justify-between'>
          <Button w={24} display={'block'} mt={2} opacity={0.5} onClick={()=>setdisplay(true)}>确定</Button>
          <Button w={24} display={'block'} mt={2} opacity={0.5} >取消</Button>
        </div>
      </div>
      <div style={{display:display ? "block":"none"}} ><Facebox changedisplay={changedisplay} /></div>
    </div>
  )
}
