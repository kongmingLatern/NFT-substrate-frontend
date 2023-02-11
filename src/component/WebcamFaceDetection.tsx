import { startIdentify } from '@/face'
import { useRef } from 'react'
import WebcamCapture from './WebcamCapture'

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

      <h1>Method2: Take Photo by react-webcam</h1>
      <WebcamCapture />
    </>
  )
}
