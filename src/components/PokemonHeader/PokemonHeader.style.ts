import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      boxShadow: "6px 6px 12px #e8e8e8, -6px -6px 12px #ffffff",
      marginBottom: theme.spacing(2),
    },
  })
);
