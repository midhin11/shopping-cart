import { ArrowLeft, ArrowRight, Radio } from "lucide-react"
import "../Cart.css"
import { Link } from "react-router"

export default function Cart() {
    return (
        <div className="cart-page">
            <section className="cart-header">
                <div>
                    <div className="eyebrow">GAMEVAULT // CART</div>
                    <h1 className="cart-h1">YOUR <em>CART.</em></h1>
                    <div className="cart-subtitle">Review your games before checkout.</div>
                </div>
                <Link to="all-games" className="continue-btn">
                    <ArrowLeft className="arrow-left"/>
                    <div>Continue Shopping</div>
                </Link>
            </section>

            <section className="empty-cart">
                <div className="empty-icon">
                    <Radio />
                </div>
                <div className="empty-eyebrow">NO GAMES YET</div>
                <h2 className="empty-h2">YOUR CART IS EMPTY.</h2>
                <p>Add some games to get started.</p>
                <Link to="all-games" className="empty-btn-container">
                    <button className="empty-btn">
                        <div>Browse Games</div>
                        <ArrowRight className="arrow-right"/>
                    </button>
                </Link>
            </section>
        </div>
    )
}