import Stat from '@/component/admin/Stat'
import AdminTable from '@/component/admin/Table'
import Echarts from '@/echarts/Echarts'

export default function Main() {
  const data = [100, 200, 9, 2, 3, 40, 5]
  return (
    <>
      <Stat />
      <div className="grid grid-cols-2">
        <Echarts type="line" data={data} />
        <Echarts type="bar" data={data} />
      </div>
      <AdminTable />
    </>
  )
}
