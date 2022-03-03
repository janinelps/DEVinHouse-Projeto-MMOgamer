import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html{
    font-size: 16px;
    color: #333;
    font-family: Montserrat, sans-serif;
}
body{
    padding: 60px 0;
    background-color: #efefef;
}
`

export const Head = styled.div`
    display: flex;
    position: fixed;
    background: #efefef;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;
    padding: 10px;
    top: 0;

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