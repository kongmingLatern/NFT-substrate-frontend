import NavSubmenu from './home/NavSubmenu'
import classNames from 'classnames'
import { Icon } from '@iconify-icon/react'
import UserInfo from './home/UserInfo'

export default function Header() {
  return (
    <div className="navbar text-white justify-between p-5 bg-[#2081E2]">
      <div className="w-[50%]">
        <a className="btn btn-ghost normal-case text-xl">
          NFT 交易系统
        </a>
        <div className="form-control w-[100%] relative">
          <input
            type="text"
            placeholder="请输入要查找的物品"
            className="input input-bordered text-black"
          />
          <Icon
            icon="ic:outline-search"
            color="#000"
            className="absolute right-2 top-[20%] z-10 bg-[#ccc] rounded-lg"
            width="30"
            height="30"
          />
        </div>
      </div>
      <div className="gap-2">
        <NavSubmenu />
                  <UserInfo />
      </div>
    </div>
  )
}
