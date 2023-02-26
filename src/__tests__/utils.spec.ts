import { combineDate } from '@/utils'

describe('getFewWeeklyDate', () => {
  it('date', () => {
    const month = 2
    const day = 26
    expect(combineDate(month, day)).toStrictEqual([
      '2月23日',
      '2月24日',
      '2月25日',
      '2月26日', // current
      '2月27日',
      '2月28日',
      '3月1日',
    ])
  })
})
