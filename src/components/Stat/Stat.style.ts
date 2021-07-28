import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      borderRadius: "10px",
      minHeight: "70px",
      textAlign: "left",
      padding: theme.spacing(0),
    },
  })
);
