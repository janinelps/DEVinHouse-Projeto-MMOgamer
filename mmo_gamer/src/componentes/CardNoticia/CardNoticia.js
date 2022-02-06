import {
  Card,
  Thumbnail,
  Button,
  CardTitle,
} from './Noticia.styles';

export const CardNoticia = ({ noticia }) => {
  return (

    <Card key={noticia.id}>
      <Thumbnail >
        <img src={noticia.thumbnail} alt={noticia.title} />
      </Thumbnail>
      <CardTitle>
        <h3>{noticia.title}</h3><br />
        <h4>{noticia.short_description}</h4><br />
        <Button type='button'><a href={noticia.article_url} target='_blank' rel="noreferrer" > Ver no site... </a></Button>
      </CardTitle>
    </Card >
  );
};

