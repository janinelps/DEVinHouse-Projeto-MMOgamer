import { Routes, Route, Navigate } from "react-router-dom";
import { Formulario } from "../componentes/Formulario/Formulario";
import { DetalheDoJogoProvider } from "../contextos/DetalheDoJogo/DetalheDoJogoProvider";
import { JogoProvider } from "../contextos/Jogo";
import { NoticiaProvider } from "../contextos/Noticia/NoticiaProvider";

export const Router = () => (
    <Routes>
        <Route path='/' element={<JogoProvider />} />
        <Route path='noticia' element={<NoticiaProvider />} />
        <Route path='formulario' element={<Formulario />} />
        <Route path='detalhe/:id' element={<DetalheDoJogoProvider />} />
        <Route path='*' element={<Navigate replace to='/' />} />

    </Routes>
)