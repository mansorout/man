import { useNavigate } from "react-router-dom";

import "./FundDetailCard.css";
import { SmallStar } from "../../Assets";
import MuiGrid from "@mui/material/Grid";
import { MorningStarlogo } from "../../Assets";
import { Box, Chip, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, Avatar, Typography, Button, Grid, Stack, Divider, styled, } from "@mui/material";

interface Prop {
  logo: string;
  name: string;
  cap: string;
  type: string;
  year5: number;
  rating: number;
  morning_star_logo?: string;
  aum: string
  dayendnav: number,
  dayendnavdate: string
}

const FundDetailCard = (props: Prop) => {
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
        // margin: "1rem",
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
            backgroundColor: "#ffffff",
          }}
        />

        <Box>
          <Chip
            sx={{ backgroundColor: "#ffc300" }}
            avatar={
              <Avatar
                alt="star"
                src={SmallStar}
                sx={{
                  width: "16px ! important",
                  height: "16px ! important",
                }}
              />
            }
            label={
              <Box
                sx={{
                  color: "#fff",
                  fontSize: "16px ! important",
                  fontWeight: "500",
                }}
              >
                {props.rating + ".0"}{" "}
              </Box>
            }
          />
          <Chip
            sx={{ backgroundColor: "transparent" }}
            avatar={
              <img
                alt="star"
                src={MorningStarlogo}
                style={{
                  width: "76px",
                  height: "22px",
                }}
              />
            }
          />
        </Box>
      </Box>

      <Grid
        sx={{
          paddingBottom: "3px",
          display: "flex",
        }}
        container
        spacing={2}
      >
        <Grid item xs={8}>
          <Typography
            sx={{ display: "contents" }}
            className="FundDetails_Heading"
          >
            {props?.name}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: { xs: "246px", sm: "300px" }, marginTop:{xs:"10px", sm:"15px"}
        }}
      >
        <Chip
          label={
            <Box sx={{ color: "#544ec8", size: "16px", fontWeight: "500" }}>
              {props.cap}
            </Box>
          }
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.54)",
            marginRight: "10px",
          }}
        />
        <Chip
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.54)" }}
          label={
            <Box sx={{ color: "#544ec8", size: "16px", fontWeight: "500" }}>
              {props.type}{" "}
            </Box>
          }
        />
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
          <Grid item xs={12} sm={4}>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ color: "red" }}>
                    <TableCell
                    className="tableThText"
                      sx={{
                        borderRight: "1px solid #f9f9f9",
                        size: "14px",
                        color:"#fafafaad !important", fontWeight:"300",
                        padding:{xs:"7px 20px", sm:"7px 40px"}
                      }}
                    >
                      NAV - {props?.dayendnavdate}{" "}
                      <p
                       className="preTextfund"
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                          color: "#f9f9f9",
                          margin:"5px 0px"
                        }}
                      >
                        <span style={{}}>₹</span>
                        {props.dayendnav}
                      </p>
                    </TableCell>
                    <TableCell
                    
                      sx={{ borderRight: "1px solid #f9f9f9", color:"#fafafaad !important", fontWeight:"300", padding:{xs:"7px 20px", sm:"7px 40px"} }}
                      className="tableThText table_head"
                    >
                      Returns (5 Yrs){" "}
                      <p
                       className="preTextfund"
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                          color: "#fff",
                          margin:"5px 0px"
                        }}
                      >
                        {props.year5}%
                      </p>
                    </TableCell>
                    <TableCell sx={{color:"#fafafaad !important", fontWeight:"300", padding:{xs:"7px 20px", sm:"7px 40px"}}} className="tableThText table_head">
                      AUM{" "}
                      <p
                      className="preTextfund"
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                          color: "#f9f9f9",
                          margin:"5px 0px"
                        }}
                      >
                        ₹{props.aum}
                      </p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {/* <TableCell className="table_head2">₹{props.year1}%</TableCell>
                    <TableCell className="table_head2">{props.year3}%</TableCell>
                    <TableCell className="table_head2">₹{props.year5}Cr</TableCell> */}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FundDetailCard;
