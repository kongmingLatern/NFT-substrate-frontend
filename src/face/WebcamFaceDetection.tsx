import { useRef } from 'react'
import { faceapi } from '.'
export default function webcamFaceDetection() {
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
      console.log('get', faceapi.nets.ssdMobilenetv1)
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
    if (!isFaceDetectionModelLoaded()) {
      await getCurrentFaceDetectionNet().loadFromUri(
        '/models'
      )
    }
    if (
      videoEl.current.paused ||
      videoEl.current.ended ||
      !isFaceDetectionModelLoaded()
    ) {
      return setTimeout(() => onPlay())
    }

    const options = getFaceDetectorOptions()
    console.log(options)

    // const ts = Date.now()

    const result = await faceapi.detectSingleFace(
      videoEl.current,
      options
    )
    console.log(result)

    // updateTimeStats(Date.now() - ts)

    if (result) {
      console.log(result)

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
    // onPlay()
    const stream =
      await navigator.mediaDevices.getUserMedia({
        video: {},
      })
    videoEl.current.srcObject = stream
  }

  function unrun() {
    videoEl.current.srcObject = null
  }

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
      <button onClick={() => unrun()}>关闭图像</button>
    </>
  )
}
