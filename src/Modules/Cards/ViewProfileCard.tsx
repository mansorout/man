import { Box, Checkbox, Grid, IconButton, ListItemAvatar, Typography } from '@mui/material'
import { emaillogo } from '../../Assets/index'
import { cakelogo } from '../../Assets/index'
import { icbirthplacelogo } from '../../Assets/index'
import { locationlogo } from '../../Assets/index'
import { ic_income } from '../../Assets/index'
import { wclogo } from '../../Assets/index'
import { EditProfieButton } from '../Buttons/EditProfieButton'


import { cameraIcon } from '../../Assets/index'
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work'
import Paper from "@mui/material/Paper";






import React from 'react'
import { height, padding } from '@mui/system'

function ViewProfileCard() {

    const style = {
        containertwo: {
            backgroundColor: "#fff",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
            borderRadius: "8px",
            padding: "21px 40px",


        },

        cameraIcon: {
            borderRadius: "170px 175px 175px 163px",
            backgroundColor: '#23db7b',
            width: '30px',
            height: '30px',
            marginLeft: "auto",
            marginRight: "auto",
            padding: '15px',
            boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
            border: 'solid 1px rgba(0, 0, 0, 0.08)',
            display: "block",
            marginTop: "20px",
            marginBottom: "30px"
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
            width: "20px",
            height: "20px",
            padding: "10px",
            opacity: "0.9",

            // width: '80px',
            // height: '80px',
            // margin: '0 54px 22px 34px',
            // padding: '20px',
            // boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
            // border: 'solid 1px rgba(0, 0, 0, 0.08)',
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


    return (

        <>
            <Box
                sx={{
                    p: 1,
                    width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px"
                }}
            >
                <List>
                    <img alt="Money Sprint" src={cameraIcon} style={style.cameraIcon} />

                    <ListItem

                        secondaryAction={
                            <Typography sx={{ backgroundColor: "#ffc300", fontSize: "12px", borderRadius: " 20px", padding: "2px 21px 2px 23px" }}>Incomplete</Typography>
                        }

                    >
                    </ListItem>

                    <Typography sx={{ marginLeft: "25px", marginTop: "-18px", fontSize: "14px", fontWeight: "500px" }}>Personal Details</Typography>

                    <ListItem


                    >

                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={emaillogo}
                                    style={style.ca}

                                />
                            </Avatar>
                        </ListItemAvatar>
                        <Typography sx={{ fontSize: "14px" }}>Mobile Number
                            <Typography sx={{ fontSize: "14px" }}>+91 8601600297</Typography>
                        </Typography>
                    </ListItem>


                    <ListItem


                    >

                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={emaillogo}
                                    style={style.ca}

                                />
                            </Avatar>
                        </ListItemAvatar>
                        <Typography sx={{ fontSize: "14px" }}>Email Address
                        </Typography>
                    </ListItem>


                    <ListItem

                    >
                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={cakelogo}
                                    style={style.ca}

                                />

                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px" }}>Date of Birth</Typography>
                            }

                        />
                    </ListItem>



                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" >

                                <Avatar
                                    alt=""
                                    src={wclogo}
                                    style={style.ca}

                                />
                                <Typography sx={{ marginLeft: "19px", }}>Gender</Typography>




                            </IconButton>

                        }

                    >

                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={icbirthplacelogo}
                                    style={style.ca}

                                />
                            </Avatar>
                        </ListItemAvatar>
                        <Typography sx={{ fontSize: "14px" }}>Place of Birth</Typography>
                    </ListItem>

                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">

                            </IconButton>
                        }
                    >

                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={locationlogo}
                                    style={style.ca}

                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px" }}>Communication Address</Typography>
                            }

                        />
                    </ListItem>



                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">

                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={ic_income}
                                    style={style.ca}

                                />

                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px" }}>Income slab</Typography>
                            }

                        />
                    </ListItem>
                    <EditProfieButton />
                </List>
            </Box>


        </>


    )
}

export default ViewProfileCard
