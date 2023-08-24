import './style.css'
import SearchBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'
import { Outlet } from 'react-router-dom'
import { ProductsDTO } from '../../../models/product'
import { useState, useEffect } from 'react'
//import axios from 'axios'
import * as productService from '../../../services/product-service'
//import imageCart from '../../assets/img/cart.svg'



export default function Catalog() {

    const [products, setProducts] = useState<ProductsDTO[]>([])

    useEffect(() => {
        productService.findAll()
            .then(response => {
                console.log(response.data.content)
                setProducts(response.data.content)
            })
    }, [])

    return (
        <>
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

                        {
                            products.map((product) => (
                                <CatalogCard key={product.id} product={product} />
                            ))
                        }

                    </div>

                    <ButtonNextPage />
                </section>
            </main>
            <Outlet />
        </>
    )
}