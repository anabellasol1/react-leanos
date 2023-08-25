import { useEffect, useState } from "react";
import {getData} from "../data";
import {ItemList} from "../componentes/ItemList";


export function ItemListContainer () {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([])

    useEffect (() => {
        getData().then((data) => { console.log(data);
        setProducts(data);
        }).catch(error => console.log(error)).finally(() => setIsLoading(false))
    }, []);

    if (isLoading) return <h4>Cargando...</h4>

    return (
        <main>

            <ItemList productosFetch={products}/>

        </main>
    )
}