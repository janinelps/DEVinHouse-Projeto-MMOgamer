import { useEffect, useState } from "react"
import { fetchAllJogos } from "../../services/jogo-services";
import { useParams } from "react-router-dom";
import { Formulario } from "../../componentes/Formulario/Formulario";
import { JogoPropriedadeItem } from "../../componentes/CardJogo";
import { Container } from "../../services/services.styles";
import { Reducer } from "../Reducer/Reducer";
import { Thumbnail, CardTitle } from "../../componentes/CardJogo/Jogo.styles";
import { Comentario } from "../../componentes/Comentario";
import { DetalheDoJogoContext } from "./DetalheDoJogoContext"

export const DetalheDoJogoProvider = ({ jogo }) => {

    const detalhe = { minimum_system_requirements: {} }

    const [detalheJogo, setDetalheJogo] = useState(detalhe);
    const { id } = useParams();

    useEffect(() => {

        (async () => {
            const detalhe = await fetchAllJogos(`/game?id=${id}`);
            setDetalheJogo(detalheJogo => detalheJogo = detalhe)

        })()
    },
        [])

    return (

        <DetalheDoJogoContext.Provider>
            <Container key={detalheJogo.id}>
                <Thumbnail >
                    <img src={detalheJogo.thumbnail} alt={detalheJogo.title} />
                </Thumbnail>
                <CardTitle>{detalheJogo.title}</CardTitle>
                <JogoPropriedadeItem descricaoJogo={detalheJogo.short_description} />
                <div>
                    <h3>Genero</h3>
                    <JogoPropriedadeItem descricaoJogo={detalheJogo.genre} />
                    <h3>Plataforma</h3>
                    <JogoPropriedadeItem descricaoJogo={detalheJogo.platform} />
                </div>
                <div>
                    <JogoPropriedadeItem descricaoJogo={detalheJogo.minimum_system_requirements.os} />
                    <JogoPropriedadeItem descricaoJogo={detalheJogo.minimum_system_requirements.processor} />
                    <JogoPropriedadeItem descricaoJogo={detalheJogo.minimum_system_requirements.memory} />
                    <JogoPropriedadeItem descricaoJogo={detalheJogo.minimum_system_requirements.graphics} />
                    <JogoPropriedadeItem descricaoJogo={detalheJogo.minimum_system_requirements.storage} />
                </div>
                <Formulario />
                <Comentario />
                <Reducer />

            </Container>
        </DetalheDoJogoContext.Provider>
    )
}