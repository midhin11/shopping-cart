import { ArrowLeft } from "lucide-react"
import "../Cart.css"

export default function Cart() {
    return (
        <div className="cart-page">
            <section className="cart-header">
                <div>
                    <div className="eyebrow">GAMEVAULT // CART</div>
                    <h1 className="cart-h1">YOUR <em>CART.</em></h1>
                    <div className="cart-subtitle">Review your games before checkout.</div>
                </div>
                <div className="continue-btn">
                    <ArrowLeft className="arrow-left"/>
                    <div>Continue Shopping</div>
                </div>
            </section>

            <section className="empty-cart"></section>
        </div>
    )
}