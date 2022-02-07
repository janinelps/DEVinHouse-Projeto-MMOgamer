import React, { useRef } from 'react';
import { useNoticia } from '../../contextos/Noticia/useNoticia';
import { CardNoticia } from '../CardNoticia/CardNoticia';
import { VoltarAoTopo } from '../Jogos/Jogo.styled';
import { Card } from './Noticias.styled';

export const Noticia = () => {
    const elementoTopo = useRef();
    const { noticiasFiltradas } = useNoticia();

    const handleVoltarAoTopo = () => {
        elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Card ref={elementoTopo}>

                {noticiasFiltradas.length === 0
                    ? 'Nenhum Noticia encontrada.'
                    : noticiasFiltradas.map((noticia) => <CardNoticia key={noticia.id} noticia={noticia} />)}
            </Card>
            <VoltarAoTopo>
                <p>Feito por <a href='https://github.com/janinelps' target='_blank' rel="noreferrer" >Janine Santos</a></p>
                <button onClick={handleVoltarAoTopo}>Voltar para o topo</button>
            </VoltarAoTopo>
        </>
    );
};
