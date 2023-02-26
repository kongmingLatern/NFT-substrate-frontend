import { getCurrentDate } from '@/utils'

export default function SalesTime() {
  const remaining = [
    { time: '01', id: 'hours' },
    { time: '02', id: 'minutes' },
    { time: '02', id: 'seconds' },
  ]
  return (
    <div className="font-thin">
      <div>{getCurrentDate()}</div>
      <div>
        {remaining.map(item => {
          return (
            <li className="inline-block pr-6" key={item.id}>
              <div>{item.time}</div>
              <div>{item.id}</div>
            </li>
          )
        })}
      </div>
    </div>
  )
}
