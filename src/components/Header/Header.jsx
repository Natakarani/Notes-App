import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <Navbar expand="lg" className="p-3 shadow" style={{background:'brown'}}>
      <Container>
        <Navbar.Brand href="#home" className='fs-3 text-white fw-bold'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='fs-5 text-white'>Home</Nav.Link>
            <Nav.Link href="/create/notes" className='fs-5 text-white'>Create Notes</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;