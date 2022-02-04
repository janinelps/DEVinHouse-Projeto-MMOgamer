export const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENTA': {
            const newState = state.map((game) => {
                let votos = game.comentarios;
                if (game.id === action.payload.idGame) {
                    votos = votos.map((item) => {
                        return item.id === action.payload.comentarioId ? { ...item, counter: item.counter + 1 } : item;
                    })
                }
                return { ...game, comentarios: votos }
            })
            localStorage.setItem("comentario", JSON.stringify(newState))
            return newState;
        }
        case 'DECREMENTA': {
            const newState = state.map((game) => {
                let votos = game.comentarios;
                if (game.id === action.payload.idGame) {
                    votos = votos.map((item) => {
                        return item.id === action.payload.comentarioId ? { ...item, counter: item.counter - 1 } : item;
                    })
                }
                return { ...game, comentarios: votos }
            })
            localStorage.setItem("comentario", JSON.stringify(newState))
            return newState;
        }
        case 'ATUALIZAR': {
            return [...action.payload];
        }
        default:
            return [...state];
    }
};