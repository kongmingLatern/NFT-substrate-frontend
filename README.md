# NFT-Substrate-Frontend

## 前端技术架构

- TypeScript
- React
- Vite
- Polkadot
- Canvas
- Husky
- Eslint
- Prettier
- CommitLint
- Face-api
- React-webcam
- TailWindCSS
- DaisyUI
- Chakra UI
- Nuka Carousel
- i18n

## 环境

- Web3.0
- Webassmebly

## 功能点

1. 个性化画图
   - canvas
   - graph
   - 保存（手动，自动 5s）
   - 存储（先放缓存里）
   - 简洁
   - 可扩展性
   - 可维护性
   - （加水印）
2. 可视化数据
3. 人脸识别
4. 交易
   购买方人脸识别
5. 上传
   上传方人脸识别，设置初始价，最低出价等
6. 拍卖
   - 设置时间
   - 报价
   - 收藏品
7. 购物车

## Substrate 与 Polkadot

## 1. 一些 API 的使用 JS

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

### JS 与 Substrate 交互

对应 `pallets/template/template.rs`

```rust
// This module's storage items.
decl_storage! {
  trait Store for Module<T: Trait> as TemplateModule {
    Something get(fn something): Option<u32>;
  }
}
```

`JS API` 提供两种读取数据的方法。

- 一是基于 `JS Promise` 的方法，可以这样读取数值：

```js
const val = await api.query.templateModule.something()
```

- 另一方法，如果想监听该数值，并每次该值在远端作出变更时都收到回调，则用现在 `TemplateModule.js` 里的写法。

源码：`src/TemplateModule.js`

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

- 最后把取消函数在 `useEffect()` 内返回即可。这是 `React Effect Hook` 的清理方法。
  另外值得注意一点是 `something` 在 `Substrate` 内是一个 `Option<u32>` 的格式。因为 `Rust` 和 `Javascript` 的数据类型没有一对一映射，因此无符号整数回到 `JS` 时是以封装的对象呈现。得使用跟着的 ``来把对象转化回`JS` 内的数值。

## 前端 与 Substrate 交互

一个完整的 substrate 开发的区块链节点客户端会暴露一组 JSON-RPC API 接口, 可以使用 HTTP 或者 WebSocket 方式来访问.
JSON-RPC API 暴露的数据接口内容, 每个不同链都不一样, 但都遵循规定的格式和约束, 就是所谓 metadata. **一个链的 metadata 包含了区块链网络给外部访问的所有接口和数据.**

```json
{
"magicNumber": 1635018093,
  "metadata": {
  "v13": {
      "modules": [
          ....
        ],
      "extrinsic": {
        "version": 4,
        "signedExtensions": [
          "CheckSpecVersion",
          "CheckTxVersion",
          "CheckGenesis",
          "CheckMortality",
          "CheckNonce",
          "CheckWeight",
          "ChargeTransactionPayment"
        ]
      }
    }
  }
}
```

其中前端主要关注的就是 "modules"部分, 这里的"modules", 就是指的是前面所说的 pallets.

```json
{
  "name": "TemplateModule",
  "**storage**": {
    "prefix": "TemplateModule",
    "items": [
      {
        "name": "Something",
        "modifier": "Optional",
        "type": {
          "plain": "u32"
        },
        "fallback": "0x00",
        "docs": []
      }
    ]
  },
  "**calls**": [
    {
      "name": "do_something",
      "args": [
        {
          "name": "something",
          "type": "u32"
        }
      ],
      "docs": [
        " An example dispatchable that takes a singles value as a parameter, writes the value to",
        " storage and emits an event. This function must be dispatched by a signed extrinsic."
      ]
    },
    {
      "name": "cause_error",
      "args": [],
      "docs": [
        " An example dispatchable that may throw a custom error."
      ]
    }
  ],
  "**events**": [
    {
      "name": "SomethingStored",
      "args": ["u32", "AccountId"],
      "docs": [
        " Event documentation should end with an array that provides descriptive names for event",
        " parameters. [something, who]"
      ]
    }
  ],
  "**constants**": [],
  "**errors**": [
    {
      "name": "NoneValue",
      "docs": [" Error names should be descriptive."]
    },
    {
      "name": "StorageOverflow",
      "docs": [
        " Errors should have helpful documentation associated with them."
      ]
    }
  ],
  "index": 8
}
```

可以看到，**一个 module 内包含了每个 pallet 的名称，记录着每个 pallet 的 storage, calls, events, constants, errors**.
所以, 读取到这个链的 metadata, 就会知道这 Substrate 链提供了什么接口可供调用。

### Polkadot.js 交互基础

polkadot.js 是波卡官方提供用来与 substrate 链交互的 js 库, 对各种类型,结构和调用进行了封装,
具体来说, 有 3 个主要的基础封装

● api.tx.<pallet>.<call> 来调用 Call, tx 是 transaction 的缩写, 即 交易, 调用一个 Call, 通常也被称为”发送一个交易”, 一般而言, 交易都是需要签名的, 签名环节在后面
● api.consts.<pallet>.<const> 来读取 pallet 中的常量
● api.query.<pallet>.<name> 来读取 pallet 存储 storage 值

