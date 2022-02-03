import { useContext } from "react";
import { NoticiaContext } from "./NoticiaContext";

export const useNoticia = () => useContext(NoticiaContext)