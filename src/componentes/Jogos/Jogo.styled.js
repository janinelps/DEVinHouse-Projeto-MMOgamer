import styled from "styled-components";

export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`
export const Footer = styled.footer`
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
    }
}

`