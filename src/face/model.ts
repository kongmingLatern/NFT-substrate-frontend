import { FaceDetectionNet } from "./const"
import { faceapi } from "."

function loadModel() {
  // ssd_mobilenetv1 options
  let minConfidence = 0.5

  // tiny_face_detector options
  let inputSize = 512
  let scoreThreshold = 0.5

  // read selectedFaceDetector from select box
  let selectedFaceDetector =
    FaceDetectionNet.SSD_MOBILENETV1


  function getCurrentFaceDetectionNet() {
    if (
      selectedFaceDetector ===
      FaceDetectionNet.SSD_MOBILENETV1
    ) {
      return faceapi.nets.ssdMobilenetv1
    }
    if (
      selectedFaceDetector ===
      FaceDetectionNet.TINY_FACE_DETECTOR
    ) {
      return faceapi.nets.tinyFaceDetector
    }
  }
  function isFaceDetectionModelLoaded() {
    return !!getCurrentFaceDetectionNet().params
  }
  function getFaceDetectorOptions() {
    return selectedFaceDetector ===
      FaceDetectionNet.SSD_MOBILENETV1
      ? new faceapi.SsdMobilenetv1Options({ minConfidence })
      : new faceapi.TinyFaceDetectorOptions({
        inputSize,
        scoreThreshold,
      })
  }

  return {
    getCurrentFaceDetectionNet,
    getFaceDetectorOptions,
    isFaceDetectionModelLoaded,
  }
}

export function startIdentify(videoEl, canvasEl) {

  // 计时器变量
  let isOpen = null

  const { getCurrentFaceDetectionNet, getFaceDetectorOptions, isFaceDetectionModelLoaded } = loadModel()

  async function onPlay() {
    if (!isFaceDetectionModelLoaded()) {
      await getCurrentFaceDetectionNet().loadFromUri(
        '/models'
      )
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

  function close() {
    if (isOpen) clearTimeout(isOpen)
    const stream = videoEl.current.srcObject
    const tracks = stream.getTracks()
    tracks.forEach((track) => track.stop())
    videoEl.current.srcObject = null
  }

  return {
    onPlay,
    run,
    close,
  }
}