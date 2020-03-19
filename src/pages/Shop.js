import React, {useState, useRef, useEffect} from "react";
import logo_img from "../utils/images/logo.png";

function Shop () {

    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);

    let paypalRef = useRef();

    const product = {
        price: 0.01,
        description: "8 weeks fitness membership",
        img: logo_img
    }

    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=AVdY_YLZXBMb0FEIR-_3C5W9geW_90ntD3csk9RlRf5LnRcWLo4Key2K9hr9hS_JUM5Q49L9Bmpplyxk";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
        if (loaded){
            setTimeout(()=>{
                window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                description: product.description,
                                amount: {
                                    currency_code: "CAD",
                                    value: product.price
                                }
                            }]
                        });
                    },
                    onApprove: async (data, actions) =>{
                        const order = await actions.order.capture();
                        setPaidFor(true);
                        console.log(order)
                    }
                }).render(paypalRef);
            })
        }


    });

    return(
        <div id="shop">
            {/* Code Lives Here */}
            {
                paidFor ? (
                    <div>
                        <h1>Thanks for joining the squad!</h1>
                    </div>
                ):(
                    <div>
                        <h1>{product.description} for ${product.price}</h1>
                        <div ref={v => (paypalRef = v)} />
                    </div>
                )
            }
        </div>
    )
}

export default Shop;