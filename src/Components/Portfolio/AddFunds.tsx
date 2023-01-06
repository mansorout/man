import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  IconButton,
  InputAdornment,
  InputBase,
  Link,
  TextField,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import MutualFundCard2 from "../../Modules/CustomCard/MutualFundCard2";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { globalConstant } from "../../Utils/globalConstant";
import { FilterAltOutlined, SearchOutlined } from "@mui/icons-material";
import DropDownFilterInvestment from "../Investment/dropDownFilterInvestment";
import { AnchorOpenAction } from "../../Store/Duck/FilterBox";
import SelectedFunds from "../ExploreFunds/SelectedFunds";
import AddToPlanComp from "../CommonComponents/AddToPlanComp";

const data = [
  {
    id: 1,
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: globalConstant.ALL_FUNDS,
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    showCheckbox: true,
    showButtons: false,
    isMutualFundScreen: false,
    isChecked: false
  },
  {
    id: 2,
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: globalConstant.BALANCED,
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    showCheckbox: true,
    showButtons: false,
    isMutualFundScreen: false,
    isChecked: false
  },
  {
    id: 3,
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: globalConstant.BALANCED,
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    showCheckbox: true,
    showButtons: false,
    isMutualFundScreen: false,
    isChecked: false
  },
  {
    id: 4,
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: globalConstant.EQUITY,
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    showCheckbox: true,
    showButtons: false,
    isMutualFundScreen: false,
    isChecked: false
  },
  {
    id: 5,
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Equity",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    showCheckbox: true,
    showButtons: false,
    isMutualFundScreen: false,
    isChecked: false
  },
];

const style = {
  main: {
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    height: "100vh",
  } as React.CSSProperties,
  button: {
    color: "rgba(123, 123, 157, 0.3)",
    padding: "0.625vw 1.25vw",
    borderRadius: "0.625vw",
    border: "solid 1px rgba(123, 123, 157, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0)",
  } as React.CSSProperties,
  selected: {
    color: "#23db7b",
    padding: "0.625vw 1.25vw",
    borderRadius: "0.625vw",
    border: "solid 1px #23db7b",
    backgroundColor: "#dff7ea",
  } as React.CSSProperties,
};

