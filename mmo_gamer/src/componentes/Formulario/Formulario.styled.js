import styled from "styled-components";


export const FormInput = styled.div`

    font-size: 20px;
    margin: 0 0px 10px;
    text-align: center;
    
input {
margin-right:5px;
}
input, textarea {
	padding: 0.5em;
	color: palevioletred;
	border: none;
	border-radius: 3px;
	width: 100%;
    font-size: 16px;
	margin-bottom: 0.5em;
  }
`

export const Input = styled.div`
    display: flex;
    justify-content: center;
`

export const DivButton = styled.div`
    margin-bottom: 0.5em;
    display: block;
`

export const Button = styled.button`
    width: 30%;
    padding: 5px;
    margin-right: 50px;
    background: firebrick;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    border: none;
    transition: 1s all;
    border-radius: 10px;
    cursor: pointer;

&:hover{
    background: rgb(16, 175, 42);
    transform: scale(1.1);
}

`