import axios from "axios";

export default {
    MailChimpSignUp: function(data){
        return axios.post("/mailchimp/signup", data);
    },
    locations: [{
        id: 1,
        google_maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.8376944299184!2d-79.78042798458979!3d43.63073696190115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6b86633b2bc9%3A0xbb3c2ca1be39ea0f!2sAuliya!5e0!3m2!1sen!2sca!4v1584635060481!5m2!1sen!2sca", 
        name: "Auliya Academy", 
        streetname: "44 Sky Harbour Dr",
        city: "Brampton, ON, Canada",
        postal: "L6Y 0V7"
    },{
        id: 2,
        google_maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.0366038690677!2d-79.73455218459053!3d43.605779463513976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b40258f8dbd01%3A0xbfcdbac740a056fb!2s1705%20Argentia%20Rd%2C%20Mississauga%2C%20ON%20L5N%203A9!5e0!3m2!1sen!2sca!4v1581471641069!5m2!1sen!2sca",
        name: "Cave Rock Climbing", 
        streetname: "1705 Argentia Rd. Unit 5",
        city: "Mississauga, ON, Canada",
        postal: "L5N 3A9"
    },{
        id: 3,
        google_maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.1128283904754!2d-79.89636938459354!3d43.49998177034297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6543262b98c9%3A0x400cfacd87a947ff!2sSherwood%20Community%20Centre%20and%20Library!5e0!3m2!1sen!2sca!4v1581472083674!5m2!1sen!2sca", 
        name: "Sherwood Community Center and Library", 
        streetname: "6355 Main St. W",
        city: "Milton, ON, Canada",
        postal: "L9T 2Y1"
    }]
}