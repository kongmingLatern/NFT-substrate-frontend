import Carousel from 'nuka-carousel'

import Image from '@/assets/gd1.png'
export default function SimpleSlider() {
  return (
    <Carousel autoplay={true} cellAlign={'center'}>
      <img src={Image} />
      <img src={Image} />
      <img src={Image} />
      <img src={Image} />
      <img src={Image} />
    </Carousel>
  )
}
