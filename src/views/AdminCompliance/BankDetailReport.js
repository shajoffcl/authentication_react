import React from "react";
import { PageTitle, Loader } from "../../components/index";
import { Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from "@material-ui/data-grid";
import { admin } from "../../_services/index";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const columns = [
  { field: "user_name", headerName: "Username", width: 130},
  { field: "modified_on", headerName: "Request Date", width: 230 },
  { field: "first_name", headerName: "First Name", width: 130 },
  { field: "last_name", headerName: "Last Name", width: 130},
  { field: "account_number", headerName: "Account Number", width: 200 },
  { field: "account_type", headerName: "Account Type", width: 200},
  { field: "IFSC", headerName: "IFSC Code", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "approved_by", headerName: "Approved By", width: 150 },
  { field: "linux_added_on", headerName: "Approval Date", width: 230 },
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
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: 200,
  },
}));

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export function BankDetailReport() {
  const classes = useStyles();
  const [response, setResponse] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const [input, setInput] = React.useState({
    user_id: "",
    from_date: null,
    to_date: null,
  });

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await admin.getUserBankDetail();
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
      const data = await admin.getUserBankDetail(input);
      setResponse(data.result);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <PageTitle>User Bank Details Report:</PageTitle>
      <Divider />
      <div className={classes.container}>
        <TextField
          id="outlined-basic"
          label="username or userid"
          variant="outlined"
          name="user_id"
          onChange={handleChange}
        />
        <TextField
          id="date"
          label="From Date"
          type="date"
          defaultValue="new Date()"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          name="from_date"
          onChange={handleChange}
        />
        <TextField
          id="date"
          label="To Date"
          type="date"
          defaultValue="new Date()"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          name="to_date"
          onChange={handleChange}
        />
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Search
        </Button>
      </div>
      <div style={{ height: 400, width: "100%", marginTop: "25px" }}>
        {open ? (
          <Loader />
        ) : (
          <DataGrid
            pagination
            paginationMode= "server"
            rowCount = {response.total_records}
            rows={response}
            columns={columns}
            getRowId={(row) => row.modified_on}
            pageSize={10}
            page = {1}
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
