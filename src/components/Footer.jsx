import React, { useContext } from 'react'
import { CartConext } from '../context/cart'
import '../styles/Footer.css'

export function Footer () {
  const { cart } = useContext(CartConext)

  return (
        <footer className="footer">
            {
                JSON.stringify(cart, null, 0)
            }
        </footer>
  )
}
