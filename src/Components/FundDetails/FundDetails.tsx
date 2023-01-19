/**React imports */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/**global function and constant imports */
import siteConfig from "../../Utils/siteConfig";
import { apiResponse } from "../../Utils/globalTypes";
import { checkExpirationOfToken } from "../../Utils/globalFunctions";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { getData, getDataWithoutToken } from "../../Utils/api";

/**Component Imports */
import MinInvest from "./MinInvest";
import FundTable from "./FundTable";
import { FundChart } from "./FundChart";
import { SchemeDoc } from "./SchemeDoc";
import { RiskoMeter } from "./RiskoMeter";
import { LatestAssets } from "./LatestAssets";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import FundDetailCard from "../TxnFilters/FundDetailCard";

/**MUI imports */
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import { Box, styled } from "@mui/system";
import { Logo, Profile } from "../../Assets/index";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme, } from "@mui/material";
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined, } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Grid, Typography, } from "@mui/material";
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search, } from "@mui/icons-material";
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, } from "@mui/material";
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled, } from "@mui/base";

/**CSS imports */
import "./FundTable.css";
import LineChart from "../CommonComponents/Charts/LineChart";
import moment from "moment";
import SprintMoneyLoader from "../CommonComponents/sprintMoneyLoader";

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

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      display: true,
    },
    title: {
      display: true,
      // text: 'Chart.js Line Chart',
    },
  },
};


const FundDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const refContainer = useRef();

  const [loading, setLoading] = useState<boolean>(false);
  const [fundDetails, setFundDetails] = useState<any>({});
  const [fundNavDetails, setFundNavDetails] = useState<any[]>([]);

  const secId: string = useMemo(() => { return location?.state?.secid }, []);
  const parentRoute: string = useMemo(() => { return location?.state?.parentRoute }, []);
  const chartDataDetails: any = useMemo(() => {
    return {
      labels: fundNavDetails.map((item: any) => moment(item["navdate"]).format("MMM Do YY")), //x
      datasets: [
        {
          label: "Projected Value",
          data: fundNavDetails.map((item: any) => item["nav"]),
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ]
    };
  }, [fundNavDetails]);

  // const dayEndNavDate:string = useMemo(()=> {return moment(fundDetails?.dayendnavdate).format("DD/MM/YYYY MMM Do YY")}, [fundDetails])


  useEffect(() => {
    if (!secId) {
      navigate(parentRoute ? parentRoute : "/startInvestment");
      return;
    }

    getFundDetails();
  }, [])

  const getFundDetails = async () => {
    let strParam: string = `?fund_id=${secId}`;
    setLoading(true);

    [siteConfig.RECOMMENDATION_FUND_DETAIL, siteConfig.RECOMMENDTAION_FUND_NAV_DETAIL].map(async (item: string) => {
      getDataWithoutToken(
        item + strParam,
        siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
        siteConfig.RECOMENDATION_API_ID
      )
        .then(res => res.json())
        .then((data: apiResponse) => {
          if (checkExpirationOfToken(data?.code)) {
            dispatch(setTokenExpiredStatusAction(true));
            return;
          }

          if (data?.error === true) return;

          if (item === siteConfig.RECOMMENDATION_FUND_DETAIL) {
            setFundDetails(data?.data ? data?.data : {})
            setLoading(false);
          } else {
            setFundNavDetails(data?.data ? data?.data : []);
          }
        })
        .catch(err => {
          console.log(err)
        })
    })

  }

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <SprintMoneyLoader
            loadingStatus={loading}
          />
          <Grid container xs={12} sm={11} md={10} sx={{
            height: "100vh",
            overflow: "scroll",
            width: "100%",
            display: "block",
            justifyContent: "center",
          }}>
            <Toolbar />
            {/* <Grid container>
              <Box
                role="presentation"
                sx={{ margin: "27px 0px 21px 25px" }}
              >

                 <Breadcrumbs aria-label="breadcrumb">
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
                    </Breadcrumbs> 
              </Box>
              </Grid> */}
            <Box className="BoxPadding">
              <Box sx={{ marginTop: "-10px" }}>
                {
                  fundDetails &&
                    Object.keys(fundDetails).length ?
                    <FundDetailCard
                      logo={fundDetails?.fundimage}
                      name={fundDetails?.fundname}
                      cap={fundDetails?.category}
                      type={fundDetails?.categorygroup}
                      year5={fundDetails?.return5yr}
                      rating={fundDetails?.ratingoverall}
                      aum={fundDetails?.aum}
                      dayendnav={fundDetails?.dayendnav}
                      dayendnavdate={fundDetails?.dayendnavdate}
                      parentRoute={parentRoute}
                    />
                    : null
                }

                <Grid xs={12} sx={{
                  marginTop: "2%",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                }}>
                  <Box sx={{ display: "flex", flexDirection: "row", padding: "5px 10px" }}>
                    <Typography component="span" sx={{ color: "black", fontSize: "18px" }}>
                      {<>
                        ₹{fundDetails?.dayendnav}
                      </>}
                    </Typography>
                    <Typography component="span" sx={{ position: "relative", color: fundDetails?.isnavincrease ? "green" : "red" }}>
                      {fundDetails?.isnavincrease ? <>&nbsp;{`+${fundDetails?.navchange}(${fundDetails?.navchangepercentage})`}&nbsp;<span className="upArrow"><span></span></span></> : <>&nbsp;{`${fundDetails?.navchange}(${fundDetails?.navchangepercentage}) `} &nbsp;<span className="downArrow"><span></span></span></>}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", padding: "5px 10px" }}>
                    <Typography component="span" sx={{ color: "grey", }}>
                      {fundDetails?.dayendnavdate} &nbsp;
                    </Typography>
                    <Typography component="span" sx={{ color: "grey" }}>
                      desclaimer
                    </Typography>
                  </Box>
                  <LineChart
                    optionsValues={chartOptions}
                    dataValues={chartDataDetails}
                    onClick={(val: any) => null}
                  />
                </Grid>

                <FundTable
                  tableData={fundDetails?.performance}
                />

                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} sm={6} sx={{ marginTop: "1rem" }}>
                    <MinInvest
                      sipminamount={fundDetails?.sipminamount}
                      lumpsumminamount={fundDetails?.lumpsumminamount}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginTop: "1rem" }}>
                    <SchemeDoc
                      openSchemeDocument={() => {
                        const link = document.createElement('a');
                        link.href = fundDetails?.schemedoc;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} sm={6} sx={{ marginTop: "1rem" }}>
                    <RiskoMeter
                      holdingInfo={fundDetails}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginTop: "1rem" }}>
                    <LatestAssets
                      holdingInfo={fundDetails?.holdinginfo}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default FundDetails;
