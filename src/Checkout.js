import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
import Subtotal from './Subtotal'
import CurrencyFormat from 'react-currency-format'


function Checkout() {
    const[{basket},dispatch]=useStateValue();
    return (
        <div className="checkout">
        <div className="checkout__left">
        <img
            className="checkout__ad"
            alt=""
            src="https://dsn0yv0bfu3gb.cloudfront.net/wp-content/uploads/2017/12/Checkout-Banner-2.jpg" 
            />

            {
            basket?.length===0?(
                <div>
                    <h2>    your shopping basket is empty. </h2>
                    <p>To shop please click "addToBasket" next to item</p>
                    </div>
            ):(
                <div>
                <h2 className="checkout__title" >    your shopping basket lists</h2>
                {/* lst out all of the check out product */}
                {basket.map(item=>(
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}                        
                    />
                ))}
                
                    </div> 
            )}
        </div>
                    {
                        basket.length>0 &&(
                            <div className="checkout__right">
                                <Subtotal />
                            </div>

                        )
                    }
            
        </div>
    )
}

export default Checkout
