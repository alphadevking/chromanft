import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'

function Listing() {
  return (
    <div>

        <Container>

            <Stack gap={4} style={{textAlign: `left`}}>

                <div>
                    <h3 style={{fontWeight: 'bold'}}>Listing</h3>
                </div>

                <div>
                    <p>NFT Apocalypse (NFTx) Token is listed on <a className='text-decoration-underline text-white' href='https://spookysway.finance/'>https://spookysway.finance</a>.
                    </p>
                </div>

            </Stack>

        </Container>

    </div>
  )
}

export default Listing