import { Link } from "react-router"
import { ArrowRight, Radio } from "lucide-react"

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-copy">
                <div className="eyebrow">Enter the vault</div>
                <h1>Play beyond <em>the signal</em></h1>
                <div className="hero-desc">A hand-picked archive of worlds worth getting lost in. Find your next obsession, then disappear into it.</div>
                <div className="hero-btn-container">
                    <Link to="all-games" className="hero-btn">
                        <div>Browse the vault</div>
                        <ArrowRight className="arrow-right" />
                    </Link>
                </div>
                <div className="hero-meta">
                    <Radio className="radio-icon"/>
                    <div>6,921 players online</div>
                </div>
            </div>

            <div className="hero-art">
                <img src="public/hero-art.avif" alt="" />
                <div className="hud-top">
                    <div>SECTOR 7</div>
                    <div>48.8584° N</div>
                </div>
                <div className="hud-bottom">
                    <div><span className="pulse"></span> LIVE FEED</div>
                    <div>NOCTURNE / 2049</div>
                </div>
                <div className="hero-crosshair"></div>
            </div>
        </section>
    )
}