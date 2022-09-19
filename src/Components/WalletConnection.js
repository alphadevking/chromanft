import Web3 from 'web3'

const ConnectButton = async () => {
  //current provider is the provider injected by MetaMask 
  let web3;

  //typeof is used to check if window is defined 
  if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    //Connect metamask to the webapp 
    window.ethereum.request({ method: 'eth_requestAccounts' })
    web3 = new Web3(window.ethereum);
  } else {
    // We are on the server *OR* the user is not running metamask
    // List of our web3 providers
  const providers = [
    new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545')),
    new Web3(new 
    Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org')),
    ];

  }
}
// Starts 
// window.onload = async() => {ConnectButton()}

export default ConnectButton