import { Grid } from "@material-ui/core";
import { useState } from "react";

const FilmesList = () => {
    const getFilmes = async () => {
        await fetch(`https://api.themoviedb.org/3/trending/movies/week?api_key=ca93225bc497b838281c58ea1888314f`)
          .then(r => r.json() ) 
          .then(filmes => setFilmes(filmes));
      }
    const [filmes, setFilmes] = useState(getFilmes);

    return (
        <Grid container spacing={2}>
            {filmes.results && filmes.results.map( filme =>
                <Grid key={filme.id} item xs={12}>
                    {filme.title || filme.name}
                </Grid>
            )}
        </Grid>
    )
}

export default FilmesList;