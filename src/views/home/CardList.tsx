import Cardbox from '@/component/home/Cardbox'
import { SimpleGrid } from '@chakra-ui/react'

export default function CardList() {
  return (
    <SimpleGrid
      className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 px-3 justify-items-center gap-5"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
        return <Cardbox key={item} />
      })}
    </SimpleGrid>
  )
}
