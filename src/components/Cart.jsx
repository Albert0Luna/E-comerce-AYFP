/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
import React, { useContext, useId } from 'react'
import '../styles/Cart.css'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import { CartConext } from '../context/cart'

export const CartItem = ({ thumbnail, title, price, quantity, addToCart, decrement, removeToCart }) => {
  return (
			<li className='item-cart-container'>
				<img src={thumbnail} alt={title} />
				<div className='price-btn'>
					<strong>{title}</strong> - $ {price * quantity}
				</div>
				<footer>
					<button onClick={removeToCart} className='remove-from-cart'>
						<RemoveFromCartIcon />
					</button>
					<button onClick={decrement} className='decrement'>-</button>
					<small>Qty: {quantity}</small>
					<button onClick={addToCart} className='increment'>+</button>
				</footer>
			</li>
  )
}

export function Cart () {
  const { cart, addToCart, decrement, clearCart, removeToCart } = useContext(CartConext)
  const cartID = useId()

  return (
    <>
      <label htmlFor={cartID} className='cart-button'>
				<CartIcon />
				<span className={cart.length ? 'product-count' : 'product-count-hide'}>{cart.length}</span>
			</label>
      <input
				type="checkbox"
				id={cartID}
				hidden
				className='input-hidden'
			/>
			<aside className='cart'>
				<ul>
					{cart.map(product => (
						<CartItem
							key={product.id}
							addToCart={() => addToCart(product)}
							removeToCart={() => removeToCart(product)}
							decrement={() => decrement(product)}
							{...product}
						/>
					))}
				</ul>
				<button className='clear-icon' onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
    </>
  )
}
