import Divider from '@/component/common/Divider'
import Header from '@/component/common/Header'
import Paint from '@/component/paint'

export default function Create() {
  return (
    <>
      <Header />
      <div className="mt-[60px]">
        <Divider />
        <Paint />
      </div>
    </>
  )
}
