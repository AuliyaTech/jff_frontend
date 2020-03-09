import React, {Component} from "react"
import {Link} from "react-router-dom"
import client from "../config"
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators"
import {Contianer, Row, Col, Container} from "./Grid"
import Contact_Field from "./Contact_Field";

let unsubscribeSubject = new Subject();

class Testimonial_Banner extends Component {
    constructor(props){
        super(props);

        this.state = {
            loaded: false,
            testimonials: null
        }
    }
    fetchArticles = () => {
        client
        .items()
        .equalsFilter('system.type', 'testimonials')
        .depthParameter(3)
        .toObservable()
        .pipe(takeUntil(unsubscribeSubject))
        .subscribe(res => {
            this.setState({
                loaded: true,
                testimonials: res.items
            })
        })
    }
    
    componentDidMount() {
        this.fetchArticles();
    }
    
    unsubscribe() {
        unsubscribeSubject.next()
        unsubscribeSubject.complete()
    }
    
    componentWillUnmount() {
        this.unsubscribe()
    }
    
    render() {

        let display_testimonials; 

        if (this.state.loaded){
            display_testimonials = this.state.testimonials.map(t => {
                if (t.testimonial_type.value[0].name === "video"){
                    return (
                        <Col size="md-4">
                            <iframe width="80%" height="80%" src={t.youtube_url.value} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                    )
                }
                else if (t.testimonial_type.value[0].name ==="written"){
                    return(
                        <Col size="md-4">
                            <div key={t.system.id} dangerouslySetInnerHTML={{__html: t.written_testimonial.value}}/>
                        </Col>
                    )
                }
                else if (t.testimonial_type.value[0].name === "screenshot"){
                    return (
                        <Col size="md-4">
                            <img src={t.screenshot.value[0].asset}/>
                        </Col>
                    )                
                }
            })

        }
        else display_testimonials=<div>...Loading</div>
        



        return(
            <div id="testimonial_banner">
            <Container>
                <Row>
                    {display_testimonials}
                </Row>
            </Container>
            </div>
        )
    }
}

export default Testimonial_Banner;


