import {
  SimpleGrid,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'
import Image from '@/assets/gd1.png'
import NftCard from './NftCard'
import { Icon } from '@iconify-icon/react'
import { Link } from 'react-router-dom'

export default function PersonalCard() {
  return (
    <div className="card flex-row">
      {/* 左侧 */}
      <div className="w-1/4 flex flex-col">
        <div>
          <figure className="rounded-full overflow-hidden">
            <img src={Image} alt="Image" />
          </figure>
        </div>

        <aside>
          <p className="font-bold text-2xl">凤之兮原</p>
          <p className="font-thin text-lg font-sans">
            KongmingLatern
          </p>
          <br />
          <p className="text-lg font-sans">
            每天进步一点点~~
          </p>

          {/* 个人信息编辑 */}
          <div className="mt-8">
            <button className="btn w-[100%]">
              Edit profile
            </button>

            <div className="mt-2 flex">
              <div className="flex items-center">
                <Icon
                  icon="ri:user-follow-line"
                  color="#ccc"
                />
                <div className="ml-2">
                  3{' '}
                  <Link to={''} className="text-blue-400">
                    followers
                  </Link>
                </div>
                <div className="divider lg:divider-horizontal lg:mx-0"></div>
                <div className="ml-2">
                  3{' '}
                  <Link to={''} className="text-red-400">
                    followings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      {/* 右侧 */}
      <aside className="card-body ml-5 w-auto border overflow-y-scroll h-[100vh]">
        <h2 className="card-title font-sans">
          My Personal Property
        </h2>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList className="font-mono">
            <Tab>我的资产</Tab>
            <Tab>我的交易</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <NftCard />
            </TabPanel>
            <TabPanel>
              <NftCard />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            Listen
          </button>
        </div>
      </aside>
    </div>
  )
}
