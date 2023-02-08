import AccountSelector from './AccountSelector'
import { SubstrateContextProvider } from './substrate-lib'
import { useEffect, useRef } from 'react'
import WebcamFaceDetection from './component/WebcamFaceDetection'
export default function App() {
  return (
    <>
      <WebcamFaceDetection />
    </>
    // <SubstrateContextProvider>
    //   <AccountSelector />
    // </SubstrateContextProvider>
  )
}
