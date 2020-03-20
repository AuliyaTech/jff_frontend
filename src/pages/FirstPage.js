import React from "react"
import Header_Banner from "../components/Header_Banner"
import Join_Banner from "../components/Join_Banner"
import MailingList_Banner from "../components/MailingList_Banner"
import Genre_Banner from "../components/Genre_Banner"
import Contact_Field from "../components/Contact_Field"
import Testimonials_Banner from "../components/Testimonial_Banner"

function FirstPage(){
    return(
        <div>
            <Header_Banner />
            <Join_Banner />
            <Genre_Banner />
            <MailingList_Banner />
            <Testimonials_Banner />
            <Contact_Field/>
        </div>
    )

}

export default FirstPage;
