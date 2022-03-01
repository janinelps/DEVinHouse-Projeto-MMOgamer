import styled from 'styled-components'

export const Card = styled.div`
  max-width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: white;

  &:hover {
    margin: 1.2rem;
    background: gray;
    
  }
  
}
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  h4{
  color: #626262;
  font-size: 20px;
  text-align: left;
  font-weight: 700;
  margin-right: 20px;
  }

  p{
    padding: auto;
    border-radius: 10px;
    border: 1px solid #ababab;
    background: #efefef;
    text-align: center;
    width: 20%;
}
`

export const Thumbnail = styled.div`
  width: 100%;
  overflow: hidden;

  img{
    width: 100%;
  }
`

export const CardTitle = styled.div`
  font-size: 1.5rem;
  color: #436147;
  text-align: center;
`

export const Description = styled.div`
  margin: 1.25rem 0 1rem;
`
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