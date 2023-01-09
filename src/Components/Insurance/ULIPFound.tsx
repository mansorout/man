import React, { useRef, useState } from "react";
import "./insurance.css";
import { Box } from "@mui/system";
import {
  Breadcrumbs,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  Typography,
} from "@mui/material";
import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import { ULIPList } from "../../Modal/ULIP";
import ULIPCard from "../../Modules/CustomCard/ULIPCard";
import { Done, FilterAltOutlined, SearchOutlined } from "@mui/icons-material";
import { AnchorOpenAction } from "../../Store/Duck/FilterBox";
import HealthFilter from "./HealthFilter";
import AllTrancationCard from "../../Modules/CustomCard/AllTransactionCard";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Avatar from "@mui/material/Avatar";
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { hdfcErgo, iclogoplus, wclogo } from "../../Assets";

const useStyles: any = makeStyles((theme: Theme) => ({
  select: {
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      border: "1px solid white !important",
    },
    "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
      color: "white !important",
    },
    "& .MuiSelect-icon": {
      color: "white",
    },
  },
}));

function ULIPFound() {
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
    modalContainer: {
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    } as React.CSSProperties,
    logo: {
      width: "50px",
      padding: "20px 0px",
    } as React.CSSProperties,
    select: {
      color: "white",
      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: "1px solid white",
      },
      "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
        color: "white !important",
      },
      "&svg": {
        color: "white",
      },
    },
    ca: {
      // borderRadius: "170px 175px 175px 163px",
      backgroundColor: "#f9f9f9",
      border: "solid 1px #d1d6dd",
      width: "46px",
      height: "46px",

      padding: "10px",

      // width: '80px',
      // height: '80px',
      // margin: '0 54px 22px 34px',
      // padding: '20px',
      // boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
      // border: 'solid 1px rgba(0, 0, 0, 0.08)',
    } as React.CSSProperties,
  };

  const refContainer = useRef();

  const [sumAmount, setSumAmount] = useState<string>("");
  const [showGotit, setShowGotit] = useState<any>(false);

  const [transactions, setTransactions] = useState<any[]>([]);

  const handleSumChange = (e: any) => {
    setSumAmount(e.target.value as string);
  };

  const [member, setMember] = useState<string>("");
  const handleMemberChange = (e: any) => {
    setMember(e.target.value as string);
  };

  const classes = useStyles();
  const dispatch: any = useDispatch();
  const handleFilter = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(AnchorOpenAction(event));
    setShowGotit(true);
  };

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid
            p={2}
            container
            sx={{ height: "100vh", overflow: "scroll" }}
            xs={13}
            sm={11}
            md={10}
          >
            <Grid
              sx={{
                height: { xs: "auto", sm: "inherit" },
                padding: 0,
                boxSizing: "border-box",
                overflow: { sx: "auto", sm: "scroll" },
              }}
              item
              xs={12}
            >
              <Toolbar />
              <Box role="presentation" sx={{ marginTop: "-1%" }}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="#6495ED" underline="always" href="Home">
                    <Typography className="burgerText"> Home</Typography>
                  </Link>
                  <Link underline="always" href="/explorefunds">
                    <Typography color="#6495ED" className="burgerText">
                      Get Insured{" "}
                    </Typography>
                  </Link>
                  <Link
                    underline="always"
                    color="#6495ED"
                    sx={{ fontSize: "12px", width: "100%" }}
                  >
                    <Typography color="#6495ED" className="burgerText">
                      Health Insurance
                    </Typography>
                  </Link>
                  <Link
                    underline="none"
                    color="#878782"
                    sx={{ fontSize: "12px", width: "100%" }}
                  >
                    <Typography className="burgerText">
                      Recommended Plans
                    </Typography>
                  </Link>
                </Breadcrumbs>
              </Box>

              <Grid
                item
                xs={12}
                p={2}
                borderRadius={2}
                style={{ backgroundColor: "#6a63f6", marginTop: "1%" }}
              >
                <Box
                  p={1}
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ width: "300px" }} variant="outlined">
                    <InputLabel style={{ color: "white" }}>
                      Sum Insured
                    </InputLabel>
                    <Select
                      className={classes.select}
                      style={style.select}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sumAmount}
                      label="insuranceAmount"
                      onChange={(e: any) => handleSumChange(e)}
                    >
                      <MenuItem value={"₹3,00,000"}>₹3 Lacs</MenuItem>
                      <MenuItem value={"₹5,00,000"}>₹5 Lacs</MenuItem>
                      <MenuItem value={"₹7,00,000"}>₹7 Lacs</MenuItem>
                      <MenuItem value={"₹10,00,000"}>₹10 Lacs</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ width: "300px" }} variant="outlined">
                    <InputLabel style={{ color: "white" }}>
                      Member Insured
                    </InputLabel>
                    <Select
                      className={classes.select}
                      style={style.select}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={member}
                      label="insuranceAmount"
                      onChange={(e: any) => handleMemberChange(e)}
                    >
                      <MenuItem value={"1 Member"}>1 Member</MenuItem>
                      <MenuItem value={"2 Members"}>2 Members</MenuItem>
                      <MenuItem value={"3 Members"}>3 Members</MenuItem>
                      <MenuItem value={"4 Members"}>4 Members</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              {sumAmount !== "" && member !== "" ? (
                <>
                  <HealthFilter />
                  {transactions.filter((item) => item.month == "april").length >
                  0 ? (
                    <Typography
                      style={{
                        textAlign: "center",
                        color: "#7b7b9d",
                        fontSize: "12px",
                      }}
                    >
                      This Month - April 2021
                    </Typography>
                  ) : null}

                  <Box p={2}>
                    {transactions
                      .filter((item) => item.month == "april")
                      .map((item, index) => {
                        return <AllTrancationCard {...item} key={index} />;
                      })}
                  </Box>
                  {transactions.filter((item) => item.month == "march").length >
                  0 ? (
                    <Typography
                      style={{
                        textAlign: "center",
                        color: "#7b7b9d",
                        fontSize: "12px",
                      }}
                    >
                      Previous Month - March 2021
                    </Typography>
                  ) : null}

                  <Box p={2}>
                    {transactions
                      .filter((item) => item.month == "march")
                      .map((item, index) => {
                        return <AllTrancationCard {...item} key={index} />;
                      })}
                  </Box>
                  <Grid item xs={12} my={3} sx={{ marginTop: "-49px" }}>
                    <Typography
                      style={{
                        color: "#3c3e42",
                        fontWeight: "500",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                    >
                      {ULIPList.length} ULIP Plan Found
                    </Typography>
                    <Grid
                      container
                      spacing={1}
                      textAlign="right"
                      sx={{ marginTop: "-3%", marginLeft: "-2%" }}
                    >
                      <Grid item xs={12} md={12}>
                        <IconButton onClick={(e) => handleFilter(e)}>
                          <FilterAltOutlined style={{ color: "#09b85d" }} />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Typography
                      style={{
                        color: "#7b7b9d",
                        fontSize: "14px",
                        marginTop: "-1%",
                      }}
                    >
                      One-time lumsum investment of <b>{sumAmount}</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {ULIPList.map((item, index) => {
                      console.log(item.id);

                      return <ULIPCard {...item} key={index}></ULIPCard>;
                    })}
                  </Grid>
                </>
              ) : null}
              <Grid container spacing={1}>
                <Grid item xs={12} md={12} textAlign="left">
                  <Box>
                    <Typography
                      sx={{
                        color: "#3c3e42",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      1 Health Insurance plan found
                    </Typography>
                    <Typography
                      sx={{
                        color: "#7b7b9d",
                        fontSize: "14px",
                        fontWeight: "normal",
                      }}
                    >
                      This plan provide tax benefit of 80D
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Card sx={{ width: "100%", marginTop: "2%" }}>
                <Grid container sx={{ marginTop: "2%" }}>
                  <Grid xs={4} md={4}>
                    <Avatar
                      className="Gender_Logo_Style"
                      alt=""
                      src={wclogo}
                      style={style.ca}
                      sx={{ marginLeft: "25px" }}
                    />
                  </Grid>
                  <Grid xs={5} md={5}>
                    <div style={{ marginLeft: "-57%", marginTop: "2%" }}>
                      <b style={{ color: "#3c3e42", fontSize: "16px" }}>
                        SprintMoney cost saver combo
                        <Typography
                          sx={{
                            color: "#7b7b9e",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          You're saving ₹2,500 from a regular plan
                        </Typography>
                      </b>
                    </div>
                  </Grid>
                  <Grid xs={3} md={3}>
                    <Box sx={{ marginTop: { xs: "-3rem", sm: "1rem" } }}>
                      <b style={{ color: "white", backgroundColor: "#6c63ff" }}>
                        ₹13,008 P.A
                      </b>
                      <b style={{ color: "#7b7b9d", marginLeft: "3%" }}>
                        ₹1,199 p.m
                      </b>
                    </Box>
                  </Grid>
                </Grid>

                {/* <Box sx={{ display: "flex", marginTop: "1.6%" }}>
                  <Avatar
                    className="Gender_Logo_Style"
                    alt=""
                    src={wclogo}
                    style={style.ca}
                    sx={{ marginLeft: "25px" }}
                  />
                  <div style={{ marginLeft: "2%", marginTop: "1%" }}>
                    <b style={{ color: "#3c3e42", fontSize: "16px" }}>
                      SprintMoney cost saver combo
                      <Typography
                        sx={{
                          color: "#7b7b9e",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        You're saving ₹2,500 from a regular plan
                      </Typography>
                    </b>
                  </div>
                </Box> */}
                {/* <Grid container>
                  <Grid item xs={12} md={12} textAlign="right">
                    <Box sx={{ marginTop:{ xs:"-3rem", sm:"1rem"}}}>
                  
                      <b style={{color:"white",marginLeft:"-10%",backgroundColor:"#6c63ff"}}>₹13,008 P.A</b>
                      <b style={{color:"#7b7b9d",marginLeft:"3%"}}>₹1,199 p.m</b>
                    </Box>
                  </Grid>
                </Grid> */}

                {/* <CardHeader
                  avatar={
                    <Avatar
                      className="Gender_Logo_Style"
                      alt=""
                      src={wclogo}
                      style={style.ca}
                      sx={{ marginLeft: "25px" }}
                    />
                  }
                  action={
                    <div style={{display:"flex"}}>
                      <Typography
                        sx={{
                          backgroundColor: "#6c63ff",
                          color: "white",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        ₹13,008 P.A
                      </Typography>
                      <Typography>₹1,199 p.m</Typography>
                    </div>
                  }
                  title="SprintMoney cost saver combo"
                  subheader="You're saving ₹2,500 from a regular plan"
                ></CardHeader> */}

                <Card sx={{ width: "100%" }}>
                  <Box sx={{ display: "flex", marginTop: "2%" }}>
                    <Avatar
                      className="Gender_Logo_Style"
                      alt=""
                      src={hdfcErgo}
                      style={style.ca}
                      sx={{ marginLeft: "25px" }}
                    />
                    <b
                      style={{
                        color: "#3c3e42",
                        fontSize: "16px",
                        marginLeft: "1.5%",
                        marginTop: "1%",
                      }}
                    >
                      HDFC ERGO - Silver Plan for Family
                    </b>
                  </Box>
                  {/* <CardHeader
                  sx={{color:"#3c3e42",fontSize:"16px",fontWeight:"500"}}
                    avatar={
                      <Avatar
                        className="Gender_Logo_Style"
                        alt=""
                        src={hdfcErgo}
                        style={style.ca}
                        sx={{ marginLeft: "25px" }}
                      />
                    }
                    action={
                  <div style={{marginLeft:"-3%",marginTop:"4%"}}>
                         <Box
                      sx={{
                        width: "281px",
                        height: "113px",
                        position:" relative",
                        top:" 0%",
                        left:" 0%",
                        transform:" translate(-3px  103px)",
                        textAlign: "center",
                        
                        // padding:"20px 56px 1px",
                        opacity: "0.7",
                        borderRadius: "8px",
                        backgroundColor: "#ebfaff",
                    
                    
                        
                      }}
                    >
                      <Box sx={{ paddingLeft: "10%", paddingTop: "5%" }}>
                
                        <Box textAlign="left">
                          <b style={{ color: "#544ec8", fontSize: "12px" }}>
                          Base Plan
                          </b>
                        </Box>
                        <Box textAlign="left">
                          <b style={{ color: "#7b7b9d", fontSize: "12px" }}>
                          Sum Insured                          </b>
                        </Box>
                        <Box textAlign="left">
                          <b style={{ fontSize: "14px" }}>
                            ₹5 Lacs
                          </b>
                        </Box>
                    
                     
                      </Box>
                      <img
                        src={iclogoplus}
                        alt="Sprint__money"
                        style={{ transform: "translate(0px,-29px)" }}
                      />
                      <Box sx={{ marginTop: "-28%", paddingRight: "8%" }}>
                        <Box textAlign="right">
                          <b style={{ color: "#544ec8", fontSize: "12px" }}>
                          Super Top-up Plan
                          </b>
                        </Box>
                        <Box textAlign="right">
                          <b style={{ color: "#7b7b9d", fontSize: "12px" }}>
                          Sum Insured  
                          </b>
                        </Box>
                        <Box textAlign="right">
                          <b style={{  fontSize: "14px" }}>
                            ₹10 Lacs
                          </b>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                 
                   
                    }
                    title="HDFC ERGO - Silver Plan for Family"
                    subheader="You're saving ₹2,500 from a regular plan"
                  /> */}
                  <div style={{ marginTop: "-2%", marginLeft: "3%" }}>
                    <Grid container spacing={1} sx={{ paddingLeft: "7%" }}>
                      <Grid item xs={2} md={2}>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <Done
                            style={{ color: "#7b7b9d", fontSize: "14px" }}
                          />
                          <p style={{ color: "#7b7b9d", fontSize: "12px" }}>
                            Renewal Bonus : 50%
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={10} md={10}>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <Done
                            style={{ color: "#7b7b9d", fontSize: "14px" }}
                          />
                          <p style={{ color: "#7b7b9d", fontSize: "12px" }}>
                            Cashless Hospitals : 125
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={2}
                      sx={{ paddingLeft: "7%", marginTop: "-2%" }}
                    >
                      <Grid item xs={2} md={2}>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <Done
                            style={{
                              color: "#7b7b9d",
                              fontSize: "14px",
                              marginTop: "-45%",
                            }}
                          />
                          <p style={{ color: "#7b7b9d", fontSize: "12px" }}>
                            Coverage for Covid-19 : Yes
                            <Box sx={{ marginTop: "-40%" }}>
                              <Grid
                                container
                                spacing={2}
                                sx={{ marginTop: "55%" }}
                              >
                                <Grid item xs={12} md={12}>
                                  <Button
                                    // disabled={showSubmit}

                                    sx={{
                                      width: "158px",
                                      height: "42px",
                                      backgroundColor: "#e3f6eb",
                                      marginTop: "-5%",
                                    }}
                                  >
                                    {" "}
                                    <HelpOutlineIcon
                                      sx={{
                                        fontWeight: "500",
                                        color: "#23db7b",
                                      }}
                                    />
                                    <Typography
                                      sx={{
                                        fonSize: "11px",
                                        fontWeight: "500",
                                        color: "#23db7b",
                                        marginLeft: "5px",
                                        marginTop: "1.45px",
                                      }}
                                    >
                                      KNOW MORE
                                    </Typography>
                                  </Button>
                                </Grid>
                              </Grid>
                            </Box>
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={10} md={10}>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <Done
                            style={{ color: "#7b7b9d", fontSize: "14px" }}
                          />
                          <p style={{ color: "#7b7b9d", fontSize: "12px" }}>
                            Organ Donor Expenses : Available
                          </p>

                          <Grid
                            container
                            sx={{ paddingLeft: "50%", marginTop: "-5%" }}
                          >
                            <Grid item xs={12} md={12} textAlign="right">
                              <div style={{}}>
                                <Box
                                  sx={{
                                    width: "281px",
                                    height: "113px",
                                    position: " relative",
                                    top: " 0%",
                                    left: " 0%",
                                    transform: " translate(-3px  103px)",
                                    textAlign: "center",

                                    // padding:"20px 56px 1px",
                                    opacity: "0.7",
                                    borderRadius: "8px",
                                    backgroundColor: "#ebfaff",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      paddingLeft: "10%",
                                      paddingTop: "5%",
                                    }}
                                  >
                                    <Box textAlign="left">
                                      <b
                                        style={{
                                          color: "#544ec8",
                                          fontSize: "12px",
                                        }}
                                      >
                                        Base Plan
                                      </b>
                                    </Box>
                                    <Box textAlign="left">
                                      <b
                                        style={{
                                          color: "#7b7b9d",
                                          fontSize: "12px",
                                        }}
                                      >
                                        Sum Insured{" "}
                                      </b>
                                    </Box>
                                    <Box textAlign="left">
                                      <b style={{ fontSize: "14px" }}>₹5 Lac</b>
                                    </Box>
                                  </Box>
                                  <img
                                    src={iclogoplus}
                                    alt="Sprint__money"
                                    style={{
                                      transform: "translate(0px,-29px)",
                                    }}
                                  />
                                  <Box
                                    sx={{
                                      marginTop: "-28%",
                                      paddingRight: "8%",
                                    }}
                                  >
                                    <Box textAlign="right">
                                      <b
                                        style={{
                                          color: "#544ec8",
                                          fontSize: "12px",
                                        }}
                                      >
                                        Super Top-up Plan
                                      </b>
                                    </Box>
                                    <Box textAlign="right">
                                      <b
                                        style={{
                                          color: "#7b7b9d",
                                          fontSize: "12px",
                                        }}
                                      >
                                        Sum Insured
                                      </b>
                                    </Box>
                                    <Box textAlign="right">
                                      <b style={{ fontSize: "14px" }}>
                                        ₹10 Lacs
                                      </b>
                                    </Box>
                                  </Box>
                                </Box>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Card>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ULIPFound;

// function dispatch(
//   arg0: (dispatch: import("redux").Dispatch<any>) => Promise<void>
// ) {
//   throw new Error("Function not implemented.");
// }
