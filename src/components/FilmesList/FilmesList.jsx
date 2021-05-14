import { Card, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
    cardContainer: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center',
    },
    card: {
        padding: '10px',
        margin: '10px',
        width: '15%',
        background: 'skyblue',
        borderRadius: '5px',
        boxShadow: '2px 1px 3px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '80px'
    }
}))

const FilmesList = () => {
    const classes = useStyles();
    const getFilmes = async () => {
        await fetch(`https://api.themoviedb.org/3/trending/movies/week?api_key=ca93225bc497b838281c58ea1888314f`)
            .then(r => r.json() ) 
            .then(filmes => {
                filmes.results.sort((a,b)=> b.vote_average - a.vote_average)
                setFilmes(filmes);
            });
      }
    const [filmes, setFilmes] = useState(getFilmes);

    return (
        <div className={classes.cardContainer}>
            {filmes.results && filmes.results.map( filme =>
                <Card key={filme.id} className={classes.card}>
                    {filme.title || filme.name}
                </Card>
            )}
        </div>
    )
}

export default FilmesList;