
import './Portfolio.css'
import { Box, styled } from '@mui/system'
import { Grid, MenuList, Typography, Breadcrumbs, Link } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, NavigateNext, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Logo, Profile } from '../../Assets/index'
import { useNavigate } from 'react-router-dom'
import { chart, meria } from '../../Assets/index'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import HoldingCards from '../../Modules/CustomCard/HoldingCards'
import { AllHolding } from '../../Modal/AllHoldingCards'
import { getCategoryGroupListThunk, getMasterFundListThunk } from '../../Store/Recommendations/thunk/recommendations-thunk'
import { apiResponse, holdingList } from '../../Utils/globalTypes'
import { checkExpirationOfToken } from '../../Utils/globalFunctions'
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions'
import { useDispatch } from 'react-redux'
import siteConfig from '../../Utils/siteConfig'
import { getListOfPortfolioThunk, getListOfTrasanctionDoneThunk } from '../../Store/Payments/thunk/payments-thunk'
import { setPortfolioListDataInHoldingsAction } from '../../Store/Payments/actions/payments-action'
import { Doughnut } from 'react-chartjs-2'
import { CircularBar } from '../CommonComponents/Charts/CircularBar'
import SprintMoneyLoader from '../CommonComponents/sprintMoneyLoader'

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
  `,
);

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
    height: "100vh"
  } as React.CSSProperties,
  drawer: {
    zIndex: "500",
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
  } as React.CSSProperties,
  image: {
    width: '176px',
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
    cursor: "pointer"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  profile: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "1px solid white"
  },
  profileInter: {
    width: "40px",
    height: "40px",
    border: "solid 1px rgba(75, 123, 236, 0.49)",
    borderRadius: "50%"
  },
  menuContainer: {
    boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
    boxSizing: "border-box",
    padding: "10px",
    backgroundColor: "white",
    marginRight: "20px"
  } as React.CSSProperties,
  menuButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0px"
  } as React.CSSProperties,
  menuText: {
    color: "black",
    fontSize: "10px",
    fontWeight: "500",
    padding: "5px 10px",
    borderRadius: "4px",
    backgroundColor: "#ffc300",
    cursor: "pointer"
  },
  menuText2: {
    padding: "6px 12px",
    borderRadius: "4px",
    border: "solid 1px #23db7b",
    backgroundColor: "rgba(35, 219, 123, 0.12)",
    fontSize: "12px",
    fontWeight: "500",
    color: "#09b85d",
    cursor: "pointer"
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
    fontSize: "24px"
  },
  appBar: {
    backgroundColor: "white",
  },
  logo: {
    width: "50px",
    padding: "20px 0px",
  } as React.CSSProperties,
  button2: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    width: "100%",
    marginTop: "40px"
  } as React.CSSProperties,
  text: {
    color: "white"
  }

}

// const initialHoldingListEquity: holdingList = {
//   fundname: "fundname",
//   folio: "folio",
//   fund_id: "",
//   investedvalue: 1000,
//   XIRR: "XIRR",
//   units: "units",
//   nav: "nav",
//   currentvalue: "currentvalue",
//   absolutereturn: "absolutereturn",
//   absolutereturninpercent: "absolutereturninpercent",
//   category: "category",
//   categorygroup: "Equity",
//   fundimage: "fundimage",
//   rating: "3",
//   navdate: "navdate",
//   minredemptionqty: "minredemptionqty",
//   maxredemptionqty: "maxredemptionqty",
//   minredemptionamount: "minredemptionamount",
//   maxredemptionamount: "maxredemptionamount"
// }
// const initialHoldingListBalanced: holdingList = {
//   fundname: "fundname",
//   folio: "folio",
//   fund_id: "",
//   investedvalue: 1000,
//   XIRR: "XIRR",
//   units: "units",
//   nav: "nav",
//   currentvalue: "currentvalue",
//   absolutereturn: "absolutereturn",
//   absolutereturninpercent: "absolutereturninpercent",
//   category: "category",
//   categorygroup: "Balanced",
//   fundimage: "fundimage",
//   rating: "3",
//   navdate: "navdate",
//   minredemptionqty: "minredemptionqty",
//   maxredemptionqty: "maxredemptionqty",
//   minredemptionamount: "minredemptionamount",
//   maxredemptionamount: "maxredemptionamount"
// }
// const initialHoldingListCommodities: holdingList = {
//   fundname: "fundname",
//   folio: "folio",
//   fund_id: "",
//   investedvalue: 1000,
//   XIRR: "XIRR",
//   units: "units",
//   nav: "nav",
//   currentvalue: "currentvalue",
//   absolutereturn: "absolutereturn",
//   absolutereturninpercent: "absolutereturninpercent",
//   category: "category",
//   categorygroup: "Commodities",
//   fundimage: "fundimage",
//   rating: "3",
//   navdate: "navdate",
//   minredemptionqty: "minredemptionqty",
//   maxredemptionqty: "maxredemptionqty",
//   minredemptionamount: "minredemptionamount",
//   maxredemptionamount: "maxredemptionamount"
// }
// const initialHoldingListDebt: holdingList = {
//   fundname: "fundname",
//   folio: "folio",
//   fund_id: "",
//   investedvalue: 1000,
//   XIRR: "XIRR",
//   units: "units",
//   nav: "nav",
//   currentvalue: "currentvalue",
//   absolutereturn: "absolutereturn",
//   absolutereturninpercent: "absolutereturninpercent",
//   category: "category",
//   categorygroup: "Debt",
//   fundimage: "fundimage",
//   rating: "3",
//   navdate: "navdate",
//   minredemptionqty: "minredemptionqty",
//   maxredemptionqty: "maxredemptionqty",
//   minredemptionamount: "minredemptionamount",
//   maxredemptionamount: "maxredemptionamount"
// }
// const initialHoldingListAlternative: holdingList = {
//   fundname: "fundname",
//   folio: "folio",
//   fund_id: "",
//   investedvalue: 1000,
//   XIRR: "XIRR",
//   units: "units",
//   nav: "nav",
//   currentvalue: "currentvalue",
//   absolutereturn: "absolutereturn",
//   absolutereturninpercent: "absolutereturninpercent",
//   category: "category",
//   // categorygroup: "Alternative",
//   categorygroup: "Equity",
//   fundimage: "fundimage",
//   rating: "3",
//   navdate: "navdate",
//   minredemptionqty: "minredemptionqty",
//   maxredemptionqty: "maxredemptionqty",
//   minredemptionamount: "minredemptionamount",
//   maxredemptionamount: "maxredemptionamount"
// }

// const initialHoldingListFixedIncome: holdingList = {
//   fundname: "fundname",
//   folio: "folio",
//   fund_id: "",
//   investedvalue: 1000,
//   XIRR: "XIRR",
//   units: "units",
//   nav: "nav",
//   currentvalue: "currentvalue",
//   absolutereturn: "absolutereturn",
//   absolutereturninpercent: "absolutereturninpercent",
//   category: "category",
//   categorygroup: "Fixed Income",
//   fundimage: "fundimage",
//   rating: "3",
//   navdate: "navdate",
//   minredemptionqty: "minredemptionqty",
//   maxredemptionqty: "maxredemptionqty",
//   minredemptionamount: "minredemptionamount",
//   maxredemptionamount: "maxredemptionamount"
// }

const Portfolio = () => {
  const classes = useStyles()
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [holding, setHolding] = useState<any>([]);
  const [message, setMessage] = useState<string>("");
  const [fundList, setFundList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [holdingGraph, setHoldingGraph] = useState<any>({});
  const [variableFundList, setVariableFundList] = useState<any[]>([]);
  const [categoryGroupList, setCategoryGroupList] = useState<any[]>([]);
  const [activeCategoryGroupIndex, setActiveCategoryGroupIndex] = useState<number>(0);


  useEffect(() => {
    getCategoryGroupList();
    setHolding(AllHolding);
  }, [])

  useEffect(() => {
    if (categoryGroupList && categoryGroupList.length) {
      getFundList(siteConfig.PAYMENT_PORTOFOLIO_LIST + "?holdinglist=true");
    }
  }, [categoryGroupList])

  useEffect(() => {
    handleVariableFundList(fundList);
  }, [fundList]);

  useEffect(() => {
    filterDataWRTCategoryGroup();
  }, [activeCategoryGroupIndex]);

  const getCategoryGroupList = async () => {
    let res: apiResponse = await getCategoryGroupListThunk();
    let arrCG: string[] = [...res.data?.categorygroups];
    arrCG.unshift("All Funds");
    // @ts-ignore
    handleApiResponse(arrCG, [setCategoryGroupList]);
  }

  const getFundList = async (url: string) => {
    // let res: apiResponse = await getListOfTrasanctionDoneThunk(url);
    setLoading(true);
    let res: apiResponse = await getListOfPortfolioThunk(url);

    if (res?.data) dispatch(setPortfolioListDataInHoldingsAction(res?.data));

    // @ts-ignore
    handleApiResponse(res?.data?.holdinglist, [setFundList]);

    // @ts-ignore
    handleApiResponse(res?.data?.holdings, [setHoldingGraph]);


    // let data: any[] = [initialHoldingListAlternative, initialHoldingListBalanced, initialHoldingListCommodities, initialHoldingListDebt, initialHoldingListEquity, initialHoldingListFixedIncome]
    // let graphData: any = {
    //   totalinvestedvalue: 400000,
    //   XIRR: "string",
    //   absolutereturninpercent: "19",
    //   absolutereturn: "19000",
    //   totalcurrentvalue: "500000",
    //   assetallocation: {
    //     equity: "30",
    //     debt: "30",
    //     balanced: "30",
    //     other: "10"
    //   }
    // }
    // @ts-ignore
    // handleApiResponse(data, [setFundList]);
    // @ts-ignore
    // handleApiResponse(graphData, [setHoldingGraph]);
  }

  const handleApiResponse = (res: apiResponse, arrFunc: void[]) => {
    setLoading(false);
    if (checkExpirationOfToken(res?.code)) {
      dispatch(setTokenExpiredStatusAction(true));
      return;
    }

    if (res?.error === true) {
      return;
    }

    arrFunc.forEach((item: void) => {
      if (res?.data) {
        // @ts-ignore
        item(res?.data)
      } else {
        // @ts-ignore
        item(res);
      }
    })

  }

  const handleVariableFundList = (fundList: any[] | null) => {
    // setLoading(false);
    if (!fundList) {
      setMessage("You have not started your investment journey yet!");
      return;
    }


    setVariableFundList(fundList);
  }

  const filterDataWRTCategoryGroup = () => {
    if (fundList && fundList.length) {
      if (!activeCategoryGroupIndex) {
        let arrFundList: any[] = [...fundList];
        setVariableFundList(arrFundList);
        return;
      }

      let arrFilteredFundList: any[] = fundList.filter((item: any) => item?.categorygroup === categoryGroupList[activeCategoryGroupIndex]);
      setVariableFundList(arrFilteredFundList);
    }
  }

  return (
    <Box style={{ width: "100vw" }}>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid sx={{ height: "100vh", padding: 0, boxSizing: "border-box", overflow: "scroll" }} xs={12} sm={11} md={10}>
            <Grid container>
              <Grid xs={12} sm={12} md={12}>
                <Toolbar />
                <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>             <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                      <Typography className='burgerText'>Portfolio</Typography>
                    </Link>
                  </Breadcrumbs>

                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={12} sm={12} md={12}>
                <Box className="BoxMarginLeftRight">
                <Box style={{ marginBottom: "20px", padding: "15px", borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "600px", flexWrap: "wrap", gap: "20px" }}>
                      <Box style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography style={{ color: "#3c3e42", fontWeight: "500", fontSize: "16px", cursor: "pointer" }} onClick={() => navigate('/holdings')}>Holdings</Typography>
                        <Box style={{ position: "absolute", bottom: "0px", padding: "1px", backgroundColor: "#23db7b", width: "100%" }}></Box>
                      </Box>
                      <Typography style={{ color: "#919eb1", fontWeight: "500", fontSize: "16px", cursor: "pointer" }} onClick={() => navigate('/transactions')}>Transactions</Typography>
                      <Typography style={{ color: "#919eb1", fontWeight: "500", fontSize: "16px", cursor: "pointer" }} onClick={() => navigate('/sips')}>SIPs</Typography>
                      <Typography style={{ color: "#919eb1", fontWeight: "500", fontSize: "16px", cursor: "pointer" }} onClick={() => navigate('/reports')}>Reports</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <SprintMoneyLoader
                      loadingStatus={loading}
                    />
                    {
                      message && message.length ?
                        <>
                          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Typography component="span" sx={{ color: "var(--uiDarkGreyColor)" }}>
                              {message}
                            </Typography>
                          </Box>
                        </> :
                        <>
                          {
                            fundList && fundList.length ?
                              <>
                                <Box style={{ marginBottom: "20px", padding: "15px", borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "white" }}>
                                  <Typography padding={2} style={{ color: "#3c3e42", fontWeight: "500", fontSize: "16px", cursor: "pointer" }}>Asset Allocation</Typography>
                                  <Grid container padding={2}>
                                    <Grid item sm={6} xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <Grid container>
                                          <Grid xs={8} sm={8}>
                                          <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", }}>
                                        {/* <img src={chart} alt="chart" width="240px"></img> */}
                                        {
                                          holdingGraph?.assetallocation ?
                                            <CircularBar
                                              progressData={holdingGraph?.assetallocation}
                                            />
                                            : null
                                        }

                                       
                                      </Box>
                                          </Grid>
                                          <Grid xs={4} sm={4}>
                                          <Box sx={{marginTop:{xs:"0px", sm:"30px"}}}>
                                          <Box my={1} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                            <Box style={{ padding: "6px", backgroundColor: "#23db7b", borderRadius: "50%" }}></Box>
                                            <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>EQUITY</Typography>
                                          </Box>
                                          <Box my={1} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                            <Box style={{ padding: "6px", backgroundColor: "#fdc100", borderRadius: "50%" }}></Box>
                                            <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>DEBT</Typography>
                                          </Box>
                                          <Box my={1} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                            <Box style={{ padding: "6px", backgroundColor: "#4979e8", borderRadius: "50%" }}></Box>
                                            <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>BALANCED</Typography>
                                          </Box>
                                        </Box>
                                          </Grid>
                                      </Grid>
                                     
                                    </Grid>
                                    <Grid item sm={6} xs={12} m={"auto"} >
                                    <Box style={{ display: "flex", flexWrap: "wrap", width: "100%", gap: "20px", justifyContent: "space-between" }}>
                                      <Box style={{ width: "40%", minWidth: "200px" }}>
                                        <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Invested Value</Typography>
                                        <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹{holdingGraph?.totalinvestedvalue}</Typography>
                                      </Box>
                                      <Box style={{ width: "40%", minWidth: "200px" }}>
                                        <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Current Value</Typography>
                                        <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹{holdingGraph?.totalcurrentvalue}</Typography>
                                      </Box>
                                      <Box style={{ width: "40%", minWidth: "200px" }}>
                                        <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Absolute Return</Typography>
                                        <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹{holdingGraph?.absolutereturn}</Typography>
                                      </Box>
                                    </Box>
                                    <Button variant="contained" style={style.button2} fullWidth onClick={() => navigate("/reports")}>
                                      {/* <Typography style={style.text} className="largeButtonText">Download Statement</Typography> */}
                                      <Typography style={style.text} className="largeButtonText">Get Report</Typography>
                                    </Button>
                                  </Grid>
                                  </Grid>
                                </Box>
                                <Typography style={{ marginBottom: "20px", color: "#7b7b9d", fontSize: "21px" }}>Your Holdings</Typography>
                                <Box className="categoryScrollMobile" style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
                                  {
                                    categoryGroupList &&
                                    categoryGroupList.length &&
                                    categoryGroupList.map((item: any, index: number) => {
                                      return (
                                        <Box
                                          key={index}
                                          onClick={() => {
                                            setActiveCategoryGroupIndex(index);
                                          }}
                                          style={{
                                            cursor: "pointer",
                                            border: `1px solid ${activeCategoryGroupIndex === index ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`,
                                            borderRadius: "8px",
                                            backgroundColor: `${activeCategoryGroupIndex === index ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`,
                                            textAlign: "center",
                                            padding: "12px 14px"
                                          }}>
                                          <Typography
                                            style={{
                                              fontWeight: "500",
                                              color: `${activeCategoryGroupIndex === index ? "#09b85d" : "#7b7b9d"}`,
                                              fontSize: "14px"
                                            }}>
                                            {/* {item}({getTotalFundCound(item)}) */}
                                            {item}
                                          </Typography>
                                        </Box>
                                      )
                                    })
                                  }
                                </Box>
                                {/* <Box> */}
                                {
                                  variableFundList &&
                                    variableFundList.length ?
                                    <>
                                      {variableFundList.map((item: any, index: number) => {
                                        console.log(item);
                                        return (
                                          <HoldingCards
                                            key={index}
                                            logo={item?.fundimage}
                                            name={item?.fundname}
                                            cap={item?.category}
                                            type={item?.categorygroup}
                                            price={item?.units}
                                            invested={item?.investedvalue}
                                            current={item?.currentvalue}
                                            absolute={item?.absolutereturn}
                                            absoluteReturnInPercent={item?.absolutereturninpercent}
                                            result={item?.absolutereturninpercent ? (parseFloat(item?.absolutereturninpercent) > 0 ? "profit" : "loss") : ""}
                                            fundId={item?.fund_id}
                                            folioNumber={item?.folio}
                                          />
                                        )
                                      })}
                                    </> :
                                    // </Box>
                                    <>
                                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <Typography component="h5" sx={{ color: "var(--uiDarkGreyColor)", fontSize: "12px" }}>
                                          No record found!
                                        </Typography>
                                      </Box>

                                    </>
                                }
                              </>
                              : null
                          }
                        </>
                    }
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </Box>
  )
}

export default Portfolio