import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap'
 
class BarraNavegacao extends Component {
    render() {
        return (
            <header>
 <Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#">Springapp</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/usuarios">usuarios</Nav.Link>
    
        </Nav>
  </Navbar> 
            </header>
        );
    }
}

export default BarraNavegacao;