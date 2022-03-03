import React from 'react';
import { useNoticia } from '../../contextos/Noticia/useNoticia';
import { CardNoticia } from '../CardNoticia/CardNoticia';
import { Card } from './Noticias.styled';

export const Noticia = () => {
    const { filtrados } = useNoticia();

    return (
        <>
            <Card>
                {filtrados.length === 0
                    ? 'Nenhum Noticia encontrada.'
                    : filtrados.map((noticia) => <CardNoticia key={noticia.id} noticia={noticia} />)}
            </Card>
        </>
    );
};
