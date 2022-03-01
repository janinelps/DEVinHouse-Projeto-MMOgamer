import React, { useRef } from 'react';
import { FaCaretUp } from 'react-icons/fa';
import { useNoticia } from '../../contextos/Noticia/useNoticia';
import { CardNoticia } from '../CardNoticia/CardNoticia';
import { Footer } from '../Jogos/Jogo.styled';
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
            <Footer>
                <p>Feito por <a href='https://github.com/janinelps' target='_blank' rel="noreferrer" >Janine Santos</a></p>
                <button onClick={handleVoltarAoTopo}><FaCaretUp /></button>
            </Footer>
        </>
    );
};
