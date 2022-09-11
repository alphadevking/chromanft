import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BiCopy } from 'react-icons/bi';
import { Button, Alert } from 'react-bootstrap';
import CopyAlert from './CopyAlert';

function SmartContractAddress() {

    const [modalShow, setModalShow] = React.useState(false);

    const address = '0xda5dea132f9c30f2f6b513266795fec16426c0c6'

    const copyAddress = () => {
        
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(address);
      
        /* Alert the copied text */
        setModalShow(true)
      }   

  return (
    <div className='mb-3'>

      <CopyAlert
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        <Container>

            <Stack gap={3} style={{textAlign: `left`}}>

                <div>
                    <h3 style={{fontWeight: 'bold'}}>Smart Contract Address</h3>
                </div>

                <div>
                    <p>We are a revolutionary project already existing on four(4) Blockchains with the same smart contract address.</p>

                    <InputGroup className="mb-3 mt-3">

                        <Form.Control className='p-3 shadow glass'
                        value={'  Address:   ' + address} style={{fontSize: `13px`, border:`1px solid black`, cursor: `inherit`}} readOnly={true}/>
                        <button onClick={() => copyAddress()} className='border-0 pt-1 bg-light'><BiCopy className='mb-1' style={{fontSize: `20px`}}/></button>

                    </InputGroup>

                </div>

                <div>
                    <button className='p-3 rounded-3 btn-normal-outline'>
                        View on Binance Smart Chain
                    </button>
                </div>

                <div>
                    <button className='p-3 rounded-3 btn-normal-outline'>
                        View on Huobi Blockchain
                    </button>
                </div>

                <div>
                    <button className='p-3 rounded-3 btn-normal-outline'>
                        View on xDai MainNet
                    </button>
                </div>

                <div>
                    <button className='p-3 rounded-3 btn-normal-outline'>
                        View on Fantom Opera(FTM)
                    </button>
                </div>


            </Stack>

        </Container>

    </div>
  )
}

export default SmartContractAddress