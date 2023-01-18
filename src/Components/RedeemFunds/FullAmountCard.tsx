import {
  Box,
  Chip,
  Typography,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import { SmallStar } from "../../Assets";


import "./RedeemFunds.css";
import { MorningStarlogo } from "../../Assets";
import { useNavigate } from "react-router-dom";



interface Prop {
  logo: string;
  name: string;
  cap: string;
  type: string;
  units: string
  currentValue: string
  investedValue: number
  // aum: string
  // aumPercentage: string
  morning_star_logo?: string;
  // rating: string
  absoluteValue: string
  absoluteValueInPercentage: string
}



const FullAmountCard = (props: Prop) => {
  const navigate = useNavigate();
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  return (
    <Box
      id="CoCard"
      sx={{
        // backgroundColor:"green",
        padding: "24px 25px 43.5px 22px",
        fontFamily: "Roboto",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        backgroundColor: "#6c63ff",
        margin: "7px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
        }}
      >
        <img
          src={props.logo}

          style={{
            width: "3rem",
            height: "3rem",
            border: "solid 1px #d1d6dd",
            borderRadius: "50%",
            backgroundColor: "#ffffff"
          }}
        />



        {/* <Box>

          <Button sx={{ width: "108px", height: "34px", padding: "6px 6px 4px", borderRadius: "2px", backgroundColor: "#64dbff" }}>
            <Typography sx={{ color: "#3f7ad6", fontSize: "20px" }}>₹5,000</Typography>
          </Button>

        </Box> */}
      </Box>

      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Typography sx={{ display: "contents" }} className="FundDetails_Heading">
            {/* Axis Small Cap Fund Regular Growth */}

            {props?.name}
          </Typography>
        </Grid>



      </Grid>
      <Box
        sx={{
          width: { xs: "246px", sm: "217px" },
        }}
      >

        <Chip
          label={props?.cap}
          sx={{

            backgroundColor: "rgba(255, 255, 255, 0.54)",
            marginRight: "10px",
          }}
        />
        <Chip sx={{ backgroundColor: "rgba(255, 255, 255, 0.54)" }} label={props?.type} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          marginTop={2}
          marginBottom={2}
        >

          <Grid container spacing={2} textAlign="center" >
            <Grid item xs={3}>
              <Typography
                sx={{
                  opacity: " 0.74",
                  color: "#ffffff",
                  fontSize: "14px"

                }}
              >Invested Value</Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#ffffff"
                }}
              >₹{props?.investedValue}

              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography
                sx={{
                  opacity: " 0.74",
                  color: "#ffffff",
                  fontSize: "14px"
                }}



              >   Current Value</Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#ffffff"
                }}
              >₹{props?.currentValue}</Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography
                sx={{
                  opacity: " 0.74",
                  color: "#ffffff",
                  fontSize: "14px"

                }}
              >     Total Units</Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#ffffff"
                }}
              >{props?.units}</Typography>
            </Grid>

            {/* {
              props?.aum ?
                <Grid item xs={3} >
                  <Typography
                    sx={{
                      opacity: " 0.74",
                      color: "#ffffff",
                      fontSize: "14px"

                    }}
                  >
                    AUM
                  </Typography>
                  <Typography sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#ffffff"
                    // }}>₹21,625 (18.75%)</Typography>
                  }}>
                    ₹21,625 (18.75%)

                    {/* ₹{props?.aum} */}
            {/* </Typography>
                </Grid>
                : null
            // } */}

            <Grid item xs={3} >
              <Typography
                sx={{
                  opacity: " 0.74",
                  color: "#ffffff",
                  fontSize: "14px"

                }}
              >    Absolute Return</Typography>
              <Typography sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#ffffff"
              }}>
                {/* ₹21,625 (18.75%) */}
                ₹{props?.absoluteValue} ({(props?.absoluteValueInPercentage ? props?.absoluteValueInPercentage + "%" : "")})
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box >
  );
};

export default FullAmountCard;
