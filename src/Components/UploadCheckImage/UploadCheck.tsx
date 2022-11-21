import "./UploadCheck.css";
import "react-image-crop/dist/ReactCrop.css";
import Fab from "@mui/material/Fab";
import { useDebounceEffect } from "./useDebounceEffects";
import { canvasPreview } from "./CanvasPreview";
import { Box, styled, Stack } from "@mui/system";
import { Grid, Typography, Paper } from "@mui/material";
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
    alert("check")
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
    main: {
      boxSizing: "border-box",
      backgroundColor: "#f9f9f9",
      height: "100vh",
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
    button: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "none",
      backgroundColor: "white",
      textAlign: "left",
      justifyContent: "flex-start",
    } as React.CSSProperties,
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

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <AppBar elevation={2} style={style.appBar} classes={classes.appBar}>
        <Toolbar style={style.toolbar}>
          <Box>
            <MenuRounded
              onClick={() => setOpen(!open)}
              sx={{
                color: "#8787a2",
                display: { sx: "block", sm: "none" },
                marginRight: "20px",
              }}
            />
            <img src={Logo} alt="Sprint Money" style={style.image} />
          </Box>
          <Box onClick={handleClick} style={style.profileContainer}>
            <img src={Profile} alt="image" style={style.profile} />
            <Typography
              sx={{
                fontSize: "16px",
                color: "white",
                display: { xs: "none", sm: "block" },
              }}
            >
              Hi, Rahul M.
            </Typography>
            {anchorEl ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
          </Box>
          <MenuUnstyled
            style={{ zIndex: 5000 }}
            actions={menuActions}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
          >
            <StyledMenuItem>
              <Box style={style.menuContainer}>
                <img src={Profile} alt="image" style={style.profileInter} />
                <Typography className="mediumButtonText">
                  Rahul Malhotra
                </Typography>
                <Typography className="caption">
                  rahul.malhotra@gamil.com
                </Typography>
                <Box style={style.menuButton}>
                  <Typography style={style.menuText}>KYC PENDING</Typography>
                  <Typography style={style.menuText2}>View Profile</Typography>
                </Box>
                <Divider style={{ margin: "15px 0px" }} />
                <Button
                  variant="contained"
                  style={style.button}
                  fullWidth
                  startIcon={<Support style={style.menuIcon} />}
                >
                  <Typography component="span" className="subTitle3">
                    Help & Support
                  </Typography>
                </Button>
              </Box>
            </StyledMenuItem>
          </MenuUnstyled>
        </Toolbar>
      </AppBar>
      <DrawerList
        sx={{
          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
          display: { xs: "block", sm: "none" },
          "& .MuiBackdrop-root": {
            flexGrow: 0,
          },
        }}
        PaperProps={{
          elevation: 0,
          sx: { width: "250px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)" },
        }}
        style={style.drawer}
        onClose={() => setOpen(false)}
        variant="temporary"
        open={open}
      >
        <Toolbar />
        <List sx={{ py: "30px" }}>
          <ListItem disablePadding sx={{ background: "rgba(0, 0, 0, 0.05)" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                my: 2,
                flexDirection: { sm: "column", md: "row" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 1,
                  justifyContent: "center",
                }}
              >
                <HomeIcon sx={{ color: "#23db7b" }} />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 56,
                px: 2.5,
                my: 2,
                flexDirection: { sm: "column", md: "row" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 1,
                  justifyContent: "center",
                }}
              >
                <Assessment sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary="Portfolio"
                sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 56,
                px: 2.5,
                my: 2,
                flexDirection: { sm: "column", md: "row" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 1,
                  justifyContent: "center",
                }}
              >
                <Search sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary="Explore Funds"
                sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              position: "fixed",
              width: { sx: "0%", sm: "8.333%", md: "16.666%" },
              bottom: "0",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 56,
                px: 2.5,
                my: 2,
                flexDirection: { sm: "column", md: "row" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 1,
                  justifyContent: "center",
                }}
              >
                <PowerSettingsNew sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </DrawerList>
      <Box sx={style.main}>
        <Grid
          container
          spacing={0}
          sx={{ height: "100vh", overflow: "hidden" }}
        >
          <Grid
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor: "white",
              boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
              height: "auto",
              padding: 0,
              boxSizing: "border-box",
            }}
            item
            xs={0}
            sm={1}
            md={2}
          >
            <Toolbar />
            <List sx={{ py: "30px", height: "inherit" }}>
              <ListItem
                disablePadding
                sx={{ background: "rgba(0, 0, 0, 0.05)" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    my: 2,
                    flexDirection: { sm: "column", md: "row" },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 1,
                      justifyContent: "center",
                    }}
                  >
                    <HomeIcon sx={{ color: "#23db7b" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                    sx={{
                      color: "#3c3e42",
                      fontSize: { sm: "10px", md: "16px" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 56,
                    px: 2.5,
                    my: 2,
                    flexDirection: { sm: "column", md: "row" },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Assessment sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Portfolio"
                    sx={{
                      color: "#3c3e42",
                      fontSize: { sm: "10px", md: "16px" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 56,
                    px: 2.5,
                    my: 2,
                    flexDirection: { sm: "column", md: "row" },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Search sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Explore Funds"
                    sx={{
                      color: "#3c3e42",
                      fontSize: { sm: "10px", md: "16px" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{
                  display: "block",
                  position: "fixed",
                  width: { sx: "0%", sm: "8.333%", md: "16.666%" },
                  bottom: "0",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 56,
                    px: 2.5,
                    my: 2,
                    flexDirection: { sm: "column", md: "row" },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 1,
                      justifyContent: "center",
                    }}
                  >
                    <PowerSettingsNew sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Logout"
                    sx={{
                      color: "#3c3e42",
                      fontSize: { sm: "10px", md: "16px" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>

          { }

          <Grid
            container
            sx={{
              height: "100vh",
              overflow: "scroll",
              backgroundColor: "#f9f9f9",
            }}
            xs={13}
            sm={11}
            md={10}
          >
            <Stack
              sx={{
                width: "100%",
                height: "30px",
                margin: "66px 0px 0px",
                backgroundColor: " #6c63ff",
              }}
            >
              <Typography
                sx={{ marginTop: "7px", marginLeft: "26px" }}
                component="span"
                className="subTitle5"
              >
                Cancelled cheque is used for KYC procedures and to facilitate an
                electronic clearing system (ECS) mandate.
              </Typography>
            </Stack>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ marginInline: "auto" }}
            >
              <Paper
                style={{
                  height: "64vh",
                  width: "120vh",
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
                          margin: "57px 0px 0px 195px",
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
                        <Fab onClick={handleToggleAspectClick}>
                          <CropIcon />
                        </Fab>

                        <Fab sx={{ backgroundColor: "#23db7b" }} onClick={handleConfirm}>
                          <DoneIcon />
                        </Fab>
                        <Fab onClick={handleCancel} >
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
                  <Box textAlign="center" onClick={sendToApi}>
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
      </Box>
    </Box>
  );
}

export default UploadCheck;
