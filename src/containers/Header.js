import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import "./All.css";

 const Header =(e)=> {
  
    return (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        
  <Navbar.Brand href="/" className="link-navbar" >FakeSHop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  className="link-navbar">
      <Link to="/Data" > Table</Link> </Nav.Link>
      <Nav.Link className="link-navbar">
      <Link to="/Sidebar" > Sidebar</Link> </Nav.Link>
      <Nav.Link className="link-navbar">
      <Link to="/Login" >Login</Link> </Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar></div>
    )
}
export default Header;