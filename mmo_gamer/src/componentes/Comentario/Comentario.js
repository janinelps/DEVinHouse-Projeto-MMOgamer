import { useContext } from "react"
import { DetalheDoJogoContext } from "../../contextos/DetalheDoJogo/DetalheDoJogoContext"

export const Comentario = ({ id }) => {

    const detalheDoJogoContext = useContext(DetalheDoJogoContext);
    const { listaStorageState, dispatch } = detalheDoJogoContext;

    return (
        <>
            {listaStorageState.find(game => game.id === id) && (
                listaStorageState.find(game => game.id === id).comentarios.map((comentario) =>
                    <div key={comentario.id}>
                        <div>{comentario.nome}</div>
                        <div>{comentario.comentario}</div>
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <button style={{ padding: '10px' }} onClick={() => dispatch({ type: 'DECREMENTA', payload: { comentarioId: comentario.id, idGame: id } })}>
                                -
                            </button>
                            <p style={{ padding: '10px' }}>{comentario.counter}</p>
                            <button style={{ padding: '10px' }} onClick={() => dispatch({ type: 'INCREMENTA', payload: { comentarioId: comentario.id, idGame: id } })}>
                                +
                            </button>
                        </div>
                    </div>
                )
            )}
        </>
    )
}