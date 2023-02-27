import React from 'react'
import { Button } from '@chakra-ui/react'
const  Tablefooter:React.FC<any>=(props:any)=>{
  return (
    <div>
            <div className='mr-6 w-56 h-24 float-right rounded-lg justify-between'>
            <div className='text-lg'>总价: <label className='text-2xl text-red-500' htmlFor="">{props.total}</label></div>
            <div className='w-36 float-right mt-6'><Button w={'full'} bg={'red.400'}>提交</Button></div>
        </div>
    </div>
  )
}
export default Tablefooter
