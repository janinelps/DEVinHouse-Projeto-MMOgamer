import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/Router';
import { GlobalStyle, Head } from './themes/GlobalStyles';


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Head>
          <Link to='noticia'>Noticia</Link>
          <Link to='/'>Jogos</Link>
        </Head>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
