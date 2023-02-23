import Carousel from '@/component/Carousel'
import Divider from '@/component/common/Divider'
import Header from '@/component/common/Header'
import Merchandise from '@/pages/Merchandise'

export default function Home() {
  return (
    <>
      <Header />
      <Divider />
      <Merchandise />

      <Divider />
      <Carousel />
    </>
  )
}
