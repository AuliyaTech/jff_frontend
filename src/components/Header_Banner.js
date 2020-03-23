import React from 'react';
import {Container, Row} from "./Grid";
import Image from 'react-bootstrap/Image';
import img from "../utils/images/dancegirl.png"


function Header_Banner() {
    return(
        <div id="header_banner">
            <Container>
                <Row>
              <div className="header-img-container">
                <Image className="s-lg" src={img} fluid />
                </div>
                </Row>
            </Container>

        </div>

    )
}

export default Header_Banner;