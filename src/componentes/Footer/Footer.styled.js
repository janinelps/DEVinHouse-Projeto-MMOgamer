import styled from "styled-components";

export const FooterStyled = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
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

    font-size: 50px;
    cursor: pointer;
    padding: 0 20px;
    margin: 0 20px;
    border: none;
    background: gray;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
        color: green;
    }
}
`