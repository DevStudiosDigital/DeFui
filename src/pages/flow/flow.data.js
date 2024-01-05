import image_01 from "../../public/Union.png";
import image_02 from "../../public/bnb smart chain.png";
import image_03 from "../../public/MATIC.png";
import image_04 from "../../public/image 34.png";
import image_05 from "../../public/image 281.png";
import image_06 from "../../public/xrp.png";
import image_07 from "../../public/image_07.png";
import image_08 from "../../public/image_08.png";
import image_09 from "../../public/image_09.png";
import image_10 from "../../public/image_10.png";
import image_11 from "../../public/image_11.png";
import image_12 from "../../public/image_12.png";
import image_13 from "../../public/image_13.png";
import image_14 from "../../public/image_14.png";
import image_15 from "../../public/image_15.png";
import image_16 from "../../public/image_16.png";
import image_17 from "../../public/image_17.png";
import image_18 from "../../public/image_18.png";
import image_19 from "../../public/image_19.png";
import image_20 from "../../public/image_20.png";
import image_21 from "../../public/image_21.png";
import image_22 from "../../public/image_22.png";

import video_01 from "../../public/mintVideos/Eth Mint Page.mp4";
import video_02 from "../../public/mintVideos/Poly Mint Page.mp4";
import video_03 from "../../public/mintVideos/BSC Mint Page.mp4";
import video_04 from "../../public/mintVideos/Arb Mint Page.mp4";
import video_05 from "../../public/mintVideos/AVAX Mint Page.mp4";
import video_06 from "../../public/mintVideos/Cronos Mint Page.mp4";
import video_07 from "../../public/mintVideos/USDC Mint Page.mp4";
import video_08 from "../../public/mintVideos/USDT Mint Page.mp4";

/*export const chains = [
  {
    title: "Ethereum DeLot",
    icon: image_01,
    link: "/",
  },
  {
    title: "Binance Smart Chain DeLot",
    icon: image_02,
    link: "/",
  },
  {
    title: "Polygon DeLot",
    icon: image_03,
    link: "/",
  },
  {
    title: "Arbitrum DeLot",
    icon: image_04,
    link: "/",
  },
  {
    title: "Cronos DeLot",
    icon: image_05,
    link: "/",
  },
  {
    title: "XRP DeLot",
    icon: image_06,
    link: "/",
  },
  {
    title: "Litecoin DeLot",
    icon: image_07,
    link: "/",
  },
  {
    title: "BASE DeLot",
    icon: image_08,
    link: "/",
  },
  {
    title: "Avalanche DeLot",
    icon: image_09,
    link: "/",
  },
  {
    title: "Shibarium DeLot",
    icon: image_10,
    link: "/",
  },
  {
    title: "EOS DeLot",
    icon: image_11,
    link: "/",
  },
  {
    title: "Fantam DeLot",
    icon: image_12,
    link: "/",
  },
  {
    title: "Optimism DeLot",
    icon: image_13,
    link: "/",
  },
  {
    title: "Moonbeam DeLot",
    icon: image_14,
    link: "/",
  },
];

export const stable = [
  {
    title: "USDC DeLot",
    icon: image_15,
    link: "/",
  },
  {
    title: "USDT DeLot",
    icon: image_16,
    link: "/",
  },
  {
    title: "PayPal USD DeLot",
    icon: image_17,
    link: "/",
  },
  {
    title: "Binance USD DeLot",
    icon: image_18,
    link: "/",
  },
  {
    title: "DAI USD DeLot",
    icon: image_19,
    link: "/",
  },
  {
    title: "SHI DeLot",
    icon: image_20,
    link: "/",
  },
];
export const pools = [
  {
    title: "Community Pool",
    icon: image_21,
    link: "/",
  },
  {
    title: "Charity Pool",
    icon: image_22,
    link: "/",
  },
];*/



