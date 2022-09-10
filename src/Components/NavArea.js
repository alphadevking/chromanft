import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiMenuAltRight, BiWallet } from "react-icons/bi";
import chroma_logo from '../images/chroma.png'
import { TiAdjustBrightness } from 'react-icons/ti'

function NavArea() {
  return (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow' fixed='top'>
  <Container fluid>
    <Navbar.Brand href="#home"><img src={chroma_logo} width='30' className='m-1'/>Chroma NFT</Navbar.Brand>
    
    <div className='d-flex'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0 shadow-lg'><BiMenuAltRight/></Navbar.Toggle>
    </div>

    <Navbar.Collapse id="responsive-navbar-nav" className=''>
      <Nav className="me-auto">
        <Nav.Link>Hey</Nav.Link>
      </Nav>
      <button className='p-2 border-0 bg-light' style={{fontSize: '20px', float: 'right'}}><TiAdjustBrightness className='d-flex'/></button>
      <button className='border-0 btn-normal rounded-2 p-2'><BiWallet className='mb-1' style={{fontSize: '20px'}}/>Connect Wallet</button>
    </Navbar.Collapse>
    
  </Container>
  
</Navbar>
);
}

export default NavArea