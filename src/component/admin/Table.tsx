import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
} from '@chakra-ui/react'
import Space from '../common/Space'

export default function AdminTable() {
  return (
    <>
      <TableContainer className="border">
        <Table
          size={'md'}
          variant="striped"
          colorScheme="blackAlpha"
        >
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>用户名</Th>
              <Th isNumeric>账号余额（￥）</Th>
              <Th>操作</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td className="flex">
                <Space>
                  <button className="btn btn-secondary w-[100px] font-thin text-white">
                    查看
                  </button>
                  <button className="btn btn-error w-[100px] font-thin text-white">
                    删除
                  </button>
                </Space>
              </Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
              <Td className="flex">
                <Space>
                  <button className="btn btn-secondary w-[100px] font-thin text-white">
                    查看
                  </button>
                  <button className="btn btn-error w-[100px] font-thin text-white">
                    删除
                  </button>
                </Space>
              </Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
              <Td className="flex">
                <Space>
                  <button className="btn btn-secondary w-[100px] font-thin text-white">
                    查看
                  </button>
                  <button className="btn btn-error w-[100px] font-thin text-white">
                    删除
                  </button>
                </Space>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
