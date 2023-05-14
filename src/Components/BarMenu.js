import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuItem from '@material-ui/core';
import { Tab,Tabs } from '@material-ui/core';
import CustomerTable from './CustomerTable';
import TrainingsTable from './TrainingsTable';

export default function BarMenu() {
  

const [value,setValue] = React.useState('customer');

const handleOnchange = (event,value) =>{setValue(value)}

  return (

          <Tabs value={value} onChange={handleOnchange}>
            <Tab value="customer" label="CUSTOMER" />
            <Tab value="training" label="TRAINING" />
            {value === 'customer' && <CustomerTable/>}
           {value === 'training' && <TrainingsTable/>}
          </Tabs>

  );
}