import React, { Component } from 'react'
import { Container , Stack} from 'react-bootstrap'
import HeaderCarousel from './HeaderCarousel'
import Intro from './Intro'

class Content extends Component {
  render() {
    return (
      <div>
        <HeaderCarousel/>
        <Container>
            
            <Stack gap={3}>
                <Intro/>
            </Stack>
            
        </Container>
      </div>
    )
  }
}

export default Content