import React, { useRef } from 'react';
import { useJogo } from '../../contextos/Jogo/useJogo';
import { CardJogo } from '../CardJogo';
import { Card } from './Jogo.styled';

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
            <button onClick={handleVoltarAoTopo}>Voltar para o topo</button>
        </>
    );
};
