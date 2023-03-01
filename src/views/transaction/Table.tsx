import React, { useEffect, useState } from 'react'
import Tableitem from '../../component/common/Tableitem'
import Tablehead from '../../component/common/Tablehead'
import Tablefooter from '../../component/common/Tablefooter'
import { Table, Tfoot } from '@chakra-ui/react'
export default function TableComponent() {
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
      <div className="overflow-x-auto w-[60vw] h-[50vh] mx-auto">
        <Table className="table mx-auto">
          {/* head */}
          <thead>
            <tr className="text-center">
              <Tablehead />
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map(item => {
              return (
                <tr key={item.id}>
                  <Tableitem
                    addcount={addcount}
                    data={item}
                    subcount={subcount}
                  />
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>

      <footer className="w-[60vw] h-[100%] mx-auto">
        <Tablefooter total={total} />
      </footer>
    </div>
  )
}
