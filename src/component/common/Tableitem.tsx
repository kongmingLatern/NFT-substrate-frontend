import React from 'react'
import { Button } from '@chakra-ui/react'
const Tableitem:React.FC<any>=(props:any)=> {
  const {count,id,price}=props.data
  
  return (
      <>
        <td className='text-center'>
            hhhh
        </td>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="../../public/爱心.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                </div>
            </div>
        </td>
        <td>
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td className='w-10'>
           <label htmlFor="">{price}</label>
        </td>
        <td className='w-10'>
            <Button onClick={()=>props.addcount(id)}>+</Button>
            <label className="mx-3" htmlFor="">{count}</label>
            <Button onClick={()=>props.subcount(id)}>-</Button>
        </td>
      </>
  )
}
export default Tableitem