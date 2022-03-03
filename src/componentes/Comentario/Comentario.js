import { useContext } from "react"
import { DetalheDoJogoContext } from "../../contextos/DetalheDoJogo/DetalheDoJogoContext"
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { Container, ComentNome, Pontos, ButtonDown, ButtonUp } from "./Comentario.styles"

export const Comentario = ({ id }) => {

    const detalheDoJogoContext = useContext(DetalheDoJogoContext);
    const { listaStorageState, dispatch } = detalheDoJogoContext;
    const listaStorage = listaStorageState.find(game => game.id === id)

    return (
        <>
            {listaStorage && (listaStorage.comentarios.map((comentario) =>
                <Container key={comentario.id}>
                    <ComentNome>{comentario.nome}</ComentNome>
                    <div>{comentario.comentario}
                        <Pontos >
                            <ButtonDown onClick={() => dispatch({ type: 'DECREMENTA', payload: { comentarioId: comentario.id, idGame: id } })}>
                                <FaCaretDown />
                            </ButtonDown>
                            <p>{comentario.counter}</p>
                            <ButtonUp style={{ padding: '10px' }} onClick={() => dispatch({ type: 'INCREMENTA', payload: { comentarioId: comentario.id, idGame: id } })}>
                                <FaCaretUp />
                            </ButtonUp>
                        </Pontos>
                    </div>
                </Container>
            )
            )}
        </>
    )
}