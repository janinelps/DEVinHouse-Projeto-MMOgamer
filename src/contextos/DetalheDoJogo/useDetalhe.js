import { useContext } from "react";
import { DetalheDoJogoContext } from "./DetalheDoJogoContext";

export const useDetalhe = () => useContext(DetalheDoJogoContext)