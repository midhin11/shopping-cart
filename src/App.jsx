import { createContext, useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router';
import { ExternalLink, ShoppingBagIcon } from 'lucide-react';
import './App.css';

export const MainSecContext = createContext({
  cartItems: []
})

export default function App() {
  const [cartItems, setCartItems] = useState([])
  function removeCartItems(id) {
    let newCartItems = cartItems.filter(item => item.id !== id)
    setCartItems(newCartItems) 
  }

  return (<MainSecContext value={{ cartItems, setCartItems, removeCartItems }}>
    <Header cartItems={cartItems}/>
    <main>
      <Outlet />
    </main>
    <Footer />
  </MainSecContext>)
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
        <a href="https://github.com/midhin11/memory-card">
          <div>Github</div> 
          <ExternalLink className='external'/>
        </a>
        <a href="https://www.linkedin.com/in/midhin-lal/">
          <div>LinkdIn</div> 
          <ExternalLink className='external'/>
        </a>
      </div>
    </footer>
  )
}