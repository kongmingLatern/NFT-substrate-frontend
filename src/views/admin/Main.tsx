import Stat from '@/component/admin/Stat'
import AdminTable from '@/component/admin/Table'
import Space from '@/component/common/Space'
import Echarts from '@/echarts/Echarts'

export interface columnsType {
  title: string
  id: string
  key: string
  render?: (text: string, record: object) => JSX.Element
}
export interface dataSourceType {
  id: string
  key?: string
  username: string
  balance: string
  operation: string
}
const lookuphand = (obj: object) => {
  console.log(obj)
}
function deleteItem(id: string) {
  console.log(id)
}
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
    key: 'operation',
    render: () => (
      <Space>
        <button className="btn btn-secondary w-[100px] font-thin text-white">
          查看
        </button>
        <button className="btn btn-error w-[100px] font-thin text-white">
          删除
        </button>
      </Space>
    ),
  },
]
const dataSource: Array<dataSourceType> = []

for (let i = 0; i < 50; i++) {
  dataSource.push({
    id: `${i}`,
    key: `${i}`,
    username: `${i}`,
    balance: `${i + 10}`,
    operation: `${i}`,
  })
}

export default function Main() {
  const data = [100, 200, 9, 2, 3, 40, 5]
  return (
    <>
      <Stat />
      <div className="grid grid-cols-2">
        <Echarts type="line" data={data} />
        <Echarts type="bar" data={data} />
      </div>
      <AdminTable
        dataSource={dataSource}
        columns={columns}
        onLookUp={lookuphand}
        onDelete={deleteItem}
      />
    </>
  )
}
