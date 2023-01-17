
import './Portfolio.css'
import { Box, styled } from '@mui/system'
import { Grid, MenuList, Typography } from '@mui/material'
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
import { apiResponse } from '../../Utils/globalTypes'
import { checkExpirationOfToken } from '../../Utils/globalFunctions'
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions'
import { useDispatch } from 'react-redux'
import siteConfig from '../../Utils/siteConfig'
import { getListOfPortfolioThunk, getListOfTrasanctionDoneThunk } from '../../Store/Payments/thunk/payments-thunk'

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

type holdingList = {
  "fundname": "string",
  "folio": "string",
  "fund_id": "string",
  "investedvalue": number,
  "XIRR": "string",
  "units": "string",
  "nav": "string",
  "currentvalue": "string",
  "absolutereturn": "string",
  "absolutereturninpercent": "string",
  "category": "string",
  "categorygroup": "string",
  "fundimage": "string",
  "rating": "string",
  "navdate": "string",
  "minredemptionqty": "string",
  "maxredemptionqty": "string",
  "minredemptionamount": "string",
  "maxredemptionamount": "string"
}

const initialHoldingListEquity = {
  fundname: "fundname",
  folio: "folio",
  fund_id: "fund id",
  investedvalue: 1000,
  XIRR: "XIRR",
  units: "units",
  nav: "nav",
  currentvalue: "currentvalue",
  absolutereturn: "absolutereturn",
  absolutereturninpercent: "absolutereturninpercent",
  category: "category",
  categorygroup: "Equity",
  fundimage: "fundimage",
  rating: "3",
  navdate: "navdate",
  minredemptionqty: "minredemptionqty",
  maxredemptionqty: "maxredemptionqty",
  minredemptionamount: "minredemptionamount",
  maxredemptionamount: "maxredemptionamount"
}
const initialHoldingListBalanced = {
  fundname: "fundname",
  folio: "folio",
  fund_id: "fund id",
  investedvalue: 1000,
  XIRR: "XIRR",
  units: "units",
  nav: "nav",
  currentvalue: "currentvalue",
  absolutereturn: "absolutereturn",
  absolutereturninpercent: "absolutereturninpercent",
  category: "category",
  categorygroup: "Balanced",
  fundimage: "fundimage",
  rating: "3",
  navdate: "navdate",
  minredemptionqty: "minredemptionqty",
  maxredemptionqty: "maxredemptionqty",
  minredemptionamount: "minredemptionamount",
  maxredemptionamount: "maxredemptionamount"
}
const initialHoldingListCommodities = {
  fundname: "fundname",
  folio: "folio",
  fund_id: "fund id",
  investedvalue: 1000,
  XIRR: "XIRR",
  units: "units",
  nav: "nav",
  currentvalue: "currentvalue",
  absolutereturn: "absolutereturn",
  absolutereturninpercent: "absolutereturninpercent",
  category: "category",
  categorygroup: "Commodities",
  fundimage: "fundimage",
  rating: "3",
  navdate: "navdate",
  minredemptionqty: "minredemptionqty",
  maxredemptionqty: "maxredemptionqty",
  minredemptionamount: "minredemptionamount",
  maxredemptionamount: "maxredemptionamount"
}
const initialHoldingListDebt = {
  fundname: "fundname",
  folio: "folio",
  fund_id: "fund id",
  investedvalue: 1000,
  XIRR: "XIRR",
  units: "units",
  nav: "nav",
  currentvalue: "currentvalue",
  absolutereturn: "absolutereturn",
  absolutereturninpercent: "absolutereturninpercent",
  category: "category",
  categorygroup: "Debt",
  fundimage: "fundimage",
  rating: "3",
  navdate: "navdate",
  minredemptionqty: "minredemptionqty",
  maxredemptionqty: "maxredemptionqty",
  minredemptionamount: "minredemptionamount",
  maxredemptionamount: "maxredemptionamount"
}
const initialHoldingListAlternative = {
  fundname: "fundname",
  folio: "folio",
  fund_id: "fund id",
  investedvalue: 1000,
  XIRR: "XIRR",
  units: "units",
  nav: "nav",
  currentvalue: "currentvalue",
  absolutereturn: "absolutereturn",
  absolutereturninpercent: "absolutereturninpercent",
  category: "category",
  categorygroup: "Alternative",
  fundimage: "fundimage",
  rating: "3",
  navdate: "navdate",
  minredemptionqty: "minredemptionqty",
  maxredemptionqty: "maxredemptionqty",
  minredemptionamount: "minredemptionamount",
  maxredemptionamount: "maxredemptionamount"
}

