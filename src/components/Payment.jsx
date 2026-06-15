import {useState} from "react";
import API from "../api/api";


function Payment(){

const [amount,setAmount]=useState("");


const pay=async()=>{


const res =
await API.post(
"/payments/create",
{
amount
}
);


alert(
"Payment created"
);


console.log(res.data);


}



return(

<div>


<h1>
Payment
</h1>


<input
placeholder="Amount"
onChange={
e=>setAmount(e.target.value)
}
/>


<button
onClick={pay}
>
Pay Now
</button>


</div>

)

}


export default Payment;