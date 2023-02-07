import * as faceapi from 'face-api.js'
import { getFaceDetector, loadModels } from './model'

function startIdentify(videoEl, canvasEl) {
  // 计时器变量
  let isOpen = null

  const {
    getCurrentFaceDetectionNet,
    getFaceDetectorOptions,
    isFaceDetectionModelLoaded,
  } = getFaceDetector()

  async function onPlay() {
    if (!isFaceDetectionModelLoaded()) {
      await loadModels(getCurrentFaceDetectionNet)
    } else if (
      videoEl.current.paused ||
      videoEl.current.ended
    ) {
      return setTimeout(() => onPlay())
    }

    const options = getFaceDetectorOptions()

    const result = await faceapi.detectSingleFace(
      videoEl.current,
      options
    )
    if (result) {
      console.log(result)

      const dims = faceapi.matchDimensions(
        canvasEl.current,
        videoEl.current,
        true
      )
      faceapi.draw.drawDetections(
        canvasEl.current,
        faceapi.resizeResults(result, dims)
      )
    }

    isOpen = setTimeout(() => onPlay())
  }
  async function run() {
    // onPlay()
    const stream =
      await navigator.mediaDevices.getUserMedia({
        video: {},
      })
    videoEl.current.srcObject = stream
  }
  async function getRes() {
    const res = await faceapi.detectSingleFace(
      videoEl.current
    )
    console.log(res)

    return await faceapi.detectSingleFace(videoEl.current)
  }

  function close() {
    if (isOpen) clearTimeout(isOpen)
    const stream = videoEl.current.srcObject
    const tracks = stream.getTracks()
    tracks.forEach(track => track.stop())
    videoEl.current.srcObject = null
  }

  return {
    onPlay,
    getRes,
    run,
    close,
  }
}

export { faceapi, startIdentify }
