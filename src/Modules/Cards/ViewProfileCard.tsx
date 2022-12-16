import { Box, Card, CardContent, Checkbox, Grid, IconButton, ListItemAvatar, Typography } from '@mui/material'
import { emaillogo, GrouMobilecicon } from '../../Assets/index'
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
import './style.css'
import React, { useEffect, useRef, useState } from 'react'
import { height, padding } from '@mui/system'
import { Console } from 'console'
import { useSelector } from 'react-redux'

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

            width: '53px',
            height: '53px',
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
            backgroundColor: "rgba(100, 219, 255, 0.3)",
            width: "20px",
            height: "20px",

            padding: "10px",

            // width: '80px',
            // height: '80px',
            // margin: '0 54px 22px 34px',
            // padding: '20px',
            // boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
            // border: 'solid 1px rgba(0, 0, 0, 0.08)',
        } as React.CSSProperties,}

    const uploadInputRef = useRef<HTMLInputElement | null>(null);
    const [imgSrc, setImgSrc] = useState<any>("");

    function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {


        if (e.target.files && e.target.files.length > 0) {

            const reader = new FileReader();
            reader.addEventListener("load", () =>
                setImgSrc(reader.result?.toString() || "")
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    const [useFormData, setUserFormData] = useState({})
    console.log(imgSrc)
    const userData: any = useSelector((state: any) => state.userProfileDetails)
    console.log(userData?.formData?.mobilenumber)

    // useEffect(()=>{
    //     setUserFormData(userData)
    // },[useFormData])



    return (

        <>
            <Card
                sx={{
                    p: 3,
                    marginTop: "30px",
                    height: " fit-content",
                   
                 
                }}
                className="paddingviewprofilestyle"
                > <Box>
                    <List>
                        <Box onClick={() =>
                            uploadInputRef.current && uploadInputRef.current.click()}>

                            <img alt="" src={imgSrc} style={style.cameraIcon} />
                            <input
                                ref={uploadInputRef}
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={onSelectFile}
                            />
                             </Box>
                        <ListItem
                            secondaryAction={
                                <Typography sx={{ backgroundColor: "#ffc300", fontSize: "12px", fontWeight: 'bold', borderRadius: "20px", padding: "2px 21px 2px 23px" }}>Incomplete</Typography>
                            }  >
                        </ListItem>
                        <Typography sx={{ marginLeft: "25px", marginTop: "-18px", fontSize: "14px", fontWeight: "600" }}>Personal Details</Typography>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt=""
                                    src={GrouMobilecicon}
                                    style={style.ca} />
                            </ListItemAvatar>
                            <Typography sx={{ fontSize: "14px" }}>Mobile Number 
                            {
                                    userData?.formData?.mobilenumber !== "" ?
                                        <Typography sx={{ fontSize: "14px" }}>{userData?.formData?.mobilenumber}</Typography> : ""
                                }
                            </Typography>
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt=""
                                    src={emaillogo}
                                    style={style.ca}

                                />  </ListItemAvatar>
                            <Typography sx={{ fontSize: "14px" }}>Email Address
                                {
                                    userData?.formData?.emailaddress !== "" ?
                                        <Typography sx={{ fontSize: "14px" }}>{userData?.formData?.emailaddress}</Typography> : ""
                                }
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt=""
                                    src={cakelogo}
                                    style={style.ca}

                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography sx={{ fontSize: "14px" }}>Date of Birth</Typography>
                                }
                                secondary={userData?.formData?.dateofbirth !== "" ?
                                    <Typography sx={{ fontSize: "14px" }}>{userData?.formData?.dateofbirth}</Typography> : ""}

                            />
                            <Avatar
                                alt=""
                                src={wclogo}
                                style={style.ca}
                                sx={{ marginLeft: '25px' }} />

                            <ListItemText
                                primary="Gender"
                                secondary={userData?.formData?.gender !== "" ?
                                    userData?.formData?.gender : ""}
                                sx={{ marginLeft: '20px' }} />
                        </ListItem>



                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt=""
                                    src={icbirthplacelogo}
                                    style={style.ca} />
                            </ListItemAvatar>

                            <Typography sx={{ fontSize: "14px" }}>Place of Birth
                                {
                                    userData?.formData?.CountrySecond !== "" ?
                                        <Typography sx={{ fontSize: "14px" }}>{userData?.formData?.CountrySecond}</Typography> : ""
                                }
                            </Typography>
                             </ListItem>
                        <ListItem>
                            <ListItemAvatar> <Avatar
                                alt=""
                                src={locationlogo}
                                style={style.ca} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography sx={{ fontSize: "14px" }}>Communication Address
                                        {
                                            userData?.formData?.addressline1 !== "" ?
                                                <Typography sx={{ fontSize: "14px" }}>{userData?.formData?.addressline1}</Typography> : ""
                                        }
                                    </Typography>
                                }

                            />
                        </ListItem>



                        <ListItem>
                            <ListItemAvatar>
                                 <Avatar
                                    alt=""
                                    src={ic_income}
                                    style={style.ca}

                                />
                                </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography sx={{ fontSize: "14px" }}>Income slab
                                       {
                                            userData?.formData?.IncomeSlab !== "" ?
                                                <Typography sx={{ fontSize: "14px" }}>{userData?.formData?.IncomeSlab}</Typography> : ""
                                        }
                                    </Typography>
                                }

                            />
                        </ListItem>
                        <EditProfieButton />
                    </List>
                </Box>
            </Card>
        </>


    )
}

export default ViewProfileCard

