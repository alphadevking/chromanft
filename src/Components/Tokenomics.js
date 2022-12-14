import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import EthToken from '../images/photo-1617396900799-f4ec2b43c7ae.jpg'

function Tokenomics() {
  return (
    <div>

        <Container>

            <Stack gap={2} style={{textAlign: `left`}}>

                <div>
                    <img src={EthToken} className='w-100 rounded-5' alt='ethtoken'/>
                </div>

                <div className='p-3'>
                    <div>
                        <h3 style={{fontWeight: 'bold'}}>Tokenomics</h3>
                    </div>

                    <div>
                        <ul>

                            <li className='p-2'>Max. Total Supply - 10,000,000,000,000 cNFT</li>

                            <li className='p-2'>Genesis Mint: 1,200,000,000,000 cNFT</li>

                            <li className='p-2'>LP Farming: 1,000,000,000,000 cNFT</li>

                            <li className='p-2'>Airdrop: 14,000,000,000 cNFT</li>

                            <li className='p-2'>Distribution via LP Mining and Staking</li>

                        </ul>
                    </div>
                </div>

            </Stack>

        </Container>

    </div>
  )
}

export default Tokenomics