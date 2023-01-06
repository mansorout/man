


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


import { Checkbox, createMuiTheme, FormControlLabel, InputAdornment, Paper, Stack, TextField } from '@mui/material';
import { RadioButtonChecked, RadioButtonUncheckedOutlined } from '@mui/icons-material';
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Button,  Menu, MenuItem, Theme, useTheme, createStyles } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Divider from "@mui/material/Divider";
import { Box, styled } from '@mui/system'
import { Grid, Modal, Typography } from '@mui/material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { NavToggleAction } from '../../Store/Duck/NavToggle'
import ClearIcon from '@mui/icons-material/Clear';
import { AnchorCloseAction, AnchorOpenAction } from '../../Store/Duck/FilterBox';


//  custom theme for tab panel 

const useStyles: any = makeStyles((theme: Theme) => createStyles({

    tabTwo: {
        "&.MuiButtonBase-root.MuiTab-root": {
            //   backgroundColor: "green"
        }
    },
    tabThree: {
        "&.MuiButtonBase-root.MuiTab-root": {
            //   backgroundColor: "yellow"
        }
    },
    tabs: {

        "& .MuiTabs-indicator": {
            display: "none"
            //backgroundColor: "orange"
        },

        "& .MuiButtonBase-root.MuiTab-root": {
            fontSize: 20
        },

        "& .Mui-selected": {
            //   textDecoration: "underline",
            backgroundColor: "#fff",
            color: "red",


        }
    }
}));






interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}






const style = {


    main: {
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9",
        height: "100vh"
    } as React.CSSProperties,
    drawer: {
        zIndex: "500",
        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
    } as React.CSSProperties,
    image: {
        width: '176px',
    } as React.CSSProperties,
    profileContainer: {
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
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    profile: {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid white"
    },
    profileInter: {
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
    } as React.CSSProperties,
    menuButton: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0px"
    } as React.CSSProperties,
    menuText: {
        color: "black",
        fontSize: "10px",
        fontWeight: "500",
        padding: "5px 10px",
        borderRadius: "4px",
        backgroundColor: "#ffc300",
        cursor: "pointer"
    },
    menuText2: {
        padding: "6px 12px",
        borderRadius: "4px",
        border: "solid 1px #23db7b",
        backgroundColor: "rgba(35, 219, 123, 0.12)",
        fontSize: "12px",
        fontWeight: "500",
        color: "#09b85d",
        cursor: "pointer"
    },
    button: {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "none",
        backgroundColor: "white",
        textAlign: "left",
        justifyContent: "flex-start",
    } as React.CSSProperties,
    menuIcon: {
        color: "#6c63ff",
        fontSize: "24px"
    },
    appBar: {
        backgroundColor: "white",
    },
    modalContainer: {
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    } as React.CSSProperties,
    logo: {
        width: "50px",
        padding: "20px 0px",
    } as React.CSSProperties,

}

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












export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}






