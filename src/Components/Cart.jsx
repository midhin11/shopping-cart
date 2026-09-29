import { ArrowLeft, ArrowRight, Radio, Trash2 } from "lucide-react"
import "../Cart.css"
import { Link } from "react-router"
import { useContext } from "react"
import CartContext from "../CartContext";

export default function Cart() {
    const { cartItems, setCartItems, removeCartItems } = useContext(CartContext);
    const cartQuantity = (cartItems.reduce((total, game) => total + game.quantity, 0).toFixed(2))
    const cartPrice = (cartItems.reduce((total, game) => total + (game.price * game.quantity), 0)).toFixed(2)

    return (
        <div className="cart-page">
            <section className="cart-header">
                <div>
                    <div className="eyebrow">GAMEVAULT // CART</div>
                    <h1 className="cart-h1">YOUR <em>CART.</em></h1>
                    <div className="cart-subtitle">Review your games before checkout.</div>
                </div>
                <Link to="/all-games" className="continue-btn">
                    <ArrowLeft className="arrow-left"/>
                    <div>Continue Shopping</div>
                </Link>
            </section>

            {cartItems.length === 0 ? <section className="empty-cart">
                <div className="empty-icon">
                    <Radio />
                </div>
                <div className="empty-eyebrow">NO GAMES YET</div>
                <h2 className="empty-h2">YOUR CART IS EMPTY.</h2>
                <p>Add some games to get started.</p>
                <Link to="/all-games" className="empty-btn-container">
                    <button className="empty-btn">
                        <div>Browse Games</div>
                        <ArrowRight className="arrow-right"/>
                    </button>
                </Link>
            </section>
            
            : <section className="cart-layout">
                <div className="cart-items">                    
                    {cartItems.map(game => (
                        <div className="cart-item">
                            <div className="item-res">
                                <div className="item-thumb">
                                    <img src={game.image} alt="" />
                                </div>
                                <div className="item-details">
                                    <div className="product-category">{game.genre}</div>
                                    <div>{game.name }</div>
                                    <div className="item-price">{game.price} each</div>
                                </div>
                            </div>
                            <div className="item-actions">
                                <div>{game.quantity}</div>
                                <div className="total-price">${(game.quantity * game.price).toFixed(2)}</div>
                                <button 
                                className="trash-btn"
                                onClick={() => removeCartItems(game.id)}>
                                    <Trash2 className="cart-trash"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="summary">
                    <p className="summary-header">Order summary</p>
                    <div className="summary-row">
                        <div>Items</div>
                        <div>{cartQuantity}</div>
                    </div>
                    <div className="summary-row">
                        <div>Subtotal</div>
                        <div className="val">${cartPrice}</div>
                    </div>
                    <div className="summary-row">
                        <div>Shipping</div>
                        <div className="val">Free</div>
                    </div>
                    <div className="summary-total">
                        <div>Total</div>
                        <div>${cartPrice}</div>
                    </div>
                    <button className="checkout-btn" onClick={() => setCartItems([])}>
                        <div>Checkout</div>
                        <ArrowRight className="arrow-right"/>
                    </button>
                    <div className="summary-note">Instant digital delivery after checkout</div>
                </div>
            </section>
            } 
        </div>
    )
}