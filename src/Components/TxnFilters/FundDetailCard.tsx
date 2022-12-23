import {
  Box,
  Chip,
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Avatar,
  Typography,
  Button,
  Grid,
  Stack,
  Divider,
  styled,
} from "@mui/material";
import { SmallStar } from "../../Assets";


import "./FundDetailCard.css";
import { MorningStarlogo } from "../../Assets";
import { useNavigate } from "react-router-dom";
import MuiGrid from '@mui/material/Grid';



interface Prop {
  logo: string;
  name: string;
  cap: string;
  type: string;
  year1: number;
  year3: number;
  year5: number;
  rating: number;
  morning_star_logo?: string;
}



const FundDetailCard = (props: Prop) => {
  const navigate = useNavigate();
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  // const Grid = styled(MuiGrid)(({ theme }) => ({
  //   width: '100%',
  //   ...theme.typography.body2,
  //   '& [role="separator"]': {
  //     margin: theme.spacing(0, 2),
  //   },
  // }));

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
            backgroundColor: "#ffffff"
          }}
        />



        <Box >
          <Chip sx={{ backgroundColor: "#ffc300", }}
            avatar={<Avatar alt="star" src={SmallStar}
              sx={{
                width: "16px ! important", height: "16px ! important"
              }}
            />}


            label={<Box sx={{ color: "#fff", fontSize: "16px ! important", fontWeight: "500" }}>{props.rating + ".0"} </Box>}

          />
          <Chip sx={{ backgroundColor: "transparent", }}
            avatar={<img alt="star" src={MorningStarlogo}
              style={{
                width: "76px", height: "22px"

              }}
            />}


          />
        </Box>
      </Box>

      <Grid sx={{
        paddingBottom: "3px", display: "flex"
      }} container spacing={2}>
        <Grid item xs={8}>
          <Typography sx={{ display: "contents" }} className="FundDetails_Heading">
            Axis Small Cap Fund Regular Growth
          </Typography>
        </Grid>

      

      </Grid>
      <Box
        sx={{
          width: { xs: "246px", sm: "217px" },
        }}
      >

        <Chip

          label={<Box sx={{ color: "#544ec8", size: "16px", fontWeight: "500" }}>{props.cap}</Box>}
          sx={{

            backgroundColor: "rgba(255, 255, 255, 0.54)",
            marginRight: "10px",
          }}
        />
        <Chip sx={{ backgroundColor: "rgba(255, 255, 255, 0.54)" }} label={<Box sx={{ color: "#544ec8", size: "16px", fontWeight: "500" }}>{props.type} </Box>} />
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
          <Grid item xs={4}>
            <TableContainer>
              <Table size="small">
                <TableHead >
                  <TableRow sx={{ color: "red" }}>
                    <TableCell sx={{ borderRight: "2px solid #f9f9f9", size: "14px", color: "#FFFFFF !important" }}  >
                      NAV - 16/09/2020 <p style={{ fontSize: "20px", fontWeight: "500", color: "#f9f9f9" }}><span style={{}}>₹</span>{props.year1}</p>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f9f9f9" }} className="table_head">
                      Returns (5 Yrs)  <p style={{ fontSize: "20px", fontWeight: "500", color: "#f9f9f9 ! important" }}>{props.year3}%</p>
                    </TableCell>
                    <TableCell className="table_head">AUM  <p style={{ fontSize: "20px", fontWeight: "500", color: "#f9f9f9" }}>₹{props.year5}Cr</p>
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
