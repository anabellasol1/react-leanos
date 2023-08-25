import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from './componentes/NavBar.jsx'
import { ItemDetailContainer } from './componentes/ItemDetailContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
   {/*  <Route path="/category/:id" element={<> <Nav /> <ItemListContainer/> </>} /> */}
    <Route path="/item/:id" element={<> <NavBar /> <ItemDetailContainer/> </>} />
    </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
)
