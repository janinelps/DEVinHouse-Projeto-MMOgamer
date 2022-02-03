import React, { useRef } from 'react';
import { useNoticia } from '../../contextos/Noticia/useNoticia';
import { CardJogo } from '../CardJogo';
import { Card } from './Noticias.styled';

export const Noticia = () => {
    const elementoTopo = useRef();
    const { noticiaFiltrados } = useNoticia();

    const handleVoltarAoTopo = () => {
        elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Card ref={elementoTopo}>

                {noticiaFiltrados.length === 0
                    ? 'Nenhum Noticia encontrada.'
                    : noticiaFiltrados.map((noticia) => <CardJogo key={noticia.id} jogo={noticia} />)}
            </Card>
            <button onClick={handleVoltarAoTopo}>Voltar para o topo</button>
        </>
    );
};
