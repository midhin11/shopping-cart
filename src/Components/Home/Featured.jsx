import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

export default function Featured() {
    return (
        <section className="featured">
            <div className="eyebrow">Gamevault // LATEST PICKS</div>
            <div className="featured-top">
                <h2>Featured <em>games.</em></h2>
                <Link to="all-games" className="featured-btn">
                    <div>See all games</div> 
                    <ArrowRight className="arrow-right"/>
                </Link>
            </div>
            <div className="featured-grid">
                <Link to="all-games" className="featured-card">
                    <img src="../../../public/dummy1.avif" alt="game-art" className="featured-img" />
                    <div className="featured-card-copy">
                        <div>
                            <p>ACTION . ADVENTURE</p>
                            <h3>Red Dead Redemption</h3>
                        </div>
                        <strong>$29.99</strong>
                    </div>
                </Link>
                <Link to="all-games" className="featured-card">
                    <img src="../../../public/dummy2.jpg" alt="game-art" className="featured-img" />
                    <div className="featured-card-copy">
                        <div>
                            <p>RPG . SHOOTING</p>
                            <h3>Far Cry New Dawn</h3>
                        </div>
                        <strong>$19.99</strong>
                    </div>
                </Link>
                <Link to="all-games" className="featured-card">
                    <img src="../../../public/dummy3.jpg" alt="game-art" className="featured-img" />
                    <div className="featured-card-copy">
                        <div>
                            <p>SCI-FI . STRATEGY</p>
                            <h3>Wildwood</h3>
                        </div>
                        <strong>$14.99</strong>
                    </div>
                </Link>
            </div>
        </section>
    )
}