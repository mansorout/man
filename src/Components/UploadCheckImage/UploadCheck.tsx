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
//import { uploadcheque } from "../../Store/Reducers/action";
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
  MenuItemUnstyled,
  menuItemUnstyledClasses,
  MenuUnstyledActions,
} from "@mui/base";

import {Button,Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Logo, Profile } from "../../Assets/index";

import SaveAndAddButton from "../../Modules/Buttons/SaveAndAddButton";
import { useDispatch } from "react-redux";
import { boolean } from "yup";
import { uploadcheque } from "../../Store/Reducers/action";
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'

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

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    setUploadChequeButtonDisable(false);
    saveAndAddButtonDisable(false);
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

  const dataURL = previewCanvasRef.current?.toDataURL();

  console.log(dataURL);

  //  All Button in components goes here

  function handleToggleAspectClick() {
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
    // for setting in state have to write here
    setImagePreviewToLast(dataURL)
    setCanvasDisable(false);
    setPreview(false);
  };
  const handleCancel = () => {
    setImgSrc("");
    setShowSideButton(true);
  };

  const sendToApi = () => {
    // setCanvasImageToBase64(finalImage)
    setCanvasImageToBase64(dataURL)
    store.dispatch(uploadcheque({ chequedata: base64Image }));
  };

  // const ClearCheck =()=>{
  //   imgSrc("")
  // }

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

    drawHere: {
      width: "169px",
      height: "38px",
      margin: "213px 0 0 196px",
      fontFamily: "213px 0 0 196px",
      fontSize: "32px",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "0.63",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#919eb1",
    } as React.CSSProperties,

    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    profile: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: "1px solid white",
    },
    profileInter: {
      width: "40px",
      height: "40px",
      border: "solid 1px rgba(75, 123, 236, 0.49)",
      borderRadius: "50%",
    },
    menuContainer: {
      boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
      boxSizing: "border-box",
      padding: "10px",
      backgroundColor: "white",
      marginRight: "20px",
    } as React.CSSProperties,
    menuButton: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0px",
    } as React.CSSProperties,
    menuText: {
      color: "black",
      fontSize: "10px",
      fontWeight: "500",
      padding: "5px 10px",
      borderRadius: "4px",
      backgroundColor: "#ffc300",
      cursor: "pointer",
    },
    menuText2: {
      padding: "6px 12px",
      borderRadius: "4px",
      border: "solid 1px #23db7b",
      backgroundColor: "rgba(35, 219, 123, 0.12)",
      fontSize: "12px",
      fontWeight: "500",
      color: "#09b85d",
      cursor: "pointer",
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

  return (
    
    
                 



    
      <Grid
        container
        spacing={0}
        sx={{ height: "100vh", overflow: "hidden" }}
      >
        

       

        <Grid
        className="main"
          container
          sx={{
            height: "100vh",
            overflow: "scroll",
            backgroundColor: "#f9f9f9",
            display:"block"
          }}
          xs={13}
          sm={11}
          md={10}
        >
          <Stack 
            sx={{
              width: "100%",
              // height: "30px",
              // margin: "66px 32px 2px",
              padding: "8px 16px",
              backgroundColor: " #6c63ff",
              height: "fit-content"
            }}
          >
            <Typography
              sx={{ marginTop: '66px' }}
              component="span"
              className="subTitle5"
            >
              Cancelled cheque is used for KYC procedures and to facilitate an
              electronic clearing system (ECS) mandate.
            </Typography>
          </Stack>
          <Breadcrumbs aria-label="breadcrumb">
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
              underline="always"
              color="#6495ED"
              // href="/vp"
              // aria-current="page"
            >
              <Typography className='burgerText'>Cancelled Cheque

              </Typography>

            </Link>
          </Breadcrumbs>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginInline: "auto"}}
          >
            <Paper
              style={{
                // height: "64vh",
                // width: "120vh",
                background: "#fff",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                borderRadius: "8px",
              }}
            >
              <Stack style={{ height: "48px" }}>
                <Typography
                  sx={{ width: "274px", marginBlock: "auto" }}
                  className="largeHeadingText"
                >
                  Add Cancelled Cheque
                </Typography>
              </Stack>
              <Stack style={style.dividerBox}></Stack>

              <Grid container spacing={2} sx={{ display: "-webkit-inline-box" }} >

                <Grid xs>
                  {
                    preview ? <Box
                      sx={{
                        border: "solid 1px #707070",
                        backgroundColor: "#fff",
                        height: "238px",
                        width: "564px",
                        margin: "57px 128px 0px 128px"
                        // marginTop: "55px",
                      }}
                    >
                      {/* for image crop */}
                      {!!imgSrc && (
                        <ReactCrop
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
                              width: "564px",
                              height: "238px",
                              transform: `rotate(${rotate90}deg)`,
                            }}
                            onLoad={onImageLoad}
                          />
                        </ReactCrop>
                      )}
                    </Box> : " "
                  }

                  {
                    preview ? "" : <Box style={{ height: "fit-content", width: "fit-content" }} >
                      <img
                        style={{
                          marginLeft: "195px",
                          marginTop: "57px",
                          border: "1px solid black",
                          width: "564px",
                          height: "238px",
                        }}
                        src={imagePreviewToLast}

                      />
                    </Box>
                  }

                </Grid>


                <Grid sx={{
                  display: " inline-flex", flexGrow: "0",
                  maxWidth: "50%", flexBasis: "50%",
                  marginTop: "60px"
                }} xs={6}>
                  {showSideButton ? (
                    " "
                  ) : (

                    <Box sx={{ "& > :not(style)": { m: .5 }, display: "inline-grid" }}><Fab onClick={handleRotate} >
                      <RotateRightIcon />
                    </Fab>
                      <Fab onClick={handleToggleAspectClick} sx={{ backgroundColor: "#23db7b" }} >
                        <CropIcon />
                      </Fab>

                      <Fab onClick={handleConfirm}>
                        <DoneIcon />
                      </Fab>
                      <Fab onClick={handleCancel} sx={{ backgroundColor: "#23db7b" }}>
                        <ClearIcon />
                      </Fab>
                    </Box>



                  )}
                </Grid>
              </Grid>
              <Box>
                <Box textAlign="center" sx={{ margin: "30px 0px 2px 0px" }}>
                  <input
                    ref={uploadInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={onSelectFile}
                  />

                  {uploadChequeButton ? (
                    <Button
                      onClick={() =>
                        uploadInputRef.current &&
                        uploadInputRef.current.click()
                      }
                      sx={{
                        backgroundColor: "#00b4ff",

                        height: "45px",
                        width: "150px",
                        borderRadius: "32px",
                      }}
                    >
                      <Typography className="subTitle4">
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
                      onClick={() => handleCancel()}
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

              {saveAndAddButton ? (
                <Box
                  textAlign="center"
                  sx={{ pointerEvents: "none", opacity: "0.7" }}
                  onClick={sendToApi}
                >
                  <SaveAndAddButton />
                </Box>
              ) : (
                ""
              )}

              {saveAndAddButton ? (
                ""
              ) : (
                <Box textAlign="center"  sx={{
                  paddingBottom:"40px"
                }}  onClick={sendToApi}>
                  <SaveAndAddButton />
                </Box>
              )}

              {/* for preview of image */}

              {/* for preview of image */}

              {/* {canvasDisable ? (
                ""
              ) : (
                <img
                  src={previewCanvasRef}
                  style={{
                    border: "1px solid black",
                    objectFit: "unset",
                    width: "564px",
                    height: "238px",
                  }}
                />
              )} */}

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
            </Paper>
          </Box>

          <Box
            textAlign="center"
            sx={{
              margin: "auto",
              width: "304px",
            }}
          >
            <Typography component="span" className="bottomContentText ">
              By submitting these details, you are agree to share your details
              to BSE for further transactions <br />
            </Typography>
            <Typography
              component="span"
              style={{ cursor: "pointer" }}
              className="textLink"
            >
              Terms and conditions
            </Typography>


          </Box>
        </Grid>
      </Grid>
    
  
    
  );
}

export default UploadCheck;
