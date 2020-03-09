import React from 'react';
import {Container, Row} from "./Grid";
import img from "../utils/images/dancegirl.png"


function Header_Banner() {
    return(
        <div id="header_banner">
            <Container>
                <Row>
                    <div className="header-img-container">
                        <img className="s-lg p-c" src={img}/>
                    </div>
                </Row>
            </Container>

        </div>

    )
}

export default Header_Banner;