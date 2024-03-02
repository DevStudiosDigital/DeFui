import { DelotHomePage } from "./pages/delot/DelotHomePage";
import { FlowChains } from "./pages/flow/FlowChains";
import { FlowPool } from "./pages/flow/FlowPool";
import { FlowStable } from "./pages/flow/FlowStable";
import { Mint } from "./pages/mint/MintFour";
import { MintStable } from "./pages/mint/MintStable";
//import { MintThree } from "./pages/mint/MintThree";
//import { MintTwo } from "./pages/mint/MintTwo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Partner } from "./pages/partner/Partner";

import {Cloudinary} from "@cloudinary/url-gen";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  polygonMumbai,
  sepolia,
  bsc
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, bsc, polygonMumbai, sepolia],
  [
    alchemyProvider({ apiKey: "BbSU1mc2C5j_8I8TlMn-tPswr3yFuusJ" }), //NOTE: WE WILL HAVE TO REPLACE THIS
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Decentralized Finance Intiative',
  projectId: '063eeea5f4b45a31b3be592f04869063', //NOTE: WE WILL HAVE TO REPLACE THIS
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {
  const cld = new Cloudinary({cloud: {cloudName: 'defui-delots'}});
  
   return (
    <>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<DelotHomePage />} />
        <Route path="/partner" element={<Partner />} />
          {/* <Route path="/mint" element={<MintTwo />} />
          <Route path="/mint-2" element={<MintThree />} /> */}
          <Route path="/mint/:param1" element={<Mint />} />
          <Route path="/mint-stable/:param1" element={<MintStable />} />
          <Route path="/stables" element={<FlowStable />} />/
          <Route path="/chains" element={<FlowChains />} />
          <Route path="/pools" element={<FlowPool />} />
        </Routes>
      </BrowserRouter>
    </RainbowKitProvider>
    </WagmiConfig>
  </>
  )
}

export default App;