function HealthFilter() {

    const navigate = useNavigate()
    const classes = useStyles();


    const handleTimePeriodChange = (index: number) => {
        index === 0 ?
            setTimePeriodSelected([true, false, false, false,false,false])
            : index === 1 ? setTimePeriodSelected([false, true, false, false,false])
                : index === 2 ? setTimePeriodSelected([false, false, true, false,false])
                : index === 3 ? setTimePeriodSelected([false, false,false,true,false,false])
                : index === 4 ? setTimePeriodSelected([false, false,false,false, true, false])
                    : setTimePeriodSelected([false, false, false,false,false, true])
    }

    const [timePeriodSelected, setTimePeriodSelected] = React.useState<boolean[]>([true, false, false, false,false,false])

    const [opennew, setOpenNew] = React.useState<boolean>();

    const [date, setDate] = React.useState<boolean>();

    const [valuedate, setValuedate] = React.useState<Date | null>(
        new Date('2022-11-24T21:11:54'),
    );

    const handleChange = (newValuedate: Date | null) => {
        setValuedate(newValuedate);
    };





    const handleClickOpen = () => {
        setOpen(true);
    };


    const [value, setValue] = React.useState(0);

    const handleChangemodal = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const dispatch: any = useDispatch()
    const { toggleState }: any = useSelector((state: any) => state.NavToggleReducer)

    const [open, setOpen] = useState<boolean>(false)
    const menuActions = React.useRef<MenuUnstyledActions>(null);





    const [anchorEl, setAnchorEl] = useState<any>()

    // const handleFilterClose = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {

    //     anchorEl ?
    //         setAnchorEl(null) :
    //         setAnchorEl(event.currentTarget)
    // };



    const handleClose = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {

        dispatch(AnchorCloseAction())
    }

    const { Anchor }: any = useSelector((state: any) => state.filterbox)

    const handleMenuOpen = () => {
        dispatch(NavToggleAction(!toggleState))
    }

    return (
        <>





            <MenuUnstyled
                style={{ transform: "translate(-78px, 10px ! important)" }}
                // style={{ zIndex: 5000 }}
                actions={menuActions}
                open={Boolean(Anchor)}
                // onClose={()=>dispatch(AnchorCloseAction())}
                anchorEl={Anchor}
            >
                <StyledMenuItem>

                    <Paper sx={{
                        flexGrow: 1, width: 531, transform: "translate(-51%, 10px)", padding: "12px 0 50px",
                        borderRadius: "8px 8px 0px 0px",
                        boxShadow: " 0 1px 5px 0 rgba(0, 0, 0, 0.16)"
                    }}>
                        <Grid container spacing={0}>
                            <Grid item xs={8}>
                                <Typography sx={{
                                    margin: "4px 92px 16px 16px",
                                    fontFamily: "Roboto",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: " #3c3e42"
                                }}>
                                    Filter
                                </Typography>
                                <Divider  sx={{paddinngLeft:"50px"}}/>
                            </Grid>
                        
                            <Grid item xs={4} sx={{ textAlign: "end" }}>
                                <ClearIcon onClick={(e) => handleClose(e)} sx={{ marginRight: "13px", opacity: 0.54 }} />
                            </Grid>


                            <Grid item xs={4}>
                                <Box sx={{
                                    //  textAlign:"left",
                                    backgroundColor: "#F8F8F8", width: "100%"
                                }}>
                                    <Tabs
                                        className={classes.tabs}
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChangemodal}
                                    // aria-label="Vertical tabs example"
                                    // sx={{ borderRight: 1, borderColor: 'red' }}
                                    >
                                        <Tab label={<Box sx={{ color: "#7b7b9d", fontSize: "12px !important", fontWeight: "500", textAlign: "left" }}>Room Rent</Box>} {...a11yProps(0)} />


                                        <Tab label={<Box sx={{ color: "#3c3e42", fontSize: "12px !important", fontWeight: "500", textAlign: "left" }}>No Claim Bonus</Box>} {...a11yProps(1)} />

                                        <Tab label={<Box sx={{ color: "#3c3e42", fontSize: "12px !important", fontWeight: "500", textAlign: "left" }}>PED Waiting Period</Box>} {...a11yProps(2)} />

                                        {/* <Tab label={<Box sx={{ color: "#7b7b9d", fontSize: "12px !important", fontWeight: "500", textAlign: "left", width: "max-content" }}>Transaction Type</Box>} {...a11yProps(3)} /> */}

                                        {/* <Tab label={<Box sx={{ color: "#7b7b9d", fontSize: "12px !important", fontWeight: "500", textAlign: "left", width: "max-content" }}>Transaction Status</Box>} {...a11yProps(4)} /> */}
                                    </Tabs>
                                </Box>

                            </Grid>



                            <Grid item xs={8}>

                                <Box sx={{ backgroundColor: "white ", width: "100%" }}>
                                    <TabPanel value={value} index={0}>


                                        <Box style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>

                                        <Box style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(0)} checked={timePeriodSelected[0]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[0] ? '#3c3e42' : "#7b7b9d"}` }}>No Preference </Box>} />

                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(1)} checked={timePeriodSelected[1]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[1] ? '#3c3e42' : "#7b7b9d"}` }}>No Room Rent Limit</Box>} />

                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(2)} checked={timePeriodSelected[2]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[3] ? '#3c3e42' : "#7b7b9d"}` }}>Shared Room</Box>} />
                                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(3)} checked={timePeriodSelected[3]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[4] ? '#3c3e42' : "#7b7b9d"}` }}>Single Private Room (Non..</Box>} />
                                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(4)} checked={timePeriodSelected[4]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[5] ? '#3c3e42' : "#7b7b9d"}` }}>Single Private Room (AC)</Box>} />

                                        </Box>







                                   

                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Box style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                                        <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(0)} checked={timePeriodSelected[0]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[0] ? '#3c3e42' : "#7b7b9d"}` }}>All</Box>} />
                                                                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(1)} checked={timePeriodSelected[1]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[1] ? '#3c3e42' : "#7b7b9d"}` }}>0% - 20%</Box>} />
                                                                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(2)} checked={timePeriodSelected[2]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[2] ? '#3c3e42' : "#7b7b9d"}` }}>20% - 50%</Box>} />
                                                                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(3)} checked={timePeriodSelected[3]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[3] ? '#3c3e42' : "#7b7b9d"}` }}>50% - 150%</Box>} />
                                                                                                       <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(4)} checked={timePeriodSelected[4]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[4] ? '#3c3e42' : "#7b7b9d"}` }}>150% +</Box>} />

                                        </Box>
                                    </TabPanel>
                                
                                    <TabPanel value={value} index={2}>
                                    <Box style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                                        <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(0)} checked={timePeriodSelected[0]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[0] ? '#3c3e42' : "#7b7b9d"}` }}>No Preference</Box>} />
                                                                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(1)} checked={timePeriodSelected[1]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[1] ? '#3c3e42' : "#7b7b9d"}` }}>Covered after 2 years or</Box>} />
                                                                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(3)} checked={timePeriodSelected[3]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[3] ? '#3c3e42' : "#7b7b9d"}` }}>Covered after 3 years or</Box>} />
                                                                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(4)} checked={timePeriodSelected[4]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label={<Box style={{ fontSize: "14px", color: `${timePeriodSelected[4] ? '#3c3e42' : "#7b7b9d"}` }}>Covered after 4 years or</Box>} />
                                                                                                    

                                        </Box>
                                    </TabPanel>
                                 
       

                                </Box>
                              
                            </Grid>
                        </Grid>

                    </Paper>

                </StyledMenuItem>
            </MenuUnstyled>

        </>
    )
}

export default HealthFilter

{/* <Route path='/dropdown' element={<DropDownFilter />} /> */ }