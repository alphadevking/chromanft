import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavArea from './Components/NavArea';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { Web3ReactProvider } from '@web3-react/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { ethers } from 'ethers';
import Routes from 'routes'; // your custom Routes.js file


const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};


function App() {
  return (
    <div>
      
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <NavArea/>
        <Content/>
        <Footer/>
      </Router>
    </Web3ReactProvider>
    
    </div>
  );
}

export default App;
