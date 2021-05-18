import React from "react";
import { PageTitle, Loader } from "../../components/index";
import { Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { user } from "../../_services/index";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const columns = [
  { field: "user_id", headerName: "UserId", width: 130 },
  {
    field: "user_name",
    headerName: "Username",
    width: 130,
  },
  { field: "doc_name", headerName: "Document Type", width: 180 },
  { field: "user_doc_number", headerName: "Document Number", width: 230 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "status_system", headerName: "System Status", width: 200 },
  { field: "remarks", headerName: "Remarks", width: 130 },
  { field: "linux_added_on", headerName: "Added on", width: 230 },
  { field: "modified_by_user", headerName: "Modiefied By", width: 150 },
  { field: "linux_modified_on", headerName: "Modified on", width: 230 },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
  },
  textField: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export function UserDocumnetList() {
  const classes = useStyles();
  const [response, setResponse] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const [input, setInput] = React.useState({
    user_id: "",
    doc_type: "",
    user_doc_number: null,
    status: null,
  });

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await user.getUserDocumentList();
        console.log("user", data.res);
        setResponse(data.result);
        setOpen(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [1]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const inputCopy = { ...input };
    inputCopy[name] = value;
    setInput(inputCopy);
  };

  const handleClick = async () => {
    try {
      console.log(input);
      setOpen(true);
      const data = await user.getUserDocumentList(input);
      console.log("serach user", data.res);
      setResponse(data.result);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <PageTitle>User Document List:</PageTitle>
      <Divider />
      <div className={classes.container}>
        <TextField
          id="outlined-basic"
          label="username or userid"
          variant="outlined"
          name="user_id"
          onChange={handleChange}
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="doc-simple-select-outlined-label">DocType</InputLabel>
          <Select
            labelId="doc-simple-select-outlined-label"
            id="doc-simple-select-outlined"
            value={input.doc_type}
            name="doc_type"
            onChange={handleChange}
            label="DocType"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Aadhar Card</MenuItem>
            <MenuItem value={2}>Voter Id</MenuItem>
            <MenuItem value={3}>Driving Licence</MenuItem>
            <MenuItem value={5}>Passport</MenuItem>
            <MenuItem value={6}>Passbook</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Doc. Number (Optional)"
          variant="outlined"
          name="user_doc_number"
          onChange={handleChange}
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="status-simple-select-outlined-label">
            Status
          </InputLabel>
          <Select
            labelId="status-simple-select-outlined-label"
            id="status-simple-select-outlined"
            value={input.status}
            name="status"
            onChange={handleChange}
            label="Status"
          >
            <MenuItem value="null">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Approved</MenuItem>
            <MenuItem value={0}>Pending</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Search
        </Button>
      </div>
      <div style={{ height: 400, width: "100%", marginTop: "25px" }}>
        {open ? (
          <Loader />
        ) : (
          <DataGrid
            rows={response}
            columns={columns}
            getRowId={(row) => row.user_id}
            pageSize={5}
            checkboxSelection
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        )}
      </div>
    </div>
  );
}
