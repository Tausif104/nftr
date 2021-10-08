import { Container, Row, Col, Image } from "react-bootstrap";
const Banner = () => {
  return (
    <>
      <section className='banner h-100'>
        <div className='banner-shapes'>
          <Image
            className='banner-shape-left banner-shape position-absolute'
            src='./img/banner-shape-left.png'
          />
          <Image
            className='banner-shape-right banner-shape position-absolute'
            src='./img/banner-shape-right.png'
          />
        </div>
        <Container className='h-100'>
          <Row className='align-items-center h-100'>
            <Col lg={12}>
              <div className='banner-text text-center'>
                <h1 className='text-green'>
                  THE DECENTRALIZED <span className='text-pink'>NFT</span>
                  <span className='text-white'>NAME</span>
                  <span className='text-pink'>R</span>egistry
                </h1>
                <Image src='./img/ranger.png' />
                <p className='text-blue'>GIVE YOUR NFT A UNIQUE NAME</p>
                <div className='banner-button-group'>
                  <a href='' className='primary-button'>
                    BROWSE NFTS
                  </a>
                  <a href='' className='primary-button'>
                    NAME YOUR NFT
                  </a>
                  <a href='' className='primary-button'>
                    DOCUMENTATION
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
