import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form, FormControl } from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button';

class NavBar extends React.Component {
   state = {
      input: ""
   }

   handleChange = (event) => {
      console.log(event.target.value)
      this.setState({
         input: event.target.value
       })
   }   

   render() {
      return(
         <Container>
            <Navbar expand="lg" variant="light" bg="light">
               <Navbar.Brand href="#home">Movie Rater</Navbar.Brand>
               <Nav className="mr-auto">
                  <Nav.Link href="#">Favorites</Nav.Link>
                  <Nav.Link href="#">Movies</Nav.Link>
               </Nav>
               <Form inline>
                  <FormControl type="text" placeholder="Search"
                  onChange={this.handleChange} className="mr-sm-2" />
                  <Button variant="outline-info">Search Movies</Button>
               </Form>
            </Navbar>
         </Container>
      )  
   }
}

export default NavBar; 