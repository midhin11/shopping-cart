import { useEffect, useState } from 'react';
import '../AllGames.css'
import ShopHead from './Home/ShopHead';
import { Minus, Plus, ShoppingBagIcon } from 'lucide-react';

function generatePrice() {
    const prices = [9.99, 14.99, 19.99, 24.99, 29.99, 4.99]
    return prices[Math.floor(Math.random() * prices.length)]
}

export default function AllGames() {

    const [games, setGames] = useState([]   )
    useEffect(() => {
            async function fetchData() {
                const response = await fetch('https://api.rawg.io/api/games?key=ee1b550c2217457a8e6f14b7d2aa4b5e&page_size=12&ordering=-added')
                
                const data = await response.json();
                const gamesList = data.results.map(game => ({
                    name: game.name,
                    image: game.background_image,
                    genre: game.genres.length > 1
                        ? `${game.genres[0].name} . ${game.genres[1].name}`
                        : game.genres[0].name,
                    id: game.id,
                    price: generatePrice(),
                }));
                console.log(data)
                setGames(gamesList)
            }
            fetchData()
        }, [])

    return (
        <div className="game-shop">
            <ShopHead games={games}/>
            <section className='catalog'>
                <div className="catalog-header">
                    <div>All Games</div>
                    <div>Browse the vault</div>
                </div>

                <div className="product-grid">
                    {games.map((game, index) => {
                        return (
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
                                        <input type="number" value="1" min="1" max="5"/>
                                        <Plus className='plus'/>
                                    </div>
                                    <button className="add-btn">
                                        <ShoppingBagIcon className='shop-cart-icon' />
                                        <div>Add to Cart</div>
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>

        </div>
    )
}