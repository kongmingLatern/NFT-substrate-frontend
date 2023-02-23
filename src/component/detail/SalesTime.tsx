export default function SalesTime() {
  const time = new Date()
  var year = time.getFullYear() //  返回的是年份
  var month = time.getMonth() + 1 //  返回的月份上个月的月份，记得+1才是当月
  var dates = time.getDate() //  返回的是几号
  let hour = time.getHours()
  let minutes = time.getMinutes()
  let todaytime =
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
  let remaining = [
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
