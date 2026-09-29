import { useEffect, useState } from 'react';
import '../../Styles/AllGames.css'
import ShopHead from './ShopHead';
import GamesGrid from './GamesGrid';

function generatePrice() {
    const prices = [9.99, 14.99, 19.99, 24.99, 29.99, 4.99]
    return prices[Math.floor(Math.random() * prices.length)]
}

export default function AllGames() {

    const [games, setGames] = useState([]   )
    useEffect(() => {
            async function fetchData() {
                const cachedGames = localStorage.getItem('games');
                if (cachedGames) {
                    setGames(JSON.parse(cachedGames));
                    return;
                }

                const response = await fetch('https://api.rawg.io/api/games?key=ee1b550c2217457a8e6f14b7d2aa4b5e&page_size=9&ordering=-added')
                const data = await response.json();

                const gamesList = data.results.map(game => ({
                    name: game.name,
                    image: game.background_image,
                    genre: game.genres.length > 1
                        ? `${game.genres[0].name} . ${game.genres[1].name}`
                        : game.genres[0].name,
                    id: game.id,    
                    price: generatePrice(),
                    quantity: 1,
                }));
                console.log(data)
                localStorage.setItem('games', JSON.stringify(gamesList));
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

                <GamesGrid games={games} setGames={setGames} />
            </section>

        </div>
    )
}