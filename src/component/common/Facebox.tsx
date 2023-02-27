import React from 'react'

const Facebox: React.FC<any> = (props: any) => {
  return (
    <div>
      <div className="fixed bg-red-200  w-96 h-96 top-1/2 left-1/2 -ml-48 -mt-48  text-cnter">
        {/* 人脸识别框 */}
        <div className="w-full h-full"></div>
        <div className="flex justify-between">
          <button className="block mx-auto rounded-md  border-2 w-24 hover:red">
            确定
          </button>
          <button
            className="block mx-auto rounded-md  border-2 w-24 hover:red"
            onClick={() => {
              props.changedisplay(false)
            }}
          >
            取消
          </button>
        </div>
      </div>
    </div>
  )
}

export default Facebox
