import { useCallback, useRef, useState } from 'react'
import {
  Input,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react'
import Space from '@/component/common/Space'
import Img from '@/assets/gd1.png'
import { Link, useNavigate } from 'react-router-dom'
import Header from '@/component/common/Header'
import { videoConstraints } from '@/face/const'
import Webcam from 'react-webcam'
import { getFaceDetector, loadModels } from '@/face/model'
import { faceapi } from '@/face'
import Divider from '@/component/common/Divider'
import styles from '@/assets/img.module.css'
import Spin from '@/component/common/Spin'
interface LoginType {
  name?: string
}
export default function Login({
  name = '登录',
}: LoginType) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const webcamRef = useRef(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState('')
  const {
    getCurrentFaceDetectionNet,
    getFaceDetectorOptions,
    isFaceDetectionModelLoaded,
  } = getFaceDetector()

  async function onPlay() {
    if (!isFaceDetectionModelLoaded()) {
      setLoading(false)
      await loadModels(getCurrentFaceDetectionNet)
      // 模型加载完毕
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
    console.log(result)
    if (result) {
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

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
    webcamRef.current.stream = false
    navigate('/home')
  }, [webcamRef])

  return (
    <>
      <Header auth={false} text={name} />
      <Divider />
      <div className={styles.img}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          className="w-[600px] absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] card border p-4 "
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src={Img}
            alt="Cover"
          />

          <Stack>
            <CardBody className="text-center justify-center">
              <Heading size="md" className="mb-3">
                {name}
              </Heading>

              <Space size={20} direction={'vertical'}>
                <label className="flex items-center whitespace-nowrap">
                  账号：
                  <Input
                    opacity={0.5}
                    placeholder={'请输入账号'}
                  />
                </label>
                <label className="flex items-center whitespace-nowrap">
                  密码：
                  <Input
                    type={'password'}
                    w={72}
                    opacity={0.5}
                    placeholder={'请输入密码'}
                  />
                </label>
              </Space>
            </CardBody>

            <CardFooter className="justify-center">
              <Space direction="horizontal">
                <Button
                  w={24}
                  display={'block'}
                  mt={2}
                  variant="solid"
                  colorScheme="blue"
                >
                  {name === '登录' ? (
                    <Link to={'/register'}>去注册</Link>
                  ) : (
                    <Link to={'/login'}>去登录</Link>
                  )}
                </Button>
                <Button
                  w={24}
                  display={'block'}
                  mt={2}
                  variant="solid"
                  colorScheme="whatsapp"
                  onClick={() => onOpen()}
                >
                  {name}
                </Button>
              </Space>
            </CardFooter>
          </Stack>
        </Card>
      </div>

      {isOpen ? (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]">
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>人脸识别</ModalHeader>
              <ModalCloseButton />
              <ModalBody className="relative flex h-[300px] justify-center">
                <Spin
                  loading={loading}
                  size={'middle'}
                  render={() => (
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  )}
                >
                  <Webcam
                    onLoadedMetadata={() => onPlay()}
                    audio={false}
                    height={300}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={300}
                    videoConstraints={videoConstraints}
                    autoPlay
                    className="rounded-full"
                  />
                  {/* 人脸信息获取框 */}
                  <canvas
                    ref={canvas}
                    width={300}
                    height={300}
                    className="absolute"
                  />
                </Spin>
              </ModalBody>

              <ModalFooter>
                <Space>
                  <Button
                    colorScheme="purple"
                    onClick={() => capture()}
                  >
                    点击拍照
                  </Button>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={onClose}
                  >
                    关闭
                  </Button>
                </Space>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
