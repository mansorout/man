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

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.white,
//     color: theme.palette.common.black,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 16,
   

//   },
  
// }));

// const TableCell = withStyles({
  
// })(MuiTableCell);

const StyledTableCell = styled(TableCell)(theme => ({
  root: {
    width: "100%",
   
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

const TableCell2 = withStyles({
  root: {
    borderBottom: "none"
  }
})(StyledTableCell);

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
  type: string,
  value: any,

 
) {
  return { type, value};
}

const rows = [
  createData('Bank Name','ICICI Bank'),
  createData('Account Name', 'ICICI Ltd.'),
  createData('Account Type', 'Current Account'),
  createData('Account Number', '000405103922'),
  createData('IFSC COde', 'ICICI0000104'),

];

export default function BankDetailTable () {
  return (

    <>
     
      
       
         
  
       <TableContainer sx={{backgroundColor:"#ffff"}}>
      <Table  aria-label="customized table"   sx={{
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    }
  }}>
       
        <TableBody >
          {rows.map((row) => (
            <StyledTableRow  key={row.type}>
              <StyledTableCell component="th" scope="row">
                {row.type}
              </StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
            
             
              
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    
       
      
      
    </>
   
  );
}

