/// <reference types="react-scripts" />

interface RequestArguments {
  method: string
  params?: unknown[] | object
}

interface ProviderMessage {
  type: string
  data: unknown
}

type ethereum = {
  isMetaMask?: true

  isConnected: () => boolean
  request: <T extends unknown>(args: RequestArguments) => Promise<T>

  isMetaMask?: true
  on?: (...args: any[]) => void
  removeListener?: (...args: any[]) => void
  autoRefreshOnNetworkChange?: boolean

  _metamask: {
    isUnlocked: () => Promise<boolean>
  }
}

interface Window {
  ethereum: ethereum
}
