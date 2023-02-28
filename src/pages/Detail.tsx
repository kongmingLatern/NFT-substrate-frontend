import Divider from '@/component/common/Divider'
import Header from '@/component/common/Header'
import CardDetail from '@/views/detail/CardDetail'
import CardInfo from '@/views/detail/CardInfo'

export default function Detail() {
  return (
    <>
      <Header />
      <div className="mt-[60px]">
        <Divider />
        <div className="mt-10 max-w-screen-lg mx-auto">
          <div className="flex">
            <CardDetail />
            <CardInfo />
          </div>
        </div>
      </div>
    </>
  )
}
