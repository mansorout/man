import React,{useState} from 'react'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { type } from 'os';


const useStyles: any = makeStyles((theme: Theme) => ({
    searchCmp:{
        position: 'relative',
        '@media(max-width: 500px)':{
            margin: '15px 0px'
        }
    },
    searchFeild: {
        backgroundColor: 'var(--uiWhite)',
        // boxShadow: 'var(--themeShadow)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.05)',
    },
    filterBox: {
        marginTop: '15px',
        borderRadius: '8px',
        backgroundColor: 'var(--uiWhite)',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.16)',
        position: 'absolute',
        top: '100%',
        minWidth: '100%',
        width: '360px',
        right: '-200%',
        zIndex: '11',
        transition: 'all 0.3s ease-in-out',
        '@media(max-width: 400px)':{
            width: '270px',
        }
    },
    filterHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px 10px',
        borderBottom: '1px solid var(--uiDarkGreyColor)'
    },
    filterOptions: {

    },
    tabStyles:{
        '& button':{
            alignItems: 'flex-start !important',
        }
    },
    radioStyle:{
        // '& svg':{
        //     color: 'var(--primaryColor)',
        // },
        '& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked':{
            color: 'var(--primaryColor)',
        }
    },
    showFilterBox:{
        right: '0px',
    }
}))


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
            style={{overflow: 'scroll'}}
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

type radioTypes = {
    value: number;
    label: string;
}
type sortTypes = {
    value: string;
    label: string;
}

interface SearchCmpProps {
    sort: sortTypes[];
    policyTerm: radioTypes[];
    lifeCover: radioTypes[];
    sortValue: string;
    policyTermValue: number | null;
    lifeCoverValue: number | null;
    sortCb: (event: React.ChangeEvent<HTMLInputElement>) => void;
    policyTermCb: (event: React.ChangeEvent<HTMLInputElement>) => void;
    lifeCoverCb: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const SearchCmp = (props: SearchCmpProps) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [filterBoxShowHide, setFilterBoxShowHide] = useState(false)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Box className={classes.searchCmp}>
            <TextField
                id="outlined-basic"
                label="Search funds..."
                variant="outlined"
                size='small'
                fullWidth
                className={classes.searchFeild}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="start" onClick={() => setFilterBoxShowHide(true)}>
                            <FilterAltOutlinedIcon sx={{ color: 'var(--primaryColor)', cursor: 'pointer' }} />
                        </InputAdornment>
                    ),
                }}
            />
            {/* <div>SearchCmp</div> */}
            <Box className={`${classes.filterBox} ${filterBoxShowHide ? classes.showFilterBox : ''}`}>
                <Box className={classes.filterHeader}>
                    <Typography component='p' sx={{ padding: '0px 15px', color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500 }}>Filters</Typography>
                    <CloseOutlinedIcon onClick={() => setFilterBoxShowHide(false)} sx={{ color: 'var(--uiDarkGreyColor)', cursor: 'pointer' }} />
                </Box>
                <Box className={classes.filterOptions}>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                            className={classes.tabStyles}
                        >
                            <Tab label="Sort" {...a11yProps(0)} />
                            <Tab label="Policy Term" {...a11yProps(1)} />
                            <Tab label="Life Cover" {...a11yProps(2)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="highToLowReturn"
                                    name="radio-buttons-group"
                                    value={props.sortValue}
                                    onChange={(e) => props.sortCb(e)}
                                    className={classes.radioStyle}
                                >
                                    {
                                        props.sort.map((sortItem: sortTypes) => (
                                            <FormControlLabel className={classes.radioStyle} value={sortItem.value} control={<Radio />} label={sortItem.label} />
                                        ))
                                    }
                                    {/* <FormControlLabel className={classes.radioStyle} value="female" control={<Radio />} label="Return - High to Low" />
                                    <FormControlLabel className={classes.radioStyle} value="male" control={<Radio />} label="Rating - High to Low" />
                                    <FormControlLabel className={classes.radioStyle} value="other" control={<Radio />} label="Fund Size - High to Low" /> */}
                                </RadioGroup>
                            </FormControl>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    className={classes.radioStyle}
                                    onChange={(e) => props.policyTermCb(e)}
                                >
                                {
                                    props.policyTerm.map((policyTermItem: radioTypes) => (
                                        <FormControlLabel className={classes.radioStyle} value={policyTermItem.value} control={<Radio />} label={policyTermItem.label} />
                                    ))
                                }
                                    {/* <FormControlLabel value="5" control={<Radio />} label="5 Years" />
                                    <FormControlLabel value="7" control={<Radio />} label="7 Years" />
                                    <FormControlLabel value="10" control={<Radio />} label="10 Years" />
                                    <FormControlLabel value="15" control={<Radio />} label="15 Years" />
                                    <FormControlLabel value="20" control={<Radio />} label="20 Years" />
                                    <FormControlLabel value="25" control={<Radio />} label="25 Years" /> */}
                                </RadioGroup>
                            </FormControl>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    className={classes.radioStyle}
                                    onChange={(e) => props.lifeCoverCb(e)}
                                >
                                {
                                    props.lifeCover.map((lifeCoverItem: radioTypes) => (
                                        <FormControlLabel className={classes.radioStyle} value={lifeCoverItem.value} control={<Radio />} label={lifeCoverItem.label} />
                                    ))
                                }
                                    {/* <FormControlLabel value="500000" control={<Radio />} label="₹5 Lacs" />
                                    <FormControlLabel value="1500000" control={<Radio />} label="₹15 Lacs" />
                                    <FormControlLabel value="5000000" control={<Radio />} label="₹50 Lacs" />
                                    <FormControlLabel value="7500000" control={<Radio />} label="₹75 Lacs" />
                                    <FormControlLabel value="10000000" control={<Radio />} label="₹1 Crore" />
                                    <FormControlLabel value="250000000" control={<Radio />} label="₹10 Crore" /> */}
                                </RadioGroup>
                            </FormControl>
                        </TabPanel>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SearchCmp