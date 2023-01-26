import React, { useReducer } from 'react'
import { useContext } from 'react'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { config } from '../config'
import { useEffect } from 'react'
import {
  web3Accounts,
  web3Enable,
} from '@polkadot/extension-dapp'
import { keyring as Keyring } from '@polkadot/ui-keyring'
import { isTestChain } from '@polkadot/util'
import { TypeRegistry } from '@polkadot/types'
import jsonrpc from '@polkadot/types/interfaces/jsonrpc'

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

interface retrieveChainInfoType {
  systemChain: string
  systemChainType: Record<string, any>
}

// ================ initialState  =======================
let keyringLoadAll = false

const SubstrateContext = React.createContext({})

const parseQuery = new URLSearchParams(
  window.location.search
)

// www.xxx.com?rpc=123123&ajdoi=sdfsdf
// [connectSocket = 123123]
const connectedSocket =
  parseQuery.get('rpc') || config.PROVIDER_SOCKET

const initialState: initialStateType = {
  // 对应现在连接的远端
  socket: connectedSocket,
  // `Substrate` 网络内的自定义结构组
  jsonrpc: { ...jsonrpc, ...config.CUSTOM_RPC_METHODS },
  // 储存着用户帐号(用户公钥)，也开放出接口来为数据和交易签名
  keyring: null,
  // 用户帐号状态，为 `[null, 'READY', 'ERROR']` 其中一个
  keyringState: null,
  // `Polkadot-JS API`
  api: null,
  apiError: null,
  // `Polkadot-JS API` 对远端的连接状态，为 `[null, 'CONNECTING', 'READY', 'ERROR']` 其中一个
  apiState: null,
  currentAccount: null,
}

const registry = new TypeRegistry()

// Reducer function for 'useReducer'
const reducer = (state: initialStateType, action) => {
  switch (action.type) {
    case 'CONNECT_INIT':
      return { ...state, apiState: 'CONNECT_INIT' }
    case 'CONNECT':
      return {
        ...state,
        api: action.payload,
        apiState: 'CONNECTING',
      }
    case 'CONNECT_SUCCESS':
      return { ...state, apiState: 'READY' }
    case 'CONNECT_ERROR':
      return {
        ...state,
        apiState: 'ERROR',
        apiError: action.payload,
      }
    case 'LOAD_KEYRING':
      return { ...state, keyringState: 'LOADING' }
    case 'SET_KEYRING':
      return {
        ...state,
        keyring: action.payload,
        keyringState: 'READY',
      }
    case 'KEYRING_ERROR':
      return {
        ...state,
        keyring: null,
        keyringState: 'ERROR',
      }
    case 'SET_CURRENT_ACCOUNT':
      return { ...state, currentAccount: action.payload }
    default:
      throw new Error(`Unknown type: ${action.type}`)
  }
}

const connect = (
  state: initialStateType,
  dispatch: React.Dispatch<any>
) => {
  const { apiState, socket, jsonrpc } = state
  if (apiState) return

  dispatch({ type: 'CONNECT_INIT' })

  console.log(`Connected socket: ${socket}`)
  // https://polkadot.js.org/docs/api/start/create
  const provider = new WsProvider(socket)
  // rpc: User-defined RPC methods
  const _api = new ApiPromise({ provider, rpc: jsonrpc })

  // 监听状态
  _api.on('connected', () => {
    dispatch({ type: 'CONNECT', payload: _api })
    _api.isReady.then(_api =>
      dispatch({ type: 'CONNECT_SUCCESS' })
    )
  })
  _api.on('ready', () =>
    dispatch({ type: 'CONNECT_SUCCESS' })
  )
  _api.on('error', err =>
    dispatch({ type: 'CONNECT_ERROR', payload: err })
  )
}
// ================ Substrate Context =======================
// retrieveChainInfo: 检索当前连接的 Substrate 链的信息
const retrieveChainInfo: (
  api: any
) => Promise<retrieveChainInfoType> = async api => {
  const [systemChain, systemChainType] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.chainType
      ? api.rpc.system.chainType()
      : Promise.resolve(
          registry.createType('ChainType', 'Live')
        ),
  ])

  return {
    systemChain: (systemChain || '<unknown>').toString(),
    systemChainType,
  }
}

// ================ Substrate Context Provider ====================
const loadAccounts = (
  state: initialStateType,
  dispatch: React.Dispatch<any>
) => {
  const { api } = state
  dispatch({ type: 'LOAD_KEYRING' })

  const asyncLoadAccounts = async () => {
    try {
      // web3Enable(dappName: string): Promise<InjectedExtension[]>
      // 检索所有注入的列表扩展/提供者
      // InjectedExtension[]
      // {
      //   name: string
      //   version: string,
      //   accounts: InjectedAccounts,
      //   metadata?: InjectedMetadata,
      //   provider?: InjectedProvider,
      //   signer: InjectedSigner;
      // }[]
      await web3Enable(config.APP_NAME)

      // web3Accounts(): Promise<InjectedAccountWithMeta[]>
      // 返回一个列表的所有注入账户,横跨所有扩展元(源)码
      // export interface InjectedAccountWithMeta {
      //     address: string;
      //     meta: {
      //         genesisHash?: string | null;
      //         name?: string;
      //         source: string;
      //     };
      //     type?: KeypairType;
      // }
      let allAccounts = await web3Accounts()

      allAccounts = allAccounts.map(
        ({ address, meta }) => ({
          address,
          meta: {
            ...meta,
            name: `${meta.name} (${meta.source})`,
          },
        })
      )

      const { systemChain, systemChainType } =
        await retrieveChainInfo(api)
      const isDevelopment =
        systemChainType.isDevelopment ||
        systemChainType.isLocal ||
        // isTestChain(chain?: string | null): boolean;
        isTestChain(systemChain)

      Keyring.loadAll({ isDevelopment }, allAccounts)

      dispatch({ type: 'SET_KEYRING', payload: Keyring })
    } catch (e) {
      console.error(e)
      dispatch({ type: 'KEYRING_ERROR' })
    }
  }
  asyncLoadAccounts()
}

const SubstrateContextProvider = props => {
  const neededPropNames = ['socket']
  neededPropNames.forEach(key => {
    initialState[key] =
      typeof props[key] === 'undefined'
        ? initialState[key]
        : props[key]
  })

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )
  connect(state, dispatch)

  useEffect(() => {
    const { apiState, keyringState } = state
    if (
      apiState === 'READY' &&
      !keyringState &&
      !keyringLoadAll
    ) {
      keyringLoadAll = true
      loadAccounts(state, dispatch)
    }
  }, [state, dispatch])

  function setCurrentAccount(acct) {
    dispatch({ type: 'SET_CURRENT_ACCOUNT', payload: acct })
  }

  return (
    <SubstrateContext.Provider
      value={{ state, setCurrentAccount }}
    >
      {props.children}
    </SubstrateContext.Provider>
  )
}

const useSubstrate = () => useContext(SubstrateContext)

const useSubstrateState = () =>
  (useContext(SubstrateContext) as any).state

export {
  useSubstrate,
  useSubstrateState,
  SubstrateContextProvider,
}
