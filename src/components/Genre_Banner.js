import React from "react";
import {Container} from "./Grid"
import Image from 'react-bootstrap/Image';
import img from "../utils/images/genre.png"
import Contact_Field from "./Contact_Field";

const Genre_Banner = () => {
    return(
        <div id="genre_banner" className="pad-30">
                <Image className="s-lg" src={img} fluid />
        
        </div>
    )

}
export default Genre_Banner;