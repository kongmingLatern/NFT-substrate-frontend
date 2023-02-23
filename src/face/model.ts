import { FaceDetectionNet } from './const'
import { faceapi } from './index'

export function getFaceDetector(
  selectedFaceDetector = FaceDetectionNet.SSD_MOBILENETV1
) {
  // ssd_mobilenetv1 options
  const minConfidence = 0.5

  // tiny_face_detector options
  const inputSize = 512
  const scoreThreshold = 0.5

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

export async function loadModels(
  getCurrentFaceDetectionNet: () =>
    | faceapi.SsdMobilenetv1
    | faceapi.TinyFaceDetector
) {
  await getCurrentFaceDetectionNet().loadFromUri('/models')
}
