import ccipLogo from "../assets/products/ccip-logo.svg"
import vrfLogo from "../assets/products/vrf-logo.svg"
import functionsLogo from "../assets/products/functions-logo.svg"
import automationLogo from "../assets/products/automation-logo.svg"
import dataFeedsLogo from "../assets/products/data-feeds-logo.svg"
import dataStreamsLogo from "../assets/products/data-streams-logo.svg"

export interface ProductData {
  learnMoreLink: string
  logo: { src: string }
  chains: Record<string, string>
}

export interface ProductChainLinks {
  [key: string]: ProductData | { [chainId: string]: string }
}

export const productChainLinks: ProductChainLinks = {
  CCIP: {
    learnMoreLink: "ccip",
    logo: ccipLogo,
    chains: {
      arbitrum: "/ccip/directory/mainnet/chain/ethereum-mainnet-arbitrum-1",
      astar: "/ccip/directory/mainnet/chain/polkadot-mainnet-astar",
      avalanche: "/ccip/directory/mainnet/chain/avalanche-mainnet",
      "bnb-chain": "/ccip/directory/mainnet/chain/bsc-mainnet",
      celo: "/ccip/directory/mainnet/chain/celo-mainnet",
      "gnosis-chain": "/ccip/directory/mainnet/chain/xdai-mainnet",
      base: "/ccip/directory/mainnet/chain/ethereum-mainnet-base-1",
      blast: "/ccip/directory/mainnet/chain/ethereum-mainnet-blast-1",
      ethereum: "/ccip/directory/mainnet/chain/mainnet",
      kroma: "/ccip/directory/mainnet/chain/ethereum-mainnet-kroma-1",
      optimism: "/ccip/directory/mainnet/chain/ethereum-mainnet-optimism-1",
      polygon: "/ccip/directory/mainnet/chain/matic-mainnet",
      wemix: "/ccip/directory/mainnet/chain/wemix-mainnet",
      mantle: "/ccip/directory/mainnet/chain/ethereum-mainnet-mantle-1",
      mode: "/ccip/directory/mainnet/chain/ethereum-mainnet-mode-1",
      metis: "/ccip/directory/mainnet/chain/ethereum-mainnet-andromeda-1",
      zksync: "/ccip/directory/mainnet/chain/ethereum-mainnet-zksync-1",
      linea: "/ccip/directory/mainnet/chain/ethereum-mainnet-linea-1",
      scroll: "/ccip/directory/mainnet/chain/ethereum-mainnet-scroll-1",
      soneium: "/ccip/directory/mainnet/chain/soneium-mainnet",
      zircuit: "/ccip/directory/mainnet/chain/ethereum-mainnet-zircuit-1",
      ronin: "/ccip/directory/mainnet/chain/ronin-mainnet",
      bsquared: "/ccip/directory/mainnet/chain/bitcoin-mainnet-bsquared-1",
      shibarium: "/ccip/directory/mainnet/chain/shibarium-mainnet",
      sonic: "/ccip/directory/mainnet/chain/sonic-mainnet",
      bob: "/ccip/directory/mainnet/chain/bitcoin-mainnet-bob-1",
      worldchain: "/ccip/directory/mainnet/chain/ethereum-mainnet-worldchain-1",
      polygonzkevm: "/ccip/directory/mainnet/chain/ethereum-mainnet-polygon-zkevm-1",
      xlayer: "/ccip/directory/mainnet/chain/ethereum-mainnet-xlayer-1",
      ink: "/ccip/directory/mainnet/chain/ethereum-mainnet-ink-1",
      corn: "/ccip/directory/mainnet/chain/corn-mainnet",
      bitlayer: "/ccip/directory/mainnet/chain/bitcoin-mainnet-bitlayer-1",
      hashkey: "/ccip/directory/mainnet/chain/ethereum-mainnet-hashkey-1",
      botanix: "/ccip/directory/testnet/chain/bitcoin-testnet-botanix",
      sei: "/ccip/directory/mainnet/chain/sei-mainnet",
      monad: "/ccip/directory/testnet/chain/monad-testnet",
      treasure: "/ccip/directory/mainnet/chain/treasure-mainnet",
      merlin: "/ccip/directory/testnet/chain/bitcoin-testnet-merlin",
      fraxtal: "/ccip/directory/testnet/chain/ethereum-testnet-holesky-fraxtal-1",
      lens: "/ccip/directory/testnet/chain/ethereum-testnet-sepolia-lens-1",
      unichain: "/ccip/directory/testnet/chain/ethereum-testnet-sepolia-unichain-1",
      berachain: "/ccip/directory/testnet/chain/berachain-testnet-bartio",
    },
  },
  "Data Feeds": {
    learnMoreLink: "data-feeds",
    logo: dataFeedsLogo,
    chains: {
      aptos: "/data-feeds/price-feeds/addresses?network=aptos",
      arbitrum: "/data-feeds/price-feeds/addresses?network=arbitrum",
      avalanche: "/data-feeds/price-feeds/addresses?network=avalanche",
      base: "/data-feeds/price-feeds/addresses?network=base",
      "bnb-chain": "/data-feeds/price-feeds/addresses?network=bnb-chain",
      botanix: "/data-feeds/price-feeds/addresses?network=botanix",
      celo: "/data-feeds/price-feeds/addresses?network=celo",
      ethereum: "/data-feeds/price-feeds/addresses?network=ethereum",
      fantom: "/data-feeds/price-feeds/addresses?network=fantom",
      "gnosis-chain": "/data-feeds/price-feeds/addresses?network=gnosis-chain",
      hedera: "/data-feeds/price-feeds/addresses?network=hedera",
      linea: "/data-feeds/price-feeds/addresses?network=linea",
      mantle: "/data-feeds/price-feeds/addresses?network=mantle",
      metis: "/data-feeds/price-feeds/addresses?network=metis",
      moonbeam: "/data-feeds/price-feeds/addresses?network=moonbeam",
      moonriver: "/data-feeds/price-feeds/addresses?network=moonriver",
      optimism: "/data-feeds/price-feeds/addresses?network=optimism",
      polygonzkevm: "/data-feeds/price-feeds/addresses?network=polygonzkevm",
      polygon: "/data-feeds/price-feeds/addresses?network=polygon",
      ronin: "/data-feeds/price-feeds/addresses?network=ronin",
      scroll: "/data-feeds/price-feeds/addresses?network=scroll",
      solana: "/data-feeds/price-feeds/addresses?network=solana",
      soneium: "/data-feeds/price-feeds/addresses?network=soneium",
      sonic: "/data-feeds/price-feeds/addresses?network=sonic",
      starknet: "/data-feeds/price-feeds/addresses?network=starknet",
      unichain: "/data-feeds/price-feeds/addresses?network=unichain",
      xlayer: "/data-feeds/price-feeds/addresses?network=xlayer",
      zksync: "/data-feeds/price-feeds/addresses?network=zksync",
    },
  },
  "Data Streams": {
    learnMoreLink: "data-streams",
    logo: dataStreamsLogo,
    chains: {
      arbitrum: "/data-streams/crypto-streams",
      avalanche: "/data-streams/crypto-streams",
      base: "/data-streams/crypto-streams",
      berachain: "/data-streams/crypto-streams",
      blast: "/data-streams/crypto-streams",
      botanix: "/data-streams/crypto-streams",
      ethereum: "/data-streams/crypto-streams",
      hashkey: "/data-streams/crypto-streams",
      ink: "/data-streams/crypto-streams",
      mantle: "/data-streams/crypto-streams",
      monad: "/data-streams/crypto-streams",
      opbnb: "/data-streams/crypto-streams",
      optimism: "/data-streams/crypto-streams",
      ronin: "/data-streams/crypto-streams",
      scroll: "/data-streams/crypto-streams",
      shibarium: "/data-streams/crypto-streams",
      solana: "/data-streams/crypto-streams",
      soneium: "/data-streams/crypto-streams",
      sonic: "/data-streams/crypto-streams",
      worldchain: "/data-streams/crypto-streams",
      zksync: "/data-streams/crypto-streams",
    },
  },
  Functions: {
    learnMoreLink: "chainlink-functions",
    logo: functionsLogo,
    chains: {
      arbitrum: "/chainlink-functions/supported-networks#arbitrum",
      avalanche: "/chainlink-functions/supported-networks#avalanche",
      base: "/chainlink-functions/supported-networks#base",
      celo: "/chainlink-functions/supported-networks#celo",
      ethereum: "/chainlink-functions/supported-networks#ethereum",
      optimism: "/chainlink-functions/supported-networks#optimism",
      polygon: "/chainlink-functions/supported-networks#polygon",
      soneium: "/chainlink-functions/supported-networks#soneium",
    },
  },
  Automation: {
    learnMoreLink: "chainlink-automation",
    logo: automationLogo,
    chains: {
      arbitrum: "/chainlink-automation/overview/supported-networks#arbitrum",
      avalanche: "/chainlink-automation/overview/supported-networks#avalanche",
      base: "/chainlink-automation/overview/supported-networks#base",
      "bnb-chain": "/chainlink-automation/overview/supported-networks#bnb-chain",
      ethereum: "/chainlink-automation/overview/supported-networks#ethereum",
      fantom: "/chainlink-automation/overview/supported-networks#fantom",
      "gnosis-chain": "/chainlink-automation/overview/supported-networks#gnosis",
      optimism: "/chainlink-automation/overview/supported-networks#optimism",
      polygon: "/chainlink-automation/overview/supported-networks#polygon",
      polygonzkevm: "/chainlink-automation/overview/supported-networks#polygon-zkevm",
      scroll: "/chainlink-automation/overview/supported-networks#scroll",
    },
  },
  VRF: {
    learnMoreLink: "vrf",
    logo: vrfLogo,
    chains: {
      arbitrum: "/vrf/v2-5/supported-networks#arbitrum-mainnet",
      avalanche: "/vrf/v2-5/supported-networks#avalanche-mainnet",
      "bnb-chain": "/vrf/v2-5/supported-networks#bnb-chain",
      ethereum: "/vrf/v2-5/supported-networks#ethereum-mainnet",
      fantom: "/vrf/v2/subscription/supported-networks#fantom-mainnet",
      polygon: "/vrf/v2-5/supported-networks#polygon-mainnet",
      base: "/vrf/v2-5/supported-networks#base-mainnet",
      soneium: "/vrf/v2-5/supported-networks#soneium-minato-testnet",
      optimism: "/vrf/v2-5/supported-networks#optimism-mainnet",
    },
  },
  linkTokenContracts: {
    arbitrum: "/resources/link-token-contracts#arbitrum",
    astar: "/resources/link-token-contracts#astar",
    avalanche: "/resources/link-token-contracts#avalanche",
    base: "/resources/link-token-contracts#base",
    "bnb-chain": "/resources/link-token-contracts#bnb-chain",
    blast: "/resources/link-token-contracts#blast",
    celo: "/resources/link-token-contracts#celo",
    ethereum: "/resources/link-token-contracts#ethereum",
    fantom: "/resources/link-token-contracts#fantom",
    "gnosis-chain": "/resources/link-token-contracts#gnosis-chain-xdai",
    hedera: "/resources/link-token-contracts#hedera",
    kroma: "/resources/link-token-contracts#kroma",
    mantle: "/resources/link-token-contracts#mantle",
    linea: "/resources/link-token-contracts#linea",
    metis: "/resources/link-token-contracts#metis",
    mode: "/resources/link-token-contracts#mode",
    moonbeam: "/resources/link-token-contracts#moonbeam",
    moonriver: "/resources/link-token-contracts#moonriver",
    optimism: "/resources/link-token-contracts#optimism",
    polygonzkevm: "/resources/link-token-contracts#polygon-zkevm",
    polygon: "/resources/link-token-contracts#polygon",
    scroll: "/resources/link-token-contracts#scroll",
    solana: "/resources/link-token-contracts#solana",
    soneium: "/resources/link-token-contracts#soneium",
    wemix: "/resources/link-token-contracts#wemix",
    zksync: "/resources/link-token-contracts#zksync",
    zircuit: "/resources/link-token-contracts#zircuit",
    ronin: "/resources/link-token-contracts#ronin",
    bsquared: "/resources/link-token-contracts#bsquared",
    shibarium: "/resources/link-token-contracts#shibarium",
    sonic: "/resources/link-token-contracts#sonic",
    bob: "/resources/link-token-contracts#bob",
    worldchain: "/resources/link-token-contracts#world",
    xlayer: "/resources/link-token-contracts#x-layer",
    ink: "/resources/link-token-contracts#ink",
    corn: "/resources/link-token-contracts#corn",
    bitlayer: "/resources/link-token-contracts#bitlayer",
    hashkey: "/resources/link-token-contracts#hashkey",
    botanix: "/resources/link-token-contracts#botanix",
    sei: "/resources/link-token-contracts#sei",
    monad: "/resources/link-token-contracts#monad",
    treasure: "/resources/link-token-contracts#treasure",
    unichain: "/resources/link-token-contracts#unichain",
    merlin: "/resources/link-token-contracts#merlin",
    fraxtal: "/resources/link-token-contracts#fraxtal",
    lens: "/resources/link-token-contracts#lens",
    berachain: "/resources/link-token-contracts#berachain",
  },
}

