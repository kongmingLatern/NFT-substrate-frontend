import Carousel from '@/component/common/Carousel'
import Divider from '@/component/common/Divider'
import Header from '@/component/common/Header'
import Trending from '@/component/Trending'

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
