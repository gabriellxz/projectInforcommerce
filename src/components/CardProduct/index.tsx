import './style.css'
import ProductCategory from '../ProductCategory'
import { ProductsDTO } from '../../models/product'

interface ProductProps {
    product: ProductsDTO
}

export default function CardProduct(props: ProductProps) {
    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={props.product.imageUrl} alt={props.product.name} />
            </div>
            <div className="dsc-product-details-bottom">
                <h3>R$ {props.product.price.toFixed(2)}</h3>
                <h4>{props.product.name}</h4>
                <p>
                    {props.product.description}
                </p>
                <div className="dsc-category-container">
                    {
                        props.product.categories.map(item => (
                            <ProductCategory key={item.id} name={item.name}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}