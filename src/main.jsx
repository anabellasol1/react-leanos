import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './componentes/NavBar.jsx'
import { ItemDetailContainer } from './componentes/ItemDetailContainer.jsx'
import { ItemListContainer } from './componentes/ItemListContainer.jsx'
import { CartProvider } from './context/CartContex.jsx'
import { Cart } from './componentes/Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/category/:id" element={<> <NavBar /> <ItemListContainer /> </>} />
          <Route path="/item/:id" element={<> <NavBar /> <ItemDetailContainer /> </>} />
          <Route path="/cart" element={<> <NavBar /> <Cart /> </>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
