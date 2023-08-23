import './style.css'
import SearchBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'
import * as productServices from '../../../services/product-service'
import { Outlet } from 'react-router-dom'
//import imageCart from '../../assets/img/cart.svg'



export default function Catalog() {
    return (
        <>
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

                        {
                            productServices.findAll().map((product) => (
                                <CatalogCard key={product.id} product={product}/>
                            ))
                        }

                    </div>

                    <ButtonNextPage />
                </section>
            </main>
            <Outlet/>
        </>
    )
}