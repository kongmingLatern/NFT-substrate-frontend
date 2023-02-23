export default function Merchandise() {
    const time=new Date()
    var year = time.getFullYear();    //  返回的是年份
    var month =time.getMonth() + 1;  //  返回的月份上个月的月份，记得+1才是当月
    var dates =time.getDate();       //  返回的是几号
    let hour=time.getHours();
    let minutes=time.getMinutes()
    let todaytime=year+"年"+month+"月"+dates+"日"+" "+hour+":"+minutes
    let remaining=[
        {time:'01',id:'hours'},
        {time:'02',id:'minutes'},
        {time:'02',id:'seconds'}
    ]
  return (
    <div className='mt-10 max-w-screen-lg mx-auto'>
        <div className='flex'>
            <div className='w-3/10'>
                <img className=' h-96 ' src="/public/足球图片.jpg" alt="" />
                <div className=''>
                    <div className='text-2xl font-bold'>物品详细</div>
                    <div className=' truncate break-words '>
                        gdsfgasdfsadffsdaffffffffff
                    </div>
                 </div>
            </div>
            <div className=' ml-5 w-7/10'>
                <div className='w-full flex h-20'>
                    <div className='' >
                       <div className='w-full text-2xl'>物品名称</div>
                        <div className='w-full'>拥有者：xxx</div>
                        <div>
                            <div className='inline mr-10'><img className='inline-block w-15 h-9' src="../../public/眼睛.png" alt="" /><span className='inline-block' >xx</span> </div>
                            <div className='inline mr-10'><img className='inline-block w-15 h-9' src="../../public/眼睛.png" alt="" /><span className='inline-block' >xx</span> </div>
                            <div className='inline mr-10'><img className='inline-block w-15 h-9' src="../../public/眼睛.png" alt="" /><span className='inline-block' >xx</span> </div>
                        </div>
                    </div>
                    <div className=' w-20 h-20 bg-red-200 text-center rounded-full '>
                        收藏
                    </div>               
                </div>
                {/* 价格 */}
                <div className='text-3xl mt-9 ml-4'>当前价格</div>
                <div className='mt-3 ml-4'>
                    <span className='text-3xl text-red-500 '> 100 CS</span>
                    <span className='line-through ml-5'>9999cs</span>
                </div>
                {/* 时间 */}
                <div className='mt-3 ml-4'>
                    <div>
                        {todaytime}
                    </div>
                    <div>
                        {
                            remaining.map((item)=>{
                                return(
                                    <li className='inline-block mr-6' key={item.id}>
                                        <div>{item.time}</div>
                                        <div>{item.id}</div>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
                {/* 按钮 */}
                <div className='w-full mt-6 '>
                    <div className='w-1/2  text-center inline-block'><button className='bg-blue-400 h-8 rounded-xl w-48'><img src="" alt="" /> 加入购物车</button> </div>
                    <div className='w-1/2  text-center inline-block'><button className='bg-orange-400 h-8 rounded-xl w-48'><img src="" alt="" /> 立即购买</button> </div>
                </div>
                <div>
                <div className=''>
                    <div className="overflow-x-auto mt-7">
                        <table className="table table-zebra w-full">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

