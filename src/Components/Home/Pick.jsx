import { Link } from "react-router"
import { ArrowRight, Gamepad2 } from "lucide-react"

export default function Pick() {
    return (
        <section className="pick">
            <div>
                <div className="eyebrow">Your next obsession</div>
                <h2 className="pick-head">Some worlds <em>stay with you.</em></h2>
            </div>
            <div className="pick-note">
                <Gamepad2 className="gamepad"/>
                <div>From quick sessions to late-night adventures, find something that fits your mood.</div>
                <Link to="all-games" className="pick-btn">
                    <div>Browse all games</div>
                    <ArrowRight className="arrow-right" />
                </Link>
            </div>
        </section>
    )
}