// import { Link } from "react-router-dom";
import { BuscaContainer } from '../../services/services.styles'


export const Busca = ({ contexto }) => {
    const { setBusca } = contexto()

    return (
        <>
            <BuscaContainer>
                <input
                    onChange={(evento) => {
                        setBusca(evento.target.value)
                    }}
                    type='text'
                    placeholder='Digite o nome '
                ></input>
            </BuscaContainer>
        </>
    )
}