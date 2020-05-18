import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import {Container, Row, Col} from "./Grid"
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}


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
  }


  render(){

    let displayContactForm;

    if (this.status){
      displayContactForm = <h2> Your Message Was Sent! </h2>
    }
    else{
      displayContactForm = <div>
        <Container>
          <Row>
            <h1 className="page-title">We'd Love to Hear from You..</h1>
          </Row>

          <Form onSubmit={(e) => this.sendEmail(e)} >

          <Form.Group as={Row} controlId="formPlaintextFName">
              <Form.Label column md={2} xs={12}>
                <div className="know-input">First Name:</div>
              </Form.Label>
              <Col size="10">
                <Form.Control name="user_name"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column md={2} xs={12}>
              <div className="know-input">Email:</div>
              </Form.Label>
              <Col size="10">
                <Form.Control name="user_email"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column md={2} xs={12}>
              <div className="know-input">Message:</div>
              </Form.Label>
              <Col size="10">
                <Form.Control as="textarea" rows={3} name="message"/>
              </Col>
            </Form.Group>

            <ReCAPTCHA sitekey="6LfLg_cUAAAAALEwJ_qahVo3QSdD-eqcBMp6SSuc" onChange={onChange} />

            <input className="float-right circle-btn" type="submit" value="Submit" />

          </Form>
          </Container>
      </div>
    }

    return (
      <div className="contact-form">
        {displayContactForm}
        {/* <Container>
          <Row>
            <h1 className="page-title">We'd Love to Hear from You..</h1>
          </Row>

          <Form onSubmit={(e) => this.sendEmail(e)} >

          <Form.Group as={Row} controlId="formPlaintextFName">
              <Form.Label column md={2} xs={12}>
                <div className="know-input">First Name:</div>
              </Form.Label>
              <Col size="10">
                <Form.Control name="user_name"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column md={2} xs={12}>
              <div className="know-input">Email:</div>
              </Form.Label>
              <Col size="10">
                <Form.Control name="user_email"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column md={2} xs={12}>
              <div className="know-input">Message:</div>
              </Form.Label>
              <Col size="10">
                <Form.Control as="textarea" rows={3} name="message"/>
              </Col>
            </Form.Group>

            <ReCAPTCHA sitekey="6LfLg_cUAAAAALEwJ_qahVo3QSdD-eqcBMp6SSuc" onChange={onChange} />

            <input className="float-right circle-btn" type="submit" value="Submit" />

          </Form>

        </Container> */}
      
      </div>
    );
  }

}
 
// }

export default ContactUs;