const initialHoldingListFixedIncome = {
  fundname: "fundname",
  folio: "folio",
  fund_id: "fund id",
  investedvalue: 1000,
  XIRR: "XIRR",
  units: "units",
  nav: "nav",
  currentvalue: "currentvalue",
  absolutereturn: "absolutereturn",
  absolutereturninpercent: "absolutereturninpercent",
  category: "category",
  categorygroup: "Fixed Income",
  fundimage: "fundimage",
  rating: "3",
  navdate: "navdate",
  minredemptionqty: "minredemptionqty",
  maxredemptionqty: "maxredemptionqty",
  minredemptionamount: "minredemptionamount",
  maxredemptionamount: "maxredemptionamount"
}

function Portfolio() {

  const classes = useStyles()
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [holding, setHolding] = useState<any>([]);
  const [message, setMessage] = useState<string>("");
  const [fundList, setFundList] = useState<any[]>([]);
  const [variableFundList, setVariableFundList] = useState<any[]>([]);
  const [categoryGroupList, setCategoryGroupList] = useState<any[]>([]);
  const [activeCategoryGroupIndex, setActiveCategoryGroupIndex] = useState<number>(0);

  useEffect(() => {
    getCategoryGroupList();
    setHolding(AllHolding);
  }, [])

  useEffect(() => {
    if (categoryGroupList && categoryGroupList.length) {
      getFundList(siteConfig.PAYMENT_PORTOFOLIO_LIST);
    }
  }, [categoryGroupList])

  useEffect(() => {
    handleVariableFundList(fundList);
  }, [fundList]);

  useEffect(() => {
    filterDataWRTCategoryGroup();
  }, [activeCategoryGroupIndex]);

  useEffect(() => {
    console.log(variableFundList, "variableFundList");
  }, [variableFundList]);

  const getCategoryGroupList = async () => {
    let res: apiResponse = await getCategoryGroupListThunk();
    let arrCG: string[] = [...res.data?.categorygroups];
    arrCG.unshift("All Funds");
    // @ts-ignore
    handleApiResponse(arrCG, [setCategoryGroupList]);
  }

  const getFundList = async (url: string) => {
    // let res: apiResponse = await getListOfTrasanctionDoneThunk(url);
    let res: apiResponse = await getListOfPortfolioThunk(url);


    // @ts-ignore
    handleApiResponse(res?.data, [setFundList]);
    // let data: any[] = [initialHoldingListAlternative, initialHoldingListBalanced, initialHoldingListCommodities, initialHoldingListDebt, initialHoldingListEquity, initialHoldingListFixedIncome]
    // @ts-ignore
    // handleApiResponse(data, [setFundList]);
  }

  const handleApiResponse = (res: apiResponse, arrFunc: void[]) => {

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
    if (fundList == null) {
      setMessage("You have not started your investment journey yet!");
      return;
    }

    setVariableFundList(fundList);
  }

  const filterDataWRTCategoryGroup = () => {
    if (!activeCategoryGroupIndex) {
      let arrFundList: any[] = [...fundList];
      setVariableFundList(arrFundList);
      return;
    }

    if (fundList && fundList.length) {
      let arrFilteredFundList: any[] = fundList.filter((item: any) => item?.categorygroup === categoryGroupList[activeCategoryGroupIndex]);
      setVariableFundList(arrFilteredFundList);
    }
  }

  return (
    <Box style={{ width: "100vw" }} >
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
            <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13}>
              <Toolbar />
              <Grid container>
                <Grid item xs={12} sx={{ padding: 2 }}>
                  <Box style={{ marginBottom: "20px", padding: "15px", borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%", maxWidth: "600px", flexWrap: "wrap", gap: "20px" }}>
                      <Box style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography style={{ color: "#3c3e42", fontWeight: "500", fontSize: "16px", cursor: "pointer" }} onClick={() => navigate('/holdings')}>Holdings</Typography>
                        <Box style={{ position: "absolute", bottom: "0px", padding: "1px", backgroundColor: "#23db7b", width: "106%" }}></Box>
                      </Box>
                      <Typography style={{ color: "#919eb1", fontWeight: "500", fontSize: "16px", cursor: "pointer" }} onClick={() => navigate('/transactions')}>Transactions</Typography>
                      <Typography style={{ color: "#919eb1", fontWeight: "500", fontSize: "16px", cursor: "pointer" }} onClick={() => navigate('/sips')}>SIPs</Typography>
                      <Typography style={{ color: "#919eb1", fontWeight: "500", fontSize: "16px", cursor: "pointer" }} onClick={() => navigate('/reports')}>Reports</Typography>
                    </Box>
                  </Box>
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
                          variableFundList &&
                            variableFundList.length ?
                            <>
                              <Box style={{ marginBottom: "20px", padding: "15px", borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "white" }}>
                                <Typography padding={2} style={{ color: "#3c3e42", fontWeight: "500", fontSize: "16px", cursor: "pointer" }}>Asset Allocation</Typography>
                                <Grid container padding={2}>
                                  <Grid item sm={5} xs={12} style={{ display: "flex", alignItems: "center", gap: "40px", justifyContent: "center" }}>
                                    <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
                                      <img src={chart} alt="chart" width="240px"></img>
                                      <Box>
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
                                    </Box>
                                  </Grid>
                                </Grid>
                                <Grid container padding={2}>

                                </Grid>
                                <Grid padding={2} item sm={1} xs={0}>
                                  <Divider orientation="vertical" />
                                </Grid>
                                <Grid container padding={2} item sm={5} xs={12} m={"auto"} >
                                  <Box style={{ display: "flex", flexWrap: "wrap", width: "100%", gap: "20px", justifyContent: "space-between" }}>
                                    <Box style={{ width: "40%", minWidth: "200px" }}>
                                      <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Invested Value</Typography>
                                      <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹5,01,000</Typography>
                                    </Box>
                                    <Box style={{ width: "40%", minWidth: "200px" }}>
                                      <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Current Value</Typography>
                                      <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹5,96,190</Typography>
                                    </Box>
                                    <Box style={{ width: "40%", minWidth: "200px" }}>
                                      <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Absolute Return</Typography>
                                      <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹19,190</Typography>
                                    </Box>
                                  </Box>
                                  <Button variant="contained" style={style.button2} fullWidth>
                                    <Typography style={style.text} className="largeButtonText">Download Statement</Typography>
                                  </Button>
                                </Grid>

                              </Box>
                              <Typography style={{ marginBottom: "20px", color: "#7b7b9d", fontSize: "21px" }}>Your Holdings</Typography>
                              <Box style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
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
                              <Box>
                                {
                                  variableFundList.map((item: any, index: number) => {
                                    return (
                                      <HoldingCards
                                        key={index}
                                        logo={item?.fundimage}
                                        name={item?.fundname}
                                        cap={item?.categorygroup}
                                        type={item?.category}
                                        price={item?.currentvalue}
                                        invested={item?.investedvalue}
                                        // year3={item?.}
                                        year3={""}
                                        // current={ item?.}
                                        current={"1,46,232"}
                                        // year5={ item?.}
                                        year5={"4,214"}
                                        // absolute={item?.}
                                        absolute={""}
                                        // margin={ item?.}
                                        margin={"03.36"}
                                        // result={ item?.}
                                        result={"loss"}


                                      //  fundname: "fundname",
                                      // folio: "folio",
                                      //   fund_id: "fund id",
                                      //     investedvalue: 1000,
                                      //       XIRR: "XIRR",
                                      //         units: "units",
                                      //           nav: "nav",
                                      //             currentvalue: "currentvalue",
                                      //               absolutereturn: "absolutereturn",
                                      //                 absolutereturninpercent: "absolutereturninpercent",
                                      //                   category: "category",
                                      //                     categorygroup: "Equity",
                                      //                       fundimage: "fundimage",
                                      //                         rating: "3",
                                      //                           navdate: "navdate",
                                      //                             minredemptionqty: "minredemptionqty",
                                      //                               maxredemptionqty: "maxredemptionqty",
                                      //                                 minredemptionamount: "minredemptionamount",
                                      //                                   maxredemptionamount: "maxredemptionamount"

                                      />
                                    )
                                  })
                                }
                              </Box>
                            </>
                            : null
                        }
                      </>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Portfolio