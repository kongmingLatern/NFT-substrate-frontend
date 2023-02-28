import Image from '@/assets/1.jpg'
import { Fragment } from 'react'
import Divider from '../common/Divider'
export default function NftCard() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
        return (
          <Fragment key={index}>
            <div className="card card-side glass mb-2">
              <figure className="w-1/3">
                <img
                  src={Image}
                  style={{
                    width: '100%',
                    minHeight: '100px',
                    height: '260px',
                  }}
                />
              </figure>
              <div className="card-body bg-black rounded-lg glass text-white hover:text-black hover:ease-in-out hover:duration-300 hover:bg-blue-100">
                <h2 className="card-title">
                  常熟理工 Logo
                </h2>
                <p className="italic">
                  这里是对这个 Logo 的各种简介
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    查看详情
                  </button>
                </div>
              </div>
            </div>
            <Divider />
          </Fragment>
        )
      })}
    </>
  )
}
