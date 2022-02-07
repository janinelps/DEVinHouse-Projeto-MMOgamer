import { useEffect, useReducer, useState } from "react"
import { fetchAllJogos } from "../../services/jogo-services";
import { useParams } from "react-router-dom";
import { Formulario } from "../../componentes/Formulario/Formulario";
import { JogoPropriedadeItem } from "../../componentes/CardJogo";
import { Container } from "../../services/services.styles";
import { reducer } from "../Reducer/Reducer";
import { CardTitle, Genero, Sistema } from "./DetalheDoJogo.styles";
import { Comentario } from "../../componentes/Comentario";
import { DetalheDoJogoContext } from "./DetalheDoJogoContext"
import { Carrossel } from "../../componentes/Carrossel/Carrossel";

export const DetalheDoJogoProvider = () => {

    const listaStorageTemp = localStorage.getItem("comentario")
    let listaStorage = listaStorageTemp ? JSON.parse(listaStorageTemp) : []

    const detalhe = { minimum_system_requirements: {}, screenshots: [] }

    const [detalheJogo, setDetalheJogo] = useState(detalhe);
    const { id } = useParams();

    const [listaStorageState, dispatch] = useReducer(reducer, listaStorage);

    useEffect(() => {

        (async () => {
            const detalhe = await fetchAllJogos(`/game?id=${id}`);
            setDetalheJogo(detalheJogo => detalheJogo = detalhe)

        })()
    },
        [id])

    return (

        <DetalheDoJogoContext.Provider value={{ listaStorageState, dispatch }}>
            <Container key={detalheJogo.id}>
                <CardTitle>{detalheJogo.title}</CardTitle>
                <Carrossel screenshots={detalheJogo.screenshots} title={detalheJogo.title} />
                <JogoPropriedadeItem descricaoJogo={detalheJogo.short_description} />
                <Genero>
                    <h3>Genero: </h3>
                    <JogoPropriedadeItem descricaoJogo={detalheJogo.genre} />
                    <h3>Plataforma: </h3>
                    <JogoPropriedadeItem descricaoJogo={detalheJogo.platform} />
                </Genero>
                <Sistema>
                    <h3>Requisito de sistema</h3>
                    <h4>Sistema Operacional: <JogoPropriedadeItem descricaoJogo={detalheJogo.minimum_system_requirements.os} /></h4>
                    <h4>Processador: <JogoPropriedadeItem descricaoJogo={detalheJogo.minimum_system_requirements.processor} /></h4>
                    <h4>Memoria: <JogoPropriedadeItem descricaoJogo={detalheJogo.minimum_system_requirements.memory} /></h4>
                    <h4>Gráfico: <JogoPropriedadeItem descricaoJogo={detalheJogo.minimum_system_requirements.graphics} /></h4>
                    <h4>Espaço em disco: <JogoPropriedadeItem descricaoJogo={detalheJogo.minimum_system_requirements.storage} /></h4>
                </Sistema>
                <Formulario />
                <Comentario id={id} />

            </Container>
        </DetalheDoJogoContext.Provider>
    )
}