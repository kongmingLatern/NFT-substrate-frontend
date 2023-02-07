import { useRef } from 'react'
import { startIdentify } from '.'
export default function webcamFaceDetection() {
  const videoEl = useRef<HTMLVideoElement>()
  const canvas = useRef<HTMLCanvasElement>()
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
      </div>
      <button onClick={() => run()}>检测图像</button>
      <button onClick={() => close()}>关闭图像</button>
      <button onClick={() => getRes()}>获得数据</button>
    </>
  )
}
