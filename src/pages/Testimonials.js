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

        let display_testimonials; 

        if (this.state.loaded){
            display_testimonials = this.state.testimonials.map(t => {
                if (t.testimonial_type.value[0].name === "video"){
                    return (
                        <Row>
                            <div classname="iframe-container p-c">
                                <iframe width="560" height="315cd " src={t.youtube_url.value} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Row>
                    )
                }
                else if (t.testimonial_type.value[0].name ==="written"){
                    return(
                        <Row>
                            <div key={t.system.id} dangerouslySetInnerHTML={{__html: t.written_testimonial.value}}/>
                        </Row>
                    )
                }
                else if (t.testimonial_type.value[0].name === "screenshot"){
                    return (
                        <Row>
                            <img src={t.screenshot.value[0].asset}/>
                        </Row>
                    )                
                }
            })

        }
        else display_testimonials=<div>...Loading</div>
        



        return(
            <div id="testimonial_banner">
            <Container>
                    {display_testimonials}
            </Container>
            </div>
        )
    }
}

export default Testimonials;