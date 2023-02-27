import NavSubmenu from '../../views/home/NavSubmenu'
import UserInfo from '../home/UserInfo'
import SearchInput from '../home/SearchInput'
interface HeaderType {
  auth?: boolean
  text?: string
}

export default function Header({
  auth = true,
  text = '',
}: HeaderType) {
  return (
    <div className="navbar text-black justify-between">
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
  )
}
