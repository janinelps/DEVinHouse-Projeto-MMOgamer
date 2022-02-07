import styled from "styled-components";

export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`
export const VoltarAoTopo = styled.div`
    background: gray;
    height: 50px;
    display: flex;
    justify-content: center;

    p{
    display: flex;
    align-items: center;  
    
        a{
            text-decoration:none;
            padding: 20px;
        }
    }
    
    button{
        cursor: pointer;
        padding: 0 20px;
        margin: 5px 20px;
        border-radius: 10px;
  
        &:hover {
            cursor: pointer;
            opacity: 0.7;
            background: green;
    }
}

`