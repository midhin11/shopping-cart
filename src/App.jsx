import { useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router';
import { ExternalLink, ShoppingBagIcon } from 'lucide-react';
import './Styles/App.css';
import CartContext from './CartContext.js';

export default function App() {
  const [cartItems, setCartItems] = useState([])
  function removeCartItems(id) {
    let newCartItems = cartItems.filter(item => item.id !== id)
    setCartItems(newCartItems) 
  }

  return (<CartContext value={{ cartItems, setCartItems, removeCartItems }}>
    <Header cartItems={cartItems}/>
    <main>
      <Outlet />
    </main>
    <Footer />
  </CartContext>)
}


function Header({ cartItems }) {
  return (
    <header>
      <Link to="/" className='brand'>
        GameVault
      </Link>

      <nav>
        <NavLink to="/"
          className={({ isActive }) => isActive ? "selected": ""}>
            Discover
        </NavLink>
        <NavLink to="all-games"
          className={({ isActive }) => isActive ? "selected": ""}>
            All games
        </NavLink>
      </nav>

      <NavLink to="cart" 
      className={({ isActive }) => isActive ? "selected cart": "cart"}>
        <ShoppingBagIcon className='cart-icon'/>
        <div className='cart-text'>Cart</div>
        {cartItems.length > 0 && 
          <div className='cart-count'>
            {cartItems.reduce((total, game) => total + game.quantity, 0)}
          </div>
        }
      </NavLink>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p className='footer-brand'>GAMEVAULT.</p>
      <p>© 2026 GameVault Studio</p>
      <div className='info'>
        <a href="https://github.com/midhin11/shopping-cart" target='_blank'>
          <div>Github</div> 
          <ExternalLink className='external'/>
        </a>
        <a href="https://www.linkedin.com/in/midhin-lal/" target='_blank'>
          <div>LinkdIn</div> 
          <ExternalLink className='external'/>
        </a>
      </div>
    </footer>
  )
}