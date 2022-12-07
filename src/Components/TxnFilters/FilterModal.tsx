

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox,FormControlLabel, Grid, InputAdornment, Paper, Stack, TextField } from '@mui/material';
import { RadioButtonChecked, RadioButtonUncheckedOutlined } from '@mui/icons-material';
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ClearIcon from '@mui/icons-material/Clear';
import Divider from '@mui/material/Divider';



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
    button3: {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",

        marginTop: "20px",
    } as React.CSSProperties,
    text: {
        color: "white"
    },
    button2: {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",
        width: "100%",
        maxWidth: "400px",
        minWidth: "250px",
        marginTop: "20px",
    } as React.CSSProperties,
}







const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));




export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}



function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}





export default function FilterModal(props: any) {

    const AntTabs = styled(Tabs)({
        borderBottom: '1px solid #e8e8e8',
        '& .MuiTabs-indicator': {
            backgroundColor: 'white',
        },
    });



    //     export default function MaterialUIPickers() {
    //   const [value, setValue] = React.useState<Dayjs | null>(
    //     dayjs('2014-08-18T21:11:54'),
    //   );

    //   const handleChange = (newValue: Dayjs | null) => {
    //     setValue(newValue);
    //   };


    const handleTimePeriodChange = (index: number) => {
        index === 0 ?
            setTimePeriodSelected([true, false, false, false])
            : index === 1 ? setTimePeriodSelected([false, true, false, false])
                : index === 2 ? setTimePeriodSelected([false, false, true, false])
                    : setTimePeriodSelected([false, false, false, true])
    }

    const [timePeriodSelected, setTimePeriodSelected] = React.useState<boolean[]>([true, false, false, false])

    const [opennew, setOpenNew] = React.useState<boolean>();

    const [date, setDate] = React.useState<boolean>();

    const [valuedate, setValuedate] = React.useState<Date | null>(
        new Date('2022-11-24T21:11:54'),
    );

    const handleChange = (newValuedate: Date | null) => {
        setValuedate(newValuedate);
    };



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState(0);

    const handleChangemodal = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (



        <>


            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>


            <BootstrapDialog


                aria-labelledby="customized-dialog-title"
                open={props.open}

            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={props.close}>
                    Filters
                </BootstrapDialogTitle>


                <DialogContent dividers>

                    <Paper sx={{
                        flexGrow: 1, width: 400, padding: "12px 0 0",
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
                                    color:" #3c3e42"
                                }}>
                                    Filter
                                </Typography>

                            </Grid>
                            <Grid item xs={4} sx={{textAlign:"end"}}>
                                <ClearIcon sx={{opacity: 0.54}} />
                            </Grid>
                           <Box>
                           <Divider />
                           </Box>


                            <Grid item xs={4}>
                                <Box sx={{

                                    backgroundColor: "#F8F8F8", width: "100%"
                                }}>
                                    <Tabs
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChangemodal}
                                        aria-label="Vertical tabs example"
                                        sx={{ borderRight: 1, borderColor: 'divider' }}
                                    >
                                        <Tab label="Sort" {...a11yProps(0)} />
                                        <Tab label="Date Range" {...a11yProps(1)} />
                                        <Tab label="Amount Range" {...a11yProps(2)} />
                                        <Tab label="Transaction Type" {...a11yProps(3)} />
                                        <Tab label="Transaction Status" {...a11yProps(4)} />
                                    </Tabs>
                                </Box>

                            </Grid>



                            <Grid item xs={8}>

                                <Box sx={{ backgroundColor: "white ", width: "100%" }}>
                                    <TabPanel value={value} index={0}>


                                        <Box style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(0)} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="Date - Latest to Older" />

                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(0)} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="Date - Older to Latest" />
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(0)} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="Amount - High to Low" />
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(0)} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="Amount - Low to High" />
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Box style={{ display: "flex", alignItems: "center", justifyContent: 'center', padding: "20px", flexDirection: "column", gap: "30px" }}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <Stack spacing={3}>
                                                    <DesktopDatePicker
                                                        label="Date desktop"
                                                        inputFormat="MM/DD/YYYY"
                                                        value={value}
                                                        onChange={handleChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                    <DesktopDatePicker
                                                        label="Date desktop"
                                                        inputFormat="MM/DD/YYYY"
                                                        value={value}
                                                        onChange={handleChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />



                                                </Stack>
                                            </LocalizationProvider>

                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                                            <div>
                                                <TextField
                                                    label="Min. Transaction Amount"
                                                    id="outlined-start-adornment"
                                                    sx={{ m: 1, width: "25ch" }}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon sx={{ color: "#3c3e42", fontSize: "18px" }} /></InputAdornment>
                                                    }}
                                                />
                                                <TextField
                                                    label="Max. Transaction Amount"
                                                    id="outlined-start-adornment"
                                                    sx={{ m: 1, width: "25ch" }}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon sx={{ color: "#3c3e42", fontSize: "18px" }} /></InputAdornment>
                                                    }}
                                                />
                                            </div>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={value} index={3}>
                                        <Box style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(0)} checked={timePeriodSelected[0]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="All" />
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(1)} checked={timePeriodSelected[1]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="Buy" />
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(2)} checked={timePeriodSelected[2]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="Redeem" />

                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={value} index={4}>
                                        <Box style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(0)} checked={timePeriodSelected[0]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="All" />
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(1)} checked={timePeriodSelected[1]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="Successfull" />
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(2)} checked={timePeriodSelected[2]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="Pending Confirmation" />
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(3)} checked={timePeriodSelected[3]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="Rejected" />

                                        </Box>
                                    </TabPanel>

                                </Box>
                                <Grid container spacing={2} >
                                    <Grid sx={{ textAlign: "end", margin: "3px 12px 12px 77px" }} item xs={12}>
                                        <Button sx={{ backgroundColor: "#23db7b", borderRadius: "0", padding: "15px 46px 14px" }} autoFocus onClick={handleClose}>
                                            <Typography sx={{ color: "white", fontSize: " 13px" }}>
                                                Apply Filters
                                            </Typography>
                                        </Button>

                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>

                    </Paper>

                </DialogContent>

            </BootstrapDialog>

        </>

    );
}



