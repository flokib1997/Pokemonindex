import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Stat.style";

const Stat = (props: any) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} item xs={4}>
      <Grid container>
        <Typography
          gutterBottom
          align="left"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {props.name}
        </Typography>
        <Grid item xs={12}>
          <Typography align="left" color="primary" variant="h6" component="h4">
            {props.value}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Stat;
