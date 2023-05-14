import logo from './logo.svg';
import './App.css';
import CustomerTable from './Components/CustomerTable';
import TrainingsTable from './Components/TrainingsTable';
//import BarMenu from './Components/BarMenu';
import { AppBar, Tab,Tabs } from '@material-ui/core';
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';



function App() {
  const [value,setValue] = React.useState('customer');

const handleOnchange = (event,value) =>{setValue(value)}
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Tabs value={value} onChange={handleOnchange} textColor="white"
  indicatorColor="secondary"
  aria-label="secondary tabs example">
      <Tab value="customer" label="CUSTOMER" />
      <Tab value="training" label="TRAINING" />
    </Tabs>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> 
   
    {value === 'customer' && <CustomerTable/>}
    {value === 'training' && <TrainingsTable/>}

    
    </div>
  );
}

export default App;
