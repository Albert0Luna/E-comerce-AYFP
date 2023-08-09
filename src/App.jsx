/* eslint-disable no-tabs */
import React from 'react'
import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { FiltersProvider } from './context/filter'
import { Cart } from './components/cART.JSX'
import { CartProvider } from './context/cart'
import { Footer } from './components/Footer.jsx'
import { Filter } from './components/Filter.jsx'

export function App () {
  return (
    <FiltersProvider>
      <CartProvider>
      <Cart />
      <Header />
      <Filter />
      <Products />
      <Footer />
      </CartProvider>
    </FiltersProvider>
  )
}
