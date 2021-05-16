import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    height: '100%',
    backgroundColor: '#f0f0f0',
    paddingLeft: "25px",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(25),
      height: theme.spacing(11),
    },
  },
}));
