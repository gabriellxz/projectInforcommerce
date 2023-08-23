import './style.css'
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import CardProduct from "../../../components/CardProduct";
//import { ProductsDTO } from '../../../models/product';
import * as productService from '../../../services/product-service'
import { useParams } from 'react-router-dom';
import { ProductsDTO } from '../../../models/product';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductDetails() {

    const params = useParams()

    const [product, setProduct] = useState<ProductsDTO>()

    useEffect(() => {
        /*requisição backend com useEffect */
        axios.get("http://localhost:8080/products/1")
            .then(response => {
                console.log(response)
            })

        /*sem requisição com useEffect*/
        //const prod = productService.findById(Number(params.productId))
        //setProduct(prod)
    },[])
    /*sem useEffect */
    //const product = productService.findById(Number(params.productId))

    return (
        <>
            <main>
                <section id="product-details-section" className="dsc-container">
                    {product  &&
                        <CardProduct product={product} />
                    }
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary name='Comprar' />
                        <ButtonInverse name='Início' />
                    </div>
                </section>
            </main>
        </>
    )
}