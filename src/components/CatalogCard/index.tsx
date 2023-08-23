import './style.css'
import { ProductsDTO } from '../../models/product'
import { Link } from 'react-router-dom'

interface CatalogProps {
    product: ProductsDTO
}

export default function CatalogCard(props: CatalogProps) {

    return (
        <Link to={`productDetails/${props.product.id}`}>
            <div className="dsc-card">
                <div className="dsc-catalog-card-top dsc-line-bottom">
                    <img src={props.product.imageUrl} alt={props.product.name} />
                </div>
                <div className="dsc-catalog-card-bottom">
                    <h3>R$ {props.product.price.toFixed(2)}</h3>
                    <h4>
                        {props.product.name}
                    </h4>
                </div>
            </div>
        </Link>
    )
}