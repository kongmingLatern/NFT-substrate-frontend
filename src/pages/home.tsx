import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Rollove from "../component/Rollover"

export default function Home() {

  return (
    <div className='max-w-6xl  mx-auto'>
      <div className=''>
        <Tabs>
          <TabList className='text-4xl'>
            <Tab>所有</Tab>
            <Tab>艺术</Tab>
            <Tab>游戏</Tab>
            <Tab>摄影</Tab>
          </TabList>
          <TabPanels>
              <TabPanel>
                <div className=' mx-auto' > <Rollove></Rollove></div>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
        </Tabs>
      </div> 
    </div>
  )
}
