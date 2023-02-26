import Image from '@/assets/gd1.png'
import { Link } from 'react-router-dom'
export default function Cardbox() {
  return (
    <Link to={'/detail'}>
      <div className="card card-compact w-60 bg-base-100 shadow-xl transform hover:-translate-y-1 hover:scale-100 ">
        <figure>
          <img className="w-full" src={Image} />
        </figure>
        <div className="w-full text-ellipsis px-2 text-center line-clamp-2 overflow-hidden mt-2 ">
          <span className="text-sm font-bold font-sans">
            常熟理工学院 NFT 货币
          </span>
          <img src="" alt="" />
        </div>
        <div className="w-full flex mt-4 mb-4 text-center ">
          <div className="w-1/2">
            <div className="text-md font-bold text-[#707a83]">
              低价
            </div>
            <div className="text-lg font-bold">￥0.07</div>
          </div>
          <div className="w-1/2">
            <div className="text-md font-bold text-[#707a83]">
              24 小时
            </div>
            <div className="text-lg font-bold">￥0.07</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
