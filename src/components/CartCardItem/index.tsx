import './style.css'
import imageComputer from '../../assets/img/computer.png'

export default function CardCartItem() {
    return (
        <div className="dsc-cart-item-container dsc-line-bottom">
            <div className="dsc-cart-item-left">
                <img src={imageComputer} alt="Computador" />
                <div className="dsc-cart-item-description">
                    <h3>Computador Gamer XT</h3>
                    <div className="dsc-cart-item-quantity-container">
                        <div className="dsc-cart-item-quantity-btn">-</div>
                        <p>1</p>
                        <div className="dsc-cart-item-quantity-btn">+</div>
                    </div>
                </div>
            </div>
            <div className="dsc-cart-item-right">
                R$ 5000,00
            </div>
        </div>
    )
}