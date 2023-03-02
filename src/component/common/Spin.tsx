import classNames from 'classnames'
import React from 'react'

interface SpinProps
  extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean
  size?: 'small' | 'middle' | 'large'
  render?: any
  chidren?: React.ReactNode
}
export default function Spin({
  loading,
  size = 'middle',
  children,
  render,
}: SpinProps) {
  const className =
    'animate-spin rounded-full border-t-2 border-b-2 border-gray-900'
  const sizeClassName = {
    small: 'h-8 w-8',
    middle: 'h-16 w-16',
    large: 'h-32 w-32',
  }
  return (
    <>
      {loading && (
        <>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
            {render ? (
              render()
            ) : (
              <div
                className={classNames(
                  className,
                  size ? sizeClassName[size] : ''
                )}
              ></div>
            )}
          </div>
        </>
      )}
      {React.Children.toArray(children).map(item => item)}
    </>
  )
}
