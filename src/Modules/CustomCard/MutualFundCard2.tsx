import React, { useEffect, useRef, useState } from "react";
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
import { CheckBoxOutlineBlank, CheckBoxOutlineBlankOutlined, CheckBoxOutlined, RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { globalConstant } from "../../Utils/globalConstant";
import { useDispatch } from "react-redux";
import { setReplaceFundActiveIndexForInvestmentAction } from "../../Store/Recommendations/actions/recommendations-action";
import siteConfig from "../../Utils/siteConfig";

export interface MFProp {
  onClick?: (data: any, type: any, element: string, index: number | undefined) => void | undefined;
  isChecked?: boolean

  onCardClick?: (id: string) => void | undefined//from mutual fund screen
  onRemoveCardClick?: (recommendationfund_id: number, secid: string) => void | undefined //for removing card on click 

  fundSelected?: boolean

  activeIndex?: number

  isELSSActive?: boolean

  // API types
  recommendation_id: number,
  recommendationfund_id: number,
  recommendationtype_id: number,
  fundname: string;
  category: string,
  return1yr: string;
  return3yr: string;
  return5yr: string;
  categorygroup: string;
  recommendedamount: number;
  ratingoverall: number;
  fundimage: string;
  secid: string;
  returnytd: string;


  // feature wise propsTypes
  showButtons: boolean;
  showCheckbox: boolean;
  isMutualFundScreen: boolean;
  cefType: string
  isShowRemoveButton?: boolean
}

const enumActiveScreen = Object.freeze({
  CLOSE_MODAL: 0,
  OPEN_DATE_PICKER_MODAL: 1,
  OPEN_CONFIRMATION_MODAL: 2,
});

const useStyles: any = makeStyles((theme: any) => ({
  button: {
    height: "48px",
    borderRadius: "9px !important",
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
  button2: {
    height: "48px",
    borderRadius: "9px !important",
    backgroundColor: "var(--primaryColor) !important",
    margin: "20px",
    width: "90%",
    maxWidth: "400px",
    // "&:hover": {
    //   backgroundColor: "var(--typeLightGreyColor) !important",
    //   "& span": {
    //     color: "var(--uiWhite) !important",
    //   },
    // },
    "& span": {
      color: "var(--uiWhite) !important",
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
  console.log("MutualFundCard2()")
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [removeInvestment, setRemoveInvestment] = useState<boolean>(false);
  const strCardType: string | null = localStorage.getItem(siteConfig.INVESTMENT_CARD_TYPE);

  const handleRemoveClick = (strtype: string) => {
    setRemoveInvestment(false);
    if (strtype === "no") return
    if (props?.onRemoveCardClick) props?.onRemoveCardClick(props?.recommendationfund_id, props?.secid);
  };

  return (
    <>
      <Box
        sx={{
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
          width:
            props?.isMutualFundScreen === true
              ? { xs: "unset", lg: "100%" }
              : "unset",
          boxSizing: "border-box"
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
            <img src={props?.fundimage} width="100%" alt="mirae"></img>
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
              {props?.fundname}
            </Typography>
            {
              props?.isELSSActive ?
                <Box style={{ display: "flex", gap: "10px", marginBottom: "4px" }}>
                  <Box
                    style={{
                      padding: "4px 5px",
                      backgroundColor: "rgba(123, 123, 157, 0.16)",
                    }}
                  >
                    <Typography style={{ color: "#7b7b9d", fontSize: "12px" }}>
                      {props?.category}
                    </Typography>
                  </Box>
                </Box>
                : null
            }

            <Box style={{ display: "flex", gap: "10px" }}>
              <Box
                style={{
                  padding: "4px 5px",
                  backgroundColor: "rgba(123, 123, 157, 0.16)",
                }}
              >
                <Typography style={{ color: "#7b7b9d", fontSize: "12px" }}>
                  {props?.categorygroup}
                </Typography>
              </Box>
            </Box>

            <Box style={{ display: "flex", gap: "10px" }}>
              <Box
                style={{
                  padding: "4px 5px",
                  backgroundColor: "rgba(123, 123, 157, 0.16)",
                  marginTop: "5px"
                }}
                onClick={() => {
                  if (props?.onCardClick) props?.onCardClick(props?.secid ? props?.secid : "")
                }}
              >
                <Typography style={{ color: "#3676d2", fontSize: "12px", textDecoration: "underline", }}>
                  View Scheme Detail
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {
          props?.cefType ?
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

                ???{props?.recommendedamount} {strCardType === globalConstant.SIP_INVESTMENT ? 'pm' : ''}

              </Typography>
            </Box>
            : null
        }
        <Chip
          style={{ borderRadius: "2px", backgroundColor: "#fef4d6" }}
          avatar={<Avatar alt="star" src={Star} />}
          // label={props?.ratingoverall}
          label={<Box sx={{ color: "#767676", size: "10px", fontWeight: "500" }}>
            {
              props?.ratingoverall ?
                props?.ratingoverall + '.0' : "0"
            }
          </Box>}
        />
        <Box
          sx={{
            width: props?.showButtons === true ? { md: "min-content" } : "unset",
            display: "flex",
            gap: props?.showButtons === true ? {
              xs: "30px", md: "10%", lg: "6%", '@media(max-width: 600px)': {
                transform: 'translateX(0%)'
              }
            } : "10px",
            justifyContent:
              props?.showButtons === true ? { xs: "unset", md: "center" } : "unset",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }} style={{ color: "#7b7b9d" }}>
              1yr return
            </Typography>
            <Typography sx={{ fontSize: { xs: "14px", sm: "18px" } }} style={{ color: "#3c3e42", }}>
              ???{props?.return1yr}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }} style={{ color: "#7b7b9d" }}>
              3yrs return
            </Typography>
            <Typography sx={{ fontSize: { xs: "14px", sm: "18px" } }} style={{ color: "#3c3e42", }}>
              ???{props?.return3yr}{" "}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }} style={{ color: "#7b7b9d", }}>
              5yrs return
            </Typography>
            <Typography sx={{ fontSize: { xs: "14px", sm: "18px" } }} style={{ color: "#3c3e42", }}>
              ???{props?.return5yr}
            </Typography>
          </Box>
          {props?.isMutualFundScreen === true ? (
            // for mutual fund screen
            <></>
          ) : (
            <>
              {props?.showButtons === true ? (
                <>
                  {/* for customize plan screen*/}
                  <Grid className={props?.isShowRemoveButton ? "" : "btnVisibeFull"}>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "1vw",
                        marginTop: { xs: "unset", sm: "8%" },
                      }}
                    >
                      <Button
                        variant="contained"
                        style={style.buttons}
                        className={classes.replaceBtn}
                        // onClick={() => naviagte("/replaceFunds")}
                        onClick={() => {
                          dispatch(setReplaceFundActiveIndexForInvestmentAction(props?.activeIndex))
                          navigate('/explorefunds', { state: { status: globalConstant.CEF_REPLACE_FUND, isELSSActive: props?.isELSSActive, parentRoute: "/onetimemutualfundrecommendation" } })
                        }}
                      >
                        <img src={ReplaceButtonIcon} />
                        Replace
                      </Button>
                      {
                        props?.isShowRemoveButton ?
                          <>
                            <Button
                              variant="contained"
                              style={style.buttons}
                              className={classes.removeBtn}
                              onClick={() => {
                                setRemoveInvestment(true);
                              }}
                            >
                              <img src={RemoveButtonIcon} />
                              Remove
                            </Button>
                          </>
                          : null
                      }
                    </Grid>
                  </Grid>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </Box>

        {props?.isMutualFundScreen === false && props?.showButtons === false ? (
          <>
            {props?.showCheckbox === true ? (
              // for add funds
              <>
                {/* {console.log("*************************start*************************")}
                {console.log(props?.fundname, "props?.fundname")}
                {console.log(props?.fundSelected, "props?.fundselected")}
                {console.log(props?.categorygroup, "props?.categorygroup")}
                {console.log("---------------------------End---------------------------")} */}
                <Box component="span" >
                  <Checkbox
                    //  color="success"
                    style={{
                      color: "#23db7b",
                    }}
                    onClick={(e: any) => {
                      if (props?.onClick) props?.onClick(props?.secid, e?.target?.checked, "checked", props?.activeIndex)
                    }}
                    // checked={props?.fundselected ? props?.fundselected : false}

                    checked={props?.fundSelected ? true : false}
                  />



                </Box>
              </>
            ) : (
              // for replace funds
              <Box
                component="span"
                onClick={(e: any) => {
                  if (props?.onClick) props?.onClick(props?.secid, null, "radio", props?.activeIndex)
                }}
              >
                {
                  props?.isChecked === true ?
                    <>
                      <RadioButtonChecked sx={{ color: "var(--primaryColor)" }} />
                    </>
                    : <>
                      <RadioButtonUnchecked />
                    </>
                }
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
                    style={{ fontWeight: "700" }}
                  >
                    Remove Funds
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography component="p" style={{ color: "grey", textAlign: "center" }}>
                    Are you sure you want to remove this fund from the
                    SprintMoney recommended plan?
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    // disabled={showSubmit}
                    style={{ backgroundColor: "#23db7b !important;" }}
                    variant="contained"
                    className={classes?.button2}
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
      </Box>
    </>
  );
};

export default MutualFundCard2;


function setRemoveInvestment(arg0: boolean) {
  throw new Error("Function not implemented.");
}
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
