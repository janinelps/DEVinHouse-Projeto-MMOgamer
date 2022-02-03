import { useReducer } from 'react';

const estadoInicial = { counter: 0 }

const reducer = (state, action) => {

    switch (action.type) {
        case 'INCREMENTA':
            return { counter: state.counter + 1 };
        case 'DECREMENTA':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

export const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, estadoInicial);

    return (
        <div style={{ display: 'flex', width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            <button style={{ padding: '10px' }} onClick={() => dispatch({ type: 'DECREMENTA' })}>
                -
            </button>
            <p style={{ padding: '10px' }}>{state.counter}</p>
            <button style={{ padding: '10px' }} onClick={() => dispatch({ type: 'INCREMENTA' })}>
                +
            </button>
        </div>
    )

};