import React, { useRef, useState } from "react";
import "./insurance.css";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  InputLabel,
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
import { FilterAltOutlined, SearchOutlined } from "@mui/icons-material";
import { AnchorOpenAction } from "../../Store/Duck/FilterBox";
import HealthFilter from "./HealthFilter";

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
  };

  const refContainer = useRef();

  const [sumAmount, setSumAmount] = useState<string>("");
  const [showGotit, setShowGotit] = useState<any>(false);

  const [transactions, setTransactions] = useState<any[]>([])

  const handleSumChange = (e: any) => {
    setSumAmount(e.target.value as string);
  };

  const [member, setMember] = useState<string>("");
  const handleMemberChange = (e: any) => {
    setMember(e.target.value as string);
  };

  const classes = useStyles();

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
              <Grid
                item
                xs={12}
                p={2}
                borderRadius={2}
                style={{ backgroundColor: "#6a63f6" }}
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
                  \
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={12} textAlign="right">
                      <Box
                        style={{
                          border: "1px solid #dddfe2",
                          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "5px 14px",
                        }}
                      >
                        <SearchOutlined style={{ color: "#7b7b9d" }} />
                        <InputBase
                          placeholder="Search Transactions"
                          onChange={(e) =>
                            setTransactions(
                              transactions.filter((item: { name: string; }) =>
                                item.name
                                  .toLowerCase()
                                  .includes(e.target.value.toLowerCase())
                              )
                            )
                          }
                          style={{ color: "#7b7b9d", minWidth: "250px" }}
                        ></InputBase>
                        <IconButton onClick={handleFilter}>
                          <FilterAltOutlined style={{ color: "#09b85d" }} />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                  <HealthFilter
               
                  />
                  <Grid item xs={12} my={3}>
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
                    <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>
                      One-time lumsum investment of <b>{sumAmount}</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {ULIPList.map((item, index) => {
                      return <ULIPCard {...item} key={index}></ULIPCard>;
                    })}
                  </Grid>
                </>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ULIPFound;

function dispatch(
  arg0: (dispatch: import("redux").Dispatch<any>) => Promise<void>
) {
  throw new Error("Function not implemented.");
}
// function dispatch(
//   arg0: (dispatch: import("redux").Dispatch<any>) => Promise<void>
// ) {
//   throw new Error("Function not implemented.");
// }
