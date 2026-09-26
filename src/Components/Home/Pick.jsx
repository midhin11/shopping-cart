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
                <div>From late-night co-op to five-minute escapes, the best game is the one that meets you where you are.</div>
                <Link to="all-games" className="pick-btn">
                    <div>Browse the Vault</div>
                    <ArrowRight className="arrow-right" />
                </Link>
            </div>
        </section>
    )
}