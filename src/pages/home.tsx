import Carousel from '@/component/common/Carousel'
import Divider from '@/component/common/Divider'
import Header from '@/component/common/Header'
import Detail from '@/pages/Detail'
import Create from './Create'

export default function Home() {
  return (
    <>
      <Header />
      <Divider />

      <Carousel />
      <Divider />

      <Detail />
      <Divider />

      <Create />
      <Divider />
    </>
  )
}
