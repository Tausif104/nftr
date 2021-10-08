import { Navbar, Container, Nav, Image } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <Image src='./img/logo.png' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Link href='/' className='text-white'>
                HOME
              </Nav.Link>
              <Nav.Link href='/doc' className='text-white'>
                Doc
              </Nav.Link>
              <Nav.Link href='/stake' className='text-white'>
                STAKE
              </Nav.Link>
              <Nav.Link href='/community' className='text-white'>
                COMMUNITY
              </Nav.Link>
              <Nav.Link href='/blog' className='text-white'>
                BLOG
              </Nav.Link>
            </Nav>
            <div className='text-end'>
              <a href='/' className='primary-btn'>
                Launch app
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
