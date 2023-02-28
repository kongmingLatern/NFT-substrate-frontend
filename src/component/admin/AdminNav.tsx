import { Icon } from '@iconify-icon/react'
import { Link } from 'react-router-dom'

export default function AdminNav() {
  return (
    <>
      <ul className="menu bg-base-100 w-56 p-2 rounded-box">
        <li>
          <Link to="/admin/user" className="active text-white">
            <Icon icon="mdi:user-multiple" />
            用户管理
          </Link>
        </li>
        <li>
          <Link to="/admin/nft">
            <Icon icon="material-symbols:currency-bitcoin" />
            货币管理
          </Link>
        </li>
        <li>
          <Link to="/admin/setting">
            <Icon icon="ant-design:setting-outlined" />
            管理设置
          </Link>
        </li>
        <li>
          <Link to="/admin/upgrade">
            <Icon icon="openmoji:chains" />
            链上升级
          </Link>
        </li>
      </ul>
    </>
  )
}
