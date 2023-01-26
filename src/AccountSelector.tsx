import { useState, useEffect } from 'react'

import {
  useSubstrate,
  useSubstrateState,
} from './substrate-lib'

const CHROME_EXT_URL =
  'https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd'
const FIREFOX_ADDON_URL =
  'https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/'

const acctAddr = acct => (acct ? acct.address : '')

function Main() {
  const {
    setCurrentAccount,
    state: { keyring, currentAccount },
  } = useSubstrate()

  // Get the list of accounts we possess the private key for
  const keyringOptions = keyring
    .getPairs()
    .map(account => ({
      key: account.address,
      value: account.address,
      text: account.meta.name.toUpperCase(),
      icon: 'user',
    }))

  const initialAddress =
    keyringOptions.length > 0 ? keyringOptions[0].value : ''

  // Set the initial address
  useEffect(() => {
    // `setCurrentAccount()` is called only when currentAccount is null (uninitialized)
    !currentAccount &&
      initialAddress.length > 0 &&
      setCurrentAccount(keyring.getPair(initialAddress))
  }, [
    currentAccount,
    setCurrentAccount,
    keyring,
    initialAddress,
  ])

  return (
    <>
      <button>触发</button>
      <BalanceAnnotation />
    </>
  )
}

function BalanceAnnotation(props) {
  const { api, currentAccount } = useSubstrateState()
  const [accountBalance, setAccountBalance] = useState(0)

  // When account address changes, update subscriptions
  useEffect(() => {
    let unsubscribe

    // If the user has selected an address, create a new subscription
    currentAccount &&
      api.query.system
        .account(acctAddr(currentAccount), balance =>
          setAccountBalance(balance.data.free.toHuman())
        )
        .then(unsub => (unsubscribe = unsub))
        .catch(console.error)

    return () => unsubscribe && unsubscribe()
  }, [api, currentAccount])

  return currentAccount ? <>{accountBalance}</> : null
}

export default function AccountSelector(props) {
  const { api, keyring } = useSubstrateState()
  console.log('api', api)
  console.log('keyring', keyring)
  console.log('1', 1)

  return keyring?.getPairs && api?.query ? (
    <>
      {/* 头部 */}
      <h1>AccountSelector</h1>
      <Main {...props} />
    </>
  ) : null
}
