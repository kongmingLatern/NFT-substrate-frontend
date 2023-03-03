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
import Modalalert from '../common/Modalalert'

interface columsType{
  title:string,
  id:string,
  key:string
}
interface dataSourceType{
  id:string,
  username:string,
  balance:string,
  key:string
}

interface TypeProps{
  lookuphand:(dataSourceType)=>void,
  dataSource:Array<dataSourceType>,
  colums:Array<columsType>
  deleteData:(id:string)=>void
}

export default function AdminTable({
  lookuphand,
  dataSource,
  colums,
  deleteData

}:TypeProps) {
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
              {/* <Th>id</Th>
              <Th>用户名</Th>
              <Th isNumeric>账号余额（￥）</Th>
              <Th>操作</Th> */}
              {
                colums.map((item)=>{
                  if (item.key==="balance") {
                    return <Th isNumeric key={item.key}>{item.title}</Th>
                  }else{
                    return <Th  key={item.key}>{item.title}</Th>
                  } 
                })
              }
            </Tr>
          </Thead>
          <Tbody>
             {
              dataSource.map((item)=>{
                return(
                  <Tr key={item.key}>
                    <Td>{item.id}</Td>
                    <Td>{item.username}</Td>
                    <Td isNumeric>{item.balance}</Td>
                    <Td className="flex">
                    <Space>
                      <button onClick={()=>lookuphand(item)} className="btn btn-secondary w-[100px] font-thin text-white">
                        查看
                      </button>
                      <Modalalert  deleteId={item.id} deleteData={deleteData} />
                    </Space>
              </Td>
                  </Tr>
                )
              })
             }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
