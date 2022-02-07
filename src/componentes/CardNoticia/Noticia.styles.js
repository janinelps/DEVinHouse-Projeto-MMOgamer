import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: white;
  display: flex;
  justify-content: space-around;
  margin: 10px;
}
`

export const Thumbnail = styled.div`
  width: 30%;
  overflow: hidden;

`

export const CardTitle = styled.div`
  width: 70%;
  text-align: center;

  h4{
    color: gray;
  }
  
  a{
    text-decoration: none;
    color: black;
  }
`

<<<<<<< HEAD
export const CardDescItem = styled.div`
  margin: 1rem 0;

  div{
    font-size: 1rem;
    margin-bottom: 0.25rem;
    color: #333;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
=======
>>>>>>> 14efe4134de899973fc57e6e9382ec43d42315fe
export const Button = styled.button`
  margin: 10px;
  width: 200px;
  height: 30px;
  border-radius: 10px;

&:hover {
  cursor: pointer;
  opacity: 0.7;
  background: green;
}
`