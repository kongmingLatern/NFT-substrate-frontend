import { combineDate, getColumnIndexByKey } from '@/utils'
import {
  columnsType,
  dataSourceType,
} from '@/views/admin/Main'

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

describe('getColumnIndexByKey', () => {
  it('should return 0 when the column is 1', () => {
    const columns: Array<columnsType> = [
      {
        title: 'ID',
        id: 'ID',
        key: 'ID',
      },
      {
        title: '用户名',
        id: 'username',
        key: 'username',
        render: (text, record) => <div>{text}</div>,
      },
      {
        title: '账号余额（￥）',
        id: 'balance',
        key: 'balance',
        render: (text, record) => <div>{text}</div>,
      },
      {
        title: '操作',
        id: 'operation',
        key: 'opertion',
      },
    ]
    const dataSource: Array<dataSourceType> = []

    for (let i = 0; i < 50; i++) {
      dataSource.push({
        id: `${i}`,
        username: `${i}`,
        balance: `${i + 10}`,
        key: `${i}`,
      })
    }

    expect(getColumnIndexByKey(columns, 'ID')).toBe(0)
    expect(getColumnIndexByKey(columns, 'username')).toBe(1)
  })
})
