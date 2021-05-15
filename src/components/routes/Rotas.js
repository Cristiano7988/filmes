import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Info from "../pages/Info";
import FilmesBar from "../FilmesBar";
import FilmeContext from "../../contexts/FilmeContext";

const Rotas = () => (
    <FilmeContext.Provider value={{filme: false}}>
        <FilmesBar />
        <Router>
            <Switch>
                <Route path="/" exact={true} component={ Home } />
                <Route path="/info" component={ Info } />
            </Switch>
        </Router>
    </FilmeContext.Provider>
)

export default Rotas;