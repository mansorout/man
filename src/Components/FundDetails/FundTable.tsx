import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
   

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Accordion:any = withStyles({
    root: {
      "&$expanded": {
        margin: "auto",
      }
    },
    expanded: {}
  })(MuiAccordion);

function createData(
  period: string,
  returnvalue: number,
  benchmark: number,
 
) {
  return { period, returnvalue, benchmark};
}

const rows = [
  createData('1 month', 11.56, 10.43),
  createData('3 months', 26.41, 9.0),
  createData('6 months', 17.85, 16.0),
  createData('1 year', 16.96, 3.7),
  createData('3 years', 9.45, 16.0,),
  createData('6 years', 12.72, 16.0,),
];

export default function FundTable () {
  return (

    <>
      <MuiAccordion sx={{ marginRight:"1rem",marginLeft:"1rem",backgroundColor:"transparent"}} >
        <AccordionSummary
        sx={{height: "84px",
             
            padding: "12px 12px 21px 16px",
            borderRadius:" 8px",
          
            backgroundColor: "#fff"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box sx={{
             
             
            
            }}>
            <Typography className='risko_meter'>Fund Performance</Typography>
            <Typography className='Level-of-Risk-in-the-Scheme'>* Returns over 1 year are annualised</Typography>
            </Box>
        </AccordionSummary>
        <AccordionDetails  sx={{marginRight:"1rem",marginLeft:"1rem"}}>
       <TableContainer sx={{backgroundColor:"#ffff"}}>
      <Table sx={{ marginBottom:"2rem" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='portfoliotext'>PERIOD</StyledTableCell>
            <StyledTableCell className='portfoliotext' align="right">RETURN</StyledTableCell>
            
            <StyledTableCell className='portfoliotext' align="right">BENCHMARK</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.period}>
              <StyledTableCell component="th" scope="row">
                {row.period}
              </StyledTableCell>
              <StyledTableCell align="right">{row.returnvalue}%</StyledTableCell>
              <StyledTableCell align="right">{row.benchmark}%</StyledTableCell>
             
              
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    
        </AccordionDetails>
      </MuiAccordion>
    </>
   
  );
}

