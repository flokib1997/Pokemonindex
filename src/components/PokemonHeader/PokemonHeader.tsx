import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { useStyles } from "./PokemonHeader.style";

const PokemonHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="secondary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
            href="/"
          >
            <HomeIcon />
          </IconButton>
          <Typography color="primary" variant="h6">
            Pokemonindex
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PokemonHeader;
