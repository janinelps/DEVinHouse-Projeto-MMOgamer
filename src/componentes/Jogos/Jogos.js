import React, { useRef } from 'react';
import { FaCaretUp } from 'react-icons/fa';
import { useJogo } from '../../contextos/Jogo/useJogo';
import { CardJogo } from '../CardJogo';
import { Card, Footer } from './Jogo.styled';

export const Jogos = () => {
    const elementoTopo = useRef();
    const { jogosFiltrados } = useJogo();

    const handleVoltarAoTopo = () => {
        elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Card ref={elementoTopo}>
                {jogosFiltrados.length === 0
                    ? 'Nenhum jogo encontrado'
                    : jogosFiltrados.map((jogo) => <CardJogo key={jogo.id} jogo={jogo} />)}
            </Card>
            <Footer>
                <p>Feito por <a href='https://github.com/janinelps' target='_blank' rel="noreferrer" > Janine Santos </a></p>
                <button onClick={handleVoltarAoTopo}><FaCaretUp /></button>
            </Footer>
        </>
    );
};
