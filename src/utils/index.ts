export function combineDate(month: number, day: number) {
  const result = []
  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setMonth(month - 1)
    date.setDate(day - 3 + i)
    result.push(
      `${date.getMonth() + 1}月${date.getDate()}日`
    )
  }
  return result
}

export function getCurrentDate() {
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
  return todaytime
}
