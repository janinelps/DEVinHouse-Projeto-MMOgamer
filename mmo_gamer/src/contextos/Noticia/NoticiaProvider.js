import { useEffect, useRef, useState } from 'react';
import { Noticia } from '../../componentes/Noticia/Noticias';
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from '../../helper/filtraJogo';
import { fetchAllJogos } from '../../services/jogo-services';
import { PaginacaoNoticias } from '../../services/paginacao/paginacao-services-noticias';
import { NoticiaContext } from './NoticiaContext';

export const NoticiaProvider = () => {
    const [busca, setBuscaNoticia] = useState('');
    const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
    const [pagina, setPagina] = useState(1);
    //const [noticia, setNoticia] = useState([]);
    const noticias = useRef([])

    useEffect(() => {

        (async () => {
            const lista = await fetchAllJogos('/latestnews');
            //setNoticia((l) => l = lista)
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
        <NoticiaContext.Provider value={{ setBuscaNoticia, noticias, noticiasFiltradas, pagina, setPagina }}>
            <PaginacaoNoticias />
            <Noticia />
        </NoticiaContext.Provider>
    );
};
