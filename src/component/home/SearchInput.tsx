import { Icon } from '@iconify-icon/react'

export default function SearchInput({ search }) {
  return (
    <>
      <input
        type="text"
        placeholder="请输入要查找的物品"
        className="input input-bordered text-black"
        onKeyDown={e => {
          return e.code === 'Enter' ? search(e.target.value) : null
        }}
      />
      <Icon
        icon="ic:outline-search"
        className="absolute right-2 top-[15%] z-1 rounded-lg"
        style={{ color: '#ccc' }}
        width="30"
        height="30"
      />
    </>
  )
}
