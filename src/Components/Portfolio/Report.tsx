
import './Portfolio.css'
import { Box, minWidth, styled } from '@mui/system'
import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Drawer as DrawerList,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, RadioButtonChecked, RadioButtonUncheckedOutlined, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider,  Theme} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Logo, Profile} from '../../Assets/index'
import { useNavigate } from 'react-router-dom'
import { LocalizationProvider, DesktopDatePicker, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'


const StyledMenuItem = styled(MenuItemUnstyled)(
  ({ theme: Theme }) => `
  list-style: none;
  border-radius: 8px;
  width: 300px;
  boxSizing: border-box;
  zIndex: 4000;
  &.${menuItemUnstyledClasses.focusVisible} {
    outline: none;
  }
  `,
);
 
function Report() {

  const useStyles : any = makeStyles((theme: Theme) => ({
    appbar: {
      backgroundColor:"white",
      width:"100%",
      height:"64px",
      position:"fixed",
      zIndex: "3000",
    },
  }));

  

  const style = {
    main: {
      boxSizing:"border-box",
      backgroundColor:"#f9f9f9",
      height:"100vh"
    } as React.CSSProperties,
    drawer : {
      zIndex: "500",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
    }as React.CSSProperties,
    image : {
      width: '176px',
    } as React.CSSProperties,
    profileContainer : {
      borderRadius: "8px",
      border: "solid 1px #4f46de",
      backgroundColor: "#6c63ff",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer"
    },
    toolbar : {
      display: "flex",
      justifyContent: "space-between"
    },
    profile : {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: "1px solid white"
    },
    profileInter : {
      width: "40px",
      height: "40px",
      border: "solid 1px rgba(75, 123, 236, 0.49)",
      borderRadius: "50%"
    },
    menuContainer: {
      boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
      boxSizing: "border-box",
      padding: "10px",
      backgroundColor: "white",
      marginRight: "20px"
    }as React.CSSProperties,
    menuButton: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0px"
    }as React.CSSProperties,
    menuText : {
      color : "black",
      fontSize : "10px",
      fontWeight : "500",
      padding:"5px 10px",
      borderRadius : "4px",
      backgroundColor : "#ffc300",
      cursor:"pointer"
    },
    menuText2 : {
      padding: "6px 12px",
      borderRadius: "4px",
      border: "solid 1px #23db7b",
      backgroundColor: "rgba(35, 219, 123, 0.12)",
      fontSize: "12px",
      fontWeight: "500",
      color : "#09b85d",
      cursor : "pointer"
    },
    button : {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "none",
        backgroundColor: "white",
        textAlign: "left",
        justifyContent: "flex-start",
    } as React.CSSProperties,
    menuIcon : {
      color : "#6c63ff",
      fontSize: "24px"
    },
    appBar: {
      backgroundColor : "white",
    },
    logo : {
      width: "50px",
      padding: "20px 0px",
    } as React.CSSProperties,
    button2 : {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      width:"100%",
      maxWidth:"400px",
      minWidth:"250px",
      marginTop:"20px",
  } as React.CSSProperties,
  button3 : {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      
      marginTop:"20px",
  } as React.CSSProperties,
  text : {
      color: "white"
  }
  }

  const [open, setOpen] = useState<boolean>(false)

  const menuActions = React.useRef<MenuUnstyledActions>(null);

  const [optSelected, setOptSelected] = useState<boolean[]>([true, false, false, false])
  const [timePeriodSelected, setTimePeriodSelected] = useState<boolean[]>([true, false, false, false])

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    anchorEl ? 
    setAnchorEl(null) :
    setAnchorEl(event.currentTarget)
  };

  const [value, setValue] = React.useState<Date | null>(
    new Date('2022-11-24T21:11:54'),
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const handleOptChange =  (index : number) => {
    index === 0 ?
      setOptSelected([true, false, false, false])
      : index === 1 ? setOptSelected([false, true, false, false])
      : index === 2 ? setOptSelected([false, false, true, false])
      : setOptSelected([false, false, false, true])
  }

  const handleTimePeriodChange =  (index : number) => {
    index === 0 ?
      setTimePeriodSelected([true, false, false, false])
      : index === 1 ? setTimePeriodSelected([false, true, false, false])
      : index === 2 ? setTimePeriodSelected([false, false, true, false])
      : setTimePeriodSelected([false, false, false, true])
  }

  const classes = useStyles()

  const refContainer = useRef();

  const navigate = useNavigate();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box style={{width: "100vw"}} ref={refContainer}>
        <Navbar/>
          <Box  sx={style.main}>
          <Grid container spacing={0} >
            <Grid  item xs={0} sm={1} md={2}>
              <Toolbar/>
              <Sidebar/>
            </Grid>
            <Grid container sx={{height:"100vh", overflow:"scroll"}} xs={12} sm={11} md={10}>
              <Grid sx={{height: { xs: "auto", sm: "inherit"}, padding:0, boxSizing:"border-box", overflow:{ sx: "auto", sm: "scroll"}}} item xs={13}>
                <Toolbar/>
                <Grid container>
                  <Grid item xs={12} sx={{padding:2}}>
                  <Box style={{marginBottom:"20px", padding:"15px", borderRadius:"8px", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>
                      <Box style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"90%", maxWidth:"600px", flexWrap:"wrap", gap:"20px"}}>
                      <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/holdings')}>Holdings</Typography>
                      
                      <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/transactions')}>Transactions</Typography>
                      <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/sips')}>SIPs</Typography>
                      <Box style={{position:"relative", display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Typography style={{color:"#3c3e42", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/reports')}>Reports</Typography>
                        <Box style={{position:"absolute", bottom:"0px", padding:"1px", backgroundColor:"#23db7b", width:"106%"}}></Box>
                      </Box>
                    </Box>
                    </Box>
                    <Box style={{padding:"15px", borderRadius:"8px", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor:"white"}}>
                      <Typography style={{marginBottom:"20px", color:"#3c3e42", fontSize:"16px", fontWeight:"500"}}>Download Reports</Typography>
                      <Box style={{flexWrap:"wrap", marginBottom:"20px", maxWidth:"800px", display:"flex", alignItems:"center", gap:"20px", justifyContent:"space-between"}}>
                        <FormControlLabel
                          control={<Checkbox onChange={()=>handleOptChange(0)} checked={optSelected[0]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                          label="Portfolio" />
                        <FormControlLabel
                          control={<Checkbox onChange={()=>handleOptChange(1)} checked={optSelected[1]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                          label="Transaction History" />
                        <FormControlLabel
                          control={<Checkbox onChange={()=>handleOptChange(2)} checked={optSelected[2]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                          label="Systematic Plans (SIPs)" />
                        <FormControlLabel
                          control={<Checkbox onChange={()=>handleOptChange(3)} checked={optSelected[3]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                          label="Capital Gain" />
                      </Box>
                      <Divider style={{marginBottom:"20px"}}/>
                      {
                        optSelected[0] ? 
                              <Box style={{display:"flex", alignItems:"center", justifyContent:'center', padding:"20px", flexDirection:"column", gap:"30px"}}>
                                <DatePicker
                                  label="Start Date"
                                  inputFormat="mm/dd/yyyy"
                                  value={value}
                                  onChange={handleChange}
                                  renderInput={(param : any) => <TextField sx={{width:"400px"}} {...param} />}
                                  components={{
                                    OpenPickerIcon: CalendarTodayIcon,
                                  }}
                                />
                                <DatePicker
                                  label="End Date"
                                  inputFormat="mm/dd/yyyy"
                                  value={value}
                                  onChange={handleChange}
                                  renderInput={(param : any) => <TextField sx={{width:"400px"}} {...param} />}
                                  components={{
                                    OpenPickerIcon: CalendarTodayIcon,
                                  }}
                                />
                                <Button variant="contained" style={style.button2} fullWidth>
                                    <Typography component="span" style={style.text} className="largeButtonText">Get Report</Typography>
                                </Button>
                              </Box> :
                        optSelected[1] ?
                              <Box style={{display:"flex", alignItems:"center", justifyContent:'center', padding:"20px", flexDirection:"column", gap:"30px"}}>
                              <DatePicker
                                label="Start Date"
                                inputFormat="mm/dd/yyyy"
                                value={value}
                                onChange={handleChange}
                                renderInput={(param : any) => <TextField sx={{width:"400px"}} {...param} />}
                                components={{
                                  OpenPickerIcon: CalendarTodayIcon,
                                }}
                              />
                              <DatePicker
                                label="End Date"
                                inputFormat="mm/dd/yyyy"
                                value={value}
                                onChange={handleChange}
                                renderInput={(param : any) => <TextField sx={{width:"400px"}} {...param} />}
                                components={{
                                  OpenPickerIcon: CalendarTodayIcon,
                                }}
                              />
                              <Button variant="contained" style={style.button2} fullWidth>
                                  <Typography component="span" style={style.text} className="largeButtonText">Get Report</Typography>
                              </Button>
                            </Box> :
                        optSelected[2] ?
                            <Box style={{display:"flex", alignItems:"center", justifyContent:'center', padding:"20px", flexDirection:"column", gap:"30px"}}>
                              <Box>
                                <Typography style={{marginBottom:"20px", color:"#3c3e42", fontSize:"16px", fontWeight:"500"}}>Select a Time Period</Typography>
                                <Box style={{display:"flex", flexDirection:"column", marginBottom:"10px"}}>
                                  <FormControlLabel
                                    control={<Checkbox onChange={()=>handleTimePeriodChange(0)} checked={timePeriodSelected[0]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                                    label="All" />
                                  <FormControlLabel
                                    control={<Checkbox onChange={()=>handleTimePeriodChange(1)} checked={timePeriodSelected[1]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                                    label="Active" />
                                  <FormControlLabel
                                    control={<Checkbox onChange={()=>handleTimePeriodChange(2)} checked={timePeriodSelected[2]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                                    label="Stopped" />
                                  <FormControlLabel
                                    control={<Checkbox onChange={()=>handleTimePeriodChange(3)} checked={timePeriodSelected[3]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                                    label="Mandate Pending" />
                                </Box>
                                <Button variant="contained" style={style.button2} fullWidth>
                                    <Typography component="span" style={style.text} className="largeButtonText">Get Report</Typography>
                                </Button>
                              </Box>
                            </Box> :
                            <Box style={{display:"flex", alignItems:"center", justifyContent:'center', padding:"20px", flexDirection:"column", gap:"30px"}}>
                              <Box>
                                <Typography style={{marginBottom:"20px", color:"#3c3e42", fontSize:"16px", fontWeight:"500"}}>Select a Time Period</Typography>
                                <Box style={{display:"flex", flexDirection:"column", marginBottom:"10px"}}>
                                  <FormControlLabel
                                    control={<Checkbox onChange={()=>handleTimePeriodChange(0)} checked={timePeriodSelected[0]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                                    label="All" />
                                  <FormControlLabel
                                    control={<Checkbox onChange={()=>handleTimePeriodChange(1)} checked={timePeriodSelected[1]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                                    label="Capital Gain" />
                                  <FormControlLabel
                                    control={<Checkbox onChange={()=>handleTimePeriodChange(2)} checked={timePeriodSelected[2]} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b"}}/>}/> }
                                    label="Capital Loss" />
                                 </Box>
                                <DatePicker
                                  label="Select Financial Year"
                                  inputFormat="yyyy - yyyy"
                                  value={value}
                                  onChange={handleChange}
                                  renderInput={(param : any) => <TextField {...param} />}
                                  components={{
                                    OpenPickerIcon: CalendarTodayIcon,
                                  }}
                                />
                                <Button variant="contained" style={style.button3} fullWidth>
                                    <Typography component="span" style={style.text} className="largeButtonText">Get Report</Typography>
                                </Button>
                              </Box>
                            </Box>
                      }
                    </Box>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
          </Box>
      </Box>
    </LocalizationProvider>
  )
}

export default Report