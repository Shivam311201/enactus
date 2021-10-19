import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar } from "react-bootstrap";
function MyNav(){
return (<Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#7B7979"}}>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="nav_link" href="#">HOME</Nav.Link>
      <Nav.Link className="nav_link" href="#">PROJECTS</Nav.Link>
      <Nav.Link className="nav_link" href="#">EVENTS</Nav.Link>
      <Nav.Link className="nav_link" href="#">CAMPAIGNS</Nav.Link>
      <Nav.Link className="nav_link" href="#">ABOUT US</Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>);
}
export default MyNav;