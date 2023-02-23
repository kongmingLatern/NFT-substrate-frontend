export default function SalesTime() {
  const time = new Date()
  const year = time.getFullYear() //  返回的是年份
  const month = time.getMonth() + 1 //  返回的月份上个月的月份，记得+1才是当月
  const dates = time.getDate() //  返回的是几号
  const hour = time.getHours()
  const minutes = time.getMinutes()
  const todaytime =
    year +
    '年' +
    month +
    '月' +
    dates +
    '日' +
    ' ' +
    hour +
    ':' +
    minutes
  const remaining = [
    { time: '01', id: 'hours' },
    { time: '02', id: 'minutes' },
    { time: '02', id: 'seconds' },
  ]
  return (
    <div className="font-thin">
      <div>{todaytime}</div>
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
