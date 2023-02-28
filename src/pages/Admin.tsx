import Header from '@/component/common/Header'
import AdminNav from '@/component/admin/AdminNav'
import { Grid, GridItem, Tabs } from '@chakra-ui/react'
import Main from '@/views/admin/Main'
import Footer from '@/component/admin/Footer'

export default function Admin() {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'65px 1fr 30px'}
        gridTemplateColumns={'250px 1fr'}
        gap="1"
        color="blackAlpha.700"
      >
        <GridItem area={'header'} height={60 + 'px'}>
          <Header fixed={false} />
        </GridItem>
        <GridItem pl="2" area={'nav'}>
          <AdminNav />
        </GridItem>
        <GridItem pl="2" area={'main'}>
          <Main />
        </GridItem>
        <GridItem pl="2" area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  )
}
