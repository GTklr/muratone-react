import {NavLink, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthContext } from "../hooks/useAuthContext";
import {useLogout} from '../hooks/useLogout'
import { useState } from 'react';


//styles
import './Navbar.css'


const NavbarOne = () => {

  const {user} = useAuthContext()
  const {logout} = useLogout()
  const [expanded, setExpanded] = useState(false)

    return ( 
      <Navbar fixed="top" expand="lg" className="navbar navbar-dark bg-dark dark" expanded={expanded}>
      <Container fluid>
        <NavLink to="/" className='navbar-brand' onClick={() => setExpanded(false)}>Muratone</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} className="" />
        <Navbar.Collapse className='bg-dark'>
          <Nav className="me-auto">
            <NavLink to="/music" className='nav-item mx-2 py-2' onClick={() => setExpanded(false)}>Music</NavLink>
            <NavLink to="/links" className='nav-item mx-2 py-2' onClick={() => setExpanded(false)}>Links</NavLink>
            {user && (<NavLink to="/link-create" className='nav-item mx-2 py-2' onClick={() => setExpanded(false)}>Create</NavLink>)}
            {user && (<NavLink to="/link-create" className='nav-item mx-2 py-2' onClick={() => setExpanded(false)}>Analytics</NavLink>)}
          </Nav>
          {!user && (<Link to="/login" className="mx-2 text-muted text-decoration-none purplebtn" onClick={() => setExpanded(false)}>login</Link>)}
          {user && (<span className="mx-2 btn btn-sm btn-outline-light" onClick={logout}>logout</span>)}
          <NavLink to="/contact" className='contact-button btn btn-sm btn-success purplebtn my-2' onClick={() => setExpanded(false)}> contact </NavLink>

        </Navbar.Collapse>
      </Container>
    </Navbar>

     );
}
 
export default NavbarOne; 