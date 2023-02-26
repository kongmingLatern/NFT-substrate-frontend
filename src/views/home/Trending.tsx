import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react'
import Image from '@/assets/gd1.png'

const tableData = [
  {
    name: 'inches',
    value: 25.4,
  },
  {
    name: 'i12nches',
    value: 235.4,
  },
  {
    name: 'inches',
    value: 25.4,
  },
  {
    name: 'inches',
    value: 25.4,
  },
  {
    name: 'i12nches',
    value: 235.4,
  },
]

export default function Trending() {
  return (
    <>
      <TableContainer
        style={{ display: 'flex', padding: '1em' }}
      >
        <Table variant="striped" className="mr-5">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th isNumeric>Floor Price</Th>
              <Th isNumeric>Volume</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td className="flex items-center">
                  <img
                    src={Image}
                    width={60 + 'px'}
                    className="mr-3 rounded-lg overflow-hidden"
                  />
                  <span className="font-thin">
                    {item.name}
                  </span>
                </Td>
                <Td isNumeric className="font-semibold">
                  ￥{item.value}
                </Td>
                <Td isNumeric className="font-semibold">
                  ￥{item.value}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th isNumeric>Floor Price</Th>
              <Th isNumeric>Volume</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 6}</Td>
                <Td className="flex items-center">
                  <img
                    src={Image}
                    width={60 + 'px'}
                    className="mr-3 rounded-lg overflow-hidden"
                  />
                  <span className="font-thin">
                    {item.name}
                  </span>
                </Td>
                <Td isNumeric className="font-semibold">
                  ￥{item.value}
                </Td>
                <Td isNumeric className="font-semibold">
                  ￥{item.value}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
