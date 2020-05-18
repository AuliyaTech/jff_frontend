import React from "react"
import { Container, Row, Col } from "../components/Grid"
import Image from "../utils/images/logo.png"

function About(){
    return(
        <Container>
            <h2 className="page-title">About Jia</h2>
            <div id="about">
            <Row> 
                <Col size="md-4">
                    <img className="image" src={Image} />
                </Col>
                <Col size="md-8">
                    <p>
Cupcake ipsum dolor. Sit amet jelly-o sweet icing wafer jelly beans oat cake sesame snaps. Jelly icing chocolate cake croissant gingerbread sesame snaps pastry tootsie roll. Donut marzipan gummies macaroon candy canes dragée. Powder tootsie roll jelly marshmallow bear claw cheesecake. Cotton candy cupcake cookie lollipop brownie biscuit. Chupa chups sweet sweet cake. Dragée dessert ice cream lemon drops tootsie roll. Sweet cake chocolate bar. Sweet jelly-o cheesecake wafer. Macaroon candy topping cupcake marzipan croissant cheesecake toffee. Cookie cake cake biscuit croissant chocolate jujubes sesame snaps soufflé. Liquorice fruitcake jelly liquorice liquorice.</p>
                </Col>
            </Row>
        </div>
            
        </Container>
        
        
    )

}

export default About;