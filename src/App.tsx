import AccountSelector from './AccountSelector'
import { SubstrateContextProvider } from './substrate-lib'
import { useEffect, useRef } from 'react'
import WebcamFaceDetection from './component/common/WebcamFaceDetection'
import Board from '@/component/paint/pages/board'
import Home from './pages/Home'
export default function App() {
  return (
    <>
      {/* <SubstrateContextProvider>
        <AccountSelector />
      </SubstrateContextProvider> */}
      {/* <WebcamFaceDetection /> */}
      <Home />
      {/* <Board/> */}
    </>
  )
}
