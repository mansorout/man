

import "./HolderSignature.css";
import "react-image-crop/dist/ReactCrop.css";


import { Box, styled, Stack } from "@mui/system";
import { Grid, Typography, Paper, Breadcrumbs, Link } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { store } from "../../Store/Store";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import styles from './styles.module.css'


import {
    Drawer as DrawerList,

    Toolbar,
} from "@mui/material";

import {
    MenuItemUnstyled,
    menuItemUnstyledClasses,
    MenuUnstyled,
    MenuUnstyledActions,
} from "@mui/base";

import { AppBar, Button, Divider, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Logo, Profile, sipiclogo } from "../../Assets/index";

import SaveAndAddButton from "../../Modules/Buttons/SaveAndAddButton";
import { useDispatch } from "react-redux";
import { boolean } from "yup";
import { useNavigate } from "react-router-dom";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import SignaturePad from "react-signature-canvas";
import { uploadsignature } from "../../Store/Reducers/action";
import SaveAndAddButton1 from "../../Modules/Buttons/SaveAndAddButton1";
import { getData, postData } from "../../Utils/api";
import siteConfig from "../../Utils/siteConfig";
import { checkExpirationOfToken } from "../../Utils/globalFunctions";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import SprintMoneyLoader from "../CommonComponents/sprintMoneyLoader";
import { SprintMoneyMessanger } from "../CommonComponents/SprintMoneyMessanger";

const StyledMenuItem = styled(MenuItemUnstyled)(
    ({ theme: Theme }) => `
  list-style: none;
  border-radius: 8px;
  width: 300px;
  boxSizing: border-box;
  zIndex: 4000;
  &.${menuItemUnstyledClasses.focusVisible} {
    outline: none;
  }
  `
);


