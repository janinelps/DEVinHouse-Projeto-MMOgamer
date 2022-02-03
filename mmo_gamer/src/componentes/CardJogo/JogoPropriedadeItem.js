import {
    CardDescItem,
} from './Jogo.styles'

export const JogoPropriedadeItem = ({ descricaoJogo }) => {

    return (
        <CardDescItem>
            <span>
                {descricaoJogo}
            </span>
        </CardDescItem>
    );
};