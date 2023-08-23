import ButtonInverse from '../../components/ButtonInverse'
import ButtonPrimary from '../../components/ButtonPrimary'
import CardCartItem from '../../components/CartCardItem'
import CartTotal from '../../components/CartTotal/cartTotal'
import HeaderClient from '../../components/HeaderClient'
import './style.css'

export default function CartPage() {
    return (
        <>
            <HeaderClient/>
            <main>
                <section id="cart-container-section" className="dsc-container">
                    <div className="dsc-card dsc-mb20">
                        <CardCartItem />
                        <CardCartItem />
                        <CardCartItem />
                        <CardCartItem />
                        <CartTotal/>
                    </div>
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary name="Finalizar pedido"/>
                        <ButtonInverse name="Continuar comprando"/>
                    </div>
                </section>
            </main>
        </>
    )
}