import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/Router';
import { GlobalStyle, Head } from './themes/GlobalStyles';
import { ThemesProvider } from './themes'
import logo from './MMOgamer.png'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemesProvider>
        <BrowserRouter>
          <Head>
            <Link to='noticia'>Noticia</Link>
            <Link to='/'>Jogos</Link>
            <h1>DEVinHouse</h1>
            <img src={logo} alt="Logo da MMOgamer" />
          </Head>
          <Router />
        </BrowserRouter>
      </ThemesProvider>
    </>
  );
}

export default App;
