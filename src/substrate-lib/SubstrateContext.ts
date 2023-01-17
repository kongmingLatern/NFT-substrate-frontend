import jsonrpc from '@polkadot/types/interfaces/jsonrpc'
import { config } from '../config'

interface initialStateType {
  socket: string
  jsonrpc: Record<string, any>
  keyring: string | null
  keyringState: string | null
  api: string | null
  apiError: string | null
  apiState: string | null
  currentAccount: string | null
}

const parseQuery = new URLSearchParams(
  window.location.search
)

const connectedSocket =
  parseQuery.get('rpc') || config.PROVIDER_SOCKET

const initialState: initialStateType = {
  // These are the states
  socket: connectedSocket,
  jsonrpc: { ...jsonrpc, ...config.CUSTOM_RPC_METHODS },
  keyring: null,
  keyringState: null,
  api: null,
  apiError: null,
  apiState: null,
  currentAccount: null,
}
