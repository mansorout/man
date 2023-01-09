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
          } else {
            setFundNavDetails(data?.data ? data?.data : []);
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
  }

  useEffect(() => {
    console.log(fundDetails, "update fundDetails")
  }, [fundDetails])
  useEffect(() => {
    console.log(fundNavDetails, "update fundNavDetails")

  }, [fundNavDetails])

  //   {
  //     "secid": "F0GBR06SBC",
  //     "fundname": "Canara Robeco Flexi Cap Reg Gr",
  //     "fundimage": "https://sprintbeans-static-contents.s3.ap-south-1.amazonaws.com/logos/fundlogo12.svg",
  //     "dayendnav": 230.2,
  //     "dayendnavdate": "25/11/2022",
  //     "navchange": 0.25,
  //     "return5yr": "13.61",
  //     "category": "Flexi Cap",
  //     "categorygroup": "Equity",
  //     "ratingoverall": 4,
  //     "riskometer": 6,
  //     "schemedoc": "https://www.canararobeco.com/forms-downloads/forms-and-information-documents/information-document/si",
  //     "aum": "1000.00 Cr",
  //     "portfoliodate": "31/01/2022",
  //     "YTM": null,
  //     "holdinginfo": {
  //         "marketcap": {
  //             "Giant Cap": "64.69",
  //             "Large Cap": "28.67",
  //             "Micro Cap": "0.00",
  //             "Mid Cap": "6.64",
  //             "Small Cap": "0.00"
  //         },
  //         "sectors": {
  //             "Financial Services": "32.68",
  //             "Technology": "12.48",
  //             "Consumer Cyclical": "12.13",
  //             "Industrials": "10.39",
  //             "Basic Materials": "8.46",
  //             "Healthcare": "6.43",
  //             "Energy": "4.45",
  //             "Consumer Defensive": "4.17",
  //             "Communication Service": "1.88",
  //             "Utilities": "1.25",
  //             "Real Estate": "1.17"
  //         },
  //         "companies": [
  //             {
  //                 "company": "ICICI Bank Ltd",
  //                 "weight": "7.23"
  //             },
  //             {
  //                 "company": "Infosys Ltd",
  //                 "weight": "6.50"
  //             },
  //             {
  //                 "company": "HDFC Bank Ltd",
  //                 "weight": "6.24"
  //             },
  //             {
  //                 "company": "Treps",
  //                 "weight": "4.97"
  //             },
  //             {
  //                 "company": "Reliance Industries Ltd",
  //                 "weight": "4.45"
  //             },
  //             {
  //                 "company": "State Bank of India",
  //                 "weight": "4.25"
  //             },
  //             {
  //                 "company": "Bajaj Finance Ltd",
  //                 "weight": "3.67"
  //             },
  //             {
  //                 "company": "Larsen & Toubro Ltd",
  //                 "weight": "3.61"
  //             },
  //             {
  //                 "company": "Tata Consultancy Services Ltd",
  //                 "weight": "3.47"
  //             },
  //             {
  //                 "company": "Axis Bank Ltd",
  //                 "weight": "3.03"
  //             },
  //             {
  //                 "company": "Tata Motors Ltd",
  //                 "weight": "2.48"
  //             },
  //             {
  //                 "company": "Housing Development Finance Corp Ltd",
  //                 "weight": "2.46"
  //             },
  //             {
  //                 "company": "Bharti Airtel Ltd",
  //                 "weight": "1.83"
  //             },
  //             {
  //                 "company": "UltraTech Cement Ltd",
  //                 "weight": "1.78"
  //             },
  //             {
  //                 "company": "Maruti Suzuki India Ltd",
  //                 "weight": "1.74"
  //             },
  //             {
  //                 "company": "Sun Pharmaceuticals Industries Ltd",
  //                 "weight": "1.73"
  //             },
  //             {
  //                 "company": "Hindustan Unilever Ltd",
  //                 "weight": "1.61"
  //             },
  //             {
  //                 "company": "Mphasis Ltd",
  //                 "weight": "1.49"
  //             },
  //             {
  //                 "company": "Minda Industries Ltd",
  //                 "weight": "1.40"
  //             },
  //             {
  //                 "company": "Avenue Supermarts Ltd",
  //                 "weight": "1.39"
  //             },
  //             {
  //                 "company": "Max Healthcare Institute Ltd Ordinary Shares",
  //                 "weight": "1.29"
  //             },
  //             {
  //                 "company": "Kotak Mahindra Bank Ltd",
  //                 "weight": "1.29"
  //             },
  //             {
  //                 "company": "TCI Express Ltd",
  //                 "weight": "1.21"
  //             },
  //             {
  //                 "company": "Divi's Laboratories Ltd",
  //                 "weight": "1.17"
  //             },
  //             {
  //                 "company": "Oberoi Realty Ltd",
  //                 "weight": "1.17"
  //             },
  //             {
  //                 "company": "Sona BLW Precision Forgings Ltd",
  //                 "weight": "1.17"
  //             },
  //             {
  //                 "company": "Navin Fluorine International Ltd",
  //                 "weight": "1.16"
  //             },
  //             {
  //                 "company": "Max Financial Services Ltd",
  //                 "weight": "1.12"
  //             },
  //             {
  //                 "company": "Bharat Forge Ltd",
  //                 "weight": "1.11"
  //             },
  //             {
  //                 "company": "Polycab India Ltd",
  //                 "weight": "1.10"
  //             },
  //             {
  //                 "company": "Voltas Ltd",
  //                 "weight": "1.08"
  //             },
  //             {
  //                 "company": "ABB India Ltd",
  //                 "weight": "1.05"
  //             },
  //             {
  //                 "company": "Gujarat Gas Ltd",
  //                 "weight": "1.04"
  //             },
  //             {
  //                 "company": "Atul Ltd",
  //                 "weight": "1.02"
  //             },
  //             {
  //                 "company": "HCL Technologies Ltd",
  //                 "weight": "1.02"
  //             },
  //             {
  //                 "company": "Cholamandalam Investment and Finance Co Ltd",
  //                 "weight": "1.00"
  //             },
  //             {
  //                 "company": "Tata Consumer Products Ltd",
  //                 "weight": "0.99"
  //             },
  //             {
  //                 "company": "Vinati Organics Ltd",
  //                 "weight": "0.99"
  //             },
  //             {
  //                 "company": "Gland Pharma Ltd",
  //                 "weight": "0.96"
  //             },
  //             {
  //                 "company": "Hindalco Industries Ltd",
  //                 "weight": "0.96"
  //             },
  //             {
  //                 "company": "Mahindra & Mahindra Ltd",
  //                 "weight": "0.94"
  //             },
  //             {
  //                 "company": "Ashok Leyland Ltd",
  //                 "weight": "0.92"
  //             },
  //             {
  //                 "company": "JK Cement Ltd",
  //                 "weight": "0.87"
  //             },
  //             {
  //                 "company": "HDFC Life Insurance Company Limited",
  //                 "weight": "0.87"
  //             },
  //             {
  //                 "company": "Asian Paints Ltd",
  //                 "weight": "0.81"
  //             },
  //             {
  //                 "company": "Can Fin Homes Ltd",
  //                 "weight": "0.80"
  //             },
  //             {
  //                 "company": "Honeywell Automation India Ltd",
  //                 "weight": "0.78"
  //             },
  //             {
  //                 "company": "Bata India Ltd",
  //                 "weight": "0.76"
  //             },
  //             {
  //                 "company": "SBI Cards and Payment Services Ltd Ordinary Shares",
  //                 "weight": "0.72"
  //             },
  //             {
  //                 "company": "Titan Co Ltd",
  //                 "weight": "0.69"
  //             },
  //             {
  //                 "company": "Jubilant Foodworks Ltd",
  //                 "weight": "0.69"
  //             },
  //             {
  //                 "company": "FSN E-Commerce Ventures Ltd",
  //                 "weight": "0.68"
  //             },
  //             {
  //                 "company": "Havells India Ltd",
  //                 "weight": "0.64"
  //             },
  //             {
  //                 "company": "Abbott India Ltd",
  //                 "weight": "0.64"
  //             },
  //             {
  //                 "company": "PI Industries Ltd",
  //                 "weight": "0.63"
  //             },
  //             {
  //                 "company": "Ipca Laboratories Ltd",
  //                 "weight": "0.50"
  //             },
  //             {
  //                 "company": "Balkrishna Industries Ltd",
  //                 "weight": "0.47"
  //             },
  //             {
  //                 "company": "Net Current Assets",
  //                 "weight": "0.45"
  //             },
  //             {
  //                 "company": "Tata Steel Ltd",
  //                 "weight": "0.23"
  //             },
  //             {
  //                 "company": "Indraprastha Gas Ltd",
  //                 "weight": "0.21"
  //             },
  //             {
  //                 "company": "Britannia Industries Ltd",
  //                 "weight": "0.18"
  //             },
  //             {
  //                 "company": "Cipla Ltd",
  //                 "weight": "0.14"
  //             },
  //             {
  //                 "company": "Bharti Airtel Ltd (Partly Paid Rs.1.25)",
  //                 "weight": "0.05"
  //             }
  //         ]
  //     },
  //     "isnavincrease": true,
  //     "navchangepercentage": "0.11",
  //     "sipminamount": 1000,
  //     "lumpsumminamount": 5000,
  //     "performance": {
  //         "1 year": {
  //             "years": 1,
  //             "return": "0.68",
  //             "benchmark": "-",
  //             "islist": true
  //         },
  //         "2 years": {
  //             "years": 2,
  //             "return": "19.68",
  //             "benchmark": "26.10",
  //             "islist": false
  //         },
  //         "3 years": {
  //             "years": 3,
  //             "return": "18.06",
  //             "benchmark": "16.46",
  //             "islist": true
  //         },
  //         "4 years": {
  //             "years": 4,
  //             "return": "17.18",
  //             "benchmark": "15.54",
  //             "islist": false
  //         },
  //         "5 years": {
  //             "years": 5,
  //             "return": "13.61",
  //             "benchmark": "11.18",
  //             "islist": true
  //         },
  //         "7 years": {
  //             "years": 7,
  //             "return": "14.00",
  //             "benchmark": "12.75",
  //             "islist": false
  //         },
  //         "10 years": {
  //             "years": 10,
  //             "return": "14.36",
  //             "benchmark": "14.15",
  //             "islist": false
  //         }
  //     }
  // }

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid container xs={13} sm={11} md={10} sx={{ height: "100vh",
            overflow: "scroll",
            width: "100%",
            display: "block",
            justifyContent: "center", }}>
              <Toolbar />
            <Box className="BoxPadding" >
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
                      />
                      : null
                  }

                  <Grid xs={12} sx={{
                    marginTop: "2%",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                  }}>
                    <Box sx={{ display: "flex", flexDirection: "row", padding:"5px 10px" }}>
                      <Typography component="h6" sx={{ color: "black" }}>
                        {fundDetails?.dayendnav}
                      </Typography>
                      <Typography component="span" sx={{ color: fundDetails?.isnavincrease ? "green" : "red" }}>
                        {fundDetails?.isnavincrease ? `+${fundDetails?.navchange}(${fundDetails?.navchangepercentage}) up arrow` : `-${fundDetails?.navchange}(${fundDetails?.navchangepercentage}) down arrow`}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", padding:"5px 10px" }}>
                      <Typography component="h6" sx={{ color: "grey",}}>
                        {fundDetails?.dayendnavdate}
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
                      <RiskoMeter />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ marginTop: "1rem" }}>
                      <LatestAssets
                        holdingInfo={fundDetails?.holdinginfo}
                      />
                    </Grid>
                  </Grid>
                  </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default FundDetails;
