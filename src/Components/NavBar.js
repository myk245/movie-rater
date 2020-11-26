import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form, FormControl } from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button';

const NavBar = () => {
   return (
      <Container>
         <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#home">Movie Rater</Navbar.Brand>
            <Nav className="mr-auto">
               <Nav.Link href="#">Favorites</Nav.Link>
               <Nav.Link href="#">Movies</Nav.Link>
            </Nav>
            <Form inline>
               <FormControl type="text" placeholder="Search" className="mr-sm-2" />
               <Button variant="outline-info">Search</Button>
            </Form>
         </Navbar>
      </Container>
   )
}

export default NavBar; 