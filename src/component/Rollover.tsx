import  { useState } from 'react'
import Banner from './Banner'

export default function Rollover() {

  const[pricetalbe,setPricetalbe]=useState([
    {id:1,name:"Board",price:10},
    {id:2,name:"hhhh",price:10},
    {id:3,name:"ssss",price:10},
  ])

  return (
    <>
      <div className=''>
         <Banner></Banner>    
      </div>
      <div className=''>
        <div className='text-3xl font-medium'>Trending</div>
        <div className='overflow-x-auto'>
          <table className="table w-full">
            <tbody>
              {
                pricetalbe.map(item=>{
                  return(
                    <tr key={item.id}>
                      <th>{item.id}</th>
                      <th>{item.name}</th>
                      <th >￥{""+item.price +"cs"}</th>
                      <th className='w-full'></th>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}


