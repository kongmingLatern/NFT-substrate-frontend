import NavSubmenu from '../../views/home/NavSubmenu'
import UserInfo from '../home/UserInfo'
import SearchInput from '../home/SearchInput'

export default function Header() {
  return (
    <div className="navbar text-black justify-between">
      <div className="w-[50%]">
        <a className="btn btn-ghost normal-case text-xl font-sans">
          NFT 交易系统
        </a>
        <div className="form-control w-[100%] relative">
          <SearchInput />
        </div>
      </div>
      <div className="gap-2">
        <NavSubmenu />
        <UserInfo />
      </div>
    </div>
  )
}
