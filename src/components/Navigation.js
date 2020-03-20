import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import img from "../utils/images/logo.png"
import {Container} from "./Grid"

const Navigation = () =>{
    return(
        <div className="navigation-bar">
              <Navbar bg="light" expand="lg">
              <Navbar.Brand href="../"><img
                                src={img}
                                width="80"
                                className="d-inline-block align-top logo"
                                alt="logo"
                            />
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse>
                      <Nav className="mx-auto">
                          <Nav.Link className="pad-20" href="/about">ABOUT</Nav.Link>
                          <Nav.Link className="pad-20" href="/testimonials">TESTIMONIALS</Nav.Link>
                          <Nav.Link className="pad-20" href="/locations">LOCATION</Nav.Link>
                          <Nav.Link className="pad-20" href="/contacts">CONTACT</Nav.Link>
                          
                      </Nav>
                  </Navbar.Collapse>
            </Navbar>
        </div>
    )

}
export default Navigation;