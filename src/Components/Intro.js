import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import IntroMeme from '../images/The-Metaverse.png'

function Intro() {
  return (
    <div className='pt-1'>

        <Container>

            <Stack gap={3}>

                <div>
                    <h3 style={{textAlign: `left`, fontWeight: 'bold'}}>Introduction</h3>
                </div>

                <div>
                    <img src={IntroMeme} className='w-100'></img>
                </div>

                <div>
                    <p style={{textAlign: `left`}}>The Chroma NFT DAO would connect augmented reality(AR/VR) with Decentralized Finance (DeFi) and Non-Fungible Tokens (NFTs) across multiple blockchains while rewarding holders and creators.</p>
                </div>

                <div>
                    <p style={{textAlign: `left`}}>
                    Chroma NFT is the first MultiChain NFT MetaVerse platform adding value to both holders and digital creators. Don't miss!!!
                    </p>
                </div>

            </Stack>

        </Container>

    </div>
  )
}

export default Intro