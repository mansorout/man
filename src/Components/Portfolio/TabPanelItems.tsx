import * as React from 'react';
//import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
 
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
   {/* <Stack sx={{ height:"60px",backgroundColor:"#f9f9f9"}}><Typography sx={{margin: "19px 0px 0px 57px"}}className='portfoliotext'>Portfolio</Typography></Stack> */}
      <AppBar position="static"  sx={{
        backgroundColor:"white",  
        width: "78.75vw",
        height: "62px",
        overflowx: "auto",
        borderRadius:"8px", 
        boxShadow:"0 1px 5px 0 rgba(0,0,0,0.12)",
        marginTop:"128px"
     }}>
        
        
        <Tabs
          sx={{marginTop:"17px"}}
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: { backgroundColor: "#23db7b",height: 3 }
          }}
         
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
     
    </>
  );
}
