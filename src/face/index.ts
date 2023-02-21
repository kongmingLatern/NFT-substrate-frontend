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
    } else if (videoEl.paused || videoEl.ended) {
      return setTimeout(() => onPlay())
    }

    const options = getFaceDetectorOptions()

    const result = await faceapi.detectSingleFace(
      videoEl,
      options
    )
    if (result) {
      const dims = faceapi.matchDimensions(
        canvasEl,
        videoEl,
        true
      )
      faceapi.draw.drawDetections(
        canvasEl,
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
    videoEl.srcObject = stream
  }
  async function getRes() {
    const res = await faceapi.detectSingleFace(videoEl)
    console.log(res)

    return await faceapi.detectSingleFace(videoEl)
  }

  function close() {
    if (isOpen) clearTimeout(isOpen)
    const stream = videoEl.srcObject
    const tracks = stream.getTracks()
    tracks.forEach(track => track.stop())
    videoEl.srcObject = null
  }

  return {
    onPlay,
    getRes,
    run,
    close,
  }
}

export { faceapi, startIdentify }
