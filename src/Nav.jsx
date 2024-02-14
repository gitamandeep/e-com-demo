import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function Nav(prop){
return(
<Navbar className="bg-body-tertiary" style={{ marginBottom: '1%' }}>
<Container>
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Brand href="/cart">Cart({0+prop.totalItems})</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      LOGOUT : <a href="/login">kminchelle</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Container>
</Navbar>
);
}
export default Nav;