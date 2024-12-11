import { useState,useEffect } from 'react'
import { useFetchProducts } from './products';
import Product from './Product'
import Cart from './Cart'
import './store.css'
import { FaCartShopping } from "react-icons/fa6";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Store() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [openCart, setOpenCart] = useState(false);
    const products = useFetchProducts();
    
    const addItem = (product) => {
        const isExist = cartItems.find(prod => product.id === prod.id);
        if (isExist) {
            toast.info('the item is already added')
        }
        else {
            setCartItems([...cartItems, { ...product }]);
            toast.success('the item is added successfully');
        }
    };

    const removeItem = (product) => {
        setCartItems(cartItems.filter(prod => prod.id !== product.id));
        toast.success('the item is removed successfully');
        
    };

    useEffect(() => {
        const newTotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price.toFixed(2)), 0);
        setTotal(newTotal);
    }, [cartItems]);

    const toggleCart = () => {
        setOpenCart(!openCart);
    }

    const closeCart = () => {
        setOpenCart(false);
    }
 
    return (
        <div className='storeContainer'>
            <div className='header'>
                <h2>welcome</h2>
                <FaCartShopping className='icon' onClick={toggleCart}/>
            </div>
        <div className='container'>
            {products.map(product => (
                <Product key={product.id} product={product} addItem={addItem}  />
            ))}
            </div>
            {openCart &&
                <>
                    <div className="overlay" ></div>
                    <Cart cartItems={cartItems} removeItem={removeItem} total={total} closeCart={closeCart} />
                </>}

            <ToastContainer position="top-right" autoClose={2000} />
         <footer></footer>   
     </div> )
}