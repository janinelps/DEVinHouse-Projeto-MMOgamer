export const fetchAllJogos = async (cmp) => {
    try {
        const response = await fetch(process.env.REACT_APP_URL + cmp, {
            method: 'GET',
            headers: {
                "x-rapidapi-host": process.env.REACT_APP_HOST,
                "x-rapidapi-key": process.env.REACT_APP_KEY,
            },
        });
        const listaJogos = await response.json();

        return listaJogos;
    } catch (error) {
        console.error(error.message)
    }
}