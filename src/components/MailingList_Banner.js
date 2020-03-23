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
        <Col size="6">
        <Image className="s-lg p-c" src={img} fluid />
        </Col>
        <Col size="6" className="pad-10">
            
<Form>
  <Form.Group as={Row} controlId="formPlaintextFName">
    <Form.Label column md={3} xs={12}>
      <div className="know-input">First Name:</div>
    </Form.Label>
    <Col size="8">
      <Form.Control/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column md={3} xs={12}>
    <div className="know-input">Email:</div>
    </Form.Label>
    <Col size="8">
      <Form.Control/>
    </Col>
  </Form.Group>
</Form>
</Col>
</Row>
</Container>  
</div>
    
    )
    }
}

export default MailingList_Banner;