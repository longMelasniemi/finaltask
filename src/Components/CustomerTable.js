import React, { useState, useEffect } from "react";
import { DataGrid } from '@material-ui/data-grid'


function CustomerTable(props) {
  
  const columns = [
   
    { field: "firstname", headerName: "First Name", width: 250 },
    { field: "lastname", headerName: "Last Name", width: 250 },
    { field: "streetaddress", headerName: "Address", width: 200 },
    { field: "postcode", headerName: "Postcode", width: 200 },
    { field: "streetaddress", headerName: "Address", width: 200 },
    { field: "city", headerName: "City", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "Phone", headerName: "Phone", width: 200 },
  ];
  
  
    const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://traineeapp.azurewebsites.net/getcustomers")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);
    console.log(customers)
  return (
    <div style={{ height: 650, width: "100%" }}>
    <DataGrid rows={customers} columns={columns} pageSize={10} editMode="row" />
  </div>
  );
}

export default CustomerTable;