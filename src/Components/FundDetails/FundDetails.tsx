// import './Home.css'
import { Box, styled } from "@mui/system";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
} from "@mui/icons-material";
import {
  MenuItemUnstyled,
  menuItemUnstyledClasses,
  MenuUnstyled,
  MenuUnstyledActions,
  PopperUnstyled,
} from "@mui/base";
import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  Support,
  SupportOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Divider,
  Menu,
  MenuItem,
  Theme,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Logo, Profile } from "../../Assets/index";

import { useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import FundDetailCard from "../TxnFilters/FundDetailCard";

import { FundCardsData } from "../../Modal/FundCardsData";
// import FundChart from './FundChart'
import FundTable from "./FundTable";

import "./FundTable.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { RiskoMeter } from "./RiskoMeter";
import { SchemeDoc } from "./SchemeDoc";
import MinInvest from "./MinInvest";
import { LatestAssets } from "./LatestAssets";
import { FundChart } from "./FundChart";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";

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
};

const FundDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const refContainer = useRef();
  const secId: string = useMemo(() => { return location?.state?.secid }, [])

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0} sx={{ height: "100vh" }}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid container xs={13} sm={11} md={10}>
            <Grid sx={{ padding: 2 }} item xs={12}>
              <Toolbar />
              <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={13} >
                <Grid
                  sx={{
                    height: { xs: "auto", sm: "inherit" },
                    padding: 0,
                    boxSizing: "border-box",
                    overflow: { sx: "auto", sm: "auto", md: "auto" },
                  }}
                  item
                  xs={13}
                >
                  <Toolbar />
                  <Box
                    role="presentation"
                    sx={{ margin: "27px 0px 21px 25px" }}
                  >

                    {/* <Breadcrumbs aria-label="breadcrumb">
                      <Link color="#6495ED" underline="always" href="/home">
                        <Typography className="burgerText"> Home</Typography>
                      </Link>
                      <Link
                        underline="always"
                        color="#6495ED"
                        // href="/home"
                      >
                        <Typography className="burgerText">
                          {" "}
                          Investment
                        </Typography>
                      </Link>
                      <Link
                        underline="always"
                        color="#6495ED"
                        // href="/"
                        href="/investnow"
                      >
                        <Typography className="burgerText">
                          {" "}
                          Monthly Investment
                        </Typography>
                      </Link>
                      <Link
                        underline="always"
                        color="#6495ED"
                        aria-current="page"
                      >
                        <Typography className="burgerText">
                          {" "}
                          Mutual Fund Recommendation
                        </Typography>
                      </Link>
                      <Link
                        underline="always"
                        color="#6495ED"
                        // href="/material-ui/react-breadcrumbs/"
                        aria-current="page"
                      >
                        <Typography className="burgerText">
                          {" "}
                          Customize Plan
                        </Typography>
                      </Link>
                      <Link
                        underline="always"
                        color="#6495ED"
                        // href="/"
                        aria-current="page"
                      >
                        <Typography className="burgerText">
                          {" "}
                          Choose Fund to Replace
                        </Typography>
                      </Link>
                      <Link
                        underline="none"
                        color="#8787a2"
                        // href="/"
                        aria-current="page"
                      >
                        <Typography className="burgerText">
                          {" "}
                          Axis Small Cap Fund Regular Growth
                        </Typography>
                      </Link>
                    </Breadcrumbs> */}

                  </Box>
                  {FundCardsData.map((item, index) => {
                    return (
                      <FundDetailCard
                        key={index}
                        logo={item.logo}
                        name={item.name}
                        cap={item.cap}
                        type={item.type}
                        year1={item.year1}
                        year3={item.year3}
                        year5={item.year5}
                        rating={item.rating}
                        morning_star_logo={item.morning_star_logo}
                      />
                    );
                  })}
                  {/* <FundChart /> */}

                  <FundChart />
                  <FundTable />

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12} sm={6}>
                      <MinInvest />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <SchemeDoc />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12} sm={6}>
                      <RiskoMeter />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LatestAssets />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default FundDetails;
