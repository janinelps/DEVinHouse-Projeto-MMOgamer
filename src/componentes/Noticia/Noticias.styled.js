import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;

`
export const VoltarAoTopo = styled.button`
    font-size: 40px;
    position: fixed;
    top: 50%;
    transform: translateY(250px);
    right: 5%;
    cursor: pointer;
    padding: 0 20px;
    margin: 5px 20px;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
        background: green;
`
