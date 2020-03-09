import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import img from "../utils/images/logo.png"
import {Container} from "./Grid"

const Navigation = () =>{
    return(
        <div className="navigation-bar">
              <Navbar>
                  <Navbar.Collapse>
                      <Nav className="mx-auto">
                          <Nav.Link href="/about">ABOUT</Nav.Link>
                          <Nav.Link href="/testimonials">TESTIMONIALS</Nav.Link>
                          <Nav.Link href="/">
                            <img
                                src={img}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                          </Nav.Link>
                          <Nav.Link href="/locations">LOCATION</Nav.Link>
                          <Nav.Link href="/contacts">CONTACT</Nav.Link>
                          <Nav.Link href="/shop">SHOP</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
            </Navbar>
        </div>
    )

}
export default Navigation;