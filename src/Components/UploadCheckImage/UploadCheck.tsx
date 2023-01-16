import "./UploadCheck.css";
import "react-image-crop/dist/ReactCrop.css";
import Fab from "@mui/material/Fab";
import { useDebounceEffect } from "./useDebounceEffects";
import { canvasPreview } from "./CanvasPreview";
import { Box, styled, Stack } from "@mui/system";
import { Grid, Typography, Paper, Breadcrumbs, Link } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { store } from "../../Store/Store";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import { uploadcheque } from "../../Store/Reducers/action";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import CropIcon from "@mui/icons-material/Crop";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";

import {
  Drawer as DrawerList,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  Assessment,
  Home as HomeIcon,
  MenuRounded,
  PowerSettingsNew,
  Search,
  Tune,
} from "@mui/icons-material";
import {
  MenuItemUnstyled,
  menuItemUnstyledClasses,
  MenuUnstyled,
  MenuUnstyledActions,
} from "@mui/base";
import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  Support,
} from "@mui/icons-material";
import { AppBar, Button, Divider, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Logo, Profile } from "../../Assets/index";

import SaveAndAddButton from "../../Modules/Buttons/SaveAndAddButton";
import { useDispatch } from "react-redux";
import { boolean } from "yup";
import { useNavigate } from "react-router-dom";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import SprintMoneyLoader from "../CommonComponents/sprintMoneyLoader";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import siteConfig from "../../Utils/siteConfig";
import { checkExpirationOfToken } from "../../Utils/globalFunctions";
import { postData } from "../../Utils/api";
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



