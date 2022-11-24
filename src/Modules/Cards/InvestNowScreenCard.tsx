import { Box, Grid, Typography } from '@mui/material'
import Paper from "@mui/material/Paper";
import { cameraIcon, ellipslogo, Mylocationicon } from "../../Assets/index";
import { girlicon } from '../../Assets/index'
import { girliconicon } from '../../Assets/index'
import { manicon } from '../../Assets/index'
import { Editprofilebutton } from '../Buttons/Editprofilebutton'
// import EEditprofileCard from '../Buttons/EEditprofileCard'
// import { makeStyles,} from "@mui/styles";
import { makeStyles, createStyles } from "@mui/styles";

import { useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import { height, padding } from '@mui/system'
import MenuItem from '@mui/material/MenuItem';
import { useForm, Controller } from "react-hook-form";
import Select, { SelectChangeEvent } from '@mui/material/Select';


import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { transform } from 'typescript';
import { any } from 'underscore';
import { useNavigate } from 'react-router-dom';
import { store } from '../../Store/Store';
import { submituserdetails } from '../../Store/Reducers/action';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { ActionCreators } from '../../Store';
import Radio from '@mui/material/Radio';
import { InvestButton } from '../Buttons/InvestButton';
import List from '@mui/material/List';
import { graphimage } from '../../Assets/index'
import { withdrawiclogo } from '../../Assets/index'
import { lockinlogo } from '../../Assets/index'







const langs = [{ name: "English", code: "en" }, { name: "German", code: "de" }];
const country = [{ name: "Delhi", code: "de" }, { name: "kanpur" }]
const State = [{ name: "up", code: "de" }, { name: "mp" }]
const pincode = [{ name: "208025" }]
const Cityofresidence = [{ name: "117/N/112" }]


function InvestNowScreenCard() {




    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    const useStyles = makeStyles((theme: any) =>
        createStyles({
            paper: {
                // padding: theme.spacing(2),
                textAlign: 'center',
                // color: theme.palette.text.secondary,
            },
            root: {
                flexGrow: 1,
            },
        }),
    );
    const [formData, setFormData] = useState<any>({
        firstName: "",
        middleName: "",
        lastName: "",
        emailaddress: "",
        mobilenumber: "",
        dateofbirth: "",
        pincode: "",
        gender: "Female",
        CountrySecond: "",
        StateOfBirth: "",
        city: "",
        CityofResidence: "",
        IncomeSlab: "",
        CountryofBirth: "",
        Placeofbirth: "",
        addressline1: "",
        CountryFirst: "",
        state: "",



    })
    const handlechange = (e: any) => {

        const value = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value

        })


    }
    const dispatch = useDispatch()
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');

    const navigate = useNavigate();
    function handleSubmit() {
        // addUserDEtails("")
        store.dispatch(submituserdetails({ 'userdata': formData }))

        navigate('/vp');


    }


    const style = {
        containertwo: {
            backgroundColor: "#fff",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
            borderRadius: "8px",
            padding: "21px 40px",


        },
        dividerBox: {
            width: "470px",
            height: "1px",
            margin: "13.5% 0 17.5%",
            opacity: "0.2",
            backgroundColor: "#acb4bf",

        },

        cameraIcon: {
        
            width: "448px",
            height: " 67px",
            margin: "0 0 14px",
            objectFit: "contain"
        },

        emailIcon: {
            borderRadius: "170px 175px 175px 163px",
            backgroundColor: '#64dbff',
            width: '80px',
            height: '80px',
            margin: '0 54px 22px 34px',
            padding: '20px',
            boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
            border: 'solid 1px rgba(0, 0, 0, 0.08)',
        },
        button: {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            margin: "16px",
            width: "90%",
            maxWidth: "400px",
            transform: "translate(8px, -23px)"


        },
        Axisstyle: {
            width: "14px",
            height: "14px",
            // margin: "8px 67px 0 0",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontWeight: "normal",
            letterSpacing: "normal",
            textAlign: "left",
            color: "#7b7b9d"
        },
        ca: {
 
            backgroundColor: "#64dbff",
            width: "20px",
            height: "20px",
            padding: "10px",
            opacity: "0.9",

         
        } as React.CSSProperties,
        text: {
            color: "white",

        }


    }
    const classes = useStyles();

    return (
        <>
            <div style={{
                width: "120vh", 
                backgroundColor: '#ffffff',
                padding: '29px',
                borderRadius: "8px",
                marginBottom: "-15px",



            }}>
                <Grid container spacing={3} >


                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}
                            sx={{
                                p: 1,
                                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "-27px", borderRadius: "8px",
                                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                marginLeft: "-25px"
                            }}
                        >
                            <Stack m={2} spacing={6}>

                                <Typography
                                    sx={{
                                        width: "137px",
                                        height: "19px",
                                        margin: "0 303px 25px 0",
                                        fontFamily: "Roboto",
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        fontStretch: "normal",
                                        fontStyle: "normal",
                                        lineHeight: "1.25",
                                        letterSpacing: "normal",
                                        textAlign: " left",
                                        color: " #3c3e42",
                                    }}
                                >One-time lumpsum</Typography>

                                <List>

                                    <TextField label="I want to invest"
                                        name="middleName"
                                        fullWidth
                                        placeholder='₹1,00,000'
                                        sx={{ margin: " -55px 0 20px", boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)", backgroundColor: " #fff" }} >


                                    </TextField>
                                    <Typography
                                        sx={{
                                            width: "304px",
                                            height: "14px",
                                            margin: "-8px 135px 0 1px",

                                            fontSize: "12px",
                                            fontWeight: "normal",
                                            fontStretch: "normal",
                                            fontStyle: "normal",
                                            lineHeight: " 1.33",
                                            letterSpacing: "normal",
                                            textAlign: " left",
                                            color: "#8787a2",
                                        }}
                                    >You can start small, starting from ₹5,000</Typography>
                                    <Stack direction="row" spacing={2} sx={{ marginTop: "12px" }}>
                                        <Button variant="contained" disabled
                                            sx={{
                                                BackgroundColor: '#6c63ff',
                                                borderRadius: "2px",
                                                width: "64px",
                                                height: "35px",
                                                margin: " 2.2 12px 0 0",
                                                padding: "10px 12px 9px"
                                            }}

                                        >+1000</Button>
                                        <Button variant="contained" disabled>
                                            +5000
                                        </Button>
                                        <Button variant="contained" href="#contained-buttons" disabled>
                                            +10,000
                                        </Button>
                                    </Stack>
                                    <InvestButton />
                                    <Grid container spacing={2} sx={{
                                        textAlign: "center", fontSize: "11px",
                                        fontWeight: "500",
                                        marginTop: "3%",
                                        color: "#6c63ff"
                                    }}>
                                        <Grid item xs={12} >
                                            KNOW MORE ABOUT INVESTMENT
                                        </Grid>
                                    </Grid>
                                </List>
                            </Stack>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}  >

                        <Paper className={classes.paper}
                            sx={{
                                p: 1,
                                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "5px", borderRadius: "8px",
                                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                marginLeft: "-19px"
                            }}
                        >

                            <Typography sx={{ color: "#6c63ff", marginLeft: "-72%" }}>Expected returns</Typography>

                            <Typography>
                                <img alt="Money Sprint" src={graphimage}
                                    style={{
                                        width: " 448px",
                                        height: "67px",
                                        margin: "0 0 14px",

                                    }} />
                                <Grid container spacing={3}>
                                    <Grid item xs={2} sx={style.Axisstyle}>1Y</Grid>
                                    <Grid item xs={2} sx={style.Axisstyle}>3Y</Grid>

                                    <Grid item xs={2} sx={style.Axisstyle}> 5Y
                                        <img alt="Money Sprint" src={ellipslogo} style={{
                                            width: "16px",
                                            height: "16px",
                                            marginTop: "-50%",
                                            marginRight: "-50%",
                                            //  margin: "57px 66px 8px 65px",
                                            boxShadow: "0 3px 6px 0 rgba(75, 123, 236, 0.12)",
                                            backgroundColor: "#6c63ff",
                                        }} />
                                    </Grid>

                                    <Grid item xs={2} sx={style.Axisstyle}>10Y</Grid>
                                    <Grid item xs={2} sx={style.Axisstyle}>15Y</Grid>
                                    <Grid item xs={2} sx={style.Axisstyle}>20Y</Grid>
                                </Grid>

                            </Typography>
                            <Grid container spacing={1} sx={{ marginTop: "5%" }}>
                                <Grid item xs={6} sx={{
                                    width: " 84px",
                                    height: "14px",
                                    fontFamily: " Roboto",
                                    fontSize: "12px",
                                    fontWeight: "normal",
                                    textAlign: "left",
                                    color: " #7b7b9d"




                                }}>
                                    Invested Value
                                </Grid>
                                <Grid item xs={6} sx={{
                                    width: " 84px",
                                    height: "14px",

                                    fontFamily: " Roboto",
                                    fontSize: "12px",
                                    fontWeight: "normal",

                                    textAlign: "right",
                                    color: " #7b7b9d"
                                }}>
                                    Projected Value
                                </Grid>
                            </Grid>
                            <div>
                                <Grid container spacing={1}>
                                    <Grid item xs={6} sx={{
                                        width: " 57px",
                                        height: "24px",

                                        fontFamily: " Roboto",
                                        fontSize: "20px",
                                        fontWeight: "300",

                                        textAlign: "left",
                                        color: " #3c3e42"

                                    }}>
                                        ₹1 Lac
                                    </Grid>
                                    <Grid item xs={6} sx={{
                                        width: " 87px",
                                        height: "24px",

                                        fontFamily: " Roboto",
                                        fontSize: "20px",
                                        fontWeight: "500",

                                        textAlign: "right",
                                        color: " #23db7b"
                                        //   
                                    }}>
                                        ₹2.25 Lac
                                    </Grid>
                                </Grid>

                            </div>
                            <Box style={style.dividerBox} ></Box>

                            <Grid container spacing={8} sx={{ marginTop: "-35%" }}>

                                <Grid item xs={6} >
                                    <img alt="Money Sprint" src={withdrawiclogo}
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            margin: "17.4% 42% 0 -22%"



                                        }} />

                                    <Typography
                                        sx={{
                                            // width: "102px",

                                            fontSize: "12px",
                                            marginTop: "-14%",
                                            marginLeft: "29%",
                                            textAlign: " left",
                                            color: " #7b7b9d"



                                        }}
                                    > *Anytime Withdraw</Typography>
                                </Grid>

                                <Grid item xs={6}>


                                    <img alt="Money Sprint" src={lockinlogo}
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            margin: "18.5% 42% 0 15px"



                                        }}
                                    />
                                    <Typography sx={{

                                        fontSize: "12px",
                                        marginTop: "-14%",
                                        textAlign: " right",
                                        color: " #7b7b9d"



                                    }}> *No Lock-in Period</Typography>


                                </Grid>

                            </Grid>



                        </Paper>
                    </Grid>




                </Grid>


            </div>




        </>


    )
}

export default InvestNowScreenCard

