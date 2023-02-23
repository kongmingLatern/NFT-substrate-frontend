import AccountSelector from './AccountSelector'
import { SubstrateContextProvider } from './substrate-lib'
import { useEffect, useRef } from 'react'
import WebcamFaceDetection from './component/common/WebcamFaceDetection'
import Board from '@/component/paint'
import Home from './pages/Home'
import Create from './pages/Create'
export default function App() {
  return (
    <>
      {/* <SubstrateContextProvider>
        <AccountSelector />
      </SubstrateContextProvider> */}
      {/* <WebcamFaceDetection /> */}
      {/* <Home /> */}
      <Create />
      {/* <Board/> */}
    </>
  )
}
