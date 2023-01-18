# NFT-Substrate-Frontend

## 1. 一些 API 的使用

1.`web3Enable(dappName: string): Promise<InjectedExtension[]>`

> 检索所有注入的列表扩展/提供者

```ts
      InjectedExtension[]
      {
        name: string
        version: string,
        accounts: InjectedAccounts,
        metadata?: InjectedMetadata,
        provider?: InjectedProvider,
        signer: InjectedSigner;
      }[]

```

2. `web3Accounts(): Promise<InjectedAccountWithMeta[]>`

> 返回一个列表的所有注入账户,横跨所有扩展元(源)码

```ts
export interface InjectedAccountWithMeta {
  address: string
  meta: {
    genesisHash?: string | null
    name?: string
    source: string
  }
  type?: KeypairType
}
```

3. `initalState`

```ts
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
```

- socket- 它连接到的远程提供程序套接字。

- keyring- 用户可用帐户的密钥环。

- keyringState- 一个"READY"或一个"ERROR"状态。keyring 仅在 时有效 keyringState === "READY"。

- api- 连接节点的远程 api。

- apiState- "CONNECTING"、"READY"或"ERROR"状态之一。api 仅在 时有效 apiState === "READY"。

- currentAccount- 当前在应用程序上下文中选择的帐户对。
- setCurrentAccount- 更新 currentAccount 应用程序上下文中的值的函数。

## 2.读取及订阅链上数据 (Queries)

### Template Module 模块

> 包含了读取链上数据，提交交易，及监听事件。

在 `Substrate` 中有以下内容：

- 一个存取项 Something
- 一个读取接口 something
- 一个外部交易接口 do_something

```tsx
useEffect(() => {
  let unsubscribe
  api.query.templateModule
    .something(newValue => {
      // The storage value is an Option<u32>
      // So we have to check whether it is None first
      // There is also unwrapOr
      if (newValue.isNone) {
        setCurrentValue('<None>')
      } else {
        setCurrentValue(newValue.unwrap().toNumber())
      }
    })
    .then(unsub => {
      unsubscribe = unsub
    })
    .catch(console.error)

  return () => unsubscribe && unsubscribe()
}, [api.query.templateModule])
```

> `api` 是从 `useSubstrate()` 取得的 `JS API` 接口。

> `api.query.templateModule.something` 就是我们从 `Substrate` 节点处取得数据的方法。

> 而 `api query` 的用法法则是：

```bash
  api.query.<pallet_名字>.<pallet 存储名字>(回调函数)
```

对应 `pallets/template/template.rs`

```rust
// This module's storage items.
decl_storage! {
  trait Store for Module<T: Trait> as TemplateModule {
    Something get(fn something): Option<u32>;
  }
}
```

JS API 提供两种读取数据的方法。

- 一是基于 `JS Promise` 的方法，可以这样读取数值：`javascript const val = await api.query.templateModule.something();`

- 另一方法，如果想收听该数值，并每次该值在远端作出变更时都收到回调，则用现在 `TemplateModule.js` 里的写法。源码：

`src/TemplateModule.js`

```javascript
let unsubscribe
api.query.templateModule
  .something(function (val) {
    // 回调函数
    // 在这里设置 UI 里使用的变量。
  })
  .then(unsub => {
    //取消订阅函数
    unsubscribe = unsub
  })
```

- 最后把取消函数在 useEffect() 内返回即可。这是 React Effect Hook 的清理方法。
  另外值得注意一点是 something 在 Substrate 内是一个 Option<u32> 的格式。因为 Rust 和 Javascript 的数据类型没有一对一映射，因此无符号整数回到 JS 时是以封装的对象呈现。得使用跟着的 .unwrap().toNumber() 来把对象转化回 JS 内的数值。
