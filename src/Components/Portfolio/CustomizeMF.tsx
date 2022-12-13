import { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Toolbar,
  Typography,
  Modal,
} from "@mui/material";
import { HelpOutline, tick } from "../../Assets";
import MutualFundCard2, {
  MFProp,
} from "../../Modules/CustomCard/MutualFundCard2";
import SelectSipDateButton from "../../Modules/Buttons/SelectSipDateButton";
import { useNavigate } from "react-router-dom";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import { useSelector } from "react-redux";
import { globalConstant } from "../../Utils/globalConstant";
import Calendar from "react-calendar";
import FooterWithBtn from "../CommonComponents/FooterWithBtn";

const data = [
  {
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Equity",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    checkbox: false,
    buttons: true,
    isMutualFundScreen: false,
  },
  {
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Large Cap",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    checkbox: false,
    buttons: true,
    isMutualFundScreen: false,
  },
  {
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Balanced",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    checkbox: false,
    buttons: true,
    isMutualFundScreen: false,
  },
  {
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Equity",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    checkbox: false,
    buttons: true,
    isMutualFundScreen: false,
  },
  {
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Equity",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    checkbox: false,
    buttons: true,
    isMutualFundScreen: false,
  },
];

const enumActiveScreen = Object.freeze({
  CLOSE_MODAL: 0,
  OPEN_DATE_PICKER_MODAL: 1,
  OPEN_CONFIRMATION_MODAL: 2,
  OPEN_NET_BANKING: 3,
});

