import { useEffect, useState } from "react";
import { getData, getItemCategory } from "../data";
import { ItemList } from "../componentes/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { base } from "../firebase/data"


export function ItemListContainer() {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([])
    const cat = useParams()


    /* API simulada */
    /*     useEffect(() => {
    
            const asyncFunc = cat.id ? getItemCategory : getData
    
            asyncFunc(cat.id).then((result) => {
                setProducts(result);
            }).catch(error => console.log(error)).finally(() => setIsLoading(false))
        }, [cat]); */


    /* Solicitando datos a Firebase */
    useEffect(() => {

        const productosR = collection(base, "productos");
        const q = cat.id === undefined ? productosR : query(productosR, where("category", "==", cat.id))

        getDocs(q)
            .then((resp) => {

                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )

            }).catch(error => console.log(error)).finally(() => setIsLoading(false))

    }, [cat])

    if (isLoading) return <h4>Cargando...</h4>

    return (
        <main>

            <ItemList productosFetch={products} />

        </main>
    )
}