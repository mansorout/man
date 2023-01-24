import './Portfolio.css'
import { Box, styled, Stack } from '@mui/system'
import { Avatar, Breadcrumbs, Chip, Grid, IconButton, InputBase, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { FilterAltOutlined, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search, SearchOutlined, TaskAltOutlined, WrongLocationOutlined } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import { isMultipleofNumber } from '../../Utils/globalFunctions'

const useStyles: any = makeStyles((theme: Theme) => ({
  cardWrap: {
    boxShadow: 'var(--themeShadow)',
    // padding: '15px 7px',
    paddingBottom: '15px',
    borderRadius: '8px',
  },
  actibeBtn: {
    "&:focus": {
      backgroundColor: "rgb(111 121 239 / 40%) !important",
    },
  },
  btn: {
    "&:hover": {
      backgroundColor: "rgb(111 121 239 / 40%) !important",
    }
  },
  cardDeactiveState: {
    backgroundColor: '#ddd',
    marginBottom: '10px !important',
  },
  headingWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '12px',
    // justifyContent: 'center',
    '& img': {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      border: '1px solid #f2f2f2',
      display: 'inline-block',
      marginRight: '10px',
    }
  },
  cardHeading: {
    color: 'var(--typeLightBlackColor)',
    fontWeight: 500,

  },
  cardBtnWrap: {
    backgroundColor: 'var(--uiWhite)',
    '& button': {
      boxShadow: 'none',
    }
  },

  button: {
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "var(--typeLightGreyColor) !important",
    margin: "20px",
    width: "90%",
    maxWidth: "400px",
    "&:hover": {
      backgroundColor: "var(--primaryColor) !important",
      "& span": {
        color: "var(--uiWhite) !important",
      },
    },
    "& span": {
      color: "var(--typeBlackColor) !important",
      fontWeight: "unset !important",
    },
    manImg: {
      width: "40px !important",
      height: "40px !important",
      // position: "absolute",
      // right: "0px",
      // bottom: "-1px"
    },
  },
  replaceBtn: {
    backgroundColor: "var(--uiLightGreyColor) !important",
    color: "#7b7b9d !important",
    "&:hover": {
      backgroundColor: "rgba(123, 123, 157, 0.05) !important",
    },
  },
  removeBtn: {
    backgroundColor: "rgba(255, 83, 0, 0.05) !important",
    color: "#ff5300 !important",
    "&:hover": {
      backgroundColor: "rgba(255, 83, 0, 0.05) !important",
    },
  },
  greenColor: {
    backgroundColor: "var(--primaryColor) !important",
  },
}))

interface AddFundAmtCard {
  data: any;
  handleOnChangeFunAddFund: (e: any, param: any, index: number) => void;
  removeBtnAction: (param: any) => void;
  errorAmount: any;
  index: number
}

