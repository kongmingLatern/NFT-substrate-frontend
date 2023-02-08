import { startIdentify } from '@/face'
import Webcam from 'react-webcam'

import { useCallback, useRef } from 'react'

export default function webcamFaceDetection() {
  const videoEl = useRef<HTMLVideoElement>()
  const canvas = useRef<HTMLCanvasElement>()
  const myCanvas = useRef<HTMLCanvasElement>()
  const { onPlay, run, close, getRes } = startIdentify(
    videoEl,
    canvas
  )
  return (
    <>
      <div className="flex relative">
        <video
          onLoadedMetadata={() => onPlay()}
          ref={videoEl}
          autoPlay
          muted
          playsInline
        />
        <canvas ref={canvas} className="absolute" />
        <div
          id="webcam"
          style={{
            width: 638,
            height: 359,
            background: '#000',
          }}
        ></div>
        <canvas ref={myCanvas} />
      </div>
      <button onClick={() => run()}>检测图像</button>
      <button onClick={() => close()}>关闭图像</button>
      <button onClick={() => getRes()}>获得数据</button>

      <Webcam />
    </>
  )
}

// const videoConstraints = {
//   width: 1280,
//   height: 720,
//   facingMode: 'user',
// }

// const WebcamCapture = () => {
//   const webcamRef = useRef(null)
//   const capture = useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot()
//     console.log(imageSrc)
//   }, [webcamRef])
//   return (
//     <>
//       <Webcam
//         audio={false}
//         height={720}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={1280}
//         videoConstraints={videoConstraints}
//       />
//       <button onClick={capture}>Capture photo</button>
//     </>
//   )
// }

// export default function webcamFaceDetection() {
//   return <WebcamCapture />
// }
