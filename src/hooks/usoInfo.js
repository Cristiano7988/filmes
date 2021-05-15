import { useState } from 'react';

function useInfoFilme(contexto) {
    const [infoFilme, setInfoFilme] = useState(contexto)

    function salvaFilme(filme) {
        console.log(filme)
        setInfoFilme(filme)
        contexto.filme = filme;
    }

    return [infoFilme, salvaFilme]
}

export default useInfoFilme;