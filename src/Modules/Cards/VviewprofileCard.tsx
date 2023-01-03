import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { accountboxlogo, Checkcirclelogo, circlechecklogo, doneincircle } from '../../Assets/index'
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
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar'
import { VerificationpendingButton } from '../Buttons/VerificationpendingButton'
import { Box, Grid, IconButton, ListItemIcon, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react'
import './style.css'
import { useSelector } from 'react-redux';



type formDataProps = {
    pannumber: string;

}

const initialFormData: formDataProps = {
    pannumber: '',

}

type IProps = {
    kycDetails: any
}

function VviewprofileCard(props: IProps) {
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
            backgroundColor: "rgba(100, 219, 255, 0.3)",
            width: "20px",
            height: "20px",
            padding: "10px",
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



    const [panCardNo, setPanCardNo] = useState('');
    const [formData, setFormData] = useState<formDataProps>(initialFormData);
    const handlePanCard = (e: React.ChangeEvent<HTMLInputElement>) => setPanCardNo(e.target.value);
    const userData: any = useSelector((state: any) => state?.authReducer?.profile)
    console.log(userData.data?.kycdetails?.pannumber)


    useEffect(() => {
        // let { userdetails }: { userdetails: any } = g_viewProfileState?.data;
        // if (userdetails) {
        let userdetails: any = { ...props?.kycDetails };
        if (userdetails) {
            setFormData(prev => ({
                ...prev,
                pannumber: userdetails?.pannumber,

            }))
        }
    }, [props?.kycDetails])

    console.log(props?.kycDetails)
    console.log(props?.kycDetails?.ispannumberverified)








    const navigate = useNavigate();
    function handleSubmit() {
        navigate('/panUpdate');
        // navigate('/nominee')
    }

    function handleSubmits() {
        // navigate('/pan_update');
        navigate('/nominee')
    }
    function handleSubmitss() {
        navigate('/uploadsignature')
    }
    function handleSubmitsss() {
        navigate('/bad')
    }



    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    return (

        <>

            <Box
                sx={{
                    p: 1,

                    width: '1', bgcolor: 'background.paper', marginTop: "30px"
                }}
                className="thirdboxstyle"
            >
                <List  >
                    <ListItem

                        secondaryAction={
                            <Typography sx={{ backgroundColor: "#ffc300", color: "#000", fontSize: "12px", fontWeight: 'bold', borderRadius: " 20px", padding: "2px 21px 2px 23px" }}>Incomplete</Typography>
                        }

                    >
                    </ListItem>
                    <Box sx={{ marginTop: "-3%" }}>
                        <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>KYC Details</Typography>
                        <Typography sx={{ color: "#7b7b9d", fontSize: "12px" }} >Details once saved cannot be edited</Typography>
                    </Box>

                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => navigate('/panUpdate')}>
                                {
                                    props?.kycDetails?.ispannumberverified === false ? <Typography
                                        sx={{ color: "#6c63ff", fontSize: "14px" }}
                                        onClick={handleSubmit}
                                    >ADD </Typography> : ""
                                }


                              {   props?.kycDetails?.ispannumberverified === true ? ""  : <Avatar
                                  alt=""
                                  src={arrowlogo}
                                  sx={{ width: "24px", height: "24px" }}
                              /> 

                                 
                              }



                            </IconButton>
                        }
                    >
                        <ListItemAvatar>

                            <Avatar
                                alt=""
                                src={accountboxlogo}
                                style={style.ca}

                            />

                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px", color: "#3c3e42" }} className="CommonStyle"

                                >PAN Number

                                    {
                                        props?.kycDetails?.ispannumberverified === false ? <img src={Logoici} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "7px" }} /> : ""
                                    }

                                </Typography>

                            }


                            secondary={
                                <Typography sx={{ size: "14px" }}>

                                    {
                                        props?.kycDetails?.ispannumberverified === true ? <img src={doneincircle} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "5px", paddingRight: "2px" }} /> : ""
                                    }

                                    {formData?.pannumber || ""}</Typography>

                            }
                        // secondary="DUDPS1755G"



                        />




                        <ListItemText sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                    </ListItem>







                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => navigate('/nominee')}>
                                {
                                    props?.kycDetails?.isnomineedetailsavailable === false ?  <Typography sx={{ color: "#6c63ff", fontSize: "14px" }}
                                    onClick={handleSubmits}
                                >ADD </Typography> : ""
                                }
                               

                                <Avatar
                                    alt=""
                                    src={arrowlogo}
                                    sx={{ width: "24px", height: "24px" }}
                                />



                            </IconButton>
                        }
                    >
                        <ListItemAvatar>

                            <Avatar
                                alt=""
                                src={familyrestroomlogo}
                                style={style.ca}

                            />

                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>Nominee & Declarations
                                     {
                                        props?.kycDetails?.isnomineedetailsavailable === false ? <img src={Logoici} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "7px" }} /> : ""
                                    }

                                </Typography>
                            }
                            secondary={props?.kycDetails?.isnomineedetailsavailable === false ? "" : <Typography>
                                {
                                    props?.kycDetails?.isnomineedetailsavailable === true ? <img src={doneincircle} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "5px", paddingRight: "2px" }} /> : ""
                                }

                                Added Successfully</Typography>


                            }

                        />
                    </ListItem>





                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => navigate('/uploadsignature')}>
                                {
                                   props?.kycDetails?.issignatureavailable === true ? "" : <Typography sx={{ color: "#6c63ff", fontSize: "14px" }}>ADD </Typography>
                                }

                                <Avatar
                                    alt=""
                                    src={arrowlogo}
                                    sx={{ width: "24px", height: "24px" }}
                                />

                            </IconButton>
                        }

                    >
                        <ListItemAvatar>

                            <Avatar
                                alt=""
                                src={paymentslogo}
                                style={style.ca}

                            />


                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>Account Holder Signature
                                     {
                                        props?.kycDetails?.issignatureavailable === false ? <img src={Logoici} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "7px" }} /> : ""
                                    }

                                </Typography>
                            }
                            secondary={props?.kycDetails?.issignatureavailable === false ? "" : <Typography>
                                {
                                    props?.kycDetails?.issignatureavailable === true ? <img src={doneincircle} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "5px", paddingRight: "2px" }} /> : ""
                                }


                                Verified Successfully</Typography>


                            }


                        />
                    </ListItem>



                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => navigate('/bad')}>

                                <Typography sx={{ color: "#6c63ff", fontSize: "14px" }}
                                    onClick={handleSubmitsss}
                                >ADD </Typography>

                                <Avatar
                                    alt=""
                                    src={arrowlogo}
                                    sx={{ width: "24px", height: "24px" }}
                                />



                            </IconButton>
                        }
                    >
                        <ListItemAvatar>

                            <Avatar
                                alt=""
                                src={AccountBalancelogo}
                                style={style.ca}

                            />

                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>Bank Account
                                    {
                                        props?.kycDetails?.bankdetails?.accountnumber === null ? <img src={Logoici} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "7px" }} /> : ""
                                    }

                                </Typography>
                            }

                            secondary={

                                props?.kycDetails?.bankdetails?.accountnumber === null ? "" : <Typography>

                                    <img src={doneincircle} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "5px", paddingRight: "2px" }} /> : ""

                                    Added Successfully</Typography>



                            }


                        />
                    </ListItem>
                    <Grid container spacing={1} textAlign="center" sx={{ paddingLeft: "32px" }}>
                        <Grid item xs={12} md={12} >
                            <VerificationpendingButton />
                        </Grid>
                    </Grid>

                </List>

            </Box>

            <Box
                sx={{
                    p: 1,

                    width: '1', bgcolor: 'background.paper', marginTop: "30px",
                }}
                className="thirdboxstyle"
            >
                <List>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => navigate('/uploadcheque')}>

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

                            <Avatar
                                alt=""
                                src={chequelogo}
                                style={style.ca}

                            />

                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>Cancelled Cheque
                                     {
                                        props?.kycDetails?.ischequeavailable === false ? <img src={Logoici} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "7px" }} /> : ""
                                    }

                                </Typography>
                            }
                            // secondary={
                            //     <Typography><img src={doneincircle} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "5px",paddingRight:"2px" }} />Added Successfully</Typography>

                            //    }
                            secondary={props?.kycDetails?.ischequeavailable === false ? "" : <Typography>
                                {
                                    props?.kycDetails?.ischequeavailable === true ? <img src={doneincircle} alt="smallarrow Logo" style={{ width: "22px", height: "22px", position: "relative", top: "5px", paddingRight: "2px" }} /> : ""
                                }
                                Verification Pending</Typography>


                            }


                        />
                    </ListItem>
                </List>
            </Box>

            <Box
                sx={{
                    p: 1,

                    width: '1', bgcolor: 'background.paper', marginTop: "30px",
                }}
                className="thirdboxstyle"

            >
                <List>
                    {/* 
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                          Security Preferences
                        </ListSubheader>
                      }
                    > */}
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <Switch {...label} />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>

                            <Avatar
                                alt=""
                                src={Locklogo}
                                style={style.ca}

                            />

                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "14px", color: "#7b7b9d" }}>Quick Access Options</Typography>
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
