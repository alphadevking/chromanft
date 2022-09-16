import { InjectedConnector } from '@web3-react/injected-connector'

// Other possible connectors
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
// import { WalletLinkConnector } from '@web3-react/walletlink-connector';
// import { LedgerConnector } from '@web3-react/ledger-connector';
// import { BscConnector } from '@binance-chain/bsc-connector';

const ConnectButton = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 1337, 5777],
});

// refer to https://github.com/NoahZinsmeister/web3-react 
// for all available connectors

export default ConnectButton