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
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">
            loading...
          </div>
        </div>
      ) : (
        children
      )}
    </>
  )
}
