"use client";

import { Offcanvas } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import { isMobile } from "react-device-detect";

export const NavBar = () => {

  const showSidebar = isMobile ? false : true;

  const [show, setShow] = useState(showSidebar);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  return (
    <Navbar expand={false} className="bg-body-tertiary  mb-3">
      <Container fluid className="mx-2">     
        <Navbar.Toggle aria-controls={`offcanvasNavbar-false-${false}`} className="d-block d-md-none" onClick={handleShow}/>        
        <Navbar.Offcanvas
          id={`offcanvasNavbar-false-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-false-${false}`}
          placement="start"          
          show={show}
          scroll={true}
          backdrop={isMobile ? true : false}
          onHide={handleClose}
        >
          <Sidebar />
        </Navbar.Offcanvas> 
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
