import { VideoConstraintsType } from './type'

export const enum FaceDetectionNet {
  SSD_MOBILENETV1 = 'ssd_mobilenetv1',
  TINY_FACE_DETECTOR = 'tiny_face_detector',
}
export const videoConstraints: VideoConstraintsType = {
  width: 640,
  height: 360,
  facingMode: 'user',
}
