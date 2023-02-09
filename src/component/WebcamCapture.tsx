import { startIdentify } from '@/face'
import * as faceapi from 'face-api.js'
import { getFaceDetector, loadModels } from '@/face/model'
import { useRef, useCallback } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 640,
  height: 360,
  facingMode: 'user',
}

export default function webcamFaceDetection() {
  const webcamRef = useRef(null)
  const canvas = useRef<HTMLCanvasElement>(null)

  const {
    getCurrentFaceDetectionNet,
    getFaceDetectorOptions,
    isFaceDetectionModelLoaded,
  } = getFaceDetector()

  async function onPlay() {
    if (!isFaceDetectionModelLoaded()) {
      await loadModels(getCurrentFaceDetectionNet)
    } else if (
      webcamRef.current.video.paused ||
      webcamRef.current.video.ended
    ) {
      return setTimeout(() => onPlay())
    }

    const options = getFaceDetectorOptions()

    const result = await faceapi.detectSingleFace(
      webcamRef.current.video,
      options
    )
    if (result) {
      console.log(result)

      const dims = faceapi.matchDimensions(
        canvas.current,
        webcamRef.current.video,
        true
      )
      faceapi.draw.drawDetections(
        canvas.current,
        faceapi.resizeResults(result, dims)
      )
    }

    setTimeout(() => onPlay())
  }

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    // base64 进制
    console.log(imageSrc)
  }, [webcamRef])
  return (
    <div className="relative flex">
      {/* {play} */}
      <Webcam
        onLoadedMetadata={() => onPlay()}
        audio={false}
        height={360}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        videoConstraints={videoConstraints}
        autoPlay
      />
      <canvas
        ref={canvas}
        width={640}
        height={360}
        className="absolute"
      />
      <button onClick={capture}>Capture photo</button>
      {/* <button onClick={() => close()}>close webcam</button> */}
    </div>
  )
}
