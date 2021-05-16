import { Card, makeStyles } from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FilmeContext from "../../contexts/FilmeContext";
import useInfoFilme from "../../hooks/usoInfo";
import img from "../../img/img-icon.png";

const useStyles = makeStyles(theme => ({
    cardContainer: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center',
    },
    card: {
        margin: '10px',
        background: 'skyblue',
        borderRadius: '5px',
        boxShadow: '2px 1px 3px',
        alignItems: 'center',
        display: 'flex',
        minHeight: '225px'
    },
    info: {
        width: '130px',
        padding: '0 10px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    nota: {
        display: 'inline-flex',
        alignItems: 'center'
    },
    navLink: {
        textDecoration: 'none',
        color: 'black'
    }
}))

const trataData = (data) => {
    const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const mes = meses[new Date(data).getMonth()];

    data = new Date(data).toLocaleDateString();
    data = data.replace(/(\/\w{2})/, '/'+mes);
    data = data.replaceAll('/', ' de ');

    return data;
}

const FilmesList = () => {
    const classes = useStyles();
    const contexto = useContext(FilmeContext);
    const salvaFilme = useInfoFilme(contexto)[1];
    const filmes = contexto.filmes ? contexto.filmes.results : []

    return (
        <div className={classes.cardContainer}>
            {filmes.length ? filmes.map( filme => {
                const {title, name, release_date, first_air_date, id, poster_path, vote_average} = filme;
                const url = poster_path
                    ? `https://www.themoviedb.org/t/p/w220_and_h330_bestv2/${poster_path}`
                    : img
                let data = trataData(release_date || first_air_date)

                return <NavLink key={id} to="/info" onClick={()=>salvaFilme(filme)} className={classes.navLink}>
                    <Card className={classes.card}>
                        <img width="150" src={url} alt="poster" />
                        <div className={classes.info}>
                            <p>{title || name}</p>
                            <div>
                                {(release_date || first_air_date) && <p>{data}</p>}
                                <p className={classes.nota}>
                                    {vote_average > 6 && <StarBorderIcon color="secondary" />}
                                    <span>Nota: {vote_average}</span>
                                </p>
                            </div>
                        </div>
                    </Card>
                </NavLink>
            }) : <p>Nenhum resultado obtido</p>}
        </div>
    )
}

export default FilmesList;