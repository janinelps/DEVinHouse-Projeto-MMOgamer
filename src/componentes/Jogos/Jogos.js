import React from 'react';
import { useJogo } from '../../contextos/Jogo/useJogo';
import { CardJogo } from '../CardJogo';
import { Card } from './Jogo.styled';

export const Jogos = () => {
    const { jogosFiltrados } = useJogo();

    return (
        <>
            <Card>
                {jogosFiltrados.length === 0
                    ? 'Nenhum jogo encontrado'
                    : jogosFiltrados.map((jogo) => <CardJogo key={jogo.id} jogo={jogo} />)}
            </Card>
        </>
    );
};
