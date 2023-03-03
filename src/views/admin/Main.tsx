import Stat from '@/component/admin/Stat'
import AdminTable from '@/component/admin/Table'
import Echarts from '@/echarts/Echarts'

interface columsType {
  title: string
  id: string
  key: string
}
interface dataSourceType {
  id: string
  username: string
  balance: string
  key: string
}
const lookuphand = (obj: object) => {
  console.log(obj)
}
function deleteItem(id: string) {
  console.log(id)
}
const columns: Array<columsType> = [
  {
    title: 'ID',
    id: 'ID',
    key: 'ID',
  },
  {
    title: '用户名',
    id: 'username',
    key: 'username',
  },
  {
    title: '账号余额（￥）',
    id: 'balance',
    key: 'balance',
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
        onDelete={deleteItem}
        lookuphand={lookuphand}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  )
}
