import { VideoConstraintsType } from './type'

export const enum FaceDetectionNet {
  SSD_MOBILENETV1 = 'ssd_mobilenetv1',
  TINY_FACE_DETECTOR = 'tiny_face_detector',
}
export const videoConstraints: VideoConstraintsType = {
  width: 300,
  height: 300,
  facingMode: 'user',
}
