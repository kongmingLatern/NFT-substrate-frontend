import AccountSelector from './AccountSelector'
import { SubstrateContextProvider } from './substrate-lib'
import { faceapi } from './face'
import { useEffect, useRef } from 'react'
export default function App() {
  const videoEl = useRef<HTMLVideoElement>()
  const canvas = useRef<HTMLCanvasElement>()

  const SSD_MOBILENETV1 = 'ssd_mobilenetv1'
  const TINY_FACE_DETECTOR = 'tiny_face_detector'

  let selectedFaceDetector = SSD_MOBILENETV1

  // ssd_mobilenetv1 options
  let minConfidence = 0.5

  // tiny_face_detector options
  let inputSize = 512
  let scoreThreshold = 0.5

  function isFaceDetectionModelLoaded() {
    return !!getCurrentFaceDetectionNet().params
  }
  function getCurrentFaceDetectionNet() {
    if (selectedFaceDetector === SSD_MOBILENETV1) {
      return faceapi.nets.ssdMobilenetv1
    }
    if (selectedFaceDetector === TINY_FACE_DETECTOR) {
      return faceapi.nets.tinyFaceDetector
    }
  }
  function getFaceDetectorOptions() {
    return selectedFaceDetector === SSD_MOBILENETV1
      ? new faceapi.SsdMobilenetv1Options({ minConfidence })
      : new faceapi.TinyFaceDetectorOptions({
          inputSize,
          scoreThreshold,
        })
  }
  async function onPlay() {
    if (
      videoEl.current.paused ||
      videoEl.current.ended ||
      !isFaceDetectionModelLoaded()
    )
      return setTimeout(() => onPlay())

    const options = getFaceDetectorOptions()

    // const ts = Date.now()

    const result = await faceapi.detectSingleFace(
      videoEl.current,
      options
    )

    // updateTimeStats(Date.now() - ts)

    if (result) {
      const dims = faceapi.matchDimensions(
        canvas.current,
        videoEl.current,
        true
      )
      faceapi.draw.drawDetections(
        canvas.current,
        faceapi.resizeResults(result, dims)
      )
    }

    setTimeout(() => onPlay())
  }
  async function run() {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        video: {},
      })
    videoEl.current.srcObject = stream
  }

  return (
    <>
      <video
        onLoadedMetadata={() => onPlay()}
        ref={videoEl}
        autoPlay
        muted
        playsInline
      />
      <canvas ref={canvas} />
      <button onClick={() => run()}>检测图像</button>
    </>
    // <SubstrateContextProvider>
    //   <AccountSelector />
    // </SubstrateContextProvider>
  )
}
