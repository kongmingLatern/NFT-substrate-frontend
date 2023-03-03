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
import Popover from '../common/Popover'

interface columnsType {
  title: string
  id: string
  key: string
}
interface dataSourceType {
  id: string
  username: string
  balance: string
  key: string
}

interface TypeProps {
  dataSource: Array<dataSourceType>
  columns: Array<columnsType>
  onDelete: (id: string) => void
  onLookUp: (dataSourceType) => void
}

export default function AdminTable({
  onLookUp,
  dataSource,
  columns,
  onDelete,
}: TypeProps) {
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
              {columns.map(item => {
                if (item.key === 'balance') {
                  return (
                    <Th isNumeric key={item.key}>
                      {item.title}
                    </Th>
                  )
                } else {
                  return (
                    <Th key={item.key}>{item.title}</Th>
                  )
                }
              })}
            </Tr>
          </Thead>
          <Tbody>
            {dataSource.map(item => {
              return (
                <Tr key={item.key}>
                  <Td>{item.id}</Td>
                  <Td>{item.username}</Td>
                  <Td isNumeric>{item.balance}</Td>
                  <Td className="flex">
                    <Space>
                      <button
                        onClick={() => onLookUp(item)}
                        className="btn btn-secondary w-[100px] font-thin text-white"
                      >
                        查看
                      </button>
                      <Popover
                        deleteId={item.id}
                        onDelete={onDelete}
                        render={() => (
                          <button className="btn btn-error w-[100px] font-thin text-white">
                            删除
                          </button>
                        )}
                      />
                    </Space>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
