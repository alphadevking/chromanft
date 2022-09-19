import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiMenuAltRight, BiWallet } from "react-icons/bi";
import chroma_logo from '../images/chroma.png'
import { TiAdjustBrightness } from 'react-icons/ti'

import ConnectButton from './WalletConnection'

function NavArea() {
  return (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow' fixed='top'>
  <Container fluid>
    <Navbar.Brand href="#home" className='text-dark'><img src={chroma_logo} alt='' width='30' className='m-1'/><b>Chroma NFT</b></Navbar.Brand>
    
    <div className='d-flex'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0 shadow-lg'><BiMenuAltRight/></Navbar.Toggle>
    </div>

    <Navbar.Collapse id="responsive-navbar-nav" className=''>
      <Nav className="me-auto">
        <Nav.Link className='text-dark'></Nav.Link>
      </Nav>
      <button className='p-2 border-0 glass rounded-5' style={{fontSize: '20px', float: 'right'}}><TiAdjustBrightness className='d-flex'/></button>
      <button onClick={() => ConnectButton()} className='border-0 btn-normal rounded-2 p-2 m-1'><BiWallet className='mb-1' style={{fontSize: '20px'}}/><span id='walletStatus'>Connect Wallet</span></button>
    </Navbar.Collapse>
    
  </Container>
  
</Navbar>
);
}

export default NavArea