import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { sepolia, mainnet, configureChains, createConfig, WagmiConfig } from 'wagmi'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { RecoilRoot } from 'recoil'

// Wagmi client
const chains = [sepolia, mainnet];
const projectId = process.env.NEXT_PUBLIC_W3M_PROJECT_ID

/*
const connector = new WalletConnectConnector({
  chains : [sepolia, mainnet],
  options: {
    projectId: projectId,
    metadata: {
      name: 'SmokleyS',
      description: 'SmokleyS Lounge',
      url: 'https://SmokleyS.shop',
      icons: ['https://wagmi.sh/icon.png'],
    },
  },
})
*/

const { publicClient } = configureChains(
  chains,
  [w3mProvider({ projectId })],
)

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    version: 2,
    chains,
    projectId 
  }),
  publicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig config={wagmiConfig} >
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
