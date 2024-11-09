import Checkout from './Checkout';
import { useState } from 'react';


export default function Cart({ cartItems = [], removeItem, total , closeCart }) {
    const [openCheckout, setOpenCheckout] = useState(false);
    const open= ()=>{
        setOpenCheckout(true);
    }

    const close= ()=>{
        setOpenCheckout(false);
    }
    

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title.split(" ").slice(0, 2).join(" ")}</p>
                            <span>{item.price}</span>
                            <button onClick={() => removeItem(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty</p>
                )}
            {/* </div>     */}
            <span>total={total}</span>
           <div className="buttons">
            <button onClick={closeCart}>Close</button>
            <button onClick={open}>Checkout</button>
            </div>
            {openCheckout && <Checkout close={close} total={total} />}
        </div> 
    );
}
