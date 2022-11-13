import { accountboxlogo } from '../../Assets/index'
import { familyrestroomlogo } from '../../Assets/index'
import { paymentslogo } from '../../Assets/index'
import { AccountBalancelogo } from '../../Assets/index'
import { arrowlogo } from '../../Assets/index'
import { Locklogo } from '../../Assets/index'
import { Logoici } from '../../Assets/index'
import Switch from '@mui/material/Switch';



import { chequelogo } from '../../Assets/index'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar'
import { VerificationpendingButton } from '../Buttons/VerificationpendingButton'
import { Box, Checkbox, Grid, IconButton, Typography } from '@mui/material'







import React from 'react'
import { Height } from '@mui/icons-material'

function VviewprofileCard() {

    const style = {
        containertwo: {
            backgroundColor: "#fff",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
            borderRadius: "8px",
            padding: "21px 40px",


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
        ca: {
            // borderRadius: "170px 175px 175px 163px",
            backgroundColor: "#64dbff",
            width: "30px",
            height: "30px",
            padding: "7px",
            opacity: "0.9",
            float: 'left'
        } as React.CSSProperties,
        // ellipse:{
        //     width:" 40px",
        //     height:" 40px",
        //     margin: "0 16px 0 0",
        //     padding: "10px",
        //     opacity: "0.3",
        //     background-color:" #64dbff",

        // } as React.CSSProperties,

    }
    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    return (

        <>
            <Box
                sx={{
                    p: 1,
                    width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px"
                }}
            >
                <List  >
                    <ListItem

                        secondaryAction={
                            <Typography sx={{ backgroundColor: "#ffc300", color: "#000", fontSize: "12px", borderRadius: " 20px", padding: "2px 21px 2px 23px" }}>Incomplete</Typography>
                        }

                    >
                    </ListItem>

                    <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>KYC Details</Typography>
                    <Typography sx={{ color: "#7b7b9d", fontSize: "12px" }} >Details once saved cannot be edited</Typography>
                    {/* 
                    margin: 0px;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 300;
    font-size: 0.86rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    display: block; */}

                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <Typography sx={{ color: "#6c63ff", fontSize: "14px" }}>ADD </Typography>

                                <Avatar
                                    alt=""
                                    src={arrowlogo}
                                    sx={{ width: "24px", height: "24px" }}
                                />

                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={accountboxlogo}
                                    style={style.ca}

                                />


                            </Avatar>
                        </ListItemAvatar>


                        <ListItemText primary={
                            <Typography sx={{ fontSize: "14px" }}>PAN Number</Typography>

                        }>

                            <img src={Logoici} style={{ backgroundColor: "red", color: 'red' }} alt="ss" />
                        </ListItemText>



                    </ListItem>,


                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <Typography sx={{ color: "#6c63ff", fontSize: "14px" }}>ADD </Typography>

                                <Avatar
                                    alt=""
                                    src={arrowlogo}
                                    sx={{ width: "24px", height: "24px" }}
                                />

                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={familyrestroomlogo}
                                    style={style.ca}

                                />

                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px" }}>Nominee & Declarations</Typography>
                            }

                        />
                    </ListItem>,


                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <Typography sx={{ color: "#6c63ff", fontSize: "14px" }}>ADD </Typography>

                                <Avatar
                                    alt=""
                                    src={arrowlogo}
                                    sx={{ width: "24px", height: "24px" }}
                                />

                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={paymentslogo}
                                    style={style.ca}

                                />

                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px" }}>Account Holder Signature</Typography>
                            }

                        />
                    </ListItem>



                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">

                                <Typography sx={{ color: "#6c63ff", fontSize: "14px" }}>ADD </Typography>

                                <Avatar
                                    alt=""
                                    src={arrowlogo}
                                    sx={{ width: "24px", height: "24px" }}
                                />



                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={AccountBalancelogo}
                                    style={style.ca}

                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px" }}>Bank Account</Typography>
                            }

                        />
                    </ListItem>
                    <VerificationpendingButton />
                </List>
            </Box>
            <Box
                sx={{
                    p: 1,
                    width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px"
                }}
            >
                <List  >
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">

                                <Typography sx={{ color: "#6c63ff", fontSize: "14px" }}>ADD </Typography>

                                <Avatar
                                    alt=""
                                    src={arrowlogo}
                                    sx={{ width: "24px", height: "24px" }}
                                />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={chequelogo}
                                    style={style.ca}

                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px" }}>Cancelled Cheque</Typography>
                            }

                        />
                    </ListItem>
                </List>
            </Box>
            <Box
                sx={{
                    p: 0.05,
                    width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px"
                }}
            >
                <List  >
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <Switch {...label} />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={Locklogo}
                                    style={style.ca}

                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px" }}>Quick Access Options</Typography>
                            }
                            secondary="PIN"

                        />
                    </ListItem>
                </List>
            </Box>


        </>


    )
}


export default VviewprofileCard