export default function FundAmtCard(props: AddFundAmtCard) {
  const enumPriceList = {
    ZERO: "0",
    ONE_THOUSAND: "+1000",
    FIVE_THOUSAND: "+5000",
    TEN_THOUSAND: "+10,000"
  }
  //@ts-ignore
  const classes = useStyles()
  const [removeConfirmation, setRemoveConfirmation] = React.useState<boolean>(false);
  const [removeItem, setRemoveItem] = React.useState<any>({})
  const [amount, setAmount] = React.useState<any>();
  const [errorMessageFN, setErrorMessageFN] = React.useState<any>("");
  const [error, setError] = React.useState<any>("")
  const [activePriceAmount, setActivePriceAmount] = useState<string>(enumPriceList.ZERO);

  const handleRemoveClick = (strtype: string) => {
    console.log(removeItem)
    setRemoveConfirmation(false);
    if (strtype === "no") return
    if (props?.removeBtnAction) props?.removeBtnAction(removeItem);
  };
  const arrPriceList = [1000, 5000, 10000];
  function handleOnBlurAmount(e: any) {
    if (amount < props.data.lumpsumminamount) {
      setError(true)
      setErrorMessageFN(`Amount should be greater than ${props.data.lumpsumminamount}`)
    } else {
      if (amount < props.data.sipminamount) {
        setError(true)
        setErrorMessageFN(`Amount should be greater than ${props.data.sipminamount}`)
      }
    }

  }
  const timerRef: any = useRef();
  const handleTimer = (cb: any | void, a: any) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { 
      cb(a);
    }, 200);
  }
  const handleActivePriceAmount = (strAmount: string, nAmount: number) => {
    console.log(strAmount)
    console.log(nAmount)
    setActivePriceAmount(strAmount);
    setAmount(nAmount)
    // setAmount((prev: number) => prev + nAmount);
    // let val = amount + nAmount;
    // console.log(val)
  }

  let textColor = "#8787a2"
  if (amount === "" || !amount || amount?.length == 0) {
    textColor = "#8787a2"
  } else if (amount < props?.data?.sipminamount || amount < props?.data?.lumpsumminamount) {
    textColor = 'red'
  }

  return (
    <>
      <Grid xs={12} sm={12} style={{marginBottom:"10px"}}>
        <Box style={{display:"flex", marginBottom:"10px"}}>
          <Grid container>
              <Grid xs={9} sm={8}>
              <Box style={{display:"flex",}}>
              <Box style={{overflow:"hidden",height:"32px", width:"100%",maxWidth:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
                    <img src={props?.data?.fundimage} width="100%" alt='mirae'></img>
                </Box>
        <p className='textFundname' style={{margin:"6px 10px"}}>{props?.data?.fundname}</p>
        </Box>
              </Grid>
              <Grid xs={3} sm={4}>
              <Box style={{width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "flex-end",alignItems:"center"}}>
        <Box
              style={{
                padding: "4px 8px",
                backgroundColor: "#d6d5ef",
                borderRadius: "2px",
                
              }}
            >
              <Typography
                sx={{width:{xs:"auto", sm:"100px"}, overflow:"hidden"}}
                style={{ color: "#6c63ff", fontSize: "16px", fontWeight: "500"}}
              >

                ₹{amount?amount:"0"}

              </Typography>
            </Box>
        </Box>
              </Grid>
          </Grid>
        </Box>
        <Box sx={{ position: "relative" }}>
          <TextField label="Enter Investment Amount"
            type="number"
            name="Amount"
            fullWidth
            placeholder='₹1,00,000'
            onBlur={handleOnBlurAmount}
            onChange={(e) => {
              props?.handleOnChangeFunAddFund(e, props?.data, props?.index)
              setAmount(e.target.value)
            }}
            value={props?.data?.userRecommendedAmount ? props?.data?.userRecommendedAmount : amount}
            sx={{ width: "100%", maxWidth: "100%" }}
          >

          </TextField>
          <Typography
            sx={{
              height: "14px",
              margin: "0",

              fontSize: "12px",
              fontWeight: "normal",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: " 1.33",
              letterSpacing: "normal",
              textAlign: " left",
              // color: textColor,
              color: "red",
            }}
          >{props?.data?.ErrorMsg != "" ? props?.data?.ErrorMsg || amount < props?.data?.lumpsumminamount && `Minimum investment amount is ₹${props?.data?.lumpsumminamount}` : amount < props?.data?.sipminamount && `Minimum investment amount is ₹${props?.data?.sipminamount}`}</Typography>
          {/* <Stack direction="row" spacing={4} sx={{ marginTop: "14px" }} className="ButtonStyleInvest">
                              <Button
                                variant="contained"
                                // disabled
                                className={activePriceAmount === enumPriceList.ONE_THOUSAND ? classes.actibeBtn : classes.btn}
                                sx={{
                                  // BackgroundColor: "#6c63ff",
                                  color: "rgba(0, 0, 0, 0.26)",
                                  boxShadow: "none",
                                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                                  // BackgroundColor: "var(--typeIndigoColor) !important",
                                  borderRadius: "2px",
                                  width: "60px",
                                  height: "33px",
                                  margin: " 2.2 12px 0 0",
                                  padding: "10px 12px 9px",
                                  
                                }}
                                onClick={() => (handleActivePriceAmount(enumPriceList.ONE_THOUSAND, arrPriceList[0]))}
                              >
                                <b style={{ color: "#6c63ff" }}>{enumPriceList.ONE_THOUSAND}</b>
                              </Button>
                              <Button
                                variant="contained"
                                className={activePriceAmount === enumPriceList.FIVE_THOUSAND ? classes.actibeBtn : classes.btn}
                                // disabled
                                sx={{
                                  // BackgroundColor: "#6c63ff",
                                  color: "rgba(0, 0, 0, 0.26)",
                                  boxShadow: "none",
                                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                                  borderRadius: "2px",
                                  // color: "#6c63ff",
                                  width: "64px",
                                  height: "35px",
                                  margin: " 2.2 12px 0 0",
                                  padding: "10px 12px 9px",
                                }}
                                onClick={() => (handleActivePriceAmount(enumPriceList.FIVE_THOUSAND, arrPriceList[1]))}
                              >
                                <b style={{ color: "#6c63ff" }}>{enumPriceList.FIVE_THOUSAND}</b>
                              </Button>
                              <Button
                                variant="contained"
                                href="#contained-buttons"
                                className={activePriceAmount === enumPriceList.TEN_THOUSAND ? classes.actibeBtn : classes.btn}
                                // disabled
                                sx={{
                                  // BackgroundColor: "#6c63ff",
                                  color: "rgba(0, 0, 0, 0.26)",
                                  boxShadow: "none",
                                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                                  borderRadius: "2px",
                                  // color: "#6c63ff",
                                  width: "75px",
                                  height: "35px",
                                }}
                                onClick={() => (handleActivePriceAmount(enumPriceList.TEN_THOUSAND, arrPriceList[2]))}
                              > <b style={{ color: "#6c63ff" }}>{enumPriceList.TEN_THOUSAND}</b>
                              </Button>
                            </Stack> */}
         
          {/* <Button
            onClick={() => {
              setRemoveItem(props?.data)
              setRemoveConfirmation(true)
            }}
            sx={{ position: "absolute", right: "0", textAlign: "center", top: "0", justifyContent: "end", height: "55px" }} variant="outlined" startIcon={<DeleteIcon />}>

          </Button> */}
        </Box>
      </Grid>
      <Dialog
        open={removeConfirmation}
        fullWidth
        style={{ borderRadius: "8px" }}
      >
        <Box style={{ margin: "6%", marginBottom: "2%" }}>
          <List sx={{ pt: 0 }}>
            <Grid
              container
              xs={12}
              justifyContent="center"
              display="flex"
              spacing={4}
              marginLeft="-14px !important"
            >

              <Grid item container xs={12} spacing={2}>
                <Grid item xs={3} />
                <Grid
                  item
                  xs={6}
                  justifyContent="center"
                  display="flex"
                  spacing={2}
                  style={{ marginTop: "25px" }}
                >
                  <img
                    src="./assets/images/Group_5102.png"
                    srcSet="./assets/images/Group_5102.png"
                    alt={"not loaded"}
                    loading="lazy"
                    className={classes.manImg}
                  />
                </Grid>
                <Grid item xs={3} />
              </Grid>
              <Grid item xs={9}>
                <Typography
                  variant="h2"
                  display="flex"
                  justifyContent={"center"}
                >
                  Remove Funds
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography component="p" style={{ color: "grey" }}>
                  Are you sure you want to remove this fund from the
                  SprintMoney recommended plan?
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button
                  // disabled={showSubmit}
                  variant="contained"
                  className={classes?.button}
                  fullWidth
                  onClick={() => handleRemoveClick("no")}
                  sx={{
                    pointerEvents: "fill",
                  }}
                >
                  <Typography
                    style={{ color: "black !important" }}
                    component="span"
                    className="largeButtonText"
                  >
                    No
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  // disabled={showSubmit}
                  variant="contained"
                  className={classes?.button}
                  fullWidth
                  onClick={() => handleRemoveClick("yes")}
                  sx={{
                    pointerEvents: "fill",
                  }}
                >
                  <Typography
                    style={{ color: "black !important" }}
                    component="span"
                    className="largeButtonText"
                  >
                    Yes
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </List>
        </Box>
      </Dialog>
    </>
  )
}