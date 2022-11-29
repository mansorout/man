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

function CompletedViewProfileCard() {

    const style = {
        containertwo: {
            backgroundColor: "#fff",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
            borderRadius: "8px",
            padding: "21px 40px",


        },

        Icon: {
            width: " 80px",
            height: "80px",
            border: " solid 2px rgba(75, 123, 236, 0.49)",
            borderRadius: '45px',
            marginLeft: "37%"


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
            backgroundColor: "#64dbff",
            width: "20px",
            height: "20px",
            padding: "10px",
            opacity: "0.9",
        } as React.CSSProperties,


    }


    return (

        <>
            <Box
                sx={{
                    p: 1,
                    width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px",borderRadius:"8px"
                    ,  boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                }}
            >
                <List sx={{}}  >
                    <img alt="Money Sprint" src={cameraIcon} style={style.Icon} />
                    <Typography sx={{ color: "#6c63ff", textAlign: "center", fontWeight: "500" }}>remove</Typography>

                    <ListItem

                        secondaryAction={
                            <Typography sx={{ backgroundColor: "#23db7b", fontSize: "12px", borderRadius: " 20px", color: " #fff", padding: "2px 21px 4px 21px" }}>Completed</Typography>
                        }

                    >
                    </ListItem>

                    <Typography sx={{ marginLeft: "25px", marginTop: "-18px" }}>Personal Details</Typography>

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
                        <ListItemText
                            primary="Mobile Number"
                            secondary="91 98250 98250"

                        />
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
                        <ListItemText
                            primary="Email Address"
                            secondary="rahul.malhotra@gmail.com"

                        />
                    </ListItem>



                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" >


                            </IconButton>
                        }
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
                            primary="Date of Birth"
                            secondary="02 June 1991 
                            (29 Years)"

                        />
                        <Avatar
                            alt=""
                            src={wclogo}
                            style={style.ca}

                        />

                        <ListItemText
                            primary="Gender"
                            secondary="Male"
                            sx={{ marginLeft: '20px' }}

                        />
                    </ListItem>



                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Avatar
                                    alt=""
                                    src={icbirthplacelogo}
                                    style={style.ca}

                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Place of Birth"
                            secondary="Mumbai, India"

                        />
                    </ListItem>

                    <ListItem

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
                            primary="Communication Address"
                            secondary="304 Madhava, Bandra Kurla Complex, Bandra
                            (east), Mumbai - 400051, Maharashtra"


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
                                {/* <Avatar
                                alt=""
                                src={wclogo}
                                style={style.ca}

                            /> */}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Income slab"
                            secondary="  ₹ 2,50,001 - ₹ 5,00,000"


                        />
                    </ListItem>
                    <EditProfieButton />
                </List>
            </Box>


        </>


    )
}

export default CompletedViewProfileCard

