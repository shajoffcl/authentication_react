import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    height: '100%',
    backgroundColor: '#f0f0f0',
    paddingLeft: "60px",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(25),
      height: theme.spacing(10),
    },
  },
}));
