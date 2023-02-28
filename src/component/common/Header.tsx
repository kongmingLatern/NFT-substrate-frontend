import NavSubmenu from '../../views/home/NavSubmenu'
import UserInfo from '../home/UserInfo'
import SearchInput from '../home/SearchInput'
interface HeaderType {
  auth?: boolean
  text?: string
  fixed?: boolean
}

export default function Header({
  auth = true,
  text = '',
  fixed = true,
}: HeaderType) {
  return fixed ? (
    <div className="navbar text-black justify-between fixed top-0 left-0 bg-white z-20">
      <div className="w-[50%]">
        <button className="btn btn-ghost normal-case text-xl font-sans">
          NFT 交易系统&nbsp;
          <span className="text-[17px] text-blue-500">
            {auth ? '' : ` > ${text}`}
          </span>
        </button>
        <div className="form-control w-[100%] relative">
          {auth ? <SearchInput /> : ''}
        </div>
      </div>
      {auth ? (
        <div className="gap-2">
          <NavSubmenu />
          <UserInfo />
        </div>
      ) : (
        ''
      )}
    </div>
  ) : (
    <div className="navbar text-black justify-between bg-white z-20">
      <div className="w-[50%]">
        <button className="btn btn-ghost normal-case text-xl font-sans">
          NFT 交易系统&nbsp;
          <span className="text-[17px] text-blue-500">
            {auth ? '' : ` > ${text}`}
          </span>
        </button>
      </div>
      {auth ? (
        <div className="gap-2">
          <NavSubmenu />
          <UserInfo />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
