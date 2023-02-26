import Divider from '@/component/common/Divider'
import Header from '@/component/common/Header'
import Trending from '@/views/home/Trending'
import Carousel from '@/component/common/Carousel'
import Cardbox from '@/component/home/Cardbox'
import Title from '@/component/common/Title'
import CardList from '@/views/home/CardList'

export default function Home() {
  return (
    <>
      <Header />
      <Divider />

      <Carousel />
      <Divider />

      <Title title={'Trending'} />
      <Trending />
      <Divider />

      <Title title={'Trending In Art'} />
      <CardList />
    </>
  )
}
