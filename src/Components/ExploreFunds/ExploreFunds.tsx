
import './Portfolio.css'
import { Box, styled } from '@mui/system'
import { Avatar, Chip, Grid, IconButton, InputBase, Typography } from '@mui/material'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { FilterAltOutlined, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search, SearchOutlined, TaskAltOutlined, WrongLocationOutlined } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useLocation, useNavigate } from 'react-router-dom'
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
import { getMasterFundListThunk } from '../../Store/Recommendations/thunk/recommendations-thunk'
import { checkExpirationOfToken } from '../../Utils/globalFunctions'
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions'
import { apiResponse } from '../../Utils/globalTypes'
import { Component } from 'react-image-crop'
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

function ExploreFunds(props: any) {

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

  const [fundList, setFundList] = useState<any[]>([])
  const [fundSelecteds, setFundSelecteds] = useState<any[]>([]);
  const menuActions = React.useRef<MenuUnstyledActions>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()
  const [explorefundsfromapi, setexplorefundsfromapi] = useState<any[]>([])
  const classes = useStyles()
  const dispatch: any = useDispatch();
  const refContainer = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState<number>(1)
  const g_investment: any = useSelector(
    (state: any) => state?.recommendationsReducer?.investment
  );

  const AddFundButton: string = useMemo(() => { return location?.state?.CommonExploreFund }, []);
  console.log(AddFundButton)


  // data from the calling api in same component

  useEffect(() => {
    getDataWithoutToken(
      siteConfig.RECOMMENDATION_FUND_LIST,
      siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
      siteConfig.RECOMENDATION_API_ID
    )
      .then((res: any) => res.json())
      .then((data: any) => {
        if (data?.error === true) {
          return;
        }
        console.log(`useeffectapi ${data?.data?.data}`);
        const explorefundData = data?.data?.data
        console.log(explorefundData)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])



  // data from home Component

  const explorFundlist: any = useSelector((state: any) => state.globalReducer?.explorefundlist);
  console.log(explorFundlist)
  console.log(explorFundlist?.data?.length)
  console.log(explorFundlist?.data)

  useEffect(() => {
    setFundList(ExploreFundsList)
    setexplorefundsfromapi(explorFundlist?.data)
    console.log(explorefundsfromapi)

  }, [])







  const countfiltered = explorFundlist?.data.filter(function (element: any) {
    return element.categorygroup == 'Equity';
  }).length

  console.log(countfiltered);

  const countfiltered2 = explorFundlist?.data.filter(function (element: any) {
    return element.categorygroup == 'Balanced';
  }).length

  console.log(countfiltered2);

  const countfiltered3 = explorFundlist?.data.filter(function (element: any) {
    return element.categorygroup == 'Debt';
  }).length

  console.log(countfiltered3);

  explorFundlist?.data.map((value: any) => {
    if (value.categorygroup === "Equity") {
      console.log(value.categorygroup.length)
    }

  })






  const handleFilter = (event: React.MouseEvent<Element, MouseEvent>) => {
    dispatch(AnchorOpenAction(event));
  };

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
              {
                AddFundButton ? <h6>Breadcrumbs</h6> : ""
              }
              <Box style={{ display: "flex", alignItems: 'start', justifyContent: "space-between", flexWrap: 'wrap' }}>

                <Box padding={2} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: 'wrap' }}>
                  {
                    AddFundButton ? <Box>
                      <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                      <Typography style={{ fontSize: "18px", color: "#3c3e42", paddingTop: "10px", fontWeight: "500" }}>Choose Funds to Add</Typography>
                      <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "15px" }}>SIP Investment</Typography>
                      <Typography style={{ fontSize: "12px", color: "#8787a2", fontWeight: "500" }}>{explorFundlist?.data?.length}funds found</Typography>

                    </Box> : <Box>
                      <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                      <Typography style={{ fontSize: "12px", color: "#8787a2", paddingTop: "10px" }}>Choose Funds to Invest</Typography>
                      <Typography style={{ fontSize: "18px", color: "#3c3e42", fontWeight: "500" }}>Explore Funds</Typography>
                      <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "20px" }}>3 funds found</Typography>

                    </Box>
                  }


                </Box>
                <Box padding={2} >
                  <Box style={{ backgroundColor: "white", border: "1px solid #dddfe2", boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", padding: "5px 14px" }}>
                    <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <SearchOutlined style={{ color: "#7b7b9d" }} />
                      <InputBase onChange={(e) => setexplorefundsfromapi(explorefundsfromapi.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())))} placeholder='Search funds...' style={{ color: "#7b7b9d", minWidth: "250px" }}></InputBase>
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
                    <Box onClick={() => { setSelected(1); setFundList(ExploreFundsList) }} style={{ cursor: "pointer", border: `1px solid ${selected == 1 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 1 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
                      <Typography style={{ fontWeight: "500", color: `${selected == 1 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>All Funds ({explorFundlist?.data?.length})</Typography>
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

                  </Box>

                </Box>
              </Box>

              {
                explorefundsfromapi.map((item: any, key: number) => {
                  return (
                    <>
                      <AllExploreFundCard {...item} key={key} />
                    </>
                  )
                })
              }

            </Grid>
            {
              fundSelecteds.length > 0 ?
                <>

                  <AddToPlanComp
                    fundsCount={fundSelecteds.length}
                    onClick={() => null} buttonText={"Funds Selected"} buttonnametext={"Add To Plan"} />

                </>
                : null
            }
          </Grid>

        </Grid>
      </Box>
    </Box>
  )
}

export default ExploreFunds

