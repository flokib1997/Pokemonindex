import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    button: {
      margin: theme.spacing(1),
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    pagination: {
      margin: theme.spacing(1, 0, 2, 0),
      marginLeft: "auto",
      marginRight: "auto",
    },
    cardContainer: {
      margin: theme.spacing(2),
      boxShadow: "none",
      backgroundColor: "#f2f2f2",
    },
  })
);
