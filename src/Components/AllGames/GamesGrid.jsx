import { Minus, Plus, ShoppingBagIcon } from "lucide-react"

export default function GamesGrid({ games, setGames }) {
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
                        <button className="add-btn">
                            <ShoppingBagIcon className='shop-cart-icon' />
                            <div>Add to Cart</div>
                        </button>
                    </div>
                </article>
            ))}
        </div>
    )
}