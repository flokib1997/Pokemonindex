import { Typography } from "@material-ui/core";
import React from "react";

const NotFound = (props: any) => (
  <>
    <Typography variant="h3" component="h2">
      {props.heading}
    </Typography>
    <Typography gutterBottom component="h3">
      {props.explanation}
    </Typography>
  </>
);

export default NotFound;
