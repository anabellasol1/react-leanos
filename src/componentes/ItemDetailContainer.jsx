import { getItem } from "../data";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { base } from "../firebase/data"

export function ItemDetailContainer() {

    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([])
    const params = useParams()

    /* API simulada */
    /*     useEffect (() => {
            getItem(Number(params.id)).then((result) => {
            setItem(...result);
            }).catch(error => console.log(error)).finally(() => setIsLoading(false))
        }, []); */
        

    /* Solicitando datos a Firebase */
    useEffect(() => {

        const docR = doc(base, "productos", params.id);

        getDoc(docR)
            .then((resp) => {
                setItem({ ...resp.data(), id: resp.id })
            }).catch(error => console.log(error)).finally(() => setIsLoading(false))

    }, [])

    if (isLoading) return <h4>Cargando...</h4>

    return (
        <main>

            <ItemDetail
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                stock={item.stock}
                price={item.price} />

        </main>
    )
}