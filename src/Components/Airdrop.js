import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import AirdropMeme from '../images/abstract-shapes-colorful-fluid-liquid-hd-wallpaper-preview.jpg'

function Airdrop() {
  return (
    <div>

        <Container>

            <Stack gap={3} style={{textAlign: `left`}}>

                <div>
                    <h3 style={{fontWeight: 'bold'}}>Airdrop</h3>
                </div>

                <div>
                    <img src={AirdropMeme} className='w-100' alt='airdrop'></img>
                </div>

                <div>
                    <p>Round 1 closed. Please stay tuned on our official handles for more information.</p>
                </div>

            </Stack>

        </Container>

    </div>
  )
}

export default Airdrop