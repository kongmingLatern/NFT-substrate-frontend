import { Icon } from '@iconify-icon/react'

export default function UserInfo() {
  return (
    <>
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Icon
              icon="mdi:user"
              inline={true}
              width={100 + '%'}
              height={100 + '%'}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-black"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </>
  )
}
