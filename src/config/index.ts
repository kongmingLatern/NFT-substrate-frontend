import configCommon from './common.json'

const configEnv = await import(
  `./${process.env.NODE_ENV}.json`
)

const envVarNames = ['REACT_APP_PROVIDER_SOCKET']

const envVars = envVarNames.reduce((mem, n) => {
  if (process.env[n] !== undefined) {
    mem[n.slice(10)] = process.env[n]
  }
  return mem
}, {})

export const config = {
  ...configCommon,
  ...configEnv,
  ...envVars,
}
