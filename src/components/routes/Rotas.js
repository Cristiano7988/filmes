import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Info from "../pages/Info";
import FilmesBar from "../FilmesBar";
import FilmeContext from "../../contexts/FilmeContext";
import { useState } from "react";

const Rotas = () => {
    const getFilmes = async () => {
        return await fetch(`https://api.themoviedb.org/3/trending/movies/week?api_key=ca93225bc497b838281c58ea1888314f`)
        .then(r => r.json() ) 
        .then(filmes => {
            filmes.results.sort((a,b)=> b.vote_average - a.vote_average)
            setFilmes(filmes);
        });
    }
    
    const handleChange = async (e) => {
        if(!e.target.value && getFilmes()) return;
        if(window.location.pathname.includes('info')) {
            window.location.pathname = '/'
        }

        await fetch(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&api_key=ca93225bc497b838281c58ea1888314f`)
        .then( r => r.json())
        .then( r => setFilmes(r))
    }
    const [filmes, setFilmes] = useState();
    
    !filmes && getFilmes()

    return <FilmeContext.Provider value={{filme: false, filmes}}>
        <FilmesBar onChange={handleChange} />
        <Router>
            <Switch>
                <Route path="/" exact={true} component={ Home } />
                <Route path="/info" component={ Info } />
            </Switch>
        </Router>
    </FilmeContext.Provider>
}

export default Rotas;