import { useState } from 'react'
import './style.css'
import * as cartService from "../../services/cart-service"
import { OrderDTO } from '../../models/order'
import { Link } from 'react-router-dom'
// import imgComputer from '../../assets/img/computer.png'

export default function CartPage() {

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart())

    function handleClearCart() {
        cartService.clearCart()
        setCart(cartService.getCart())
    }

    function handleIncreaseItem(productId: number) {
        cartService.increaseItem(productId)
        setCart(cartService.getCart())
    }

    function handleDecreaseItem(productId: number) {
        cartService.decreaseItem(productId)
        setCart(cartService.getCart())
    }

    return (
        <main>
            <section id="cart-container-section" className="dsc-container">
                {
                    cart.items.length === 0 ?
                        (
                            <div className='message-cart'>
                                <h2>Seu carrinho está vazio</h2>
                            </div>
                        )
                        :
                        (
                            <div className="dsc-card dsc-mb20">
                                {
                                    cart.items.map(item => (
                                        <div className="dsc-cart-item-container dsc-line-bottom" key={item.productId}>
                                            <div className="dsc-cart-item-left">
                                                <img src={item.imgUrl} alt={item.name} />
                                                <div className="dsc-cart-item-description">
                                                    <h3>{item.name}</h3>
                                                    <div className="dsc-cart-item-quantity-container">
                                                        <div onClick={() => handleDecreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">-</div>
                                                        <p>{item.quantity}</p>
                                                        <div onClick={() => handleIncreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">+</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dsc-cart-item-right">
                                                R$ {item.subTotal.toFixed(2)}
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="dsc-cart-total-container">
                                    <h3>R$ {cart.total.toFixed(2)}</h3>
                                </div>
                            </div>
                        )
                }

                <div className="dsc-btn-page-container">
                    <div className="dsc-btn dsc-btn-blue">
                        Finalizar pedido
                    </div>
                    <Link to="/">
                        <div className="dsc-btn dsc-btn-white">
                            Continuar comprando
                        </div>
                    </Link>
                    {
                        cart.items.length === 0
                            ?
                            <div></div>
                            :
                            <div onClick={handleClearCart} className="dsc-btn dsc-btn-white">
                                Limpar carrinho
                            </div>
                    }
                </div>
            </section>
        </main>
    )
}