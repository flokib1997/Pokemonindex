import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPokemonDetail } from "../../interfaces/PokemonInterfaceDetail";
import {
  getEvolutionsBySpecies,
  getPokemonByName,
} from "../../services/PokemonApi";
import { searchTree } from "../../services/Utils";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NotFound from "../NotFound/NotFound";
import Stat from "../Stat/Stat";
import PokemonInformation from "../PokemonInformation/PokemonInformation";
import { useStyles } from "./PokemonContentDetail.style";
import { IPokemonEvolution } from "../../interfaces/PokemonEvolutionInterface";

const PokemonContentDetail = (props: any) => {
  const classes = useStyles();

  let [pokemon, setPokemon] = useState<IPokemonDetail>();
  let [isLoading, setIsLoading] = useState<Boolean>(true);

  let { name }: any = useParams();

  useEffect(() => {
    getPokemonByName(name)
      .then((data) => {
        const abilities = data.abilities
          .map((el: any) => el.ability.name)
          .join(", ");
        const types = data.types.map((el: any) => el.type.name).join(", ");
        const moves = data.moves.map((el: any) => el.move.name).join(", ");
        const forms = data.forms.map((el: any) => el.name).join(", ");
        const stats = data.stats.map((el: any) => {
          return { name: el.stat.name, value: el.base_stat };
        });
        getEvolutionsBySpecies(data.species.url).then((res: any) => {
          const evolutions: IPokemonEvolution = res.data.chain;
          setPokemon({
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
            information: [
              { name: "Abilities", value: abilities },
              { name: "Types", value: types },
              { name: "Possible evolutions", value: searchTree(evolutions) },
              { name: "Moves", value: moves },
            ],
            stats,
          });
          setIsLoading(false);
        });
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        {isLoading ? (
          <CircularProgress className={classes.progressBar} />
        ) : pokemon ? (
          <>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia title={pokemon.name}>
                  <img
                    src={pokemon.image}
                    alt="Pokemon"
                    className={classes.media}
                  />
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h1">
                    {pokemon.name}
                  </Typography>
                  {pokemon.information.map((el: any) => (
                    <PokemonInformation
                      key={el.name}
                      name={el.name}
                      value={el.value}
                    />
                  ))}
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              className={`${classes.cardContainer} ${classes.statsContainer}`}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    align="left"
                    variant="subtitle1"
                    component="h3"
                  >
                    Stats
                  </Typography>
                  <Grid container>
                    {pokemon.stats.map((el: any) => (
                      <Stat key={el.name} name={el.name} value={el.value} />
                    ))}
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </>
        ) : (
          <NotFound
            heading="Oh no!"
            explanation="Seems like the Pokemon you are looking for does not exist!"
          />
        )}
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="text"
          color="primary"
          className={classes.button}
          size="medium"
          href="/"
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default PokemonContentDetail;