const AddFunds = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const [fundList, setFundList] = useState<any[]>([]);
  const [selected, setSelected] = useState<number>(1);
  const [fundSelecteds, setFundSelecteds] = useState<any[]>([]);
  const g_investment: any = useSelector(
    (state: any) => state?.recommendationsReducer?.investment
  );


  useEffect(() => {
    setFundList(data);
  }, []);

  const handleSelection = (key: number, type: string, arrData: any[]) => {
    setSelected(key);
    setFundSelecteds([]);
    if (type === globalConstant.ALL_FUNDS) {
      setFundList(data);
      return;
    }
    setFundList(arrData.filter((item: any) => item.fundType === type));
  };

  const handleFilter = (event: React.MouseEvent<Element, MouseEvent>) => {
    dispatch(AnchorOpenAction(event));
  };

  const handleAddFundsSelection = (id: number, type: any, elt: string) => {
    let arrFundSelecteds: any = [...fundSelecteds];
    let fundSelectedsIndex: number = 0;
    let isItemAlreadyPresent: boolean = false

    arrFundSelecteds.forEach((item: any, index: number) => {
      if (item.id === id) {
        fundSelectedsIndex = index;
        isItemAlreadyPresent = true;
        return;
      }
      isItemAlreadyPresent = false;
    });

    let fundListSelectedItem: number = fundList.length && fundList.filter(item => item.id === id)[0];

    if (type === true) {
      if (isItemAlreadyPresent) {
        return;
      }
      arrFundSelecteds.push(fundListSelectedItem);
    } else {
      arrFundSelecteds.splice(fundSelectedsIndex, 1);
    }

    // let arrSelectedFundList: any[] = [...fundList];
    // // arrSelectedFundList[]

    // arrSelectedFundList.forEach((item: any) => {
    //   if (item.id === id) {
    //     item.checked = !item.checked;
    //   }
    // })

    // setFundList(arrSelectedFundList)
    setFundSelecteds(arrFundSelecteds);
  }

  const handleNavigation = (strRoute: string) => {
    navigate(strRoute);
  }

  return (
    <Box style={{ width: "100vw" }}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          {/* <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}> */}
          <Grid container sx={{ overflow: "scroll" }} xs={13} sm={11} md={10}>
            {/* <Toolbar /> */}
            <Box
              id="addfunds"
              sx={{
                backgroundColor: "#f9f9f9",
                width: { xs: "94.75vw", sm: "83.75vw" },
                padding: "3.75vw 2.4vw",
                display: "flex",
                flexDirection: "column",
                gap: "1vw",
              }}
            >
              <Breadcrumbs
                sx={{
                  fontSize: "12px",
                  color: "#6c63ff",
                }}
              >
                <Link href="/home">Home</Link>
                <Link
                  onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/sipInvestment" : "/oneTimeInvestment")}
                >
                  Investment
                </Link>
                <Link
                  onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/startAnSip" : "/investNow")}

                >
                  {g_investment?.type === globalConstant.SIP_INVESTMENT ? "monthly investment" : "one time lumpsum"}
                </Link>
                <Link
                  onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/mflist" : "/onetimemutualfundrecommendation")}
                >
                  Mutual Fund Recommendation
                </Link>
                <Link
                  onClick={() => handleNavigation("/customizemf")}
                >
                  Customize Plan</Link>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#373e42",
                  }}
                >
                  Choose fund to Add
                </Typography>
              </Breadcrumbs>

              <Box
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  padding={2}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Box>
                    <Typography style={{ fontSize: "12px", color: "#8787a2" }}>
                      Choose Funds to Invest
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "18px",
                        color: "#3c3e42",
                        fontWeight: "500",
                      }}
                    >
                      Choose funds to add
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "12px",
                        color: "#8787a2",
                        marginTop: "20px",
                      }}
                    >
                      {`${fundList.length}`} funds found
                    </Typography>
                  </Box>
                </Box>
                <Box padding={2}>
                  <Box
                    style={{
                      border: "1px solid #dddfe2",
                      boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                      padding: "5px 14px",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <SearchOutlined style={{ color: "#7b7b9d" }} />
                      <InputBase
                        onChange={(e) =>
                          setFundList(
                            data.filter((item) =>
                              item.title
                                .toLowerCase()
                                .includes(e.target.value.toLowerCase())
                            )
                          )
                        }
                        placeholder="Search Transactions"
                        style={{ color: "#7b7b9d", minWidth: "250px" }}
                      ></InputBase>
                    </Box>
                    <Grid
                      onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                        handleFilter(e);
                      }}

                    // onClick={(e) => handleFilter(e)}
                    >
                      <IconButton>
                        <FilterAltOutlined style={{ color: "#09b85d" }} />
                      </IconButton>
                    </Grid>
                    <DropDownFilterInvestment />
                  </Box>
                  <Box
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      onClick={() =>
                        handleSelection(1, globalConstant.ALL_FUNDS, [])
                      }
                      style={{
                        cursor: "poindatater",
                        border: `1px solid ${selected == 1 ? "#23db7b" : "rgba(123, 123, 157, 0.3)"
                          }`,
                        borderRadius: "8px",
                        backgroundColor: `${selected == 1 ? "#dff7ea" : "rgba(255, 255, 255, 0)"
                          }`,
                        textAlign: "center",
                        padding: "12px 14px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: "500",
                          color: `${selected === 1 ? "#09b85d" : "#7b7b9d"}`,
                          fontSize: "14px",
                        }}
                      >
                        All Funds ({data.length})
                      </Typography>
                    </Box>
                    <Box
                      onClick={() => handleSelection(2, globalConstant.EQUITY, data)}
                      style={{
                        cursor: "pointer",
                        border: `1px solid ${selected == 2 ? "#23db7b" : "rgba(123, 123, 157, 0.3)"
                          }`,
                        borderRadius: "8px",
                        backgroundColor: `${selected == 2 ? "#dff7ea" : "rgba(255, 255, 255, 0)"
                          }`,
                        textAlign: "center",
                        padding: "12px 14px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: "500",
                          color: `${selected === 2 ? "#09b85d" : "#7b7b9d"}`,
                          fontSize: "14px",
                        }}
                      >
                        Equity (
                        {
                          data.filter(
                            (item) => item.fundType === globalConstant.EQUITY
                          ).length
                        }
                        )
                      </Typography>
                    </Box>
                    <Box
                      onClick={() => handleSelection(3, globalConstant.DEBT, data)}
                      style={{
                        cursor: "pointer",
                        border: `1px solid ${selected == 3 ? "#23db7b" : "rgba(123, 123, 157, 0.3)"
                          }`,
                        borderRadius: "8px",
                        backgroundColor: `${selected == 3 ? "#dff7ea" : "rgba(255, 255, 255, 0)"
                          }`,
                        textAlign: "center",
                        padding: "12px 14px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: "500",
                          color: `${selected === 3 ? "#09b85d" : "#7b7b9d"}`,
                          fontSize: "14px",
                        }}
                      >
                        Debt (
                        {
                          data.filter(
                            (item) => item.fundType === globalConstant.DEBT
                          ).length
                        }
                        )
                      </Typography>
                    
                    </Box>
                    <Box
                      onClick={() =>
                        handleSelection(4, globalConstant.BALANCED, data)
                      }
                      style={{
                        cursor: "pointer",
                        border: `1px solid ${selected == 4 ? "#23db7b" : "rgba(123, 123, 157, 0.3)"
                          }`,
                        borderRadius: "8px",
                        backgroundColor: `${selected == 4 ? "#dff7ea" : "rgba(255, 255, 255, 0)"
                          }`,
                        textAlign: "center",
                        padding: "12px 14px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: "500",
                          color: `${selected === 4 ? "#09b85d" : "#7b7b9d"}`,
                          fontSize: "14px",
                        }}
                      >
                        Balanced (
                        {
                          data.filter(
                            (item) => item.fundType === globalConstant.BALANCED
                          ).length
                        }
                        )
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: { xs: "100%" }
              }}>
                {fundList.length &&
                  fundList.map((item, index) => {
                    return (
                      <Box key={index}>
                        <MutualFundCard2
                          {...item}
                          onClick={(val, type, elt) => handleAddFundsSelection(val, type, elt)}
                          index={index}
                        />
                    
                      </Box>
                    );
                  })}
              </Box>
            </Box>
            {
              fundSelecteds.length > 0 ?
                <>
              
                  <AddToPlanComp
                    fundsCount={fundSelecteds.length}
                    onClick={() => null}
                  />
                  
                </>
                : null
            }
          </Grid>
        
        </Grid>
      </Box>
    </Box>
  );
};

export default AddFunds;
