

export default function Cardbox  () {
    return (
      <>
          <div className='mx-3 card card-compact w-72  bg-base-100 shadow-xl  transform hover:-translate-y-1 hover:scale-100 '>
              <figure><img  className='w-full '  src="../../public/爱心.png" alt="Shoes" /></figure>
              <div className='w-full'>
                  <span className='ml-6 text-2xl font-medium'>男孩</span><img src="" alt="" />
              </div>
              <div className='w-full flex mt-4 mb-4 text-center'>
                  <div className='w-1/2 ml-7'>
                      <div className='text-xl'>FlooR</div>
                      <div className='text-2xl font-medium'>0.07</div>
                  </div>
                  <div className='w-1/2'>
                      <div className='text-xl'>FlooR</div>
                      <div className='text-2xl font-medium'>0.07</div>
                  </div>
              </div>
          </div>
      </>
    )
  }
  
  