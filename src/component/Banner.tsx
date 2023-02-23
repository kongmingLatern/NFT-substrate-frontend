import React from 'react'

const Banner:React.FC<any>=(props:any)=>{
  return (
    <>
      <div className=" h-56 carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="../../public/rollimgs/人民币.png" className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src="../../public/rollimgs/信息.png" className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full">
          <img src="../../public/rollimgs/信息.png" className="w-full" />
        </div> 
        <div id="item4" className="carousel-item w-full">
          <img src="../../public/rollimgs/信息.png" className="w-full" />
        </div>
      </div> 
      <div className="flex justify-center w-full py-1 gap-3">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </>
  )
}

export default  Banner

