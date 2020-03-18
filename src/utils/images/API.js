import axios from "axios";

export default {
    MailChimpSignUp: function(data){
        return axios.post("/mailchimp/signup", data);
    }
}