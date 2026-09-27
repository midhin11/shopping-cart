import { Minus, Plus, ShoppingBagIcon } from "lucide-react"
import { useContext } from "react"
import { MainSecContext } from "../../App"

export default function GamesGrid({ games, setGames }) {
    const { cartItems, setCartItems } = useContext(MainSecContext)
    console.log(cartItems)

    function addtoCart(game) {
        let isDuplicate = cartItems.some(currGame => currGame.id === game.id)
        if (!isDuplicate) setCartItems(prevGames => [...prevGames, game]);
        else {
            let dupliGame = cartItems.find(currGame => currGame.id === game.id)
            let additional = game.quantity
            setCartItems(prevGames => 
                prevGames.map(g => {
                    if (g.id === dupliGame.id) 
                        return {...g, quantity: g.quantity + additional};
                    else return g;
                })
            )
        }
    }

    return (
        <div className="product-grid">
            {games.map((game, index) => (
                <article key={index} className="product-card">
                    <div className='product-img'>
                        <img src={game?.image} alt="" />
                    </div>
                    <div className="product-info">
                        <div className='product-meta'>
                            <div className="product-category">{game?.genre}</div>
                            <div className="product-price">${game?.price}</div>
                        </div>
                        <div className="product-name">{game?.name}</div>
                    </div>
                    <div className="product-actions">
                        <div className="quantity-ctrl">
                            <Minus className='minus'/>
                            <input 
                                type="number" 
                                value={game?.quantity} 
                                min="1" 
                                max="5"
                                onChange={(e) => {
                                    const newQUantity = Number(e.target.value)
                                    setGames(prevGames => 
                                        prevGames.map(g => 
                                            g.id === game.id ? {...g, quantity: newQUantity} : g
                                        )
                                    )
                                    console.log(game.name + game.quantity)
                                }}
                            />
                            <Plus className='plus'/>
                        </div>
                        <button 
                            className="add-btn"
                            onClick={() => addtoCart(game)}
                        >
                            <ShoppingBagIcon className='shop-cart-icon' />
                            <div>Add to Cart</div>
                        </button>
                    </div>
                </article>
            ))}
        </div>
    )
}