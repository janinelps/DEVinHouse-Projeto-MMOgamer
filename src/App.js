import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/Router';
import { GlobalStyle, Head } from './themes/GlobalStyles';
import { ThemesProvider } from './themes'
import logo from './MMOgamer.png'
import { Footer } from './componentes/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemesProvider>
        <BrowserRouter>
          <span id="VoltaAoTopo"></span>
          <Head>
            <Link to='noticia'>Noticia</Link>
            <Link to='/'>Jogos</Link>
            <h1>DEVinHouse</h1>
            <img src={logo} alt="Logo da MMOgamer" />
          </Head>
          <Router />
        </BrowserRouter>
        <Footer />
      </ThemesProvider>
    </>
  );
}

export default App;
