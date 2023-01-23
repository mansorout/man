import React, { useState,useEffect } from 'react'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Checkbox, FormGroup, FormHelperText, Grid, Modal, Theme, Typography } from '@mui/material'
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
    searchCmp: {
        position: 'relative',
        '@media(max-width: 500px)': {
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
        right: '-300%',
        zIndex: '11',
        transition: 'all 0.3s ease-in-out',
        '@media(max-width: 400px)': {
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
    tabStyles: {
        '& button': {
            alignItems: 'flex-start !important',
        }
    },
    radioStyle: {
        // '& svg':{
        //     color: 'var(--primaryColor)',
        // },
        '& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
            color: 'var(--primaryColor)',
        }
    },
    showFilterBox: {
        right: '0px',
    },
    searchIconBox: {
        backgroundColor: 'var(--primaryColor)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
            style={{ overflow: 'scroll' }}
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

const enumSelectedType = {
    RADIO: 'radio',
    CHECKED: 'checked',
}

const enumTabsKey = {
    SORT: 'Sort',
    FUND_TYPE: 'Fund Type',
    FUND_HOUSE:'Fund House'
} 

interface SearchCmpProps {
    filtersOptions: any;
    searchBox?: boolean;
    searchKeysFun?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleCB: (e: any) => void;
}


const SearchCmp = (props: SearchCmpProps) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [filterBoxShowHide, setFilterBoxShowHide] = useState(false)
    const [chackedValuesArr, setChackedValuesArr] = useState<any>({
        'Sort' : '',
        'Fund Type' : '',
        'Fund House' : []
    })
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        // let temp = [...props.filtersOptions]
        let temp = JSON.parse(JSON.stringify(props.filtersOptions))
        if(temp && temp?.length){
            // const sortVal:string = temp[0].keyValues[temp[0].activeSortIndex].value;
            const sortVal:string = temp[0].keyValues[0].value;
            const fundTypeVal:string = temp[1].keyValues[temp[1].activeCategoryIndex];
            const checkedTemp = {...chackedValuesArr}
            checkedTemp[enumTabsKey.SORT] = sortVal;
            checkedTemp[enumTabsKey.FUND_TYPE] = fundTypeVal;
            console.log("chackedValuesArr temp:", temp,checkedTemp,temp[1].keyValues)
            setChackedValuesArr(checkedTemp)
        }
    }, [props.filtersOptions])
    
    
      useEffect(() => {
        console.log("chackedValuesArr :", chackedValuesArr)
        if(chackedValuesArr[enumTabsKey.SORT] && chackedValuesArr[enumTabsKey.SORT] !== '' && chackedValuesArr[enumTabsKey.FUND_TYPE] && chackedValuesArr[enumTabsKey.FUND_TYPE] !== ''){
            props.handleCB(chackedValuesArr)
        }
      }, [chackedValuesArr])
      

    const isExit = (data: any, changeType: any) => {
        // if (chackedValuesArr) {
            if (changeType === enumTabsKey.SORT) {
               return chackedValuesArr[enumTabsKey.SORT] === data ? true : false;
            } else if (changeType === enumTabsKey.FUND_TYPE) {
                return chackedValuesArr[enumTabsKey.FUND_TYPE] === data ? true : false;
            } else if (changeType === enumTabsKey.FUND_HOUSE) {
                // console.log("chackedValuesArr[enumTabsKey.FUND_HOUSE] :", chackedValuesArr[enumTabsKey.FUND_HOUSE], data)
                return chackedValuesArr[enumTabsKey.FUND_HOUSE].includes(data);
                // if (e.target.checked === true) {
                //     chackedValuesArr[enumTabsKey.FUND_HOUSE].push(data);
                //     setChackedValuesArr(chackedValuesArr)
                // } else {
                //     chackedValuesArr[enumTabsKey.FUND_HOUSE] = chackedValuesArr[enumTabsKey.FUND_HOUSE].filter((item: string) => item !== data)
                //     setChackedValuesArr(chackedValuesArr)
                // }
            }

        // }
    }

      const handleCheckedAndRadioChange = (e:any, data:any, changeType: any, index?:number) => {
          const temp = {...chackedValuesArr}
        //   console.log("data :", e.target.checked, data,changeType, temp, chackedValuesArr)
        if(changeType === enumTabsKey.SORT){
            temp[enumTabsKey.SORT] = data;
            setChackedValuesArr(temp)
        } else if(changeType === enumTabsKey.FUND_TYPE){
            temp[enumTabsKey.FUND_TYPE] = data;
            setChackedValuesArr(temp)
        }else if(changeType === enumTabsKey.FUND_HOUSE){
            if(e.target.checked === true){
                if(e.target.checked === true && index === 0){
                    const ids = props.filtersOptions[2].keyValues.map((item:any) => item !== 0 && item.providerid)
                    // ids.shift({
                    //     providerid:"0",
                    //     providername:"All"
                    //   })
                    temp[enumTabsKey.FUND_HOUSE] = ids;
                    setChackedValuesArr(temp)
                }else{
                        temp[enumTabsKey.FUND_HOUSE].push(data)
                        setChackedValuesArr(temp)
                    
                }
            }else if(e.target.checked === false && index === 0){
                temp[enumTabsKey.FUND_HOUSE] = [];
              setChackedValuesArr(temp)
            }else{
                temp[enumTabsKey.FUND_HOUSE] = temp[enumTabsKey.FUND_HOUSE].filter((item:string) => item !== data) 
                setChackedValuesArr(temp)
            }
        }
      }

    return (
        <Box className={classes.searchCmp}>
            {
                props?.searchBox === true  ? (
                    <TextField
                        id="outlined-basic"
                        label="Search fund"
                        variant="outlined"
                        size='small'
                        fullWidth
                        className={classes.searchFeild}
                        onChange={props?.searchKeysFun}
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
                ) : (
                    <Box className={classes.searchIconBox} onClick={() => setFilterBoxShowHide(true)}>
                        <FilterAltOutlinedIcon sx={{ color: 'var(--uiWhite)', cursor: 'pointer' }} />
                    </Box>
                )
            }
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
                            {/* <Tab label="Sort" {...a11yProps(0)} />
                            <Tab label="Policy Term" {...a11yProps(1)} />
                            <Tab label="Life Cover" {...a11yProps(2)} /> */}
                            {
                                props?.filtersOptions && props?.filtersOptions.length && props?.filtersOptions.map((item: any, index: number) => (
                                    <Tab label={item?.key} {...a11yProps(index)} />
                                ))
                            }
                        </Tabs>


                        {
                            props?.filtersOptions && props?.filtersOptions.length && props?.filtersOptions?.map((parentItem: any, parentIndex: number) => (
                                <TabPanel value={value} index={parentIndex}>
                                    {
                                        parentItem && parentItem?.selectType === enumSelectedType.RADIO ?
                                         (
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="highToLowReturn"
                                                    name="radio-buttons-group"
                                                    // value={props.sortValue}
                                                    // onChange={(e) => props.sortCb(e)}
                                                    // onChange={(e) => props.handleCB({parentItem,e})}
                                                    className={classes.radioStyle}
                                                >
                                                    
                                                    {
                                                        parentItem && parentItem?.key === enumTabsKey?.SORT ?
                                                        
                                                        parentItem && parentItem?.keyValues && parentItem?.keyValues?.length && parentItem?.keyValues?.map((nestedItem: any, childIndex: number) => (
                                                            
                                                            <FormControlLabel
                                                                className={classes.radioStyle}
                                                                value={nestedItem?.value}
                                                                control={<Radio checked={isExit(nestedItem?.value,enumTabsKey?.SORT )} />}
                                                                label={nestedItem?.label}
                                                                onChange={(e) => {
                                                                    handleCheckedAndRadioChange(e, nestedItem?.value, enumTabsKey?.SORT)
                                                            }}
                                                            />
                                                           

                                                        )) :
                                                        parentItem && parentItem?.key === enumTabsKey?.FUND_TYPE ?
                                                        parentItem && parentItem?.keyValues && parentItem?.keyValues?.length && parentItem?.keyValues?.map((nestedItem: any, childIndex: number) => (
                                                            <FormControlLabel
                                                                className={classes.radioStyle}
                                                                value={nestedItem}
                                                                control={<Radio checked={isExit(nestedItem,enumTabsKey?.FUND_TYPE )}/>}
                                                                label={nestedItem}
                                                                onChange={(e) => {
                                                                    handleCheckedAndRadioChange(e, nestedItem, enumTabsKey?.FUND_TYPE)
                                                            }}
                                                            />
                                                        )) : null
                                                    }
                                                </RadioGroup>
                                            </FormControl>
                                         ) : (
                                            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                                {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                                                <FormGroup>
                                                    
                                                {
                                                        parentItem?.keyValues && parentItem?.keyValues?.length && parentItem?.keyValues?.map((nestedItem: any, childIndex: number) => (
                                                            <FormControlLabel
                                                                className={classes.radioStyle}
                                                                value={nestedItem?.providerid}
                                                                control={<Checkbox checked={isExit(nestedItem?.providerid,enumTabsKey?.FUND_HOUSE )}
                                                                />}
                                                                label={nestedItem?.providername}
                                                                onChange={(e) => handleCheckedAndRadioChange(e, nestedItem?.providerid, enumTabsKey?.FUND_HOUSE, childIndex)}
                                                            />
                                                        ))
                                                    }
                                                    {/* <FormControlLabel
                                                        control={
                                                            <Checkbox checked={true} onChange={handleCheckedChange} name="gilad" />
                                                        }
                                                        label="Gilad Gray"
                                                    /> */}
        
                                                </FormGroup>
                                            </FormControl>
                                         )
                                    }

                                </TabPanel>
                            ))
                        }


                        {/* <TabPanel value={value} index={0}>
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
                                        props?.sort && props?.sort?.length && props?.sort?.map((sortItem: sortTypes) => (
                                            <FormControlLabel className={classes.radioStyle} value={sortItem.value} control={<Radio />} label={sortItem.label} />
                                        ))
                                    }
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
                                   props?.policyTerm && props?.policyTerm?.length &&  props?.policyTerm?.map((policyTermItem: radioTypes) => (
                                        <FormControlLabel className={classes.radioStyle} value={policyTermItem.value} control={<Radio />} label={policyTermItem.label} />
                                    ))
                                }
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
                                     props?.lifeCover && props?.lifeCover?.length &&  props?.lifeCover?.map((lifeCoverItem: radioTypes) => (
                                        <FormControlLabel className={classes.radioStyle} value={lifeCoverItem.value} control={<Radio />} label={lifeCoverItem.label} />
                                    ))
                                }
                                </RadioGroup>
                            </FormControl>
                        </TabPanel> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SearchCmp