import React from 'react';
import { useNoticia } from '../../contextos/Noticia/useNoticia';
import { CardNoticia } from '../CardNoticia/CardNoticia';
import { Card } from './Noticias.styled';

export const Noticia = () => {
    const { noticiasFiltradas } = useNoticia();

    return (
        <>
            <Card>
                {noticiasFiltradas.length === 0
                    ? 'Nenhum Noticia encontrada.'
                    : noticiasFiltradas.map((noticia) => <CardNoticia key={noticia.id} noticia={noticia} />)}
            </Card>
        </>
    );
};
