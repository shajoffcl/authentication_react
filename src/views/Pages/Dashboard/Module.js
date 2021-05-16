import React from "react";
import { admin } from "../../../_services/index";
import { PaperRender } from "../../../components/index";
import { useStyles } from "./Style";
import { withRouter } from "react-router-dom";

function Module(props) {
  const classes = useStyles();
  const [error, setError] = React.useState(false);
  const [module, setModule] = React.useState([]);
  const param = props.location.search;

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await admin.getSubModuleData(param);
        setModule(data.modules);
      } catch (err) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  const handleClick = (routeName) => {
    props.history.push(routeName);
  };

  return (
    <div className={classes.root}>
      {module.map((prop, idx) => (
        <PaperRender
          key={idx}
          module={prop.navigation_name}
          handleClick={() => handleClick(prop.module_link)}
        />
      ))}
    </div>
  );
}

export default withRouter(Module);
