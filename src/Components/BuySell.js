import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BiCopy } from 'react-icons/bi';
import CopyAlert from './CopyAlert'

function BuySell() {

    const [modalShow, setModalShow] = React.useState(false);

    const address = '0xda5dea132f9c30f2f6b513266795fec16426c0c6'
    const linkSpookysway = 'https://spookysway.finance'

    const copyAddress = () => {
        
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(address);
      
        /* Alert the copied text */
        setModalShow(true)
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

            <Stack gap={3} style={{textAlign: `left`}}>

                <div>
                    <h3 style={{fontWeight: 'bold'}}>How To Buy/Sell cNFT?</h3>
                </div>

                <div>
                    <ol>
                        <li className='p-2'>Go to your wallet (Trust wallet, metamask etc)</li>
                        <li className='p-2'>Copy the link below and paste in your Dapp</li>

                        <div>
                            <InputGroup className="mb-3 mt-3">

                                <Form.Control className='p-3 shadow glass'
                                value={'' + linkSpookysway} style={{fontSize: `13px`, border:`1px solid black`, cursor: `inherit`}} readOnly={true}/>
                                <button onClick={() => copyLink()} className='border-0 pt-1 bg-light'>
                                    <CopyAlert
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </button>

                            </InputGroup>
                        </div>

                        <li className='p-2'>Click on swap</li>
                        <li className='p-2'>Copy cNFT Contract Address</li>

                        <div>
                            <InputGroup className="mb-3 mt-3">

                                <Form.Control className='p-3 shadow glass'
                                value={'  Address:   ' + address} style={{fontSize: `13px`, border:`1px solid black`, cursor: `inherit`}} readOnly={true}/>
                                <button onClick={() => copyAddress()} className='border-0 bg-light'>
                                    <CopyAlert
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    />
                                </button>

                            </InputGroup>
                        </div>

                        <li className='p-2'>Make sure you are on the Fantom network and have FTM in your wallet</li>
                        <li className='p-2'>Paste cNFT CA and add Token</li>
                        <li className='p-2'>Swap your FTM to cNFT</li>

                    </ol>
                </div>

            </Stack>

        </Container>

    </div>
  )
}

export default BuySell