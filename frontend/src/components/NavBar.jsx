import React from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{
      boxShadow: '10px',
      color: 'black',
      borderRadius: '10px',
      backgroundColor: 'transparent',
      
    }}>
      <Tabs value={value} onChange={handleChange} textColor="inherit" sx={{ justifyContent: 'center' }}>
        <Tab label="About Us" />
        <Tab label="Models" />
        <Tab label="Predict" />
      </Tabs>
    </AppBar>
  );
}

export default NavBar;