export const chainNames: Record<string, string> = {
  aptos: "Aptos",
  arbitrum: "Arbitrum",
  astar: "Astar",
  avalanche: "Avalanche",
  base: "Base",
  berachain: "Berachain",
  "bnb-chain": "BNB Chain",
  celo: "Celo",
  ethereum: "Ethereum",
  fantom: "Fantom",
  "gnosis-chain": "Gnosis Chain",
  hedera: "Hedera",
  kroma: "Kroma",
  linea: "Linea",
  mantle: "Mantle",
  metis: "Metis",
  moonbeam: "Moonbeam",
  moonriver: "Moonriver",
  opbnb: "opBNB",
  optimism: "OP",
  polygonzkevm: "Polygon zkEVM",
  polygon: "Polygon",
  scroll: "Scroll",
  solana: "Solana",
  soneium: "Soneium",
  sonic: "Sonic",
  starknet: "Starknet",
  wemix: "Wemix",
  zksync: "ZKsync",
  mode: "Mode",
  blast: "Blast",
  zircuit: "Zircuit",
  ronin: "Ronin",
  bsquared: "B²",
  shibarium: "Shibarium",
  bob: "Bob",
  worldchain: "World Chain",
  xlayer: "X Layer",
  ink: "Ink",
  corn: "Corn",
  bitlayer: "Bitlayer",
  hashkey: "HashKey Chain",
  botanix: "Botanix",
  sei: "Sei Network",
  core: "Core",
  monad: "Monad",
  treasure: "Treasure",
  lens: "Lens",
  unichain: "Unichain",
  hyperliquid: "Hyperliquid",
  merlin: "Merlin",
  fraxtal: "Fraxtal",
  zeta: "Zeta",
}
