import { createContext, useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router';
import { ExternalLink, ShoppingBagIcon } from 'lucide-react';
import './App.css';

const MainSecContext = createContext({
  cartItems: []
})

export default function App() {
  const [cartItems, setCartItems] = useState(0)

  return (<MainSecContext value={{ cartItems, setCartItems }}>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </MainSecContext>)
}


function Header() {

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