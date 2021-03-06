import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { getAllPokemon } from "../../services/PokemonApi";
import { IPokemon } from "../../interfaces/PokemonInterface";
import Pagination from "@material-ui/lab/Pagination";
import { useStyles } from "./PokemonContentHome.style";
import { Link } from "react-router-dom";

const PokemonContentHome = () => {
  const classes = useStyles();

  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    getAllPokemon(page).then((data) => {
      setPokemons([...data.results]);
      setPage(data.page);
      setPageCount(data.pageCount);
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const page: number = value;
    setPage(page);
    getAllPokemon(page).then((data) => {
      setPokemons([...data.results]);
      setPageCount(data.pageCount);
    });
  };

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Card
          className={`${classes.cardContainer} ${classes.headingContainer}`}
        >
          <Typography align="left" variant="h4" component="h1">
            Overview
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.cardContainer}>
          <List>
            {pokemons.map((pokemon) => {
              return (
                <ListItem key={pokemon.name}>
                  <ListItemText primary={pokemon.name} />
                  <ListItemSecondaryAction>
                    <Button
                      variant="text"
                      color="primary"
                      size="medium"
                      component={Link}
                      to={"/pokemon/" + pokemon.name}
                      className={classes.button}
                      endIcon={<ArrowForwardIosIcon />}
                    >
                      More
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Card>
      </Grid>
      <Pagination
        count={pageCount}
        onChange={handleChange}
        className={classes.pagination}
        color="primary"
      />
    </Grid>
  );
};

export default PokemonContentHome;
