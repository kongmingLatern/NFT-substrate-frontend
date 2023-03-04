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
import { getColumnIndexByKey } from '../../utils'
import { columnsType } from '@/views/admin/Main'

interface dataSourceType {
  id: string
  key?: string
  username: string
  balance: string
  operation: string
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
                  <>
                    {Object.keys(item).map((key, index) => {
                      return (
                        <>
                          {key !== 'key' && (
                            <>
                              {/* {key === 'operation' ? (
                                <Td className="flex">
                                  {columns[
                                    getColumnIndexByKey(
                                      columns,
                                      'operation'
                                    )
                                  ]?.render
                                    ? columns[
                                        getColumnIndexByKey(
                                          columns,
                                          'operation'
                                        )
                                      ].render(
                                        item.key,
                                        item
                                      )
                                    : item.key}
                                </Td>
                              ) : ( */}
                                <Td>
                                  {columns[
                                    getColumnIndexByKey(
                                      columns,
                                      key
                                    )
                                  ]?.render
                                    ? columns[
                                        getColumnIndexByKey(
                                          columns,
                                          key
                                        )
                                      ].render(
                                        item.key,
                                        item
                                      )
                                    : item.key}
                                </Td>
                              {/* )} */}
                            </>
                          )}
                        </>
                      )
                    })}

                    {/* <Td className="flex">
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
                      </Td> */}
                  </>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
