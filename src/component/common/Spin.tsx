import React from 'react'

interface SpinProps
  extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean
  chidren?: React.ReactNode
}
export default function Spin({
  loading,
  children,
}: SpinProps) {
  return (
    <>
      {loading && (
        <>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </>
      )}
      {React.Children.toArray(children).map(item => item)}
    </>
  )
}
