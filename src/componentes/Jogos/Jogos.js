import React from 'react';
import { useJogo } from '../../contextos/Jogo/useJogo';
import { CardJogo } from '../CardJogo';
import { Card } from './Jogo.styled';

export const Jogos = () => {
    const { filtrados } = useJogo();

    return (
        <>
            <Card>
                {filtrados.length === 0
                    ? 'Nenhum Jogo encontrado'
                    : filtrados.map((jogo) => <CardJogo key={jogo.id} jogo={jogo} />)}
            </Card>
        </>
    );
};
