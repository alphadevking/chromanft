import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'

function Tokenomics() {
  return (
    <div>

        <Container>

            <Stack gap={4} style={{textAlign: `left`}}>

                <div>
                    <h3 style={{fontWeight: 'bold'}}>Tokenomics</h3>
                </div>

                <div>
                    <ul>

                        <li className='p-2'>Max. Total Supply - 10,000,000,000,000 NFTx</li>

                        <li className='p-2'>Genesis Mint: 1,200,000,000,000 NFTx</li>

                        <li className='p-2'>LP Farming: 1,000,000,000,000 NFTx</li>

                        <li className='p-2'>Airdrop: 14,000,000,000 NFTx</li>

                        <li className='p-2'>Distribution via LP Mining and Staking</li>

                    </ul>
                </div>

            </Stack>

        </Container>

    </div>
  )
}

export default Tokenomics