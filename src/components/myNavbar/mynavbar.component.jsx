import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LOGO from '../../assets/icons/LOGO1.png';
import './mynavbar.styles.css';
const MyNavbar = () => {

    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md"  variant="dark" className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home"><img className="logo" src={LOGO} alt='my logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Experiene">Experiene</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                       
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </>
        
        
        )

}
export default MyNavbar;