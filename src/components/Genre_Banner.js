import React from "react";
import {Container} from "./Grid"
import img from "../utils/images/genre.png"
import Contact_Field from "./Contact_Field";

const Genre_Banner = () => {
    return(
        <div id="genre_banner">
            <Container>
                <img className="s-lg" src={img} />
            </Container>
        </div>
    )

}
export default Genre_Banner;