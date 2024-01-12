import ButtonInverse from '../../components/ButtonInverse'
// import ButtonPrimary from '../../components/ButtonPrimary'
// import CardCartItem from '../../components/CartCardItem'
// import CartTotal from '../../components/CartTotal/cartTotal'
import './style.css'

export default function ConfirmationPage() {
    return (
        <>
            <main>
                <section id="confirmation-section" className="dsc-container">
                    <div className="dsc-card dsc-mb20">
                        {/* <CardCartItem />
                        <CardCartItem />
                        <CardCartItem />
                        <CardCartItem />
                        <CartTotal /> */}
                    </div>
                    <div className="dsc-confirmation-message dsc-mb20">
                        Pedido realizado! Número 35
                    </div>
                    <div className="dsc-btn-page-container">
                        <ButtonInverse name='Início'/>
                    </div>
                </section>
            </main>
        </>
    )
}