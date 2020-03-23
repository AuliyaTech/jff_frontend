import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import {Container, Row, Col} from "./Grid"
import emailjs from 'emailjs-com';

class ContactUs extends Component {
  constructor(props){
    super(props);

    this.state={
        status: null
    }
}

  sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('jjfsquad_gmail_com', 'jiajamfit', e.target, 'user_OELfxfrUXstpXtD3RJaG0')
      .then((result) => {
          this.setState({ status: 200 })
      }, (error) => {
          console.log(error.text);
      });

      // this.setState({status: x})
  }
  render(){
    return (
      <div className="contact-form">
        <Container>
          <Row>
            <h1 className="page-title">We'd Love to Hear from You..</h1>
          </Row>

          <Form onSubmit={() => this.sendEmail()}>

            <Form.Group as={Row} controlId="formPlaintextFName">
              <Form.Label column md={2} xs={12}>
                <div className="know-input">First Name:</div>
              </Form.Label>
              <Col size="8">
                <Form.Control name="user_name"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column md={2} xs={12}>
              <div className="know-input">Email:</div>
              </Form.Label>
              <Col size="8">
                <Form.Control name="user_email"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column md={2} xs={12}>
              <div className="know-input">Message:</div>
              </Form.Label>
              <Col size="8">
                <Form.Control as="textarea" rows={3} name="message"/>
              </Col>
            </Form.Group>

            <Button variant="light" type="submit" className="float-right mr-5">
              Submit
            </Button> 
            
          </Form>
        </Container>
      
      </div>
    );
  }

}
 
// }

export default ContactUs;