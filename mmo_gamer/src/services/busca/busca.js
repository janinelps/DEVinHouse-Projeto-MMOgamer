// import { Link } from "react-router-dom";
import { useJogo } from "../../contextos/Jogo/useJogo";
import { BuscaContainer } from '../services.styles'


export const Busca = () => {
    const { setBusca } = useJogo()

    return (
        <>
            <BuscaContainer>
                <input
                    onChange={(evento) => {
                        setBusca(evento.target.value)
                    }}
                    type='text'
                    placeholder='Digite o nome do jogo'
                ></input>
            </BuscaContainer>
        </>
    )
}