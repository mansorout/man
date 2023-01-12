
import './Portfolio.css'
import { Box, styled } from '@mui/system'
import { Avatar, Breadcrumbs, Chip, Grid, IconButton, InputBase, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { FilterAltOutlined, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search, SearchOutlined, TaskAltOutlined, WrongLocationOutlined } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import AllExploreFundCard from '../../Modules/CustomCard/AllExploreFundCard'
import { ExploreFundsList } from '../../Modal/ExploreFunds'
import { useDispatch, useSelector } from 'react-redux'
import DropDownFilterInvestment from '../Investment/dropDownFilterInvestment'
import { AnchorOpenAction } from '../../Store/Duck/FilterBox'
import { getDataWithoutToken } from '../../Utils/api'
import siteConfig from '../../Utils/siteConfig'
import { setMasterFundListAction } from '../../Store/Global/actions/global-actions'
import { lookUpMasterKeys } from '../../Utils/globalConstant'
import AddToPlanComp from '../CommonComponents/AddToPlanComp'
import { getCategoryGroupListThunk, getMasterFundListThunk } from '../../Store/Recommendations/thunk/recommendations-thunk'
import { checkExpirationOfToken } from '../../Utils/globalFunctions'
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions'
import { apiResponse } from '../../Utils/globalTypes'
import { Component } from 'react-image-crop'
import { globalConstant } from '../../Utils/globalConstant'
import FooterWithBtn from '../CommonComponents/FooterWithBtn'
import MutualFundCard2 from '../../Modules/CustomCard/MutualFundCard2'
import { getMutualFundRecommendationListWRTUserAmount } from '../../Utils/globalFunctions'
import { setMasterFundListForExploreFundsAction, setSelectedFundsForInvestmentAction } from '../../Store/Recommendations/actions/recommendations-action'
import SelectedFunds from './SelectedFunds'
// import { AnchorOpenAction } from "../../Store/Duck/FilterBox";

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

}

const initialMFDataForAddFund = {
  showCheckbox: true,
  showButtons: false,
  isMutualFundScreen: false,
  isChecked: false
}

const initialMFDataForReplaceFund = {
  showCheckbox: false,
  showButtons: false,
  isMutualFundScreen: false,
  isChecked: false
}

const initialMFDataForExploreFund = {
  showCheckbox: true,
  showButtons: false,
  isMutualFundScreen: false,
  isChecked: false
}

