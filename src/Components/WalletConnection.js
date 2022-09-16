import React from 'react'
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

  // Selects the first web3 provider available from our list
  const providerSelector = async () => {
    let selectedProvider = null;
    for (let i = 0; i < providers.length; i++) {
        await providers[i].eth.getBlockNumber()
            .then(() => { selectedProvider = providers[i] })
            .catch(() => { console.log(`Provider ${i} not available`) });
        if (selectedProvider) {
            web3 = selectedProvider;
            return true;
        };
    };
    return false;
  };

  const main = async () => {
    // Example (here we can put any query, transaction, etc)
    web3.eth.getBlockNumber()
      .then(() => { 
          // Do our stuff
      })
      .catch(async (err) => {
          // If current provider is not available, try another one from the list
          const res = JSON.stringify(err, Object.getOwnPropertyNames(err));
          if (res.includes('Invalid JSON RPC response'))
            (await providerSelector()) ? main() : console.log('No providers available');
      });
  };

  main();

  } 

}

export default ConnectButton