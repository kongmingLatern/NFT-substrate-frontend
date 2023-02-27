import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'

interface TabType {
  tabList: string[]
  tabPanelList: string[]
  className?: string
}

export default function TabComponent({
  tabList,
  tabPanelList,
  className,
}: TabType) {
  return (
    <>
      <Tabs className={className}>
        <TabList>
          {tabList.map((item, index) => (
            <Tab key={index}>{item}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabPanelList.map((item, index) => (
            <TabPanel key={index}>{item}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  )
}
