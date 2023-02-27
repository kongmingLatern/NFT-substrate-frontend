import React, { useEffect, useState } from 'react'
import Tableitem from '../../component/common/Tableitem'
import Tablehead from '../../component/common/Tablehead'
import Tablefooter from '../../component/common/Tablefooter'
export default function Table() {
  const [total, settotal] = useState(0)
  const [data, setdata] = useState([
    {
      id: '1',
      count: 1,
      price: 1,
    },
    {
      id: '2',
      count: 1,
      price: 2,
    },
  ])
  function addcount(id) {
    data.map(item => {
      if (item.id === id) ++item.count
    })
    setdata([...data])
  }
  function subcount(id) {
    data.map(item => {
      if (item.id === id && item.count > 1) --item.count
    })
    setdata([...data])
  }

  useEffect(() => {
    let total = 0
    data.map(item => {
      total += item.count * item.price
    })
    console.log(data)

    settotal(total)
  }, [data])
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center w-full">
              <Tablehead />
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map(item => {
              return (
                <tr className="w-full" key={item.id}>
                  <Tableitem
                    addcount={addcount}
                    data={item}
                    subcount={subcount}
                  />
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="w-full">
        <Tablefooter total={total} />
      </div>
    </div>
  )
}
