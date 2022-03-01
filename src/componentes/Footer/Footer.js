import { useRef } from "react";
import { FaCaretUp } from "react-icons/fa";

export const Footer = () => {
    const elementoTopo = useRef();

    const handleVoltarAoTopo = () => {
        elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Footer>
            < p > Feito por <a href='https://github.com/janinelps' target='_blank' rel="noreferrer" >Janine Santos</a></p >
            <button onClick={handleVoltarAoTopo}><FaCaretUp /></button>
        </Footer>
    )
}