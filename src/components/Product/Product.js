import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    //console.log(props);
    const {img, name, seller, price, stock}= props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name">{name}</h4>
            <br />
            <p><small> Seller: {seller}</small></p>
            <p><small>Price: ${price}</small></p>
            <br />
            <p><small> Only {stock} left in stock. Order it before it goes beyond your reach.</small></p>  
            <button className="main-button"
                onClick={()=> props.handleAddProduct(props.product)}>
                 <FontAwesomeIcon icon={faShoppingCart} /> add to cart </button>
            </div> 
        </div>
    );
};

export default Product;