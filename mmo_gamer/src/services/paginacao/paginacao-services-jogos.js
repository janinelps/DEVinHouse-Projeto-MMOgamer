import { useJogo } from '../../contextos/Jogo';
import { BuscaJogo } from '../busca';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'
import {
    Container,
    SectionTitle,
    PageTitle,
    Pagination,

} from '../services.styles';

export const PaginacaoJogos = () => {
    const { pagina, jogosFiltrados, jogo, setPagina } = useJogo();
    const totalItens = jogosFiltrados.length === 40 ? jogo.current.length : jogosFiltrados.length
    const qtdMaximaPaginas = Math.ceil(totalItens / 40);
    console.log("jogo", jogo.current.length)
    console.log("filtro", jogosFiltrados.length)

    const handlePagAnterior = async () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
    };

    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
    };

    return (
        <Container >
            <SectionTitle>
                <PageTitle>Todos os jogos ({jogosFiltrados.length})</PageTitle>
                <BuscaJogo />
                <Pagination>
                    <button onClick={handlePagAnterior}>
                        <FaCaretLeft />
                    </button>
                    <span>
                        Página {pagina} de {qtdMaximaPaginas}
                    </span>
                    <button onClick={handleProxPagina}>
                        <FaCaretRight />
                    </button>
                </Pagination>
            </SectionTitle>
        </Container >
    );
};
