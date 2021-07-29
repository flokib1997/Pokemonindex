import { Button, Grid } from "@material-ui/core";
import React from "react";
import NotFound from "../NotFound/NotFound";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <NotFound heading="404" explanation="This page does not exist." />
    </Grid>
    <Grid item xs={12}>
      <Button
        variant="text"
        color="primary"
        size="medium"
        component={Link}
        to="/"
        startIcon={<ArrowBackIosIcon />}
      >
        Back
      </Button>
    </Grid>
  </Grid>
);

export default ErrorPage;
