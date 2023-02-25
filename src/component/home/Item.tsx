import React, { useState } from 'react'
import { Icon } from '@iconify-icon/react'

export default function Item() {
  const[ changingvalue,setChangevalue]=useState(true)
  function black(){
  setChangevalue(!changingvalue)
  }
  return (
    <>
       <div className='h-20  rounded-xl  flex  hover:bg-gray-200' onMouseEnter={black} onMouseLeave={black}>
        <div className='w-20 mx-2 '>
            <img className='w-20  rounded-xl h-20 my-1' src="../../../public/爱心.png" alt="center" />
        </div>
        
        <div className='w-56'>
            <div className='mt-3 font-semibold text-sm'>name</div>
            <div className='flex text-sm mt-1 '>
                <div className='w-36 text-sm'>介绍</div>
                <div className='w-10  mr-0' >
                    <div className='w-full h-full text-right ' style={{display:changingvalue ? "block":"none"}}>价格</div>
                    <div className='w-full h-full' style={{display:changingvalue ? "none":"block"}}>
                        <Icon className='w-7' icon="material-symbols:delete-outline" />
                    </div>
                </div>
            </div>
            <div className='text-xs text-gray-400 mt-1'>创作者收益：<span>hhh</span></div>
        </div>  
       </div>
    </>
  )
}
