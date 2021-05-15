import { Card, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { Redirect } from "react-router";
import FilmeContext from "../../../contexts/FilmeContext";
import useInfoFilme from "../../../hooks/usoInfo";
import img from "../../../img/img-icon.png";

const useStyles = makeStyles(theme => ({
    containerFilme: {
        display: 'inline-flex',
        color: 'white',
        margin: '50px',
        backgroundSize: '75%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right'
    },
    info: {
        padding: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, .8)'
    },
    imgDefault: {
        height: '50%',
        alignSelf: 'center'
    }
}))

const Info = () => {
    const classes = useStyles();
    const contexto = useContext(FilmeContext);
    const infoFilme = useInfoFilme(contexto)[0];
    const { name, title, poster_path, backdrop_path, overview, media_type, release_date, first_air_date, vote_average } = infoFilme.filme;
    const url = poster_path
        ? `https://www.themoviedb.org/t/p/w440_and_h660_bestv2${poster_path}`
        : img
    const urlBackground = backdrop_path
        ? `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${backdrop_path})`
        : 'none'
    
    return infoFilme.filme ? <div>
        <Card className={classes.containerFilme} style={{backgroundImage: urlBackground}}>
            <img className={!poster_path && classes.imgDefault} src={url} alt="poster" />
            <div className={classes.info}>
                <div>
                    <h1>{title || name}</h1>
                    <p>Sinopse: {overview}</p>
                </div>
                <div>
                    <p>Midia: {media_type}</p>
                    <p>Data: {release_date || first_air_date}</p>
                    <p>Nota: {vote_average}</p>
                </div>
            </div>
        </Card>
    </div> : <Redirect to="/" />
}

export default Info;