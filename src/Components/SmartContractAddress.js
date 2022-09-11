import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiCopy } from 'react-icons/fi';
import { Button, Alert } from 'react-bootstrap';

function SmartContractAddress() {

    const address = '0xda5dea132f9c30f2f6b513266795fec16426c0c6'

    const copyAddress = () => {
        
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(address);
      
        /* Alert the copied text */
        alert("Copied!    " + address);
      }   

  return (
    <div>

        <Container>

            <Stack gap={4} style={{textAlign: `left`}}>

                <div>
                    <h3 style={{fontWeight: 'bold'}}>Smart Contract Address</h3>
                </div>

                <div>
                    <p>We are a revolutionary project already existing on four(4) Blockchains with the same smart contract address.</p>

                    <InputGroup className="mb-3 mt-3">

                        <Form.Control className='text-white border-0 p-3'
                        value={'  Address:   ' + address} style={{fontSize: `15px`, backgroundColor:` #1f2937`}}/>
                        <button onClick={() => copyAddress()} className='text-light bg-real-dark rounded-5 border-0 mt-1'><FiCopy className='mb-1' style={{fontSize: `20px`}}/></button>

                    </InputGroup>

                </div>

                <div>
                    <button className='p-3 rounded-3 btn-normal'>
                        View on Binance Smart Chain
                    </button>
                </div>

                <div>
                    <button className='p-3 rounded-3 btn-normal'>
                        View on Huobi Blockchain
                    </button>
                </div>

                <div>
                    <button className='p-3 rounded-3 btn-normal'>
                        View on xDai MainNet
                    </button>
                </div>

                <div>
                    <button className='p-3 rounded-3 btn-normal'>
                        View on Fantom Opera(FTM)
                    </button>
                </div>


            </Stack>

        </Container>

    </div>
  )
}

export default SmartContractAddress