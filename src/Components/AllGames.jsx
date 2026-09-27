import { SlidersHorizontal } from 'lucide-react'
import '../AllGames.css'

export default function AllGames() {
    return (
        <div className="game-shop">
            <section className="shop-header">
                <div className="shop-into">
                    <div className="eyebrow">GAMEVAULT // CATALOG</div>
                    <h1>FIND YOUR NEXT <em>ADVENTURE.</em></h1>
                    <div className="shop-subtitle">New releases, old favorites, and games worth playing.</div>
                </div>

                <div className="shop-meta">
                    <div className="count">08 games</div>
                    <button className='filter-btn'>
                        <SlidersHorizontal className='filter-icon'/>
                        <div>FILTER</div>
                    </button>
                </div>
            </section>

            <section className='catalog'>
                <div className="catalog-header">
                    <div>All Games</div>
                    <div>Browse the vault</div>
                </div>
            </section>

        </div>
    )
}