import React from 'react';
import {Container, Row, Col} from "./Grid"


function Contact_Field() {
    return(<div id="contact">
        <Container>
        <Row><p>We would love to hear from you...</p></Row>
          <form className="contact-form s-lg p-c">
            <Row>
              <Col size="md-12">
              <input type="text" placeholder="Your Name" id="contact-name"/>
              </Col>
            </Row>
               <Row>
                 <Col size="md-12">
                 <input type="text" placeholder="Your Email" id="contact-email"/>
                 </Col>
              </Row>
               <Row>
                <Col size="md-9"><input type="text" placeholder="Write your comment here..." id="contact-comment" />
                </Col>
                <Col size="md-3"><input type="submit" id="contact-btn"/>
                </Col>
              </Row>
            </form>
        
        </Container>
        

   </div> )
}

export default Contact_Field;