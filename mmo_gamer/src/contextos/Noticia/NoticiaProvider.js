import { useEffect, useState } from 'react';
import { Noticia } from '../../componentes/Noticia/Noticias';
import { fetchAllJogos } from '../../services/jogo-services';
import { NoticiaContext } from './NoticiaContext';

export const NoticiaProvider = () => {

    const [pagina, setPagina] = useState(1);
    const [noticia, setNoticia] = useState([]);

    useEffect(() => {

        (async () => {
            const lista = await fetchAllJogos('/latestnews');
            setNoticia((l) => l = lista)
        })();
    }
        // eslint-disable-next-line
        , []);

    console.log(noticia)
    return (
        <NoticiaContext.Provider value={{ noticiaFiltrados: noticia, pagina, setPagina }}>
            <Noticia />
        </NoticiaContext.Provider>
    );
};
