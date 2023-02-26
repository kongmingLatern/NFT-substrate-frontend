import Divider from '@/component/common/Divider'
import Header from '@/component/common/Header'
import Trending from '@/views/home/Trending'
import Carousel from '@/component/common/Carousel'
import Cardbox from '@/component/home/Cardbox'

export default function Home() {
  return (
    <>
      <Header />
      <Divider />

      <Carousel />
      <Divider />

      <Trending />
      <Divider />

      <Cardbox />
    </>
  )
}
