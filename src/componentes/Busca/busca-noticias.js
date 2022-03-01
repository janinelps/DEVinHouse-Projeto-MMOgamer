// import { Link } from "react-router-dom";
import { useNoticia } from "../../contextos/Noticia/useNoticia";
import { BuscaContainer } from '../../services/services.styles'


export const BuscaNoticia = () => {
    const { setBuscaNoticia } = useNoticia()

    return (
        <>
            <BuscaContainer>
                <input
                    onChange={(evento) => {
                        setBuscaNoticia(evento.target.value)
                    }}
                    type='text'
                    placeholder='Digite o nome da noticia'
                ></input>
            </BuscaContainer>
        </>
    )
}