import './style.css'
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import CardProduct from "../../../components/CardProduct";
//import { ProductsDTO } from '../../../models/product';
import * as productService from '../../../services/product-service'
import * as cartService from '../../../services/cart-service'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsDTO } from '../../../models/product';
import { useEffect, useState } from 'react';
//import axios from 'axios';

export default function ProductDetails() {

    const params = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState<ProductsDTO>()

    useEffect(() => {
        /*requisição backend com useEffect */
        productService.findById(Number(params.productId))
            .then(response => {
                console.log(response.data)
                setProduct(response.data)
            }).catch(error => {
                navigate('*')
                console.log(error.response.data.error)
            })

        /*sem requisição com useEffect*/
        //const prod = productService.findById(Number(params.productId))
        //setProduct(prod)
    }, [])
    /*sem useEffect */
    //const product = productService.findById(Number(params.productId))

    function handleClickBuy() {
        if (product) {
            cartService.addProduct(product)
            navigate("/cart")
        }
    }

    return (
        <>
            <main>
                <section id="product-details-section" className="dsc-container">
                    {product &&
                        <CardProduct product={product} />
                    }
                    <div className="dsc-btn-page-container">
                        <div onClick={handleClickBuy}>
                            <ButtonPrimary name='Comprar' />
                        </div>
                        <ButtonInverse name='Início' />
                    </div>
                </section>
            </main>
        </>
    )
}