function ExploreFunds(props: any) {

  const classes = useStyles();
  const dispatch: any = useDispatch();
  const refContainer = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const [fundSelecteds, setFundSelecteds] = useState<any[]>([]);
  const [masterFundList, setMasterFundList] = useState<any[]>([]);
  const [categoryGroupList, setCategoryGroupList] = useState<any[]>([]);
  const [initialMFData, setInitialMFData] = useState<boolean>(false);
  const [variableMasterFundList, setVariableMasterFundList] = useState<any[]>([]);
  const [activeCategoryGroupIndex, setActiveCategoryGroupIndex] = useState<number>(0)

  const g_investment: any = useSelector(
    (state: any) => state?.recommendationsReducer?.investment
  );

  const status: any = useMemo(() => { return location?.state?.status }, []);
  const investmentCardType: string | null = useMemo(() => { return localStorage.getItem(siteConfig.INVESTMENT_CARD_TYPE) }, []);
  // const masterFundListLength: number = useMemo(() => { return masterFundList && masterFundList.length ? masterFundList.length : 0 }, [masterFundList]);

  const [masterFundListLength, setMasterFundListLength] = useState<number>(0);
  const g_masterFundListForExploreFunds = useSelector((state: any) => state?.recommendationsReducer?.masterFundListForExploreFunds);

  useEffect(() => {
    getCategoryGroupList();
    return () => {
      console.log("explore fund unmounted");
    }
  }, []);

  useEffect(() => {
    if (categoryGroupList && categoryGroupList.length) {
      const { data, isFundPurchased } = g_masterFundListForExploreFunds;
      if (isFundPurchased) {
        getMasterFundList(siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${categoryGroupList[0]}`);
      } else {
        if (data && data.length) {
          setMasterFundList(data);
        } else {
          getMasterFundList(siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${categoryGroupList[0]}`);
        }
      }
    }
  }, [categoryGroupList])

  useEffect(() => {
    handlingFeatureWiseCard(masterFundList);
  }, [masterFundList]);

  const getCategoryGroupList = async () => {
    let res: apiResponse = await getCategoryGroupListThunk();
    res.data = [...res.data?.categorygroups];
    // @ts-ignore
    handleApiResponse(res, [setCategoryGroupList]);
  }

  const getMasterFundList = async (url: string) => {
    let res: apiResponse = await getMasterFundListThunk(url);
    // @ts-ignore
    handleApiResponse(res?.data, [setMasterFundList]);
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
      // @ts-ignore
      if (res?.data) item(res?.data);
    })

  }

  const handlingFeatureWiseCard = async (arrRecom: any[]) => {
    if (initialMFData) {//this state use to avoid adding or updating isChecked key in initialMFData
      setVariableMasterFundList(arrRecom);
      return;
    }

    if (arrRecom && arrRecom.length) {

      setMasterFundListLength(arrRecom.length);

      //setting initialMFData according to status of screens
      let arrNew: any[] = [];
      if (status === globalConstant.CEF_ADD_FUND) {
        arrNew = await getMutualFundRecommendationListWRTUserAmount(arrRecom, initialMFDataForAddFund);
      } else if (status === globalConstant.CEF_REPLACE_FUND) {
        arrNew = await getMutualFundRecommendationListWRTUserAmount(arrRecom, initialMFDataForReplaceFund);
      } else {
        arrNew = await getMutualFundRecommendationListWRTUserAmount(arrRecom, initialMFDataForExploreFund);
      }

      if (arrNew && arrNew.length) {
        setVariableMasterFundList(arrNew); //setting this variable list state
      } else {
        setVariableMasterFundList([]); //setting this variable list state
      }
    }

  }

  const handleFilter = (event: React.MouseEvent<Element, MouseEvent>) => {
    dispatch(AnchorOpenAction(event));
  };

  const handleSearchFunctionality = (e: any) => {
    if (masterFundList && masterFundList.length) {
      const { value } = e?.target;
      let arrMasterFundList: any[] = [...masterFundList];
      if (!value) {
        setVariableMasterFundList(arrMasterFundList);
        return;
      }

      let arrFiltered: any[] = arrMasterFundList.filter((item: any) => item?.fundname?.toLowerCase().includes(value?.toLowerCase()));

      if (arrFiltered && arrFiltered.length) {
        // handlingFeatureWiseCard(arrFiltered);
        setVariableMasterFundList(arrFiltered)
      } else {
        setVariableMasterFundList([]);
      }
    } else {
      console.log("master fund list is empty");
    }
  }

  const handleNavigationOfFundDetails = (secid: string) => {
    if (secid) {
      navigate("/funddetails", { state: { secid: secid, parentRoute: "/customizemf" } });
    } else {
      console.log(secid, "invalid secid");
    }
  }

  useEffect(() => {
    console.log(masterFundList, "masterFundList useeefect")
  }, [masterFundList])

  const getTotalFundCound = (categorygroup: string) => {
    // return 
  }

  const handleAddFundsSelection = (secid: number, isChecked: any, elt: string, index: number) => {

    // let arrMasterFundList: any[] = [...masterFundList];
    let arrMasterFundList: any[] = [...variableMasterFundList];
    if (status === globalConstant.CEF_EXPLORE_FUND || status === globalConstant.CEF_ADD_FUND) {
      //explore fund and add fund of investment

      if (isChecked) {
        if (arrMasterFundList[index]["secid"] === secid) {
          arrMasterFundList[index]["fundSelected"] = isChecked;
        }
      } else {
        arrMasterFundList[index]["fundSelected"] = false;
      }

      let arrNew: any[] = arrMasterFundList.filter(item => item["fundSelected"] === true);

      setFundSelecteds(arrNew);
      // setMasterFundList(arrMasterFundList);
      setVariableMasterFundList(arrMasterFundList);
    } else if (status === globalConstant.CEF_REPLACE_FUND) {
      //replace fund

      //replacing fund according to sec id 
      let objFundListSelectedItem: any = {};
      let arrSelectedFundList: any[] = arrMasterFundList.map((item: any) => {
        if (item?.isChecked !== undefined) {
          if (item["secid"] === secid) {
            item["isChecked"] = true;
            objFundListSelectedItem = { ...item };
          } else {
            item["isChecked"] = false;
          }
        }

        return item;
      });


      setFundSelecteds([objFundListSelectedItem]);
      setVariableMasterFundList(arrSelectedFundList);
      // setMasterFundList(arrSelectedFundList);
      setInitialMFData(true);
    } else {
      //add fund


    }
  }

  useEffect(() => {
    console.log(fundSelecteds, "fundSelecteds");
  }, [fundSelecteds])


  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0} >
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid container sx={{ width: "100%", height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
            <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, overflow: { sx: "auto", sm: "scroll" } }} item xs={12}>
              <Toolbar />

              <Box style={{ display: "flex", alignItems: 'start', justifyContent: "space-between", flexWrap: 'wrap' }}>

                <Box padding={2} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: 'wrap' }}>


                  {
                    status === globalConstant.CEF_REPLACE_FUND ? <Box>
                      <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                      <Typography style={{ fontSize: "18px", color: "#3c3e42", fontWeight: "500" }}>Choose Funds to Replace</Typography>
                      <Typography style={{ fontSize: "12px", color: "#8787a2", paddingTop: "10px" }}>{investmentCardType === globalConstant.SIP_INVESTMENT ? globalConstant.SIP_INVESTMENT : globalConstant.LUMPSUM_INVESTMENT}</Typography>
                      <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "20px" }}>{masterFundListLength} funds found</Typography>

                    </Box> :
                      <>
                        {
                          status === globalConstant.CEF_ADD_FUND ? <Box>
                            <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                            <Typography style={{ fontSize: "18px", color: "#3c3e42", paddingTop: "10px", fontWeight: "500" }}>Choose Funds to Add</Typography>
                            <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "15px" }}>{investmentCardType === globalConstant.SIP_INVESTMENT ? globalConstant.SIP_INVESTMENT : globalConstant.LUMPSUM_INVESTMENT}</Typography>
                            <Typography style={{ fontSize: "12px", color: "#8787a2", fontWeight: "500" }}>{masterFundListLength} funds found</Typography>
                          </Box> :
                            status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND ?
                              <Box>
                                <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                                <Typography style={{ fontSize: "18px", color: "#3c3e42", paddingTop: "10px", fontWeight: "500" }}>Choose Funds to Replace</Typography>
                                {/* <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "15px" }}>{investmentCardType === globalConstant.SIP_INVESTMENT ? globalConstant.SIP_INVESTMENT : globalConstant.LUMPSUM_INVESTMENT}</Typography> */}
                                <Typography style={{ fontSize: "12px", color: "#8787a2", fontWeight: "500" }}>{masterFundListLength} funds found</Typography>
                              </Box>
                              :
                              <Box>
                                <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                                <Typography style={{ fontSize: "12px", color: "#8787a2", paddingTop: "10px" }}>Choose Funds to Invest</Typography>
                                <Typography style={{ fontSize: "18px", color: "#3c3e42", fontWeight: "500" }}>Explore Funds</Typography>
                                <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "20px" }}>{masterFundListLength} funds found</Typography>
                              </Box>
                        }
                      </>
                  }


                </Box>
                <Box padding={2} >
                  <Box style={{ backgroundColor: "white", border: "1px solid #dddfe2", boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", padding: "5px 14px" }}>
                    <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <SearchOutlined style={{ color: "#7b7b9d" }} />
                      <InputBase
                        onChange={handleSearchFunctionality}
                        placeholder='Search funds...'
                        style={{ color: "#7b7b9d", minWidth: "250px" }}
                      />

                      {/* </InputBase> */}
                    </Box>

                    <Box onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                      handleFilter(e);
                    }}>
                      <IconButton >
                        <FilterAltOutlined style={{ color: "#09b85d" }} />
                      </IconButton>
                    </Box>
                    <DropDownFilterInvestment />
                  </Box>
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
                              let url = siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${item}`;
                              setFundSelecteds([]);
                              setInitialMFData(false);
                              getMasterFundList(url);
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
                </Box>
              </Box>
              {
                variableMasterFundList &&
                variableMasterFundList.length &&
                variableMasterFundList.map((item: any, index: number) => {
                  return (
                    <Box key={index}>
                      <MutualFundCard2
                        {...item}
                        activeIndex={index}
                        onCardClick={handleNavigationOfFundDetails}
                        onClick={handleAddFundsSelection}
                      />
                    </Box>
                  )
                })
              }

            </Grid>
          </Grid>

          {
            status === globalConstant.CEF_REPLACE_FUND ?
              <FooterWithBtn
                btnText="Replace Fund"
                btnClick={() => {
                  if (status === globalConstant.CEF_REPLACE_FUND) {
                    dispatch(setSelectedFundsForInvestmentAction(fundSelecteds));
                    navigate("/customizemf")
                  }
                }}
              />
              : (
                fundSelecteds.length > 0 ?
                  <>
                    <AddToPlanComp
                      fundsCount={fundSelecteds.length}
                      onClick={() => {
                        if (status === globalConstant.CEF_EXPLORE_FUND || status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND) {
                          dispatch(setMasterFundListForExploreFundsAction(fundSelecteds));
                          navigate("/selectedfunds");
                        } else if (status === globalConstant.CEF_ADD_FUND) {
                          dispatch(setSelectedFundsForInvestmentAction(fundSelecteds));
                          navigate("/customizemf");
                        }
                      }}
                      buttonText={"Funds Selected"}
                      buttonnametext={"Add To Plan"} />
                  </>
                  : null
              )
          }

        </Grid>
      </Box>
    </Box >
  )
}

export default ExploreFunds;


// Breadcrumbs code 
{/* {
                add_fund_button_fromSipFlow || add_replace_button_fromSipFlow ? <Breadcrumbs
                  sx={{
                    fontSize: "12px",
                    color: "#6c63ff",
                  }}
                >
                  <Link to='/home'>Home</Link>
                  <Link
                    onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/sipInvestment" : "/oneTimeInvestment")} to={''}                >
                    Investment
                  </Link>
                  <Link
                    onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/startAnSip" : "/investNow")} to={''}
                  >
                    {g_investment?.type === globalConstant.SIP_INVESTMENT ? "monthly investment" : "one time lumpsum"}
                  </Link>
                  <Link
                    onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/mflist" : "/onetimemutualfundrecommendation")} to={''}                >
                    Mutual Fund Recommendation
                  </Link>
                  <Link
                    onClick={() => handleNavigation("/customizemf")} to={''}                >
                    Customize Plan</Link>
                  {add_fund_button_fromSipFlow ?
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#373e42",
                      }}
                    >
                      Choose fund to Add
                    </Typography> : <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#373e42",
                      }}
                    >
                      Choose fund to Replace
                    </Typography>
                  }
                </Breadcrumbs> : ""
              } */}







              // const isProfileComplete =
    // !!userData?.mobilenumber &&
    // !!userData?.emailaddress &&
    // !!userData?.dateofbirth &&
    // !!userData?.gender &&
    // !!userData?.addressline1 &&
    // !!userData?.state &&
    // !!userData?.city &&
    // !!userData?.pincode &&
    // !!userData?.placeofbirth &&
    // !!userData?.incomeslab;


    // const isKycComplete =
    // !!KYC?.isnomineedetailsavailable &&
    // KYC.iscvlverified &&
    // KYC.isbankdetailsverifed === 'verified' &&
    // !!KYC.ispannumberverified &&
    // !!KYC.issignatureavailable;

    // isbseregistered === true ?

    // isKycComplete && isProfileComplete && !isbseregistered => call BSE api


    // [
    //   'Low',
    //   'Low to Moderate',
    //   'Moderate',
    //   'Moderately High',
    //   'High',
    //   'Very High',
    // ]
