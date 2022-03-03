import { useEffect, useRef, useState } from 'react';
import { Noticia } from '../../componentes/Noticia/Noticias';
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from '../../helper/filtrar';
import { fetchAllJogos } from '../../services/jogo-services';
import { Paginacao } from '../../componentes/Paginacao';
import { NoticiaContext } from './NoticiaContext';
import { useNoticia } from './useNoticia';

export const NoticiaProvider = () => {
    const [busca, setBusca] = useState('');
    const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
    const [pagina, setPagina] = useState(1);
    const noticias = useRef([])

    useEffect(() => {

        (async () => {
            const lista = await fetchAllJogos('/latestnews');
            noticias.current = lista
            setNoticiasFiltradas(filtrarListaPorPagina(noticias.current, pagina))
        })();
    }
        // eslint-disable-next-line
        , []);

    useEffect(() => {
        setNoticiasFiltradas(filtrarListaPorTermoDeBusca(noticias.current, busca));
    }, [busca]);

    useEffect(() => {
        setNoticiasFiltradas(filtrarListaPorPagina(noticias.current, pagina));
    }, [pagina]);

    return (
        <NoticiaContext.Provider value={{ setBusca, filtro: noticias, filtrados: noticiasFiltradas, pagina, setPagina, titulo: "Noticias" }}>
            <Paginacao contexto={useNoticia} />
            <Noticia />
        </NoticiaContext.Provider>
    );
};
