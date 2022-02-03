import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

export const SectionTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const PageTitle = styled.div` 
    font-size: 1.5rem;
    font-weight: lighter;
    margin: 1rem 0;
    text-align: center;
`
export const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 180px;

    button{
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #cccca6;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bold;
    }
`

export const BuscaContainer = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

input{
    padding: 1rem 2rem;
    font-size: 1.25rem;
    margin: 1rem 0;
    }
`

