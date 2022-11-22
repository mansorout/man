import * as React from 'react';
//import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
 
import SearchAppBar from './SearchAppBar';
import { Grid, Stack } from '@mui/material';
import TransactionsDatacard from './TransactionsDatacard';



interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}





export default function TabPanelItems() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

 

 

  return (
  <>
   
      <AppBar position="static"  sx={{backgroundColor:"white",  width: "100%",height: "fit-content",overflowx: "auto"
     }} >
        <Stack sx={{ height:"60px",backgroundColor:"#f9f9f9"}}><Typography sx={{margin: "19px 0px 0px 57px"}}className='portfoliotext'>Portfolio</Typography></Stack>
        
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
           
        >
          <Tab label="Holdings" />
          <Tab label="Transactions"/>
          <Tab label="SIPs"  />
          <Tab label="Reports"  />
        </Tabs>
        
      </AppBar>
      
      <SearchAppBar />
      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}

    <Box sx={{     height: "inherit", width:"100%"}}>
    <TabPanel  value={value} index={0} dir={theme.direction} >
            
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
       
        <TransactionsDatacard   />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          
        </TabPanel>
    </Box>
      {/* </SwipeableViews> */}
     
    </>
  );
}
