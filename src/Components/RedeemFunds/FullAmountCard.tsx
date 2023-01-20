import {
  Box,
  Chip,
  Typography,
  Button,
  Grid,
  Stack,
  Avatar,
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
  rating: string
  absoluteValue: string
  absoluteValueInPercentage: string
}



const FullAmountCard = (props: Prop) => {
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
        <Box>
          <Chip sx={{ backgroundColor: "#ffc300", marginLeft:{xs:"10px", sm:"0px"} }}
            avatar={<Avatar alt="star" src={SmallStar}
              sx={{
                color: "#ffffff",
              }}
            />}
            label={props?.rating + ".8"}
          />
          <img className="imageratingRedeem" alt="MorningStarlogo"  src={MorningStarlogo} style={{
            width: "76px",
            height: "22px",
          }} />
        </Box>
        <Box>
          <Button className="buttonPriceRedeemFund" sx={{ width: "108px", height: "34px", padding: "6px 6px 4px", borderRadius: "2px", backgroundColor: "#64dbff" }}>
            <Typography sx={{ color: "#3f7ad6", fontSize: "20px" }}>₹{props?.investedValue}</Typography>
          </Button>
        </Box>
      </Box>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ display: "contents" }} className="FundDetails_Heading">
            {props?.name}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: { xs: "246px", sm: "217px" }, marginTop:{xs:"10px", sm:"15px"}
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
            <Grid item  xs={6} sm={3}>
              <Box className="borderrightColorText">
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
              </Box>
            </Grid>
            <Grid item  xs={6} sm={3}>
            <Box className="borderrightColorText">
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
              </Box>
            </Grid>
            <Grid item  xs={6} sm={3}>
            <Box className="borderrightColorText">
              <Typography
                sx={{
                  opacity: " 0.74",
                  color: "#ffffff",
                  fontSize: "14px"

                }}
              >Total Units</Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#ffffff"
                }}
              >{props?.units}</Typography>
              </Box>
            </Grid>

            <Grid item xs={6} sm={3} >
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
