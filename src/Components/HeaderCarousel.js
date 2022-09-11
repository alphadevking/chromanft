import Carousel from 'react-bootstrap/Carousel';
import FirstSlide from '../images/man-wearing-smart-glasses-touching-virtual-screen.jpg'
import SecondSlide from '../images/vr-future-egamers.jpg'
import ThirdSlide from '../images/The-Metaverse.png'

function HeaderCarousel() {
  return (
    <div className='mt-5 pt-3 mb-3'>
      <Carousel fade>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={FirstSlide}
            alt="First slide"
            style={{height:'55vw'}}
          />
          <div className='text-dark card-img-overlay container align-items-center d-flex w-75'>
            <div style={{float: `left`}}>
            <h4>Chroma NFT</h4>
            <p>The marketplace for NFTs and MetaChain Tokens</p>
            </div>
          </div>

        </Carousel.Item>

        {/* <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={SecondSlide}
            alt="Second slide"
            style={{height:'55vw'}}
          />

          <Carousel.Caption>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={ThirdSlide}
            alt="Third slide"
            style={{height:'55vw'}}        
          />

          <Carousel.Caption>
          </Carousel.Caption>

        </Carousel.Item> */}

      </Carousel>
    </div>
  );
}

export default HeaderCarousel;