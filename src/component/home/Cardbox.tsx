import Image from '@/assets/gd1.png'
export default function Cardbox() {
  return (
    <>
      <div className="card card-compact w-60 bg-base-100 shadow-xl transform hover:-translate-y-1 hover:scale-100 ">
        <figure>
          <img className="w-full" src={Image} />
        </figure>
        <div className="w-full text-ellipsis indent-8 line-clamp-2 overflow-hidden">
          <span className="text-lg">
            男孩 男孩 男孩 男孩 男孩 男孩 男孩 男孩 男孩
            男孩 男孩 男孩 男孩 男孩 男孩 男孩 男孩 男孩
            男孩 男孩 男孩 男孩
          </span>
          <img src="" alt="" />
        </div>
        <div className="w-full flex mt-4 mb-4 text-center ">
          <div className="w-1/2">
            <div className="text-md font-bold text-[#707a83]">
              FLOOR
            </div>
            <div className="text-2xl font-medium">0.07</div>
          </div>
          <div className="w-1/2">
            <div className="text-md font-bold text-[#707a83]">
              24H VOLUMNE
            </div>
            <div className="text-2xl font-medium">0.07</div>
          </div>
        </div>
      </div>
    </>
  )
}
