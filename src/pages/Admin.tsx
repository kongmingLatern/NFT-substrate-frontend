import Header from '@/component/common/Header'
import AdminNav from '@/component/admin/AdminNav'
import { Grid, GridItem } from '@chakra-ui/react'
import Footer from '@/component/admin/Footer'
import Divider from '@/component/common/Divider'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'72px 1fr 30px'}
        gridTemplateColumns={'250px 1fr'}
        gap="1"
        color="blackAlpha.700"
      >
        <GridItem area={'header'} height={60 + 'px'}>
          <Header fixed={false} />
          <Divider />
        </GridItem>
        <GridItem pl="2" area={'nav'}>
          <AdminNav />
        </GridItem>
        <GridItem pl="2" area={'main'}>
          <Outlet />
        </GridItem>
        <GridItem
          pl="2"
          area={'footer'}
          className="h-[100px]"
        >
          <Footer />
        </GridItem>
      </Grid>
    </>
  )
}
