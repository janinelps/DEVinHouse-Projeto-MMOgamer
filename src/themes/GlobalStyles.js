import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html{
    font-sizing: 16px;
    color: #333;
    font-family: Montserrat, sans-serif;
}
body{
    background-color: #efefef;
}
`

export const Head = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin: 40px;
    background-image: url('gamer.png');
    background-repeat: no-repeat;

    a{
        text-transform: uppercase;
        margin: 10px;
        text-decoration: none;
  
    &:hover {
        cursor: pointer;
        opacity: 0.7;
        background: white;
    }
}  
`