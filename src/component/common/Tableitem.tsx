import React from 'react'
import { Button } from '@chakra-ui/react'
import Image from '@/assets/gd1.png'
const Tableitem: React.FC<any> = (props: any) => {
  const { count, id, price } = props.data

  return (
    <>
      <td className="text-center">hhhh</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={Image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">
              United States
            </div>
          </div>
        </div>
      </td>
      <td className="inline-block w-[30vw] text-ellipsis ">
        <span className="h-[80px] flex items-center overflow-hidden">
          Desktop Support Technician Desktop Support
          Technician Desktop Support Technician Desktop
          Support Technician Desktop Support Technician
          Desktop Support Technician Desktop Support
          Technician Desktop Support Technician Desktop
          Support Technician Desktop Support Technician
          Desktop Support Technician
        </span>
      </td>
      <td className="w-10">
        <label htmlFor="">{price}</label>
      </td>
      <td className="w-10">
        <Button onClick={() => props.subcount(id)}>
          -
        </Button>
        <label className="mx-3" htmlFor="">
          {count}
        </label>
        <Button onClick={() => props.addcount(id)}>
          +
        </Button>
      </td>
    </>
  )
}
export default Tableitem
