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

// ================ initialState  =======================
let keyringLoadAll = false

const registry = new TypeRegistry()

const SubstrateContext = React.createContext(null)

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

// Reducer function for 'useReducer'
const reducer = (state, action) => {
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

const connect = (state, dispatch) => {
  const { apiState, socket, jsonrpc } = state
  // useCallback(apiState)
  // We only want this function to be performed once
  if (apiState) return

  dispatch({ type: 'CONNECT_INIT' })

  console.log(`Connected socket: ${socket}`)
  const provider = new WsProvider(socket)
  const _api = new ApiPromise({ provider, rpc: jsonrpc })

  // Set listeners for disconnection and reconnection event.
  _api.on('connected', () => {
    dispatch({ type: 'CONNECT', payload: _api })
    // `ready` event is not emitted upon reconnection and is checked explicitly here.
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
const retrieveChainInfo = async api => {
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
const loadAccounts = (state, dispatch) => {
  const { api } = state
  dispatch({ type: 'LOAD_KEYRING' })

  const asyncLoadAccounts = async () => {
    try {
      await web3Enable(config.APP_NAME)
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
  useContext(SubstrateContext).state

export {
  useSubstrate,
  useSubstrateState,
  SubstrateContextProvider,
}
