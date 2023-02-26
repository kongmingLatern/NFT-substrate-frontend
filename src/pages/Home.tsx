import Divider from '@/component/common/Divider'
import Header from '@/component/common/Header'
import Trending from '@/component/home/Trending'
import Carousel from '@/component/common/Carousel'

export default function Home() {
  return (
    <>
      <Header />
      <Divider />

      <Carousel />
      <Divider />

      <Trending />
      <Divider />
    </>
  )
}
