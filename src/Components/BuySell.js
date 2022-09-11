import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiCopy } from 'react-icons/fi';

function BuySell() {

    const address = '0xda5dea132f9c30f2f6b513266795fec16426c0c6'
    const linkSpookysway = 'https://spookysway.finance'

    const copyAddress = () => {
        
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(address);
      
        /* Alert the copied text */
        alert("Copied!    " + address);
      }
      
      const copyLink = () => {
        
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(linkSpookysway);
      
        // /* Alert the copied text */
        // alert("Copied!    " + linkSpookysway);
      }      

  return (
    <div>

        <Container>

            <Stack gap={4} style={{textAlign: `left`}}>

                <div>
                    <h3 style={{fontWeight: 'bold'}}>How To Buy/Sell NFTx?</h3>
                </div>

                <div>
                    <ol>
                        <li className='p-2'>Go to your wallet (Trust wallet, metamask etc)</li>
                        <li className='p-2'>Copy the link below and paste in your Dapp</li>

                        <div>
                            <InputGroup className="mb-3 mt-3">
                            <Form.Control className='text-white border-0 p-3'
                            value={linkSpookysway} style={{fontSize: `15px`, backgroundColor:` #1f2937`}}/>
                            <button onClick={() => copyLink()} className='text-light bg-real-dark rounded-5 border-0 mt-1'><FiCopy className='mb-1' style={{fontSize: `20px`}}/></button>

                            </InputGroup>
                        </div>

                        <li className='p-2'>Click on swap</li>
                        <li className='p-2'>Copy NFTx Contract Address</li>

                        <div>
                            <InputGroup className="mb-3 mt-3">
                            <Form.Control className='text-white border-0 p-3'
                            value={address} style={{fontSize: `15px`, backgroundColor:` #1f2937`}}/>
                            <button onClick={() => copyAddress()} className='text-light bg-real-dark rounded-5 border-0 mt-1'><FiCopy className='mb-1' style={{fontSize: `20px`}}/></button>

                            </InputGroup>
                        </div>

                        <li className='p-2'>Make sure you are on the Fantom network and have FTM in your wallet</li>
                        <li className='p-2'>Paste NFTx CA and add Token</li>
                        <li className='p-2'>Swap your FTM to NFTx</li>

                    </ol>
                </div>

            </Stack>

        </Container>

    </div>
  )
}

export default BuySell