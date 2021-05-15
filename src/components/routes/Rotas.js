import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Info from "../pages/Info";
import FilmesBar from "../FilmesBar";

const Rotas = () => (<>
    <FilmesBar />
    <Router>
        <Switch>
            <Route path="/" exact={true} component={ Home } />
            <Route path="/info" component={ Info } />
        </Switch>
    </Router>
</>)

export default Rotas;