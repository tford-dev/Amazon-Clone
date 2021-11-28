/* eslint-disable */ 
import React from 'react';
import './Product.css';
import {useStateValue} from "../../StateProvider";

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //uses dispatch method to add item to basket 
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {/*Anon function to display stars*/}
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

            </div>
            <img
                src={image}
                alt={`${title}`}
            />

            <button onClick={addToBasket} className="basket__button">Add to Basket</button>
        </div>
    )
}

export default Product
