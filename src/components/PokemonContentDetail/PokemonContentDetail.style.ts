import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      width: "100%",
    },
    cardContainer: {
      margin: theme.spacing(2),
      padding: theme.spacing(2, 0, 0, 0),
      boxShadow: "none",
      backgroundColor: "#f2f2f2",
      pointerEvents: "none",
    },
    statsContainer: {
      padding: theme.spacing(0),
    },
    progressBar: {
      marginBottom: theme.spacing(3),
    },
    button: {
      marginBottom: theme.spacing(2),
    },
    content: {
      paddingBottom: theme.spacing(1),
    },
  })
);
