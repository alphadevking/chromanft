import React, { Component } from 'react'
import { Container , Stack} from 'react-bootstrap'
import HeaderCarousel from './HeaderCarousel'
import Intro from './Intro'
import NFTUtility from './NFTUtility'
import SmartContractAddress from './SmartContractAddress'
import Tokenomics from './Tokenomics'
import Airdrop from './Airdrop'
import Listing from './Listing'
import BuySell from './BuySell'

class Content extends Component {
  render() {
    return (
      <div>
        <HeaderCarousel/>
        <Container>
            
            <Stack gap={3}>
                <div>
                  <Intro />
                </div>

                <Stack>

                  <div className='d-sm-flex'>
                    <NFTUtility />
                    <Tokenomics />
                  </div>
                  
                </Stack>

                <SmartContractAddress />
                <Airdrop />
                <Listing />
                <BuySell />
            </Stack>
            
        </Container>
      </div>
    )
  }
}

export default Content