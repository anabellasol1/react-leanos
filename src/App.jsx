import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from '../src/componentes/NavBar'
import { Greeting } from './componentes/Greeting'
import {ItemListContainer} from './componentes/ItemListContainer'
import { ItemDetailContainer } from './componentes/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <NavBar />
    <Greeting texto="Bienvenidos a la Farma"/>
    <ItemListContainer />
    {/* <ItemDetailContainer/> */}

    </>
  )
}

export default App
