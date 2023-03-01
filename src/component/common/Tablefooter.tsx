import React from 'react'
const Tablefooter: React.FC<any> = (props: any) => {
  return (
    <div>
      <div className="mr-6 w-56 h-24 float-right rounded-lg justify-between">
        <div className="text-lg">
          总价:{' '}
          <label
            className="text-2xl text-red-500 font-bold"
          >
            {'￥' + props.total}
          </label>
        </div>
        <div className="w-auto float-right mt-6">
          <button className="btn btn-secondary w-36">
            提交
          </button>
        </div>
      </div>
    </div>
  )
}
export default Tablefooter
