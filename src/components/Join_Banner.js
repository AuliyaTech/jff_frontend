import React, {Component} from "react"
import {Container, Row, Col} from "./Grid"
import Image from 'react-bootstrap/Image';
import diamonds from "../utils/images/diamonds.png";
import join from "../utils/images/bg_join.png"
import axios from "axios";


class Join_Banner extends Component {

    render(){
    
    return (
        <div id="join_banner">
                 <Container>
            <Row>
                <Col size="md-4">
                    <p className="s-sm, pad-30">A unique ladies only fitness class where you can JAM to your favourite tunes while getting fit! </p>
                </Col>
                <Col size="md-4">
                    <img width="250px" className="pad-20 d-none d-md-block" src={diamonds}/>
                </Col>
                <Col size="md-4">
                    <Image className="s-sm" src={join} fluid />
                </Col>
            </Row>
        </Container>
        </div>
      )
    }
}


export default Join_Banner;
