import { Icon } from '@iconify-icon/react'

export default function SearchInput() {
  return (
    <>
      <input
        type="text"
        placeholder="请输入要查找的物品"
        className="input input-bordered text-black"
      />
      <Icon
        icon="ic:outline-search"
        className="absolute right-2 top-[20%] z-1 rounded-lg"
        style={{ color: '#ccc' }}
        width="30"
        height="30"
      />
    </>
  )
}