const CustomizeMF = () => {
  const navigate:any = useNavigate();

  const [fundList, setFundList] = useState<MFProp[]>(data);

  const style = {
    main: {
      boxSizing: "border-box",
      backgroundColor: "#f9f9f9",
      height: "100vh",
    } as React.CSSProperties,
    modalText: {
      backgroundColor: "#FFF",
      width: 338,
      textAlign: "center",
      marginLeft: "1px",
      padding: "5px",
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
      fontWeight: "500",
      borderColor: "#fff",
    },
    button: {
      height: "48px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      transform: "translate(8px, -23px)",
      color: "#fff",
      width: 350,
      marginTop: 21,
      marginLeft: -8,
    },
  };

  const g_investment = useSelector(
    (state: any) => state?.investment?.investment
  );
  const [activeScreen, setActiveScreen] = useState<number>(
    enumActiveScreen.CLOSE_MODAL
  );

  useEffect(() => {
    // setMfCards(data);
  }, []);

  return (
    <Box style={{ width: "100vw" }}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid
            container
            sx={{ height: "100vh", overflow: "scroll" }}
            xs={13}
            sm={11}
            md={10}
          >
            <Toolbar />
            <Box
              sx={{
                width: "80.875vw",
                padding: 0,
                margin: "2.5vw",
                fontFamily: "Roboto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Breadcrumbs
                sx={{
                  fontSize: "12px",
                  color: "#6c63ff",
                  marginBottom: "3vw",
                }}
              >
                <Link href="/home">Home</Link>
                <Link
                  href={
                    g_investment?.type === globalConstant.SIP_INVESTMENT
                      ? "/sipInvestment"
                      : "/oneTimeInvestment"
                  }
                >
                  Investment
                </Link>
                <Link
                  href={
                    g_investment?.type === globalConstant.SIP_INVESTMENT
                      ? "/startAnSip"
                      : "/investNow"
                  }
                >
                  {g_investment?.type === globalConstant.SIP_INVESTMENT
                    ? "monthly investment"
                    : "one time lumpsum"}
                </Link>
                <Link href="/onetimemutualfundrecommendation">
                  Mutual Fund Recommendation
                </Link>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#373e42",
                  }}
                >
                  Customize Plan
                </Typography>
              </Breadcrumbs>
              <Box
                className="header"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "flex-end",
                  marginBottom: { xs: "7%", sm: "0%" },
                }}
              >
                <Box className="heading_main">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#8787a2",
                    }}
                  >
                    Explore Funds
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#3c3e42",
                    }}
                  >
                    {fundList.length} Mutual Funds Found
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#7b7b9d",
                    }}
                  >
                    Monthly investment of ₹5,000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    onClick={() => navigate("/addfunds")}
                    sx={{
                      width: "200px",
                      height: "38px",
                      padding: "11px 36px",
                      borderRadius: "8px",
                      border: "solid 1px #23db7b",
                      backgroundColor: "#dff7ea",
                      textTransform: "capitalize",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#09b85d",
                    }}
                  >
                    Add More Funds
                  </Button>
                </Box>
              </Box>

              <Box>
                {fundList.length &&
                  fundList.map((item, index) => (
                    <Box sx={{ marginTop: "1.25vw" }} key={index}>
                      <MutualFundCard2 {...item} />
                    </Box>
                  ))}
              </Box>
            </Box>
            <Box
              sx={{
                width: "83.75vw",
                height: "6.1vw",
                marginTop: "8vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.16)",
                backgroundColor: "#fff",
              }}
            >
              {/* <SelectSipDateButton
                openModal={() =>
                  setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL)
                }
              /> */}
              <FooterWithBtn
                btnText="Select SIP Date"
                btnClick={() =>
                  setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL)
                }
              />
            </Box>
          </Grid>
        </Grid>
        <Modal
          sx={{ borderRadius: 8 }}
          open={
            activeScreen === enumActiveScreen.OPEN_DATE_PICKER_MODAL
              ? true
              : false
          }
          onClose={() => {
            setActiveScreen(enumActiveScreen.CLOSE_MODAL);
          }}
        >
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{
              marginLeft: { sm: "35%", xs: "8%", lg: "40%" },
              marginTop: { xs: "50%", lg: "13%", md: "30%" },
            }}
          >
            <Typography sx={style.modalText}>Monthly SIP Date</Typography>
            <Calendar />
            <Button
              onClick={() => {
                setActiveScreen(enumActiveScreen.OPEN_CONFIRMATION_MODAL);
              }}
              variant="contained"
              style={style.button}
              sx={{
                backgroundColor: "rgba(123, 123, 157, 0.05)",
                color: "#7b7b9d",
              }}
            >
              Confirm SIP Date
            </Button>
          </Box>
        </Modal>
        <Modal
          sx={{ borderRadius: 8 }}
          open={
            activeScreen === enumActiveScreen.OPEN_CONFIRMATION_MODAL
              ? true
              : false
          }
          onClose={() => {
            setActiveScreen(enumActiveScreen.CLOSE_MODAL);
          }}
        >
          <>
            <Box
              alignItems="center"
              justifyContent="center"
              sx={{
                marginLeft: { sm: "35%", xs: "8%", lg: "40%" },
                marginTop: { xs: "50%", lg: "13%", md: "30%" },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  width: 300,
                  alignItems: "center",
                  padding: 3,
                  textAlign: "center",
                }}
              >
                <Box>
                  <img style={{ height: 120, width: 120 }} src={tick} />
                </Box>
                <Typography sx={{ marginTop: 1, fontWeight: "600" }}>
                  Date confirmed!
                </Typography>
                <Typography sx={{ marginTop: 1, color: "#8787a2" }}>
                  Your Monthly SIP Date is 8th of every month
                </Typography>
              </Box>
              {/* <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_NET_BANKING) }} variant='contained' style={style.button} sx={{ */}
              <Button
                onClick={() => {
                  navigate("/netbanking", {
                    cardType: globalConstant.SIP_INVESTMENT,
                  });
                }}
                variant="contained"
                style={style.button}
                sx={{
                  backgroundColor: "rgba(123, 123, 157, 0.05)",
                  color: "#7b7b9d",
                  marginLeft: 8,
                }}
              >
                Continue to Payment
              </Button>
            </Box>
          </>
        </Modal>
      </Box>
    </Box>
  );
};

export default CustomizeMF;
