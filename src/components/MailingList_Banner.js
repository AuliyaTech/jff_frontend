import React, {Component} from "react"
import {Container, Row, Col} from "./Grid"
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
                        <img className="s-md" src={img}/>
                    </Col>
                    <Col size="md-6">
                        <form className="s-md">
                            <input type="text" name="firstName"  onChange={this.onChange} placeholder="Your Name" />
                            <input type="text" name="email"  onChange={this.onChange} placeholder="Your Email" />
                        </form>
                        <button type="submit" onClick={this.handleSubmit} value="Submit">Submit</button>
                    </Col>
                </Row>
            </Container>
        </div>
    
    )
    }
}

export default MailingList_Banner;