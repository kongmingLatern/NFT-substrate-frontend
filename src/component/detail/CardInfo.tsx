import DetailIcon from './DetailIcon'
import Operation from './Operation'
import SalesTime from './SalesTime'
import UserTable from './UserTable'

export default function CardInfo() {
  return (
    <div className=" ml-5 w-[60%]">
      {/* 右侧头部 */}
      <div className="w-full flex h-20 justify-between">
        {/* 物品名称 */}
        <div className="w-[70%]">
          <div className="w-full text-2xl font-bold">
            物品名称
          </div>
          <div className="w-full">拥有者：xxx</div>
          <div className="h-10 flex justify-around items-center">
            <DetailIcon />
          </div>
        </div>
        {/* 收藏 */}
        <div className=" w-20 h-20 leading-[5rem] bg-red-500 text-center text-white rounded-full ">
          收藏
        </div>
      </div>
      {/* 价格 */}
      <div className="text-3xl mt-9 ml-4 font-bold">
        当前价格
      </div>
      <div className="mt-3 ml-4">
        <span className="text-3xl text-red-500 ">
          {' '}
          100 CS
        </span>
        <span className="line-through ml-5">9999cs</span>
      </div>
      {/* 时间 */}
      <div className="mt-3 ml-4">
        <SalesTime />
      </div>
      {/* 按钮 */}
      <div className="w-full mt-6 ">
        <Operation />
      </div>
      <div>
        <div>
          <div className="overflow-x-auto mt-7">
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  )
}
