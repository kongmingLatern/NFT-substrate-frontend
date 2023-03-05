import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
} from '@chakra-ui/react'
import { getColumnIndexByKey } from '@/utils'
import { columnsType } from '@/views/admin/Main'

interface dataSourceType {
  id: string
  key?: string
}

interface TypeProps {
  dataSource: Array<Record<string, any> & dataSourceType>
  columns: Array<columnsType>
}

export default function AdminTable({
  dataSource,
  columns,
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
                if (item.type === 'number') {
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
                                    ].render(item.key, item)
                                  : item.key}
                              </Td>
                            </>
                          )}
                        </>
                      )
                    })}
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
