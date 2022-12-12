import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Checkbox,
  Grid,
  Button,
  Chip,
  Typography,
  Dialog,
  DialogTitle,
  List,
  ImageListItem,
  Modal,
  Avatar,
} from "@mui/material";
import {
  formatter,
  MorningStarLogo,
  ReplaceButtonIcon,
  RemoveButtonIcon,
  Star,
  tick,
  Radiobutton,
} from "../../Assets";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";

export interface MFProp {
  logo: string;
  title: string;
  fundType: string;
  price: number;
  rating: number;
  morningStarLogo: boolean;
  oneYearReturn: number;
  threeYearReturn: number;
  fiveYearReturn: number;
  buttons: boolean;
  checkbox: boolean;
  isMutualFundScreen: boolean;
}

const enumActiveScreen = Object.freeze({
  CLOSE_MODAL: 0,
  OPEN_DATE_PICKER_MODAL: 1,
  OPEN_CONFIRMATION_MODAL: 2,
});

const useStyles: any = makeStyles((theme: any) => ({
  button: {
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "rgba(60, 62, 66, 0.1) !important",
    margin: "20px",
    width: "90%",
    maxWidth: "400px",
    "&:hover": {
      backgroundColor: "#23db7b !important",
    },
    "& span": {
      color: "#fff !important",
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
}));

const style = {
  returns: {
    fontSize: "14px",
    color: "#7b7b9d",
  },
  amount: {
    fontSize: "18px",
    color: "#3c3e42",
  },
  growthRed: {
    color: "#db2323",
  },
  growthGreen: {
    color: "#23db7b",
  },
  buttons: {
    // width: "9.84vw",
    // height: "2.5vw",
    padding: "0.625vw 2.2vw",
    borderRadius: "0.625vw",
    fontSize: "11px",
    fontWeight: 500,
  },
  text: {
    color: "white",
  },
};
const MutualFundCard2 = (props: MFProp) => {
  const classes = useStyles();
  const naviagte = useNavigate();
  const [removeInvestment, setRemoveInvestment] = useState<boolean>(false);

  const handleClick = (strtype: string) => {
    if (strtype === "no") {
      setRemoveInvestment(false);
      return;
    }

    //delete item
  };

  // return (
  //   <Box sx={{
  //     padding: '0.625vw 0.625vw 1.5vw 1.5vw',
  //     borderRadius: '0.625vw',
  //     boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
  //     backgroundColor: '#fff',
  //     fontFamily: 'Roboto',
  //     margin: 0,
  //     marginBottom: "20px",
  //     // marginTop: { xs: "25%" },
  //     marginLeft: { xs: "-5%", sm: "0%" }
  //   }}>
  //     <Grid container spacing={2} sx={{
  //       width: '78.75vw',
  //       display: 'flex',
  //       justifyContent: 'space-between',
  //       alignItems: 'start',
  //     }}>

  //       <Grid item xs={8} sm={5} sx={{
  //         display: 'flex',
  //       }}>
  //         <Box sx={{
  //           width: '3vw',
  //           height: '3vw',
  //           padding: '2px',
  //           border: 'solid 1px #d1d6dd',
  //           backgroundColor: '#fff',
  //           borderRadius: '50%',
  //           marginRight: '1vw',
  //         }}>
  //           <img src={props.logo} alt="Company Logo" style={{
  //             width: '2.4vw',
  //             height: '2.4vw',
  //             margin: '2px',
  //             objectFit: 'contain',
  //             fontSize: '10px',
  //           }} />
  //         </Box>
  //         <Box>
  //           <Typography sx={{
  //             fontSize: '16px',
  //             fontWeight: 500,
  //             color: '#3c3e42',
  //           }}>{props?.title}</Typography>
  //           <Chip
  //             label={props?.fundType}
  //             sx={{
  //               borderRadius: '2px',
  //               backgroundColor: 'rgba(123, 123, 157, 0.16)',
  //               padding: '0.05vw 0.1vw',
  //               fontSize: '12px',
  //               fontWeight: 500,
  //               color: '#7b7b9d',
  //               opacity: 0.87,
  //               margin: '1vw 3vw 0 0'
  //             }} />
  //           {/* {
  //             props?.fundType.map(ft => <Chip label={ft} key={ft} sx={{
  //               borderRadius: '2px',
  //               backgroundColor: 'rgba(123, 123, 157, 0.16)',
  //               padding: '0.05vw 0.1vw',
  //               fontSize: '12px',
  //               fontWeight: 500,
  //               color: '#7b7b9d',
  //               opacity: 0.87,
  //               margin: '1vw 3vw 0 0'
  //             }} />)
  //           } */}
  //         </Box>
  //       </Grid>
  //       <Grid item xs={2}>
  //         <Chip label={formatter.format(props.price)} sx={{
  //           borderRadius: '2px',
  //           backgroundColor: 'rgba(108, 99, 255, 0.2)',
  //           padding: '0.2vw 0.3vw',
  //           fontSize: '12px',
  //           fontWeight: 500,
  //           color: '#6c63ff',
  //           opacity: 0.87,
  //         }} />
  //       </Grid>
  //       <Grid container item xs={2} sm={1} sx={{
  //         display: 'flex',
  //         flexDirection: 'column',
  //       }}>
  //         <Grid item sx={{
  //           display: 'flex',
  //           alignItems: 'center',
  //           width: '49px',
  //           height: '24px',
  //           padding: '3.2px 6px 2.5px 2.5px',
  //           borderRadius: '2px',
  //           backgroundColor: 'rgba(255, 195, 0, 0.16)',

  //         }}>
  //           <img src={Star} width={18.3} height={18.3} style={{
  //             margin: '0 2.2px 0 0',
  //             objectFit: 'contain',
  //           }} />
  //           <Typography sx={{
  //             width: '20px',
  //             height: '16px',
  //             margin: '1.8px 0 0.5px 2.2px',
  //             paddingBottom: '3px',
  //             opacity: 0.54,
  //             fontSize: '14px',
  //             fontWeight: 500,
  //             color: 'black',
  //           }}>{props.rating}</Typography>
  //         </Grid>
  //         <img src={MorningStarLogo} alt="Morning Star" width={57} height={16} style={{
  //           objectFit: 'contain',
  //           mixBlendMode: 'luminosity'
  //         }} />
  //       </Grid>
  //       <Grid item xs={10} sm={4} sx={{
  //         display: 'flex',
  //         justifyContent: 'space-between',
  //       }}>
  //         <Box component="span">
  //           <Typography style={style.returns}>1 yr return</Typography>
  //           <Typography style={style.amount}>{props.oneYearReturn}%</Typography>
  //         </Box>
  //         <Box component="span">
  //           <Typography style={style.returns}>3 yrs return</Typography>
  //           <Typography style={style.amount}>{props.threeYearReturn}%</Typography>
  //         </Box>
  //         <Box component="span">
  //           <Typography style={style.returns}>5 yrs return</Typography>
  //           <Typography style={style.amount}>{props.fiveYearReturn}%</Typography>
  //         </Box>
  //         {
  //           props?.checkbox ?
  //             <Box component="span">
  //               <Checkbox />
  //             </Box>
  //             : <>
  //               <Box component="span">
  //                 <RadioButtonChecked
  //                   style={{
  //                     color: "var(--primaryColor)"
  //                   }}
  //                 />
  //               </Box>
  //             </>
  //         }
  //       </Grid>

  //     </Grid>

  //     {
  //       props.buttons &&
  //       <Grid sx={{
  //         display: 'flex',
  //         justifyContent: 'flex-end',
  //         gap: '1vw',
  //       }}>
  //         <Button variant='contained' style={style.buttons} sx={{
  //           backgroundColor: 'rgba(123, 123, 157, 0.05)',
  //           color: '#7b7b9d'
  //         }}
  //           onClick={() => naviagte('/replaceFunds')}
  //         >
  //           <img src={ReplaceButtonIcon} />
  //           Replace
  //         </Button>
  //         <Button variant="contained" style={style.buttons} sx={{
  //           backgroundColor: 'rgba(255, 83, 0, 0.05)',
  //           color: '#ff5300'
  //         }}
  //           // onClick={() => naviagte('/under')}
  //           onClick={() => {
  //             setRemoveInvestment(true);
  //           }}
  //         >
  //           <img src={RemoveButtonIcon} />
  //           Remove
  //         </Button>
  //       </Grid>
  //     }

  //     <Dialog open={removeInvestment} fullWidth style={{ borderRadius: "8px" }}>
  //       <Box style={{ margin: "6%", marginBottom: "2%" }}>
  //         <List sx={{ pt: 0 }}>
  //           <Grid container xs={12} justifyContent="center" display="flex" spacing={4} marginLeft="-14px !important">
  //             <Grid item container xs={12} spacing={2} >
  //               <Grid item xs={3} />
  //               <Grid item xs={6} justifyContent="center" display="flex" spacing={2} style={{ marginTop: "25px" }}>
  //                 <img
  //                   src="./assets/images/Group 5102 (non-optimized).png"
  //                   srcSet="./assets/images/Group 5102 (non-optimized).png"
  //                   alt={"not loaded"}
  //                   loading="lazy"
  //                   className={classes.manImg}
  //                 />
  //               </Grid>
  //               <Grid item xs={3} />
  //             </Grid>
  //             <Grid item xs={9}>
  //               <Typography variant="h2" display="flex" justifyContent={"center"}>
  //                 Remove Funds
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={9}>
  //               <Typography component="p" style={{ color: "grey" }}>
  //                 Are you sure you want to remove this fund from the SprintMoney recommended plan?
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6}>
  //               <Button
  //                 // disabled={showSubmit}
  //                 variant="contained"
  //                 className={classes?.button}
  //                 fullWidth
  //                 onClick={() => handleClick("no")}
  //                 sx={{
  //                   pointerEvents: 'fill',
  //                 }}
  //               >
  //                 <Typography style={{ color: "black !important" }} component="span" className="largeButtonText"  >No</Typography>
  //               </Button>
  //             </Grid>
  //             <Grid item xs={6}>
  //               <Button
  //                 // disabled={showSubmit}
  //                 variant="contained"
  //                 className={classes?.button}
  //                 fullWidth
  //                 onClick={() => handleClick("yes")}
  //                 sx={{
  //                   pointerEvents: 'fill',
  //                 }}
  //               >
  //                 <Typography style={{ color: "black !important" }} component="span" className="largeButtonText"  >Yes</Typography>
  //               </Button>
  //             </Grid>
  //           </Grid>
  //         </List>
  //       </Box>
  //     </Dialog>

  //   </Box >

  // )
  return (
    <>
      <Box
        style={{
          gap: "20px",
          flexWrap: "wrap",
          overflowX: "scroll",
          marginBottom: "15px",
          display: "flex",
          backgroundColor: "white",
          borderRadius: "8px",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
          padding: "10px 20px",
        }}
      >
        <Box
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <Box
            style={{
              overflow: "hidden",
              height: "32px",
              width: "32px",
              border: "1px solid #d1d6dd",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={props?.logo} width="100%" alt="mirae"></img>
          </Box>
          <Box>
            <Typography
              style={{
                marginBottom: "10px",
                color: "#3c3e42",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "1.19",
              }}
            >
              {props?.title}
            </Typography>
            <Box style={{ display: "flex", gap: "10px" }}>
              {/* <Box style={{ padding: "4px 5px", backgroundColor: "rgba(123, 123, 157, 0.16)" }}>
                  <Typography style={{ color: "#7b7b9d", fontSize: "12px" }}>{props?.cap}</Typography>
                </Box> */}
              <Box
                style={{
                  padding: "4px 5px",
                  backgroundColor: "rgba(123, 123, 157, 0.16)",
                }}
              >
                <Typography style={{ color: "#7b7b9d", fontSize: "12px" }}>
                  {props?.fundType}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            padding: "4px 8px",
            backgroundColor: "#d6d5ef",
            borderRadius: "2px",
          }}
        >
          <Typography
            style={{ color: "#6c63ff", fontSize: "16px", fontWeight: "500" }}
          >
            ₹{props?.price}
          </Typography>
        </Box>
        <Chip
          style={{ borderRadius: "0px", backgroundColor: "#fef4d6" }}
          avatar={<Avatar alt="star" src={Star} />}
          label={props?.rating}
        />
        <Box
          // style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}
          sx={{
            // width: { ...widthRef.current },
            width: props?.buttons === true ? { md: "min-content" } : "unset",
            display: "flex",
            // gap: "30px",
            gap: props?.buttons === true ? { xs: "30px", md: "8%" } : "30px",
            justifyContent:
              props?.buttons === true ? { xs: "unset", md: "center" } : "unset",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>
              1yrs return
            </Typography>
            <Typography style={{ color: "#3c3e42", fontSize: "18px" }}>
              ₹{props?.oneYearReturn}
            </Typography>
          </Box>
          <Box>
            <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>
              3yrs return
            </Typography>
            <Typography style={{ color: "#3c3e42", fontSize: "18px" }}>
              ₹{props?.threeYearReturn}{" "}
            </Typography>
          </Box>
          <Box>
            <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>
              5yrs return
            </Typography>
            <Typography style={{ color: "#3c3e42", fontSize: "18px" }}>
              ₹{props?.fiveYearReturn}
            </Typography>
          </Box>
          {props?.isMutualFundScreen === true ? (
            // for mutual fund screen
            <></>
          ) : (
            <>
              {props?.buttons === true ? (
                <>
                  {/* for customize plan screen*/}
                  <Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "1vw",
                        marginTop: { xs: "unset", sm: "8%" },
                        // position: { md: "absolute" },
                        // right: { md: "-5%" },
                      }}
                    >
                      <Button
                        variant="contained"
                        style={style.buttons}
                        className={classes.replaceBtn}
                        // sx={{
                        //   backgroundColor: "rgba(123, 123, 157, 0.05)",
                        //   color: "#7b7b9d",
                        // }}
                        onClick={() => naviagte("/replaceFunds")}
                      >
                        <img src={ReplaceButtonIcon} />
                        Replace
                      </Button>
                      <Button
                        variant="contained"
                        style={style.buttons}
                        className={classes.removeBtn}
                        // sx={{
                        //   backgroundColor: "rgba(255, 83, 0, 0.05)",
                        //   color: "#ff5300",
                        // }}
                        onClick={() => {
                          setRemoveInvestment(true);
                        }}
                      >
                        <img src={RemoveButtonIcon} />
                        Remove
                      </Button>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </Box>

        {props?.isMutualFundScreen === false && props?.buttons === false ? (
          <>
            {props?.checkbox === true ? (
              // for add funds
              <Box component="span">
                <Checkbox />
              </Box>
            ) : (
              // for replace funds
              <Box component="span">
                <input type="radio" style={{ color: "var(--primaryColor)" }} />
              </Box>
            )}
          </>
        ) : null}

        <Dialog
          open={removeInvestment}
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
                      src="./assets/images/Group 5102 (non-optimized).png"
                      srcSet="./assets/images/Group 5102 (non-optimized).png"
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
                    onClick={() => handleClick("no")}
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
                    onClick={() => handleClick("yes")}
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
      </Box>

      {/* <Modal open={openPaymentModal} onClose={()=>setOpenPaymentModal(false)}>
      <Box style={{
        width:"90%",
        maxWidth:"330px",
        borderRadius:"8px",
        boxShadow:"0 24px 24px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        overflow:"hidden",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)"
      }}>
        <Box my={2} style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#6c63ff", width:"50px", height:'50px', borderRadius:"50%", }}>
          <ErrorOutline sx={{ width:"48px", color:"white"}}/>
        </Box>
        <Typography mb={2} style={{fontSize:"24px", color:"#3c3e42", fontWeight:"500"}}>NEFT/RTGS Pending</Typography>
        <Box style={{backgroundColor:"#6c63ff", width:"100%"}}>
          <Typography style={{fontSize:"14px", color:'white', padding:"10px 20px"}}>Transfer ₹30,000 to below account</Typography>
        </Box>
        <Grid container xs={12} style={{backgroundColor:"white", width:"100%" }}>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#7d7d9e', padding:"10px 20px"}}>Bank Name</Typography></Grid>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#3c3e42', padding:"10px 20px"}}>ICICI Bank</Typography></Grid>
        </Grid>
        <Grid container xs={12} style={{backgroundColor:"rgba(0, 0, 0, 0.05)", width:"100%"}}>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#7d7d9e', padding:"10px 20px"}}>Account Name</Typography></Grid>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#3c3e42', padding:"10px 20px"}}>ICICI Ltd.</Typography></Grid>
        </Grid>
        <Grid container xs={12} style={{backgroundColor:"white", width:"100%"}}>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#7d7d9e', padding:"10px 20px"}}>Account Type</Typography></Grid>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#3c3e42', padding:"10px 20px"}}>Current Account</Typography></Grid>
        </Grid>
        <Grid container xs={12} style={{backgroundColor:"rgba(0, 0, 0, 0.05)", width:"100%"}}>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#7d7d9e', padding:"10px 20px"}}>Account Number</Typography></Grid>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#3c3e42', padding:"10px 20px"}}>000405103922</Typography></Grid>
        </Grid>
        <Grid container xs={12} style={{backgroundColor:"white", width:"100%"}}>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#7d7d9e', padding:"10px 20px"}}>IFSC Code</Typography></Grid>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#3c3e42', padding:"10px 20px"}}>ICICI0000104</Typography></Grid>
        </Grid>
        <Box style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:"20px", padding:"10px 20px"}}>
          <InfoRounded style={{color:"#6c63ff", width:"20px"}}></InfoRounded>
          <Typography style={{ fontSize:"10px",color:'#919eb1'}}>The transaction will be processed once BSE Star MF gets money from your bank. Your transaction will be cancelled if the money isn’t received within 5 working days.</Typography>
        </Box>
        <Button variant="contained" style={style.button3} fullWidth onClick={()=>{setOpenPaymentModal(false)}} >
            <Typography style={style.text} className="largeButtonText">Continue</Typography>
        </Button>
      </Box>
    </Modal> */}
    </>
  );
};

export default MutualFundCard2;