export const chains = [
  {
    title: "Ethereum",
    symbol: 'ETH',
    icon: image_01,
    tickets_title: "Tickets Available",
    button_title: "Go to Eth DeLot",
    video: video_01,
    providerUrl: 'https://eth-sepolia.g.alchemy.com/v2/BbSU1mc2C5j_8I8TlMn-tPswr3yFuusJ',
    contractAddress: '0xfE42F412c83cB1B73f6C708b79C16888AAF92B5e',
    collectionId: '',
    projectId: '',
  },
  {
    title: "Polygon",
    symbol: 'MATIC',
    icon: image_03,
    amount: "25000",
    tickets_title: "Tickets Available",
    tickets_available: "4,000",
    tickets_percent: "40",
    button_title: "Go to Polygon DeLot",
    video: video_02,
    providerUrl: 'https://polygon-mainnet.g.alchemy.com/v2/BbSU1mc2C5j_8I8TlMn-tPswr3yFuusJ',
    contractAddress: '0x163696a198037efC000cccD5a901732f36328b73',
    collectionId: '337eccd1-cbec-495b-a82e-5b2647f5ad55',
    projectId: 'f720443c-6d2c-4fa4-8424-24f3f2969d41',
  },
  {
    title: "Binance Smart Chain",
    symbol: 'BNB',
    icon: image_02,
    amount_title: "Jackpot amount (BNB)",
    amount: "15000",
    tickets_title: "Tickets Available",
    tickets_available: "1,500",
    tickets_percent: "100",
    button_title: "Go to BSC DeLot",
    video: video_03,
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "Arbitrum",
    symbol: 'ARB',
    icon: image_04,
    amount_title: "Jackpot amount (ARB)",
    amount: "16000",
    tickets_title: "Tickets Available",
    tickets_available: "4,000",
    tickets_percent: "40",
    button_title: "Go to ARB DeLot",
    video: video_04,
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "Avalanche",
    symbol: 'AVAX',
    icon: image_09,
    amount_title: "Jackpot amount (AVAX)",
    amount: "10000",
    tickets_title: "Tickets Available",
    tickets_available: "1,500",
    tickets_percent: "15",
    button_title: "Go to AVAX DeLot",
    video: video_05,
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "Cronos",
    symbol: 'CRO',
    icon: image_05,
    amount_title: "Jackpot amount (CRO)",
    amount: "17000",
    tickets_title: "Tickets Available",
    tickets_available: "1,500",
    tickets_percent: "15",
    button_title: "Go to Cronos DeLot",
    video: video_06,
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "XRP",
    symbol: 'XRP',
    icon: image_06,
    amount_title: "Jackpot amount (XRP)",
    amount: "100000",
    tickets_title: "Tickets Available",
    tickets_available: "4,000",
    tickets_percent: "40",
    button_title: "Go to XRP DeLot",
    video: '',
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "Shibarium",
    symbol: 'SHIBA',
    icon: image_10,
    amount_title: "Jackpot amount (SHIBA)",
    amount: "2500000",
    tickets_title: "Tickets Available",
    tickets_available: "4,000",
    tickets_percent: "40",
    button_title: "Go to SHIBA DeLot",
    video: '',
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "Litecoin",
    symbol: 'LTC',
    icon: image_07,
    amount_title: "Jackpot amount (LTC)",
    amount: "3000",
    tickets_title: "Tickets Available",
    tickets_available: "4,000",
    tickets_percent: "40",
    button_title: "Go to LTC DeLot",
    video: '',
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "EOS",
    symbol: 'EOS',
    icon: image_11,
    amount_title: "Jackpot amount (EOS)",
    amount: "12000",
    tickets_title: "Tickets Available",
    tickets_available: "1,500",
    tickets_percent: "15",
    button_title: "Go to EOS DeLot",
    video: '',
    providerUrl: '',
    contractAddress: '',
  },
];

export const stables = [
  {
    title: "USDC",
    symbol: 'USDC',
    icon: image_15,
    amount_title: "Jackpot amount (USDC)",
    amount: "4000",
    tickets_title: "Tickets Available",
    tickets_available: "4,000",
    tickets_percent: "40",
    button_title: "Go to USDC DeLot",
    video: video_07,
    providerUrl: 'https://polygon-mumbai.g.alchemy.com/v2/eXVSeQbya0p9KiT3XDkB7DZ6fogMcuzF',
    contractAddress: '0xA4467bFAD0e4404dc3fe77a184318f5c975094b6',
    collectionId: 'f1bae396-5a0d-4d4c-941b-7c70aa7967e3',
    projectId: '08f9b4fb-241f-412d-a27f-4eff8b15fcd5',
  },
  {
    title: "USDT",
    symbol: 'USDT',
    icon: image_16,
    amount_title: "Jackpot amount (USDT)",
    amount: "15000",
    tickets_title: "Tickets Available",
    tickets_available: "1,500",
    tickets_percent: "15",
    button_title: "Go to USDT DeLot",
    video: video_08,
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "PayPal USD",
    symbol: 'USD',
    icon: image_17,
    amount_title: "Jackpot amount (USD)",
    amount: "25000",
    tickets_title: "Tickets Available",
    tickets_available: "4,000",
    tickets_percent: "40",
    button_title: "Go to PayPal USD DeLot",
    video: '',
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "DAI",
    symbol: 'DAI',
    icon: image_19,
    amount_title: "Jackpot amount (DAI)",
    amount: "17000",
    tickets_title: "Tickets Available",
    tickets_available: "1,500",
    tickets_percent: "15",
    button_title: "Go to DAI DeLot",
    video: '',
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "Binance USD",
    symbol: 'BUSD',
    icon: image_18,
    amount_title: "Jackpot amount (BUSD)",
    amount: "16000",
    tickets_title: "Tickets Available",
    tickets_available: "4,000",
    tickets_percent: "40",
    button_title: "Go to USD DeLot",
    video: '',
    providerUrl: '',
    contractAddress: '',
  },
  {
    title: "SHI",
    symbol: 'SHI',
    icon: image_20,
    amount_title: "Jackpot amount (SHI)",
    amount: "100000",
    tickets_title: "Tickets Available",
    tickets_available: "4,000",
    tickets_percent: "40",
    button_title: "Go to SHI DeLot",
    video: '',
    providerUrl: '',
    contractAddress: '',
  },
];

export const pools = [
  {
    title: "Community Pool",
    icon: image_21,
    amount_title: "Jackpot amount (USDT)",
    amount: "4000",
    tickets_title: "Tickets Available",
    tickets_available: "4,000",
    tickets_percent: "40",
    button_title: "Go to Community Pool DeLot",
    url: ''
  },
  {
    title: "Charity Pool",
    icon: image_22,
    amount_title: "Jackpot amount (USDT)",
    amount: "15000",
    tickets_title: "Tickets Available",
    tickets_available: "1,500",
    tickets_percent: "15",
    button_title: "Go to Charity Pool DeLot",
    url: ''
  },
];
