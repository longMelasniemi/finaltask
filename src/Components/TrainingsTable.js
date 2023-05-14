import React, { useState, useEffect } from "react";
import { DataGrid } from '@material-ui/data-grid'
import dayjs from 'dayjs'

function TrainingsTable(props) {
  
  const columns = [
    { field: "id", headerName: "Training ID", width: 150 },
    { field: "firstname", headerName: "First Name", width: 250, valueGetter: (para) => {if(para.row.customer == null){return para.row.customer}else{return para.row.customer.firstname} }},
    { field: "lastname", headerName: "Last Name", width: 250, valueGetter: (para) => {if(para.row.customer == null){return para.row.customer}else{return para.row.customer.lastname} }},
    { field: "duration", headerName: "Duration", width: 250 },
    { field: "activity", headerName: "Activity", width: 200 },
    { field: "date", headerName: "Date", width: 200,valueFormatter: params => dayjs(params.value).format('DD/MM/YYYY hh:mm') },
    
   
  ];
  
  
    const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://traineeapp.azurewebsites.net/gettrainings")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);
    console.log(customers)
  return (
    <div style={{ height: 650, width: "100%" }}>
    <DataGrid rows={customers} columns={columns} pageSize={10} />
  </div>
  );
}

export default TrainingsTable;