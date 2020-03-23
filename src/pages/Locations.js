import React from "react"
import API from "../utils/images/API"
import {Container, Row, Col} from "../components/Grid"

function Location(){
    const locations = API.locations;
    const diplay_locations =  locations.map( l => {
        return(
            <Col size="md-4">
                <div>
                <iframe src={l.google_maps} width="100%" height="300" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                <h1>{l.name}</h1>
                <p>{l.streetname}</p>
                <p>{l.city}</p>
                <p>{l.postal}</p>
                </div>
            </Col>    
        )
    })
    return (
        <Container>
            <h2 className="page-title">Our Locations...</h2>
            <div id="locations">
                <Row>
                    {diplay_locations}
                </Row>
            </div>
            
        </Container>
    )
}

export default Location;