/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-tabs */
import React, { useContext } from 'react'
import '../styles/Products.css'
import { products as initialPorducts } from '../mocks/allProducts.json'
import { useFilters } from '../hooks/useFilters'
import { AddToCartIcon } from './Icons'
import { CartConext } from '../context/cart'

export function Products () {
	const { filterProducts } = useFilters()

	const { addToCart, cart, removeToCart } = useContext(CartConext)

	const checkProductInCart = product => {
		return cart.some(item => item.id === product.id)
	}

	const filteredProducts = filterProducts(initialPorducts)
  return (
		<main>
			<ul className='products-container'>
				{
					filteredProducts.map(product => {
						const isProductInCart = checkProductInCart(product)
					return (
						<li key={product.id} className='product-item'>
							<img
										src={product.thumbnail}
										alt={product.title}
										className='product-img'/>
							<p className='product-title'>{product.title}  </p>
							<p className='product-price'>Price: ${product.price}</p>
							<button
								className={isProductInCart ? 'productInCart' : 'notProductInCart'}
								onClick={() => { isProductInCart ? removeToCart(product) : addToCart(product) }}
							>
								<AddToCartIcon />
							</button>
						</li>
				)
					})
				}
			</ul>
		</main>
  )
}
