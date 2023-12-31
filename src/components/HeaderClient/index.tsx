import './styles.css'
import imageCart from '../../assets/img/cart.svg'
import { Link } from 'react-router-dom'

export default function HeaderClient() {
    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <Link to="/">
                    <h1>InforCommerce</h1>
                </Link>

                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                            <Link to={"/cart"}>
                                <img src={imageCart} alt="Carrinho de compras" />
                            </Link>
                        </div>
                    </div>
                    <Link to="/login">
                        Entrar
                    </Link>
                </div>
            </nav>
        </header>
    )
}