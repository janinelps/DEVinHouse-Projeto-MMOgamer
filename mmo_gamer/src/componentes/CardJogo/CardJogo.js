import { Link } from 'react-router-dom';
import { JogoPropriedadeItem } from './JogoPropriedadeItem';
import {
  Title,
  Card,
  Thumbnail,
  Description,
  Button,
} from './Jogo.styles';

export const CardJogo = ({ jogo }) => {
  return (

    <Card key={jogo.id}>
      <Thumbnail >
        <img src={jogo.thumbnail} alt={jogo.title} />
      </Thumbnail>
      <Title >{jogo.title}</Title>
      <Description >
        <JogoPropriedadeItem descricaoJogo={jogo.short_description} />
        <Link to={`detalhe/${jogo.id}`} >
          <Button type='button'>Mais informações...</Button>
        </Link>
      </Description>
    </Card >
  );
};

