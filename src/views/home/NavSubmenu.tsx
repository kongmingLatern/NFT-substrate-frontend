import { Icon } from '@iconify-icon/react'
import { Link } from 'react-router-dom'
import Shoppingcart from '../../component/home/Shoppingcart'

export default function NavSubmenu() {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to={'/home'}>
          <Icon
            icon="material-symbols:home"
            color="rgba(204, 204, 204, 0.8)"
            width={25}
            height={25}
          />
          主页
        </Link>
      </li>
      <li tabIndex={0}>
        <span>
          <Icon
            icon="mingcute:classify-fill"
            color="rgba(204, 204, 204, 0.8)"
            width={25}
            height={25}
          />
          分类
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </span>
        <ul className="p-2 bg-base-100 z-10 ">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <Link to={'/paint'}>
          <Icon
            icon="mdi:draw"
            color="rgba(204, 204, 204, 0.8)"
            width={25}
            height={25}
          />
          创作画板
        </Link>
      </li>
      <li>
      <Shoppingcart />
        {/* <span>
          <Icon
            icon="material-symbols:shopping-cart-rounded"
            color="rgba(204, 204, 204, 0.8)"
            width={25}
            height={25}
          />
          购物车
        </span> */}
      </li>
      </ul>
  )
}
