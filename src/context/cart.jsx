/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
import { reducer, initialState } from '../reducers/cart.js'

import React, { createContext, useReducer } from 'react'

export const CartConext = createContext()

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const decrement = product => dispatch({
    type: 'DECREMENT',
    payload: product
  })

  const removeToCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  return <CartConext.Provider value={{
    cart: state,
    addToCart,
    decrement,
    removeToCart,
    clearCart
  }}>
		{children}
	</CartConext.Provider>
}
