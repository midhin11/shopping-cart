import { SlidersHorizontal } from "lucide-react"

export default function ShopHead({ games }) {
    return (
        <section className="shop-header">
                <div className="shop-into">
                    <div className="eyebrow">GAMEVAULT // CATALOG</div>
                    <h1>FIND YOUR NEXT <em>ADVENTURE.</em></h1>
                    <div className="shop-subtitle">New releases, old favorites, and games worth playing.</div>
                </div>

                <div className="shop-meta">
                    <div className="count">{games.length} games</div>
                    <button className='filter-btn'>
                        <SlidersHorizontal className='filter-icon'/>
                        <div>FILTER</div>
                    </button>
                </div>
            </section>
    )
}