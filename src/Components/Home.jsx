import { Link } from "react-router";
import { ArrowRight, Radio } from "lucide-react";

export default function Home() {
    return (
        <div className="hero">
            <div className="hero-copy">
                <div className="eyebrow">Enter the vault</div>
                <h1>Play beyond <em>the signal</em></h1>
                <div className="hero-desc">A hand-picked archive of worlds worth getting lost in. Find your next obsession, then disappear into it.</div>
                <Link to="all-games" className="hero-btn">
                    <div>Browse the vault</div>
                    <ArrowRight className="arrow-right" />
                </Link>
                <div className="hero-meta">
                    <Radio className="radio-icon"/>
                    <div>6,921 players online</div>
                </div>
            </div>
        </div>
    )
}