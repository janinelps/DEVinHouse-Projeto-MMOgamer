import {
    CardDescItem,
} from './Jogo.styles'

export const JogoPropriedadeItem = ({ descricaoJogo }) => {

    return (
        <CardDescItem>
            <div>
                {descricaoJogo}
            </div>
        </CardDescItem>
    );
};
