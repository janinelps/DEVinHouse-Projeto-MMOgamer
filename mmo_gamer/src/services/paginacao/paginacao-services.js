import { useJogo } from '../../contextos/Jogo';
import { Busca } from '../busca';
import {
    Container,
    SectionTitle,
    PageTitle,
    Pagination,

} from '../services.styles';

export const Paginacao = () => {
    const { pagina, jogosFiltrados, jogo, setPagina } = useJogo();
    const qtdMaximaPaginas = Math.ceil(jogo.current.length / 10);

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
                <Busca />
                <Pagination>
                    <button onClick={handlePagAnterior}>
                        {`<`}
                    </button>
                    <span>
                        Página {pagina} de {qtdMaximaPaginas}
                    </span>
                    <button onClick={handleProxPagina}>
                        {`>`}
                    </button>
                </Pagination>
            </SectionTitle>
        </Container >
    );
};
