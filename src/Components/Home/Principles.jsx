import { Crosshair, Headphones, Trophy } from "lucide-react"

export default function Principles() {
    return (
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
    )
}