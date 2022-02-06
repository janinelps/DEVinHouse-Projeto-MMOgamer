import { useNoticia } from '../../contextos/Noticia/useNoticia';
import { BuscaNoticia } from '../busca';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'
import {
    Container,
    SectionTitle,
    PageTitle,
    Pagination,
} from '../services.styles';


export const PaginacaoNoticias = () => {
    const { pagina, noticiasFiltradas, noticias, setPagina } = useNoticia();
    const qtdMaximaPaginas = Math.ceil(noticias.current.length / 40);

    const handlePagAnterior = async () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
    };

    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
    };

    return (
        <SectionTitle>
            <PageTitle>Todas as noticias ({noticiasFiltradas.length})</PageTitle>
            <BuscaNoticia />
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
    );
};
