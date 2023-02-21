import configCommon from './common.json'
import configEnv from './development.json'

const envVarNames = ['REACT_APP_PROVIDER_SOCKET']

const envVars = envVarNames.reduce((mem, n) => {
  if (process?.env[n] !== undefined) {
    mem[n.slice(10)] = process?.env[n]
  }
  return mem
}, {})

// interface ConfigType {
//   APP_NAME: 'NFT-substrate-front'
//   CUSTOM_RPC_METHODS: Record<string, any>
//   CUSTOM_TYPES: Record<string, any>
// }
// console.log('configEnv', configEnv)
// console.log('envVars', envVars)

export const config = {
  ...configCommon,
  ...configEnv,
  ...envVars,
}
