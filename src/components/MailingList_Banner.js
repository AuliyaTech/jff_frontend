import React, {Component} from "react"
import {Container, Row, Col} from "./Grid"
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import img from "../utils/images/bg_know.png"
import API from "../utils/images/API"
// import axios from 'axios';

class MailingList_Banner extends Component {

    constructor(){
        super();
        this.state= {
            firstName: '',
            email: ''
        }
    }

    onChange = e =>{
        e.persist();
        // console.log(e);
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        // console.log(this.state)
    }

    handleSubmit = e => {
        e.persist();
        // console.log(this.state)
        API.MailChimpSignUp(this.state).then(res => console.log(res))
    }

   

    render(){
      
    return (
        <div id="mailinglist_banner">
           
      <Container>   
<Row>
    <Col size="md-6">
    <Image className="pad-20" src={img} fluid />
    </Col>
    <Col size="md-6">
        <div className="mailingform">
        <Row>
            <Col size="md-3">Name:</Col>
            <Col size="md-6">
            <Form.Control type="firstName" placeholder="Enter name" />
            </Col>
        </Row>
        <Row>
        <Col size="md-3">Email:</Col>
        <Col size="md-6">
        <Form.Control type="email" placeholder="Enter email" />
        </Col>
        </Row>
        </div>
    </Col>
</Row>
</Container>  
        </div>
    
    )
    }
}

export default MailingList_Banner;