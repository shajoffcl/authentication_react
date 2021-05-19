import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(8),
      paddingTop: theme.spacing(2.5),
      textAlign: "center",
    },
  },
}));
