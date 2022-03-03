import styled from "styled-components";

export const Container = styled.div`
    background: white;
    border: 1px solid #ababab;
    padding: 10px;
`
export const ComentNome = styled.div`
    font-weight: bolder;
`
export const Pontos = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;

    p{
            padding: 10px;
            font-size: 24px;
            padding: 10px;
        }
`
export const ButtonUp = styled.button`
    font-size: 40px;
    border: none;
    background: white;
    color: green;
}
`

export const ButtonDown = styled(ButtonUp)`
    color: red;
`

