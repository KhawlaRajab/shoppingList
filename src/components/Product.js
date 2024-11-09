import './store.css'

export default function Product({ product, addItem }) {
    return (
        <div className="product" >
            <img src={product.image} alt={product.title} />
            <h3>{product.title.split(" ").slice(0,5).join(" ")}</h3>
            <p>{product.description.split(" ").slice(0,17).join(" ")}</p>
            <span>{product.price.toFixed(2)}$</span>
            <button onClick={()=>addItem(product)}>addToCart</button>
        </div>
    )
}