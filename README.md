# NFT-Substrate-Frontend

## 1. 一些 API 的使用

```ts
      1. web3Enable(dappName: string): Promise<InjectedExtension[]>
      检索所有注入的列表扩展/提供者
      InjectedExtension[]
      {
        name: string
        version: string,
        accounts: InjectedAccounts,
        metadata?: InjectedMetadata,
        provider?: InjectedProvider,
        signer: InjectedSigner;
      }[]

      2. web3Accounts(): Promise<InjectedAccountWithMeta[]>
      返回一个列表的所有注入账户,横跨所有扩展元(源)码
      export interface InjectedAccountWithMeta {
          address: string;
          meta: {
              genesisHash?: string | null;
              name?: string;
              source: string;
          };
          type?: KeypairType;
      }

      3. const initialState: initialStateType = {
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
        socket- 它连接到的远程提供程序套接字。
        keyring- 用户可用帐户的密钥环。
        keyringState- 一个"READY"或一个"ERROR"状态。keyring仅在 时有效keyringState === "READY"。
        api- 连接节点的远程 api。
        apiState- "CONNECTING"、"READY"或"ERROR"状态之一。api仅在 时有效apiState === "READY"。
        currentAccount- 当前在应用程序上下文中选择的帐户对。
        setCurrentAccount- 更新currentAccount应用程序上下文中的值的函数。
```
