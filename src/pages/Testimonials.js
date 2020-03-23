import React, {Component} from "react"
import {Link} from "react-router-dom"
import client from "../config"
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators"
import {Contianer, Row, Col, Container} from "../components/Grid"


let unsubscribeSubject = new Subject();

class Testimonials extends Component {
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
        console.log(this.state.testimonials)

        let display_testimonials; 

        if (this.state.loaded){
            display_testimonials = this.state.testimonials.map(t => {
                if (t.testimonial_type.value[0].name === "video"){
                    return (
                            <Col size="md-12">
                                <div className="test-card">
                                    <p> Here's what {t.name.value} says</p>
                                <iframe width="80%" height="400" src={t.youtube_url.value} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <br/>
                            </Col>
                    )
                }
                else if (t.testimonial_type.value[0].name ==="written"){
                    return(
                        <Col size="md-12">
                            <div className="test-card" key={t.system.id} dangerouslySetInnerHTML={{__html: t.written_testimonial.value}}/>
                        </Col>
                    )
                }
                else if (t.testimonial_type.value[0].name === "screenshot"){
                    return (
                        <Col size="md-12">
                            <img className="test-card" src={t.screenshot.value[0].asset}/>
                        </Col>
                    )                
                }
            })

        }
        else display_testimonials=<div>...Loading</div>
        



        return(
            <Container>
                <h1 className="page-title">From Our Squad...</h1>
                <div id="testimonials">
                    <Row>
                        {display_testimonials}
                    </Row>
                    </div>
            </Container>
        )
    }
}

export default Testimonials;