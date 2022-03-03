import { FaCaretUp } from "react-icons/fa";
import { FooterStyled } from "./Footer.styled";

export const Footer = () => {

    const handleVoltarAoTopo = () => {
        const section = document.querySelector('#VoltaAoTopo');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    };
    return (
        <FooterStyled>
            < p > Feito por <a href='https://github.com/janinelps' target='_blank' rel="noreferrer" ><strong>Janine Santos</strong></a> DEVinHouse - 2022</p >
            <button onClick={handleVoltarAoTopo}><FaCaretUp /></button>
        </FooterStyled>
    )
}