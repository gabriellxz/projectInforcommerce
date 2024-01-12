import './style.css'
import HeaderAdmin from "../../components/HeaderAdmin"
// import SearchBar from '../../components/SearchBar'
import TheadAdmin from '../../components/TheadAdmin'
import TrAdmin from '../../components/TrAdmin'
import ButtonNextPage from '../../components/ButtonNextPage'
import ButtonInverse from '../../components/ButtonInverse'

export default function AdminListing() {
    return (
        <>
            <HeaderAdmin />
            <main>
                <section id="product-listing-section" className="dsc-container">
                    <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

                    <div className="dsc-btn-page-container dsc-mb20">
                        <ButtonInverse name='Novo' />
                    </div>

                    {/* <SearchBar/> */}
                    <form className="dsc-search-bar">
                        <button type="submit">🔎︎</button>
                        <input type="text" placeholder="Nome do produto"/>
                        <button>❌</button>
                    </form>

                    <table className="dsc-table dsc-mb20 dsc-mt20">
                        <TheadAdmin />
                        <tbody>
                            <TrAdmin />
                        </tbody>
                    </table>

                    <ButtonNextPage />
                </section>
            </main>
        </>
    )
}