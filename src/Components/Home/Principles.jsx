import { Crosshair, Headphones, Trophy } from "lucide-react"

export default function Principles() {
    return (
        <section className="principles">
            <div className="principle">
                <Crosshair className="principle-icon"/>
                <div>
                    <div className="principle-head">Find your next game</div>
                    <div>Brand new releases, old favorites, and plenty of worlds to explore.</div>
                </div>
            </div>
            <div className="principle">
                <Headphones className="principle-icon"/>
                <div>
                    <div className="principle-head">Play your way</div>
                    <div>Pick up something for PC, console, or wherever you like to play.</div>
                </div>
            </div>
            <div className="principle">
                <Trophy className="principle-icon"/>
                <div>
                    <div className="principle-head">Worth the hype</div>
                    <div>Games people are still talking about long after they've finished them.</div>
                </div>
            </div>
        </section>
    )
}