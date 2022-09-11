import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Stack from 'react-bootstrap/esm/Stack'
import WebMeme from '../Images/nftx-web-meme-2.jpg'

function NFTxUtility() {
  return (
    <div>
        <Container>

            <Stack gap={4}>

                <div>
                    <h3 style={{textAlign: `left`, fontWeight: 'bold'}}>The NFTx Utility Token</h3>
                </div>

                <div>
                    <img src={WebMeme} className='w-100'></img>
                </div>

                <div>
                    <p style={{textAlign: `left`}}>
                    NFT Apocalypse (NFTx) is well positioned to dominate the NFT MetaVerse as a utility token, and the first community-focused multi-chain project on 4 unique blockchains with the same contract address.
                    </p>
                </div>

                <div>
                    <p style={{textAlign: `left`}}>
                    NFTx is the governance token for NFT Apocalypse and can only be mined via LP mining (in Farms) and NFTx staking (in STUDIO pools). For fairness considerations, only 1,200,000,000,000 NFTx will be initally minted, hence all investors get an equal chance of getting NFTx. 0.05% of all transaction fee in NFTx Galleria (our own NFT marketplace) will be collected in the NFTx treasury account, which will all be used to buy back NFTx and burn.
                    </p>
                </div>

            </Stack>

        </Container>
    </div>
  )
}

export default NFTxUtility