
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

function ExploreFunds(props: any) {

  const classes = useStyles();
  const dispatch: any = useDispatch();
  const refContainer = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const [selected, setSelected] = useState<number>(1)
  const [fundSelecteds, setFundSelecteds] = useState<any[]>([]);
  const [masterFundList, setMasterFundList] = useState<any[]>([]);
  const [variableMasterFundList, setVariableMasterFundList] = useState<any[]>([]);
  const [categoryGroupList, setCategoryGroupList] = useState<any[]>([]);

  const g_investment: any = useSelector(
    (state: any) => state?.recommendationsReducer?.investment
  );

  const status: any = useMemo(() => { return location?.state?.status }, []);
  const investmentCardType: string | null = useMemo(() => { return localStorage.getItem(siteConfig.INVESTMENT_CARD_TYPE) }, []);
  // const masterFundListLength: number = useMemo(() => { return masterFundList && masterFundList.length ? masterFundList.length : 0 }, [masterFundList]);

  const [masterFundListLength, setMasterFundListLength] = useState<number>(0);

  useEffect(() => {
    getMasterFundList();
    getCategoryGroupList();
  }, []);

  useEffect(() => {
    console.log(categoryGroupList, "useeffect categoryGroupList");
  }, [categoryGroupList])

  useEffect(() => {
    console.log(masterFundList, "useeffect masterFundList");
  }, [masterFundList])

  useEffect(() => {
    console.log(variableMasterFundList, "useeffect variableMasterFundList");
    setMasterFundListLength(variableMasterFundList && variableMasterFundList.length ? variableMasterFundList.length : 0)
  }, [variableMasterFundList])

  const getMasterFundList = async () => {
    let res: apiResponse = await getMasterFundListThunk(siteConfig.RECOMMENDATION_FUND_LIST);
    // @ts-ignore
    handleApiResponse(res?.data, [setMasterFundList, setVariableMasterFundList]);
  }

  const getCategoryGroupList = async () => {
    let res: apiResponse = await getCategoryGroupListThunk();
    // @ts-ignore
    handleApiResponse(res, [setCategoryGroupList])
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

  const handleNavigation = (strRoute: string) => {
    navigate(strRoute);
  }

  // const countfiltered = explorefundsfromapi.filter(function (element: any) {
  //   return element.categorygroup == 'Equity';
  // }).length

  // console.log(countfiltered);

  // const countfiltered2 = explorefundsfromapi.filter(function (element: any) {
  //   return element.categorygroup == 'Balanced';
  // }).length

  // console.log(countfiltered2);

  // const countfiltered3 = explorefundsfromapi.filter(function (element: any) {
  //   return element.categorygroup == 'Debt';
  // }).length

  // console.log(countfiltered3);

  // explorefundsfromapi.map((value: any) => {
  //   if (value.categorygroup === "Equity") {
  //     console.log(value.categorygroup.length)
  //   }

  // })

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
      setVariableMasterFundList(arrFiltered);
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

                    </Box> : <>
                      {
                        status === globalConstant.CEF_ADD_FUND ? <Box>
                          <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                          <Typography style={{ fontSize: "18px", color: "#3c3e42", paddingTop: "10px", fontWeight: "500" }}>Choose Funds to Add</Typography>
                          <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "15px" }}>{investmentCardType === globalConstant.SIP_INVESTMENT ? globalConstant.SIP_INVESTMENT : globalConstant.LUMPSUM_INVESTMENT}</Typography>
                          <Typography style={{ fontSize: "12px", color: "#8787a2", fontWeight: "500" }}>{masterFundListLength} funds found</Typography>
                        </Box> : <Box>
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
                  {/* <Box style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
                    <Box onClick={() => { setSelected(1); setFundList(ExploreFundsList) }} style={{ cursor: "pointer", border: `1px solid ${selected == 1 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 1 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
                      <Typography style={{ fontWeight: "500", color: `${selected == 1 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>All Funds ({explorefundsfromapi.length})</Typography>
                    </Box>
                    <Box onClick={() => {
                      setSelected(2); setexplorefundsfromapi(explorefundsfromapi.filter((item: any) => item.categorygroup
                        == 'Equity'))
                    }} style={{ cursor: "pointer", border: `1px solid ${selected == 2 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 2 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
                      <Typography style={{ fontWeight: "500", color: `${selected == 2 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Equity ({countfiltered}) </Typography>
                    </Box>
                    <Box onClick={() => {
                      setSelected(3); setexplorefundsfromapi(explorefundsfromapi.filter((item: any) => item.categorygroup
                        == 'Debt'))
                    }} style={{ cursor: "pointer", border: `1px solid ${selected == 3 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 3 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
                      <Typography style={{ fontWeight: "500", color: `${selected == 3 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Debt ({countfiltered3})</Typography>
                    </Box>
                    <Box onClick={() => {
                      setSelected(4); setexplorefundsfromapi(explorefundsfromapi.filter((item: any) => item.categorygroup
                        == 'Balanced'))
                    }} style={{ cursor: "pointer", border: `1px solid ${selected == 4 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 4 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
                      <Typography style={{ fontWeight: "500", color: `${selected == 4 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Balanced({countfiltered2})</Typography>
                    </Box>

                  </Box> */}

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
                        onCardClick={handleNavigationOfFundDetails}
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
                btnClick={() => null}
              />
              : (
                fundSelecteds.length > 0 ?
                  <>
                    <AddToPlanComp
                      fundsCount={fundSelecteds.length}
                      onClick={() => null} buttonText={"Funds Selected"} buttonnametext={"Add To Plan"} />
                  </>
                  : null
              )
          }

        </Grid>
      </Box>
    </Box>
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
