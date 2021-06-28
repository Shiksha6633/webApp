import React, { useRef,useEffect } from 'react';
import Data from "./Data";


const PaypalGateway = (props) => {
const paypal = useRef();

useEffect(() => {
   window.paypal.Buttons({
     createOrder: (data,action,err)=>{
         return action.order.create({
             intent: "CAPTURE",
             purchase_units: [
                 {
                     description: "Cool tshirt",
                     amount: {
                         currency_code: "INR",
                         value: 500.00
                     }
                 }
             ]
         })
     },
     onApprove: async (data,actions)=>{
         const order = await actions.order.capture()
         console.log(order);
     },
     onError:(err)=>{
        console.log(err);

     }
   }).render(paypal.current )
}, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PaypalGateway;
