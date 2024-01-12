import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './routes/HomeClient/ProductDetails'
import Catalog from './routes/HomeClient/Catalog'
import HomeClient from './routes/HomeClient'
// import AdminForm from './routes/Adminform'
import CartPage from './routes/CartPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeClient />}>
          <Route index element={<Catalog />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='productDetails/:productId' element={<ProductDetails />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
