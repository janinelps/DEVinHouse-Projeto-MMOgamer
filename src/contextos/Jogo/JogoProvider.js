import { useEffect, useRef, useState } from 'react';
import { Jogos } from '../../componentes/Jogos';
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from '../../helper/filtrar';
import { fetchAllJogos } from '../../services/jogo-services';
import { Paginacao } from '../../componentes/Paginacao';
import { JogoContext } from './JogoContext';
import { useJogo } from './useJogo';

export const JogoProvider = () => {
    const [busca, setBusca] = useState('');
    const [jogosFiltrados, setJogosFiltrados] = useState([]);
    const [pagina, setPagina] = useState(1);
    const jogo = useRef([]);

    useEffect(() => {

        (async () => {
            const lista = await fetchAllJogos('/games');
            jogo.current = lista;
            setJogosFiltrados(filtrarListaPorPagina(jogo.current, pagina));
        })()
    }
        // eslint-disable-next-line
        , []);

    useEffect(() => {
        setJogosFiltrados(filtrarListaPorTermoDeBusca( jogo.current, busca));
    }, [busca]);

    useEffect(() => {
        setJogosFiltrados(filtrarListaPorPagina(jogo.current, pagina));
    }, [pagina]);

    return (
        <JogoContext.Provider value={{ setBusca, filtro: jogo, filtrados: jogosFiltrados, pagina, setPagina, titulo: "Jogos" }}>
            <Paginacao contexto={useJogo} />
            <Jogos />
        </JogoContext.Provider>
    );
};
