import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import WebMeme from '../images/metaverse.jpg'

function cNFTUtility() {
  return (
    <div>
        <Container>

            <Stack gap={2}>

                <div>
                    <img src={WebMeme} className='w-100 rounded-5'></img>
                </div>

                <div className='p-3'>
                    <div>
                        <h3 style={{textAlign: `left`, fontWeight: 'bold'}}>The cNFT Utility Token</h3>
                    </div>

                    <div>
                        <p style={{textAlign: `left`}}>
                        Chroma NFT (cNFT) is well positioned to dominate the NFT MetaVerse as a utility token, and the first community-focused multi-chain project on 4 unique blockchains with the same contract address.
                        </p>
                    </div>

                    <div>
                        <p style={{textAlign: `left`}}>
                        cNFT is the governance token for NFT Apocalypse and can only be mined via LP mining (in Farms) and cNFT staking (in STUDIO pools). For fairness considerations, only 1,200,000,000,000 cNFT will be initally minted, hence all investors get an equal chance of getting cNFT. 0.05% of all transaction fee in cNFT Galleria (our own NFT marketplace) will be collected in the cNFT treasury account, which will all be used to buy back cNFT and burn.
                        </p>
                    </div>
                </div>

            </Stack>

        </Container>
    </div>
  )
}

export default cNFTUtility