#### 1. 连接到节点

```js
const { ApiPromise, WsProvider } = require('@polkadot/api')

// Construct
const wsProvider = new WsProvider('ws://127.0.0.1:9944')
// 如没有运行 node-template，也可试连到波卡主网上： `wss://rpc.polkadot.io`.
const api = await ApiPromise.create({
  provider: wsProvider,
})
```

#### 2. 读取元数据

一般性这只是一次性的可选动作, 后端完成后, 一般会自己导出一个 json 文件给到前端使用, 如果前端自行读取, 则:

```js
const { magicNumber, metadata } =
  await api.rpc.state.getMetadata()

console.log('Magic number: ' + magicNumber)
console.log('Metadata: ' + metadata.raw)
```

#### 3. 处理一些业务逻辑

#### 4. 读取常量

```js
// api.consts.<pallet 名称>.<常量名称>. 比如:
const main = async () => {
  const existentialDeposit = await api.consts.balances
    .existentialDeposit
}
```

#### 5. 读取 storage

```js
// api.query.<pallet 名称>.<存储名称>. 比如:
const main = async () => {
  const acct = await api.query.system.account(alice.address)
}
```

#### 6. 调用 call

```js
await api.tx.balances
  .transfer(dest.address, amt)
  .signAndSend(src, res => {
    console.log(`Tx status: ${res.status}`)
  })
```

#### 7. 批量处理

同时发多个查询可同时发多个查询，而不是一条一条发

```js
// Subscribe to balance changes for 2 accounts, ADDR1 & ADDR2 (already defined)
const unsub = await api.query.system.account.multi(
  [ADDR1, ADDR2],
  balances => {
    const [{ data: balance1 }, { data: balance2 }] =
      balances

    console.log(
      `The balances are ${balance1.free} and ${balance2.free}`
    )
  }
)
```

可以批量调用多个:

```js
// Subscribe to the timestamp, our index and balance
const unsub = await api.queryMulti(
  [
    api.query.timestamp.now,
    [api.query.system.account, ADDR],
  ],
  ([now, { nonce, data: balance }]) => {
    console.log(
      `${now}: balance of ${balance.free} and a nonce of ${nonce}`
    )
  }
)
```

以上的开发模式有两点要注意：

- 作查询时，传入一个 回调函数 (callback)。这是个订阅函数。你在这里更新你 react 的 state 的话，就不会出现为什么链上数据改了，而前端没有更新数据的问题。
- `unsub`：这个 `unsub` 是一个函数，用来取消这个订阅的。如果是 react/前端开发，你在 `ComponentWillUnmount()`，或 `useEffect()` 里，就会 call 这个取消订阅函数。整个模式类似以下：

```js
useEffect(() => {
  let unsub = null

  const asyncFetch = async () => {
    unsub = await api.query.pallet.storage(param, result =>
      console.log(`Result: ${result}`)
    )
  }

  asyncFetch()

  return () => {
    unsub && unsub()
  }
}, [api, keyring])
```

#### 8. 订阅事件

```js
// Create alice (carry-over from the keyring section)
const alice = keyring.addFromUri('//Alice')

// Make a transfer from Alice to BOB, waiting for inclusion
const unsub = await api.tx.balances
  .transfer(BOB, 12345)
  .signAndSend(alice, result => {
    console.log(`Current status is ${result.status}`)

    if (result.status.isInBlock) {
      console.log(
        `Transaction included at blockHash ${result.status.asInBlock}`
      )
    } else if (result.status.isFinalized) {
      console.log(
        `Transaction finalized at blockHash ${result.status.asFinalized}`
      )
      unsub()
    }
  })
```

### 交易流程及钱包交互

流程如下：

> 发起交易 -> 输入交易信息 -> 用户对交易进行签名 -> 区块链确认签名正确 -> 执行交易 ->返回事件或者错误

签名阶段, 主要有两个方式:

- 通过 keyring, 类似于 hardcode 在代码中的方式
- 通过钱包应用或者插件

#### 基本流程

首先需要安装 `@polkadot/extension-dapp` , 钱包里账户进入页面的方式被称为 “Inject”, 在前端中, 所有账户的提供方, 比如 polkadotjs 钱包, 狐狸钱包, 或者是页面自己新建的账户, 这些来源方统一称为”Provider”,

##### 1. 请求钱包授权

只有获得钱包授权, 才能从钱包把账户”Inject”到页面中供 js 调用

```js
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
  web3ListRpcProviders,
  web3UseRpcProvider,
} from '@polkadot/extension-dapp'

// 这一步在所有动作之前完成,
const allInjected = await web3Enable('cambio network')

if (extensions.length === 0) {
  // 如果钱包插件没有安装, 或者没能获得授权, 应该做处理
  return
}
```

##### 2. 列出钱包中的账户

```js
const allAccounts = await web3Accounts()
```
