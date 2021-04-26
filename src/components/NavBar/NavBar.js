

import React from 'react';
// import './NavBar.css'
import { Navbar, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'




function NavBar() {
    return (
        <div className="c-navbar">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link to="/">Hollywood App</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/actors">Actor</Link></Nav.Link>
                    <Nav.Link><Link to="/movies">Movies</Link></Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;