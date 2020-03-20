import React from "react"
import API from "../utils/images/API"
import {Row, Col} from "../components/Grid"

function Location(){
    const locations = API.locations;
    const diplay_locations =  locations.map( l => {
        return(
            <Row key={l.id}>
            <Col size="md-6">
            <iframe src={l.google_maps} width="500" height="450" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </Col>
            <Col size="md-6">
                <h1>{l.name}</h1>
                <p>{l.streetname}</p>
                <p>{l.city}</p>
                <p>{l.postal}</p>
            </Col>     
        </Row>
        )
    })
    return (
        <div>
            {diplay_locations}
        </div>
    )
}

export default Location;