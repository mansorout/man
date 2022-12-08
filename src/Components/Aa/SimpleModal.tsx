
import { Box, styled } from '@mui/system'



import React, { useEffect, useRef, useState } from 'react'
import { Breadcrumbs, Card, CardContent, CardHeader, Checkbox, Drawer as DrawerList, FormControlLabel, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Toolbar, Typography } from '@mui/material'
import { Assessment, Home as HomeIcon, InfoRounded, MenuRounded, PowerSettingsNew, RadioButtonChecked, RadioButtonUncheckedOutlined, Search, TextFields } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Ad1, Ad1_1, Ad1_2, Ad2, closelogo, GroupSaf, Logo, MonoLogo, Profile, Radiobutton, rupconvie, rupreturnlogo, signExclamatory, SIP, sipiclogo } from '../../Assets/index'

import { useNavigate } from 'react-router-dom'
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux'


import TextField from '@mui/material/TextField';

import RedeemNowButtom from '../../Modules/Buttons/RedeemNowButton'
import Radio from '@mui/joy/Radio'
import SaveSipDetailsButton from '../../Modules/Buttons/SaveSipDetailsButton'

import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Active_Upi, hdfclogo, upilogo } from '../../Assets/index'
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import RedeemFundCard from '../../Modules/Cards/RedeemFundCard'
import RedeemSecFundCard from '../../Modules/Cards/RedeemSecFundCard'


import Sidebar from '../CommonComponents/Sidebar'
import Navbar from '../CommonComponents/Navbar'

import ClearIcon from '@mui/icons-material/Clear';
import { Navigate } from 'react-router-dom';

function SimpleModal(props:any) {
    const navigate = useNavigate()
    // const [opneBankAccmodal, setOpenBankAccmodal] = useState<boolean>(false)
    return (


        <div>
            {/* <button onClick={() => setOpenBankAccmodal(true)}>
                open modal
            </button> */}


            <Modal open={props.open} >
                <Box style={{
                    width: "90%",
                    maxWidth: "330px",
                    borderRadius: " 8px 8px 0px 0px",
                    boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)"
                }}>
                    <Grid container xs={12} style={{ backgroundColor: "white", width: "100%", display: "flex" }}>
                        <Grid item xs={8}>


                            <CardHeader
                                avatar={
                                    <Box >
                                        <img src={GroupSaf} alt="sprint-money" style={{
                                            width: "80px",
                                            height: "80px",



                                        }} />
                                    </Box>

                                }
                                action={""}
                                title=""
                                subheader=""
                                sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }} />
                        </Grid>

                        <Grid sx={{
                            display: "contents",
                            position: " absolute"
                        }} item xs={4}>
                            {/* <Box sx={{ margin: "12px 0px 8px 73px" }} onClick={() => setOpenBankAccmodal(false)}>
                                <ClearIcon />
                            </Box> */}
                        </Grid>



                    </Grid>
                    <Grid container spacing={0} sx={{display:" contents"}}>
                        <Grid item xs={12}  >
                            <Typography sx={{fontSize:"20px",paddingBottom: "7px"}}>
                                Confirm Your Bank Details
                            </Typography>

                        </Grid>

                    </Grid>

                    <Box style={{ backgroundColor: "#6c63ff", width: "100%" }}>
                        <Typography style={{ fontSize: "14px", color: 'white', padding: "10px 20px" }}>The money will be credited to the bank account details mentioned in your folio</Typography>
                    </Box>
                    <Grid container xs={12} style={{ backgroundColor: "white", width: "100%" }}>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Bank Name</Typography></Grid>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>ICICI Bank</Typography></Grid>
                    </Grid>
                    <Grid container xs={12} style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", width: "100%" }}>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Account Name</Typography></Grid>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>ICICI Ltd.</Typography></Grid>
                    </Grid>
                    <Grid container xs={12} style={{ backgroundColor: "white", width: "100%" }}>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Account Type</Typography></Grid>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>Current Account</Typography></Grid>
                    </Grid>
                    <Grid container xs={12} style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", width: "100%" }}>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Account Number</Typography></Grid>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>000405103922</Typography></Grid>
                    </Grid>
                    <Grid container xs={12} style={{ backgroundColor: "white", width: "100%" }}>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>IFSC Code</Typography></Grid>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>ICICI0000104</Typography></Grid>
                    </Grid>
                    <Box style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px",
                        padding: "8px 13px"
                    }}>
                        {/* <InfoRounded></InfoRounded> */}
                        <img style={{ color: "#6c63ff", width: "20px" }} src={signExclamatory} />
                        <Typography style={{ fontSize: "9px", color: '#919eb1' }}>By continuing, a verification code will be sent will be sent to your registered mobile number and email address to verify it's you.</Typography>
                    </Box>

                    <Box>
                        <Button sx={{ padding: " 18px 152px 19px", backgroundColor: "#23db7b" }}>
                            <Typography sx={{ fonSize: "20px", color: "white" }}>
                                Continue
                            </Typography>

                        </Button>
                    </Box>

                </Box>





            </Modal></div>
    )
}

export default SimpleModal