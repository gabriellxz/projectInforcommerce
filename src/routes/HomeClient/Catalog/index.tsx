import './style.css'
import SearchBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'
import { Outlet } from 'react-router-dom'
import { ProductsDTO } from '../../../models/product'
import { useState, useEffect } from 'react'
//import axios from 'axios'
import * as productService from '../../../services/product-service'
// import { CategoryDTO } from '../../../models/category'
//import imageCart from '../../assets/img/cart.svg'



export default function Catalog() {

    const [products, setProducts] = useState<ProductsDTO[]>([])

    const [productName, setProductName] = useState("")

    // const obj : CategoryDTO = {
    //     id: 8,
    //     name: "Jardinagem"
    // }

    useEffect(() => {

        //localStorage.setItem("categories", JSON.stringify(obj))
        // const obj = JSON.parse(localStorage.getItem("categories") || "{}")
        // console.log(obj.name)

        productService.findAll(0, productName)
            .then(response => {
                console.log(response.data.content)
                setProducts(response.data.content)
            })  
    }, [productName])

    function handleSearch(searchText:string) {
        setProductName(searchText)
    }
    

    return (
        <>
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar onSearch={handleSearch}/>

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