import { useState } from 'react'
import {
  Input,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react'
import Facebox from '@/component/common/Facebox'
import Space from '@/component/common/Space'
import Img from '@/assets/gd1.png'
import { Link } from 'react-router-dom'
import Header from '@/component/common/Header'
export default function Logon() {
  const [display, setdisplay] = useState(false)
  function changedisplay(value) {
    setdisplay(value)
  }
  return (
    <>
      <Header auth={false} text={'注册'} />
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        className="w-[600px] absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] card border p-4 mt-[-65px]"
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src={Img}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody className="text-center justify-center">
            <Heading size="md">注册</Heading>

            <Text py="2">
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
            </Text>
          </CardBody>

          <CardFooter className="justify-center">
            <div className="flex justify-between">
              <Space direction="horizontal">
                <Button
                  w={24}
                  display={'block'}
                  mt={2}
                  onClick={() => setdisplay(true)}
                  variant="solid"
                  colorScheme="blue"
                >
                  <Link to={'/login'}>注册</Link>
                </Button>
                <Button
                  w={24}
                  display={'block'}
                  mt={2}
                  variant="solid"
                  colorScheme="whatsapp"
                >
                  <Link to={'/login'}>去登陆</Link>
                </Button>
              </Space>
            </div>
          </CardFooter>
        </Stack>
      </Card>
      <div style={{ display: display ? 'block' : 'none' }}>
        <Facebox changedisplay={changedisplay} />
      </div>
    </>
  )
}
