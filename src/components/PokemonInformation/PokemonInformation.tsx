import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./PokemonInformation.style";

const PokemonInformation = (props: any) => {
  const classes = useStyles();

  return (
    <>
      <Typography align="left" variant="subtitle1" component="h3">
        {props.name}
      </Typography>
      <Typography
        gutterBottom
        className={classes.root}
        align="left"
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {props.value === "" ? "-" : props.value}
      </Typography>
    </>
  );
};

export default PokemonInformation;
