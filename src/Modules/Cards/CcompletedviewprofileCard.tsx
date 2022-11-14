import { accountboxlogo } from '../../Assets/index'
import { familyrestroomlogo } from '../../Assets/index'
import { paymentslogo } from '../../Assets/index'
import { AccountBalancelogo } from '../../Assets/index'
import { arrowlogo } from '../../Assets/index'
import { Locklogo } from '../../Assets/index'
import Switch from '@mui/material/Switch';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar'

import { Box,  IconButton, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';








import React from 'react'
import { Height } from '@mui/icons-material'
import { fontSize } from '@mui/system'

function CcompletedviewprofileCard() {

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
            width: "20px",
            height: "20px",
            padding: "10px",
            opacity: "0.9",
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

    return (<>
        <Box sx={{ p: 1, width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px" }} >
            <List>
                <ListItem secondaryAction={
                    <Typography sx={{ backgroundColor: "#23db7b", color: "#fff", fontSize: "12px", borderRadius: " 20px", padding: "2px 21px 2px 23px" }}>
                        Incomplete
                    </Typography>}
                >
                </ListItem>

                <Typography sx={{fontWeight:"500",fontSize:"14px"}} >KYC Details</Typography>
                <Typography sx={{color:"#7b7b9d",fontSize:"14px"}}>Details once saved cannot be edited</Typography>





                <ListItem
                  
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

                    <ListItemIcon
                        sx={{
                            margin: '2px 4px 0 0',
                            minWidth: 0,
                            mr: 1,
                            justifyContent: 'center',
                        }}
                    >

                        <CheckCircleIcon sx={{ color: "#23db7b", marginTop: "22px" }} />
                    </ListItemIcon>
                    <ListItemText primary="PAN Number" secondary="DUDPS1755G" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />

   
                </ListItem>



{/*                 
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Avatar src={accountboxlogo} style={style.ca} />
                        </Avatar>
                    </ListItemAvatar>

                    <ListItemIcon
                        sx={{
                            margin: '2px 4px 0 0',
                            minWidth: 0,
                            mr: 1,
                            justifyContent: 'center',
                        }}
                    >

                    </ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#23db7b", marginTop: "30px"}} />
                    
                    <ListItemText primary="PAN Number" secondary="DUDPS1755G" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                    
                </ListItem>, */}




<ListItem
  secondaryAction={
    <IconButton edge="end" aria-label="delete">


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

                    <ListItemIcon
                        sx={{
                            margin: '2px 4px 0 0',
                            minWidth: 0,
                            mr: 1,
                            justifyContent: 'center',
                        }}
                    >

                        <CheckCircleIcon sx={{ color: "#23db7b", marginTop: "22px" }} />
                    </ListItemIcon>
                    <ListItemText primary="Nominee & Declarations" secondary="Added Successfully" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />

   
                </ListItem>





                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">


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

                    <ListItemIcon
                        sx={{
                            margin: '2px 4px 0 0',
                            minWidth: 0,
                            mr: 1,
                            justifyContent: 'center',
                        }}
                    >

                        <CheckCircleIcon sx={{ color: "#23db7b", marginTop: "22px" }} />
                    </ListItemIcon>
                    <ListItemText primary="Account Holder Signature" secondary="Verified Successfully" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />

                    {/* <ListItemText
                        primary="Account Holder Signature"
                        secondary="Verified Successfully"

                    /> */}
                </ListItem>



                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">

                            <Typography sx={{ color: "#6c63ff" ,fontSize:"14px"}}>ADD </Typography>

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

                    <ListItemIcon
                        sx={{
                            margin: '2px 4px 0 0',
                            minWidth: 0,
                            mr: 1,
                            justifyContent: 'center',
                        }}
                    >

                        <CheckCircleIcon sx={{ color: "#23db7b", marginTop: "22px" }} />
                    </ListItemIcon>
                    <ListItemText primary="Bank Account" secondary="Added Successfully" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />

   
                </ListItem>







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



                            <Switch {...label} defaultChecked />


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

                    <ListItemIcon
                        sx={{
                            margin: '2px 4px 0 0',
                            minWidth: 0,
                            mr: 1,
                            justifyContent: 'center',
                        }}
                    >
                        {/* import WarningIcon from '@mui/icons-material/Warning'; */}
                        <WarningIcon sx={{ color: "#ffc300", marginTop: "22px" }} />
                    </ListItemIcon>
                    <ListItemText primary="Cancelled Cheque" secondary="Verification Pending" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />


                    {/* <ListItemText
                        primary="Quick Access Options"
                        secondary="PIN"


                    /> */}
                </ListItem>
            </List>
        </Box>
        <Box
            sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px"
            }}
        >
            <Typography sx={{fontSize:'14px', fontWeight:'500'}}>Security Preferences</Typography>
            <List  >
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">



                            <Switch {...label} defaultChecked />


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

                    <ListItemIcon
                        sx={{
                            margin: '2px 4px 0 0',
                            minWidth: 0,
                            mr: 1,
                            justifyContent: 'center',
                        }}
                    >
                        {/* import WarningIcon from '@mui/icons-material/Warning'; */}
                    </ListItemIcon>
                    
                    <ListItemText primary="Quick Access Options" secondary="PIN" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />


                    {/* <ListItemText
                        primary="Quick Access Options"
                        secondary="PIN"


                    /> */}
                </ListItem>
            </List>
        </Box>


    </>


    )
}


export default CcompletedviewprofileCard