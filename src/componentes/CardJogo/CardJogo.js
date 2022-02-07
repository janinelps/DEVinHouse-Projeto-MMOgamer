import { Link } from 'react-router-dom';
import {
  Title,
  Card,
  Thumbnail,
  Description,
  Button,
} from './Jogo.styles';
import { JogoPropriedadeItem } from './JogoPropriedadeItem';

export const CardJogo = ({ jogo }) => {
  return (

    <Card key={jogo.id}>
      <Thumbnail >
        <img src={jogo.thumbnail} alt={jogo.title} />
      </Thumbnail>
      <Title>
        <h4>{jogo.title}</h4>
        <p>PC</p>
      </Title>
      <Description >
        {jogo.short_description}
        <Link to={`detalhe/${jogo.id}`} >
          <Button type='button'>Mais informações...</Button>
        </Link>
      </Description>
    </Card >
  );
};

