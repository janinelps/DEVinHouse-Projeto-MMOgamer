import { useContext } from "react"
import { DetalheDoJogoContext } from "../../contextos/DetalheDoJogo/DetalheDoJogoContext"
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { Container, ComentNome, Pontos } from "./Comentario.styles"

export const Comentario = ({ id }) => {

    const detalheDoJogoContext = useContext(DetalheDoJogoContext);
    const { listaStorageState, dispatch } = detalheDoJogoContext;

    return (
        <>
            {listaStorageState.find(game => game.id === id) && (
                listaStorageState.find(game => game.id === id).comentarios.map((comentario) =>
                    <Container key={comentario.id}>
                        <ComentNome>{comentario.nome}</ComentNome>
                        <div>{comentario.comentario}
                            <Pontos >
                                <button onClick={() => dispatch({ type: 'DECREMENTA', payload: { comentarioId: comentario.id, idGame: id } })}>
                                    <FaCaretDown />
                                </button>
                                <p>{comentario.counter}</p>
                                <button style={{ padding: '10px' }} onClick={() => dispatch({ type: 'INCREMENTA', payload: { comentarioId: comentario.id, idGame: id } })}>
                                    <FaCaretUp />
                                </button>
                            </Pontos>
                        </div>
                    </Container>
                )
            )}
        </>
    )
}