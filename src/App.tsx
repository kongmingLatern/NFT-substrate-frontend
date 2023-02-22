import AccountSelector from './AccountSelector'
import { SubstrateContextProvider } from './substrate-lib'
import { useEffect, useRef } from 'react'
import WebcamFaceDetection from './component/WebcamFaceDetection'
import Board from '@/component/paint/pages/board'
export default function App() {
  return (
    <>
      {/* <SubstrateContextProvider>
        <AccountSelector />
      </SubstrateContextProvider> */}
      {/* <WebcamFaceDetection /> */}
      <Board/>
    </>
  )
}
