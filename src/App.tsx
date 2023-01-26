import AccountSelector from './AccountSelector'
import { SubstrateContextProvider } from './substrate-lib'
export default function App() {
  return (
    <SubstrateContextProvider>
      <AccountSelector />
      <h1>123123</h1>
    </SubstrateContextProvider>
  )
}
