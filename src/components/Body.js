import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Body.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

export default function Body() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', height: '85vh' }} className='body'>
      <TabContext value={value} className='body__content'>
        <Box className='body__header' sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Home" value="1" />
            <Tab label="Projects" value="2" />
            <Tab label="Interests" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Page1 /></TabPanel>
        <TabPanel value="2"><Page2 /></TabPanel>
        <TabPanel value="3"><Page3 /></TabPanel>
      </TabContext>
    </Box>
  );
}