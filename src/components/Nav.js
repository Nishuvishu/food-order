import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function NavComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="font-bold text-2xl text-gray-800">FoodieDelight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#" className="text-gray-800">Home</Nav.Link>
            <Nav.Link href="#" className="text-gray-800">Menu</Nav.Link>
            <Nav.Link href="#" className="text-gray-800">About Us</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" className="text-gray-800">Italian</NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-gray-800">Mexican</NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-gray-800">Chinese</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="text-gray-800">All Categories</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="text-gray-800">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
