import Divider from '@/component/common/Divider'
import Header from '@/component/common/Header'
import DetailCard from '@/component/detail/CardDetail'
import CardInfo from '@/component/detail/CardInfo'

export default function Merchandise() {
  return (
    <>
      <Header />
      <Divider />
      <div className="mt-10 max-w-screen-lg mx-auto">
        <div className="flex">
          <DetailCard />
          <CardInfo />
        </div>
      </div>
    </>
  )
}