function HolderSignature() {


    const dispatch = useDispatch();
    const { addSignature } = bindActionCreators(ActionCreators, dispatch);
    const dispatchLocal = useDispatch();
    const [shouldButtonDisable, setShouldButtonDisable] = useState<boolean>(false);

    const [uploadChequeButton, setUploadChequeButtonDisable] =
        useState<boolean>(true);

    const [enableShowText, setenableShowText] = useState<boolean>(true);
    const [showSignBox, setShowSignBox] = useState<boolean>(true)
    const sigCanvas: any = useRef({});
    const [imageURL, setImageURL] = useState<any>("");
    const [imageToApi, setimageToApi] = useState<any>("");
    const [addsign, setAddsign] = useState<boolean>(true)
    const [hidecontent, setHideContent] = useState<boolean>(true)
    const [disable, setDisable] = useState<boolean>(true)
    const [tryagain, setTryagain] = useState<boolean>(true)
    const [bcaktovp, setBacktoVp] = useState<boolean>(true)
    const [succesmsg, setSuccesMsg] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState("");
    const [dialog, setShowDialog] = useState<boolean>(false);
    const [showApiButton, setShowApiButton] = useState<boolean>(true);
    const [getSignature, setgetSignature] = useState<string>("");

    useEffect(() => {
        getSignatureImage()

    }, [])

    const getSignatureImage = () => {
        getData(
            siteConfig.AUTHENTICATION_SIGNATURE_VIEW,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.AUTHENTICATION_API_ID
        )
            .then(res => res.json())
            .then(data => {
                if (checkExpirationOfToken(data?.code)) {
                    dispatch(setTokenExpiredStatusAction(true));
                    return;
                }

                if (data?.error === true) {
                    return;
                }
                const response = data?.data
                // console.log(data.kycDetails?.ischequeavailable)
                // console.log(response.signature)

                setgetSignature(response.signature);


            })
            .catch(err => {
                // console.log(err);
            })

        

    }

   

    const clear = () => {
        sigCanvas.current.clear()
        setImageURL("")
    }
    const convertSignInBase64 = () => {
       

        const objBody = {
            signature: imageURL,
        }

        setShouldButtonDisable(true)
        postData(
            objBody,
            siteConfig.AUTHENTICATION_SIGNATURE_ADD,
            siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
            siteConfig.AUTHENTICATION_API_ID
        )
            .then(res => res.json())
            .then((data) => {
                setShouldButtonDisable(false)
                setShowDialog(true)
                // setSuccesMsg("Success")

                if (checkExpirationOfToken(data?.code)) {
                    dispatchLocal(setTokenExpiredStatusAction(true));
                    return;
                }

                if (data?.error) {
                    // return;

                }
                // console.log(data?.error)
                // setShowDialog(true)
                setErrorMsg(data?.error)

                //   console.log("profile saved");
                //   navigate('/viewprofile');
            })
            .catch(err => {
                // console.log(err)
            })


        // console.log(objBody)


    }

    const setSignature = () => {
        setBacktoVp(false)
        setHideContent(true)
        setTryagain(false)
        setShowSignBox(false)

        setAddsign(false)
        setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
        setShowApiButton(false)




    };






    const useStyles: any = makeStyles((theme: Theme) => ({
        appbar: {
            backgroundColor: "white",
            width: "100%",
            height: "64px",
            position: "fixed",
            zIndex: "3000",
        },
    }));

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            // height: "100vh",
        } as React.CSSProperties,
        drawer: {
            zIndex: "500",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
        } as React.CSSProperties,
        image: {
            width: "176px",
        } as React.CSSProperties,
        profileContainer: {
            borderRadius: "8px",
            border: "solid 1px #4f46de",
            backgroundColor: "#6c63ff",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
        },
        drawHereText: {
            width: "169px",
            height: "38px",
            margin: "213px 0 0 196px",
            fontFamily: "Roboto",
            fontSize: "32px",
            fontWeight: "300",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "0.63",
            letteSpacing: "normal",
            textAlign: "left",
            color: "#919eb1",
        },

        dividerBox: {
            opacity: "0.5",
            width: "100%",
            height: "1px",
            padding: ".5px",
            backgroundColor: "#acb4bf",
        },

        signatureContainer: {
            backgroundColor: "#fff",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
            borderRadius: { xs: "0px", sm: "16px" },
            width: "1008px",
            height: "633",
        },











        menuIcon: {
            color: "#6c63ff",
            fontSize: "24px",
        },
        appBar: {
            backgroundColor: "white",
        },
    };

    const [open, setOpen] = useState<boolean>(false);

    const menuActions = React.useRef<MenuUnstyledActions>(null);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
    };

    const classes = useStyles();

    const refContainer = useRef();
    const navigate = useNavigate();




    return (

        <>
            {
                getSignature ? <Box style={{ width: "100%"}} ref={refContainer}>
                    <Navbar />
                    <Box sx={style.main}>
                        <Grid container spacing={0} >
                            <Grid item xs={0} sm={1} md={2}>
                                <Toolbar />
                                <Sidebar />

                            </Grid>
                            <Grid sx={{
              height: "100vh",
              overflow: "scroll",
              width: "100%",
              display: "block",
              justifyContent: "center",
            }} item xs={12} sm={11} md={10}>
                                <Toolbar />
                <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                                    <Breadcrumbs aria-label="breadcrumb">

                                        <Link color="#6495ED" underline="always" href="/home">
                                            <Typography className='burgerText'> Home</Typography>
                                        </Link>
                                        <Link
                                            underline="always"
                                            color="#6495ED"
                                            onClick={()=>{navigate('/viewprofile')}}
                                        >
                                            <Typography className='burgerText'>  View Profile</Typography>

                                        </Link>
                                        <Link
                                            underline="none"
                                            color="#8787a2"
                                            aria-current="page"
                                        >

                                            <Typography className='burgerText'>Account Holder Signature</Typography>
                                        </Link>
                                    </Breadcrumbs>
                                    </Box>
                                    <Box className="BoxPadding">
                                    <Typography sx={{
                                        // paddingLeft: " 30px",
                                        width: "100%"
                                    }}>
                                        Your Signature in Record
                                    </Typography>
                                    <Box sx={{ padding: "6px 0px 0px 27px" }}> <img src={getSignature} className="getApiimg" /> </Box>
                                    </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
                    : <Box style={{ width: "100%" }} ref={refContainer}>
                        <Navbar />
                        <SprintMoneyLoader loadingStatus={shouldButtonDisable} />
                        <Box sx={style.main}>
                            <Grid
                                container
                                spacing={0}
                            >

                                <Grid
                                    item
                                    xs={0}
                                    sm={1}
                                    md={2}
                                >
                                    <Toolbar />
                                    <Sidebar />
                                </Grid>
                                <Grid
                                    container
                                    xs={13}
                                    sm={11}
                                    md={10}
                                >
                                    <Grid sx={{ padding:"20px" }} item xs={12}>
                                        <Toolbar />
                                        <Box sx={{ mb: "10px" }} className="checkHeadingStack">
                                            <Typography

                                                component="span"
                                                className="subTitle5"
                                            >
                                                Signature is mandatory to setup an investment account and for a redemption request.
                                            </Typography>
                                        </Box >
                                        <Breadcrumbs sx={{ mb: "10px" }} aria-label="breadcrumb">
                                            <Link color="#6495ED" underline="always" href="/home">
                                                <Typography className='burgerText'> Home</Typography>
                                            </Link>
                                            <Link
                                                underline="always"
                                                color="#6495ED"
                                                href='/viewprofile'
                                            >
                                                <Typography className='burgerText'>  View Profile</Typography>

                                            </Link>
                                            <Link
                                                underline="none"
                                                color="#8787a2"
                                                aria-current="page"
                                            >

                                                <Typography className='burgerText'>Account Holder Signature</Typography>
                                            </Link>
                                        </Breadcrumbs>

                                        <Box style={{ position: "relative", marginBottom: "20px", borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

                                            <Grid container >
                                                <Grid xs={12} md={8} sm={10}>
                                                    <Typography style={{ padding: "15px", display: "flex" }} className="largeHeadingText" >
                                                        Add Account Holder Signature
                                                    </Typography>
                                                </Grid>
                                            </Grid>

                                            <Box style={style.dividerBox}></Box>
                                            {/* <Box sx={{ width: "100%", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", flexWrap: 'wrap', flexDirection: { sm: "column", md: "row" } }}> */}

                                            <Box className="renderBoxsign">

                                                {
                                                    enableShowText ? <Grid container spacing={3}>
                                                        <Grid sx={{ textAlign: "center", backgroundColor: "white" }} item xs={12}>
                                                            <Typography className="checkWillAppearHere">
                                                                Draw Here...
                                                            </Typography>

                                                        </Grid>
                                                    </Grid> : ""
                                                }
                                                {
                                                    enableShowText ? "" : <Grid container sx={{ display: "none" }} spacing={3}>
                                                        <Grid sx={{ textAlign: "center", backgroundColor: "white" }} item xs={12}>
                                                            <Typography className="checkWillAppearHere">
                                                                Draw Here...
                                                            </Typography>

                                                        </Grid>
                                                    </Grid>
                                                }
                                                {showSignBox ?
                                                    <Box sx={{ backgroundColor: "white", width: "100%", height: "100%", margin: " 0 auto" }}>


                                                        <SignaturePad

                                                            ref={sigCanvas}
                                                            backgroundColor="white"
                                                            penColor="black"
                                                            onBegin={() => { setHideContent(false); setDisable(false); setenableShowText(false) }}
                                                            canvasProps={{
                                                                // width: 600,
                                                                height: 450,
                                                                className: styles.sigPad

                                                            }}

                                                        />

                                                    </Box> : ""

                                                }

                                                {
                                                    showSignBox ? "" :

                                                        <Grid container sx={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            backgroundColor: "white",
                                                            top: "50%",
                                                            left: "50%",


                                                        }} spacing={1}>
                                                            <Grid item xs={12} sm={10} md={4}>
                                                                <img
                                                                    src={imageURL}
                                                                    alt="my signature"
                                                                    style={{

                                                                        maxWidth: "-webkit-fill-available",
                                                                        height: "250px"
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </Grid>



                                                }

                                            </Box>



                                            {/* </Box> */}

                                            <Box>
                                                <Box textAlign="center" sx={{ margin: "30px 0px 2px 0px" }}>


                                                    {hidecontent ? "" : <Box textAlign="center" onClick={clear}>
                                                        <Button variant="contained"
                                                            sx={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.05)",
                                                                borderRadius: " 23px",
                                                                marginBottom: "32px",
                                                                height: "45px",
                                                                padding: "19px",
                                                                ml: 1,
                                                                "&.MuiButtonBase-root:hover": {
                                                                    bgcolor: "rgba(0, 0, 0, 0.05)"
                                                                }

                                                            }}
                                                        >

                                                            <Typography sx={{ color: "#6c63ff", fontWeight: "500" }}>
                                                                CLEAR & TRY AGAIN
                                                            </Typography>

                                                        </Button>
                                                    </Box>}

                                                    {tryagain ? "" : <Box textAlign="center" onClick={() => window.location.reload()}>
                                                        <Button

                                                            sx={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.05)",
                                                                borderRadius: " 23px",
                                                                marginBottom: "32px",
                                                                height: "45px",
                                                                padding: "19px"
                                                            }}
                                                        >

                                                            <Typography sx={{ color: "#6c63ff", fontWeight: "500" }}>
                                                                CLEAR & TRY AGAIN
                                                            </Typography>

                                                        </Button>
                                                    </Box>}

                                                    {uploadChequeButton ? (
                                                        ""
                                                    ) : (
                                                        <Button

                                                            sx={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.05)",

                                                                height: "45px",
                                                                width: "150px",
                                                                borderRadius: "32px",
                                                            }}
                                                        >
                                                            <Typography className="textLink">
                                                                Clear & Try Again
                                                            </Typography>
                                                        </Button>
                                                    )}
                                                </Box>





                                            </Box>
                                            <Box style={style.dividerBox}></Box>



                                            {
                                                showApiButton ? <> {disable ?
                                                    <Box className="saveandaddButton"
                                                        textAlign="center"
                                                        width="80%"
                                                        mb={2}
                                                        sx={{ pointerEvents: "none", opacity: "0.7" }}

                                                    >

                                                        <SaveAndAddButton />

                                                    </Box>
                                                    :
                                                    <Box className="saveandaddButton"
                                                        textAlign="center"
                                                        width="80%" onClick={setSignature}>

                                                        <SaveAndAddButton />




                                                    </Box>
                                                }</> : <Box onClick={convertSignInBase64} width="80%">
                                                    <SaveAndAddButton />
                                                </Box>
                                            }





                                            <Grid container sx={{ padding: "6px 0px 12px 14px" }} >
                                                <Grid item >
                                                    <div style={{ display: "flex" }}>
                                                        <Box >
                                                            <img style={{ height: "24px", width: "24px" }} src={sipiclogo} alt="signature" />
                                                        </Box>
                                                        <span style={{ padding: "5px 0px 0px 7px", fontSize: "14px", color: "#919eb1" }}> Signatures provided here will be used on official documents.</span>
                                                    </div>
                                                </Grid>

                                            </Grid>


                                        </Box>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Box>
                        <SprintMoneyMessanger open={dialog} btnText={"Back to View Profile"} btnClick={() => navigate('/viewprofile')} errorText={errorMsg} succesText={succesmsg} />
                    </Box >
            }
        </>


    );
}

export default HolderSignature;