import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Checkout({close,total}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const checkout = function (e) {
        e.preventDefault();
        if (total === 0)
            toast.warning(`your cart is empty`);  
       else if (name === '' || email === '')
            toast.warning(`fill the required field`);
        else {
            toast.success(`Order Submitted successfully`);
            setTimeout(() => {
                close();
            }, 2000);
        }
    }
    
    return (
       <>
        <div className="checkout">
            <h2>Checkout</h2>    
           <form>
            <label for='name' >Name:</label>
            <input type="text" value={name} id='name'  required onChange={(e)=>setName(e.target.value)} />
             <br/><br/>
            <label for='email'>Email:</label>
            <input type="email" value={email} id='email' required onChange={(e)=>setEmail(e.target.value)} />
             <br/><br/>
                <button type="submit" onClick={checkout}>Order</button>
            </form> 
            
            </div>
            <ToastContainer position="top-right" autoClose={2000} />
            </> 
    )
}