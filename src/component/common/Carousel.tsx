import Carousel, { CarouselProps } from 'nuka-carousel'

import Image from '@/assets/gd1.png'
export default function SimpleSlider() {
  const props: CarouselProps = {
    autoplay: true,
    zoomScale: 0.5,
    cellAlign: 'center',
    cellSpacing: 20,
  }
  return (
    <Carousel {...props}>
      <img className="mx-auto h-auto" src={Image} />
      <img className="mx-auto h-auto" src={Image} />
      <img className="mx-auto h-auto" src={Image} />
      <img className="mx-auto h-auto" src={Image} />
      <img className="mx-auto h-auto" src={Image} />
    </Carousel>              
  )
}
