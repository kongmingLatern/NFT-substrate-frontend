import { Icon } from '@iconify-icon/react'

export default function DetailIcon() {
  return (
    <>
      <div className="flex items-center">
        <Icon
          icon="ic:baseline-remove-red-eye"
          color="#ccc"
        />
        <span>100</span>
      </div>
      <div className="flex items-center">
        <Icon icon="mdi:cards-heart" color="#ccc" />
        <span>100</span>
      </div>
      <div className="flex items-center">
        <Icon
          icon="fluent:collections-add-24-filled"
          color="#ccc"
        />
        <span>100</span>
      </div>
    </>
  )
}
