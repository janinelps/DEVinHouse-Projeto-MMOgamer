import { useState } from "react"
import { Reducer } from "../../contextos/Reducer/Reducer"

const listaStorageTemp = localStorage.getItem("comentario")
let listaStorage = listaStorageTemp ? JSON.parse(listaStorageTemp) : []

export const Comentario = () => { 

    const [comentariosState, setComentario] = useState(listaStorage)

    return (
        <>
            {comentariosState.map((comentario) =>
                <p key={comentario.nome}>{`
                ${comentario.nome}
                ${comentario.comentario} `}</p>
            )}
        </>
    )
}