function UploadCheck() {



  const dispatch = useDispatch();
  const dispatchLocal = useDispatch();
  const [shouldButtonDisable, setShouldButtonDisable] = useState<boolean>(false);
  const [imagePreviewToLast, setImagePreviewToLast] = useState<any>();
  const [base64Image, setCanvasImageToBase64] = useState<any>("");
  const [imgSrc, setImgSrc] = useState<any>("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [rotate90, setRotate90] = useState(0);

  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const { addSignature } = bindActionCreators(ActionCreators, dispatch);
  const uploadInputRef = useRef<HTMLInputElement | null>(null);
  const [showSideButton, setShowSideButton] = useState<boolean>(true);
  const [preview, setPreview] = useState<boolean>(true);
  const [uploadChequeButton, setUploadChequeButtonDisable] =
    useState<boolean>(true);
  const [saveAndAddButton, saveAndAddButtonDisable] = useState<boolean>(true);
  const [canvasDisable, setCanvasDisable] = useState<boolean>(true);
  const [enableShowText, setenableShowText] = useState<boolean>(true);
  const [doneButton, setDoneButton] = useState<boolean>(false);
  const [rotateButton, setRotateButton] = useState<boolean>(true);
  const [succesmsg, setSuccesMsg] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState("");
  const [dialog, setShowDialog] = useState<boolean>(false);
  const [chequeImg, setChequeImage] = useState<any>("")

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {


    setenableShowText(false);
    setUploadChequeButtonDisable(false);
    
    setShowSideButton(false);
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // canvasPreview
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
      }
    },
    2,
    [completedCrop]
  );




  useEffect(() => {
    const dataURL = previewCanvasRef.current?.toDataURL();
    setChequeImage(dataURL)
   
  }, [completedCrop])



    // if(imagePreviewToLast != 0 || undefined){
    //   alert("keep hide")
    // }
    // else{
    //   alert("show ")
    // }


  //  All Button in components goes here

  function handleToggleAspectClick() {
    setRotateButton(false)
    setDoneButton(true)
    if (aspect) {
      setAspect(undefined);
    }
    const { width, height }: any = imgRef.current;
    setCrop(centerAspectCrop(width, height, 16 / 9));
  }


  const handleRotate = () => {
    let newRotation = rotate90 + 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    setRotate90(newRotation);
  };

  const handleConfirm = () => {

    setImagePreviewToLast(chequeImg)
    setCanvasDisable(false);
    setPreview(false);
    saveAndAddButtonDisable(false);
  };
  const handleCancel = () => {
    window.location.reload()
    setShowSideButton(true);
  };


  const sendToApi = () => {

    // setCanvasImageToBase64(chequeImg)
    // store.dispatch(uploadcheque({ chequedata: base64Image }));
    const objBody = {
      cheque: imagePreviewToLast,
    }

    console.log(objBody)

    setShouldButtonDisable(true)
    postData(
      objBody,
      siteConfig.AUTHENTICATION_CHEQUE_ADD,
      siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
      siteConfig.AUTHENTICATION_API_ID
    )
      .then(res => res.json())
      .then((data) => {
        setShouldButtonDisable(false)
        setShowDialog(true)
        setSuccesMsg("Success")

        if (checkExpirationOfToken(data?.code)) {
          dispatchLocal(setTokenExpiredStatusAction(true));
          return;
        }

        if (data?.error) {
          return;
        }
        setErrorMsg(data?.error)
        console.log(data?.status?.error);
        if (data?.status === false) {
          console.log("error occured")
        }
        else {
          console.log("no error")
        }


        navigate('/viewprofile');
      })
      .catch(err => {
        console.log(err)
        setShowDialog(true)

      })


  };



  function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number
  ) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight
      ),
      mediaWidth,
      mediaHeight
    );
  }

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
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <SprintMoneyLoader loadingStatus={shouldButtonDisable} />
      <Box sx={style.main}>
        <Grid
          container
          spacing={0}
          sx={{ height: "100vh" }}
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
            md={10}>
            <Grid
              container>
              <Grid sx={{ padding: 3 }} item xs={12}>
                <Toolbar />
                <Box sx={{ mb: "10px" }} className="checkHeadingStack">
                  <Typography

                    component="span"
                    className="subTitle5"
                  >
                    Cancelled cheque is used for KYC procedures and to facilitate an
                    electronic clearing system (ECS) mandate.
                  </Typography>
                </Box >
                <Breadcrumbs sx={{ mb: "10px" }} aria-label="breadcrumb">
                  <Link color="#6495ED" underline="always" href="/home">
                    <Typography className='burgerText'> Home</Typography>
                  </Link>
                  <Link
                    underline="always"
                    color="#6495ED"
                    href="/vp"
                  >
                    <Typography className='burgerText'>  View Profile</Typography>

                  </Link>
                  <Link
                    underline="none"
                    color="#8787a2"
                    aria-current="page"
                  >

                    <Typography className='burgerText'>  Cancelled Cheque </Typography>
                  </Link>
                </Breadcrumbs>

                <Box style={{ position: "relative", marginBottom: "20px", borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  {/* <Grid container  spacing={2} >
                  <Grid item   xs={12}>
                  <Typography style={{padding:"15px"}} className="largeHeadingText" sx={{alignItems:"left"}}>
                  Add Cancelled Cheque
                </Typography>
                  </Grid>
                </Grid> */}
                  <Grid container >
                    <Grid xs={12} md={8} sm={10}>
                      <Typography style={{ padding: "15px", display: "flex" }} className="largeHeadingText" >
                        Add Cancelled Cheque
                      </Typography>
                    </Grid>
                  </Grid>

                  <Box style={style.dividerBox}></Box>
                  <Box sx={{ width: "100%", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", flexWrap: 'wrap', flexDirection: { sm: "column", md: "row" } }}>
                    {preview ?
                      <Box className="renderBox">

                        {
                          enableShowText ? <Grid container spacing={3}>
                            <Grid sx={{ textAlign: "center" }} item xs={12}>
                              <Typography className="checkWillAppearHere">
                                Your cheque will appear here…
                              </Typography>

                            </Grid>
                          </Grid> : ""
                        }
                        {
                          enableShowText ? "" : <Grid container sx={{ display: "none" }} spacing={3}>
                            <Grid sx={{ textAlign: "center" }} item xs={12}>
                              <Typography className="checkWillAppearHere">
                                Your cheque will appear here…
                              </Typography>

                            </Grid>
                          </Grid>
                        }
                        {!!imgSrc && (
                          <ReactCrop
                            style={{ width: "100%" }}
                            crop={crop}
                            onChange={(_, percentCrop) => setCrop(percentCrop)}
                            onComplete={(c) => setCompletedCrop(c)}
                            aspect={aspect}
                          >
                            <img
                              ref={imgRef}
                              alt="Crop me"
                              src={imgSrc}
                              style={{
                                margin: "auto",
                                width: "100%",
                                height: "300px",
                                transform: `rotate(${rotate90}deg)`,
                              }}
                              onLoad={onImageLoad}
                            />
                          </ReactCrop>
                        )}
                      </Box> :
                      <Box style={{ height: "fit-content", width: "fit-content" }} >
                        <img
                          className="previewImg"
                          src={imagePreviewToLast} />
                      </Box>
                    }
                    {showSideButton ? (
                      " "
                    ) : (

                      <Box sx={{ "& > :not(style)": { m: .5 }, display: "flex", gap: "10px", flexWrap: 'wrap', padding: "10px", flexDirection: { sm: "row", md: "column" } }}>
                        {
                          rotateButton === true ? <Box>
                            <Fab onClick={handleRotate} >
                              <RotateRightIcon />
                            </Fab>
                            <Typography className="textStyling" sx={{ padding: "7px 0px 0px 11px" }}> Rotate </Typography>
                          </Box> : ""
                        }

                        <Box>
                          <Fab onClick={handleToggleAspectClick}>
                            <CropIcon />
                          </Fab>
                          <Typography sx={{ padding: "7px 0px 0px 11px" }}> Crop </Typography>
                        </Box>

                        {
                          doneButton === true ? <Box >
                            <Fab sx={{ backgroundColor: "#23db7b" }} onClick={handleConfirm}>
                              <DoneIcon />
                            </Fab>
                            <Typography sx={{ padding: "7px 0px 0px 11px" }}> Done </Typography>
                          </Box> : ""
                        }


                        <Box>
                          <Fab onClick={handleCancel} >
                            <ClearIcon />
                          </Fab>
                          <Typography sx={{ padding: "7px 0px 0px 11px" }}> Cancel </Typography>
                        </Box>
                      </Box>



                    )}
                  </Box>
                  <Box>
                    <Box textAlign="center" sx={{ margin: "30px 0px 2px 0px", backgroundColor: "#FFFFFF" }}>
                      <input
                        ref={uploadInputRef}
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={onSelectFile}
                      />

                      {uploadChequeButton ? (
                        <Button
                          variant="contained"
                          onClick={() =>
                            uploadInputRef.current &&
                            uploadInputRef.current.click()
                          }
                          sx={{
                            backgroundColor: "#00b4ff",

                            height: "45px",
                            borderRadius: "32px",
                            padding: "22px",
                            ml: 1,
                            "&.MuiButtonBase-root:hover": {
                              bgcolor: "#00b4ff"
                            }
                          }}
                        >
                          <Typography sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>
                            UPLOAD CHEQUE
                          </Typography>
                        </Button>
                      ) : (
                        ""
                      )}

                      {uploadChequeButton ? (
                        ""
                      ) : (
                        <Button
                          variant="contained"
                          onClick={() => handleCancel()}
                          sx={{
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                            padding: "22px",
                            height: "45px",
                            borderRadius: "32px",
                            ml: 1,
                            "&.MuiButtonBase-root:hover": {
                              bgcolor: "rgba(0, 0, 0, 0.05)"
                            }
                          }}
                        >
                          <Typography className="textLink">
                            CLEAR & TRY AGAIN
                          </Typography>
                        </Button>
                      )}
                    </Box>
                  </Box>
                  {saveAndAddButton ? (
                    <Box className="saveandaddButton"
                      textAlign="center"
                      width="80%"
                      mb={2}
                      sx={{ pointerEvents: "none", opacity: "0.7" }}
                    // onClick={sendToApi}
                    >
                      <SaveAndAddButton />
                    </Box>
                  ) : (
                    ""
                  )}

                  {saveAndAddButton ? (
                    ""
                  ) : (
                    <Box mb={2} textAlign="center" width="80%" onClick={sendToApi}>
                      <SaveAndAddButton />
                    </Box>
                  )}
                  {!!completedCrop && (
                    <canvas
                      ref={previewCanvasRef}
                      style={{
                        display: "none",
                        border: '1px solid black',
                        objectFit: 'unset',
                        width: "564px",
                        height: "238px",
                      }}
                    />
                  )}

                </Box>
                <Box style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                  <Typography mt={2} textAlign="center" component="span" className="bottomContentText ">
                    By submitting these details, you are agree to share your details
                    to BSE for further transactions <br />
                  </Typography>
                  <Typography mb={2}
                    textAlign="center"
                    component="span"
                    style={{ cursor: "pointer" }}
                    className="textLink"
                    sx={{ textDecoration: "underline" }}
                  >
                    Terms and conditions
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <SprintMoneyMessanger open={dialog} btnText={"Back to View Profile"} btnClick={() => navigate('/viewprofile')} errorText={"Invalid Cheque"} succesText={""} />
    </Box>
  );
}

export default UploadCheck;
