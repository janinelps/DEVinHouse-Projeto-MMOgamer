import { Busca } from '../Busca';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'
import {
    Container,
    SectionTitle,
    PageTitle,
    Pagination,

} from '../../services/services.styles';

export const Paginacao = ({ contexto }) => {
    const { pagina, filtrados, filtro, setPagina, titulo } = contexto();
    const totalItens = filtrados.length === 40 ? filtro.current.length : filtrados.length
    const qtdMaximaPaginas = Math.ceil(totalItens / 40);

    const handlePagAnterior = async () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
    };

    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
    };

    return (
        <Container >
            <SectionTitle>
                <PageTitle>({titulo})({filtrados.length})</PageTitle>
                <Busca contexto={contexto} />
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
