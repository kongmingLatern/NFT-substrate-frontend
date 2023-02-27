import React, { useState } from 'react'
import { Input,Button } from '@chakra-ui/react'
import Facebox from '@/component/common/Facebox'
export default function Logon() {
  const [display,setdisplay]=useState(false)
  function changedisplay(value){
      setdisplay(value)
  }
  return (
    <div>
        <div className='fixed w-full h-full'>
           <img className='w-full h-ful' src="../../public/backgroundimg.png" alt="" /> 
        </div>
        <div className='fixed  w-52 h-24 top-1/3 left-1/2 -ml-24 mt-12  text-cnter'>
            <Input  w={52} opacity={0.5} ></Input>
            <div className='flex justify-between'>
                <Button w={24} display={'block'} mt={2} opacity={0.5} onClick={()=>setdisplay(true)}>登录</Button>
                <Button w={24} display={'block'} mt={2} opacity={0.5} >注册</Button>
            </div>
        </div>
        <div style={{display:display ? "block":"none"}}><Facebox changedisplay={changedisplay} /></div>

    </div>
  )
}
