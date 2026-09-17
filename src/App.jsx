import { createContext, useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router';
import { ShoppingBagIcon } from 'lucide-react';
import './App.css'

const MainSecContext = createContext({
  mainSec: "home",
  handleMainSec: () => {},
})

export default function App() {
  const [mainSec, setMainSec] = useState("home") 
  function handleMainSec(e) {
    if(e.target.value === "Discover" || e.target.value === "GameVault") {
      setMainSec("home")
    }
    if(e.target.value === "All Games") {
      setMainSec("all-games")
    }
  }

  return (<MainSecContext value={{mainSec, handleMainSec}}>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </MainSecContext>)
}


function Header() {
  // const {mainSec} = useContext(MainSecContext)

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
      <p>GAMEVAULT.</p>
      <p>Curated worlds for your next great session.</p>
      <p>© 2024 GameVault Studio</p>
    </footer>
  )
}