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
} from "@mui/material";
import { SmallStar } from "../../Assets";
import "./FundDetailCard.css";

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
        padding: "1rem",
        fontFamily: "Roboto",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        backgroundColor: "#6c63ff",
        margin: "1rem",
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
            backgroundColor:"#ffffff"
          }}
        />

        <Chip sx={{backgroundColor:"#ffc300"}}
          avatar={<Avatar alt="star" src={SmallStar} />}
          label={props.rating + ".0"}
        />
   </Box>
      
   <Grid container spacing={5}>
          <Grid item xs={6}>
            <Typography sx={{display: "contents"}} className="FundDetails_Heading">
            Axis Small Cap Fund Regular Growth
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{textAlign:"right"}} >
            <Button>Button</Button>
          </Grid>
        </Grid>
      <Box
        sx={{
          width: { xs: "246px", sm: "217px" },
        }}
      >
        
        <Chip 
          label={props.cap}
          sx={{

            backgroundColor:"rgba(255, 255, 255, 0.54)",
            marginRight: "10px",
          }}
        />
        <Chip sx={{backgroundColor:"rgba(255, 255, 255, 0.54)"}} label={props.type} />
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
                <TableHead>
                  <TableRow sx={{ color: "red" }}>
                    <TableCell className="table_head">
                      NAV - 16/09/2020
                    </TableCell>
                    <TableCell className="table_head">
                      Returns (5 Yrs)
                    </TableCell>
                    <TableCell className="table_head">AUM</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="table_head2">₹{props.year1}%</TableCell>
                    <TableCell className="table_head2">{props.year3}%</TableCell>
                    <TableCell className="table_head2">₹{props.year5}Cr</TableCell>
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
