import { Link } from "react-router";
import { ArrowRight, Radio, Crosshair, Headphones, Trophy, Gamepad2 } from "lucide-react";
import { useEffect, useState } from "react";

// NEW RELEASE // NIGHT DRIVE

// The city is yours after dark.
// Neon streets. No final destination. Meet the latest drop in the vault.

let sliderDetails = [
    {
        eyebrow: "NEW RELEASE // NIGHT DRIVE",
        header: "The city is yours after dark.",
        desc: "Neon streets. No final destination. Meet the latest drop in the vault.",
    },
    {
        eyebrow: "WEEKEND EVENT // COMMUNITY PICKS",
        header: "Your next world is waiting.",
        desc: "Discover hand-picked adventures for your next night in.",
    },
    {
        eyebrow: "VAULT UPDATE // WILDWOOD",
        header: "Find your way into the wild.",
        desc: "A new open-world adventure is ready when you are.",
    }
]

export default function Home() {
    const [slider, setSlider] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setSlider(previousSlider => {
                if (previousSlider === 2) return 0
                else return previousSlider + 1
            })
        }, 4000)

        return () => {clearInterval(interval)}
    }, [])

    return (
        <div className="home">
            <section className="slider">
                <div className="slider-eyebrow">{sliderDetails[slider].eyebrow}</div>
                <div className="slider-header">{sliderDetails[slider].header}</div>
                <div className="slider-desc">{sliderDetails[slider].desc}</div>
            </section>

            <section className="hero">
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

            <section className="principles">
                <div className="principle">
                    <Crosshair className="principle-icon"/>
                    <div>
                        <div className="principle-head">Find your next world</div>
                        <div>Curated releases, cult classics, and strange new places to explore.</div>
                    </div>
                </div>
                <div className="principle">
                    <Headphones className="principle-icon"/>
                    <div>
                        <div className="principle-head">Play your way</div>
                        <div>Digital adventures for console, PC, and wherever you play.</div>
                    </div>
                </div>
                <div className="principle">
                    <Trophy className="principle-icon"/>
                    <div>
                        <div className="principle-head">Worth the hype</div>
                        <div>The games people are still talking about after the credits roll.</div>
                    </div>
                </div>
            </section>

            <section className="featured">
                <div className="eyebrow">Vault access // latest</div>
                <div className="featured-top">
                    <h2>Featured <em>signals.</em></h2>
                    <Link to="all-games" className="featured-btn">
                        <div>Open the full vault</div> 
                        <ArrowRight className="arrow-right"/>
                    </Link>
                </div>
                <div className="featured-grid">
                    <Link to="all-games" className="featured-card">
                        <img src="public/dummy1.avif" alt="game-art" className="featured-img" />
                        <div className="featured-card-copy">
                            <div>
                                <p>ACTION . ADVENTURE</p>
                                <h3>Red Dead Redemption</h3>
                            </div>
                            <strong>$29.99</strong>
                        </div>
                    </Link>
                    <Link to="all-games" className="featured-card">
                        <img src="public/dummy2.jpg" alt="game-art" className="featured-img" />
                        <div className="featured-card-copy">
                            <div>
                                <p>RPG . SHOOTING</p>
                                <h3>Far Cry New Dawn</h3>
                            </div>
                            <strong>$29.99</strong>
                        </div>
                    </Link>
                    <Link to="all-games" className="featured-card">
                        <img src="public/dummy3.jpg" alt="game-art" className="featured-img" />
                        <div className="featured-card-copy">
                            <div>
                                <p>SCI-FI . STRATEGY</p>
                                <h3>Wildwood</h3>
                            </div>
                            <strong>$29.99</strong>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="pick">
                <div>
                    <div className="eyebrow">Your next obsession</div>
                    <h2 className="pick-head">Some worlds <em>stay with you.</em></h2>
                </div>
                <div className="pick-note">
                    <Gamepad2 className="gamepad"/>
                    <div>From late-night co-op to five-minute escapes, the best game is the one that meets you where you are.</div>
                    <Link to="all-games" className="pick-btn">
                        <div>Browse the Vault</div>
                        <ArrowRight className="arrow-right" />
                    </Link>
                </div>
            </section>
        </div>
    )
}