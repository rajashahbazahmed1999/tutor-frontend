import {
CardElement,
useStripe,
useElements
}
from "@stripe/react-stripe-js";


import API from "../api/api";


function Checkout(){

const stripe=useStripe();
const elements=useElements();



const pay=async()=>{


const res =
await API.post(
"/payments/create",
{
amount:50
}
);



const result =
await stripe.confirmCardPayment(

res.data.clientSecret,

{

payment_method:{

card:
elements.getElement(
CardElement
)

}

}

);



if(result.paymentIntent.status==="succeeded"){

alert("Payment Successful");

}

};



return (

<div>

<h2>
Pay $50
</h2>


<CardElement/>


<button onClick={pay}>
Pay Now
</button>


</div>

)

}


export default Checkout;