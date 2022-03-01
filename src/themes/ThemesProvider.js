import { useReducer } from "react";
import { ThemesContext } from "./ThemesContext";

export const GlobalTheme = {
    dark: {
        colorwindow: '#060A0C',
        colorContainer: '#121828',
        colorItem: '#2A3C5C'
    },
    light: {
        colorwindow: '#F2EDA7',
        colorContainer: '#D9C7B8',
        colorItem: '#BFA59B'
    },
    default: {
        colorwindow: '#BECDD5',
        colorContainer: '#EAD3C1',
        colorItem: '#7998A0'
    }
}

const reducer = (state, action) => {
    //eslint-disable-next-line
    switch (action.type) {
        case 'light': {
            return { ...state, default: state.light };
        }
        case 'dark': {
            return { ...state, default: state.dark };
        }
    }
    return { ...state };
}


export const ThemesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, GlobalTheme);

    return (
        <ThemesContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemesContext.Provider>
    )
}