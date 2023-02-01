import React, { useEffect, useState } from 'react';
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

const Accordion: any = withStyles({
  root: {
    "&$expanded": {
      margin: "auto",
    }
  },
  expanded: {}
})(MuiAccordion);


type IProps = {
  tableData: any
}

const FundTable = (props: IProps) => {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    if (props?.tableData) {
      let tableData: any[] = Object.values(props?.tableData);
      if (tableData && tableData.length) {
        let arrFilteredData: any[] = tableData.filter((item: any) => item?.islist === true);

        // @ts-ignore
        let arrRows: any[] = arrFilteredData.length && arrFilteredData.map((item: any) => {
          return createData(item?.years, item?.return, item?.benchmark);
        });

        setRows(arrRows);
      }
    }
  }, [props?.tableData])

  const createData = (years: number, returns: string, benchmark: string,) => {
    return { years, returns, benchmark };
  }

  return (
    <>
      <Box sx={{ marginTop: "1rem" }}>
        <MuiAccordion sx={{
          borderRadius: "8px",
          backgroundColor: "white",
          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        }} >
          <AccordionSummary
            sx={{
              height: "84px",
              padding: "12px 12px 21px 16px",
              borderRadius: " 8px",
              margin: "0px 16px 0px 16px",
              backgroundColor: "#fff"
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography className='risko_meter'>Fund Performance</Typography>
              <Typography className='Level-of-Risk-in-the-Scheme'>* Returns over 1 year are annualised</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails  >
            <TableContainer sx={{ backgroundColor: "#ffff" }}>
              <Table aria-label="customized table" sx={{
                [`& .${tableCellClasses.root}`]: {
                  borderBottom: "none"
                }
              }}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell className='portfoliotext'>PERIOD</StyledTableCell>
                    <StyledTableCell className='portfoliotext' align="right">RETURN</StyledTableCell>
                    <StyledTableCell className='portfoliotext' align="right">BENCHMARK</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {rows &&
                    rows.length &&
                    rows.map((row: { years: number, returns: string, benchmark: string }) => (
                      <StyledTableRow key={row.years}>
                        <StyledTableCell component="th" scope="row"> {row?.years==1?row?.years +" "+"year":row?.years +" "+"years"}</StyledTableCell>
                        <StyledTableCell align="right">{row?.returns}%</StyledTableCell>
                        <StyledTableCell align="right">{row?.benchmark}%</StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </MuiAccordion>
      </Box>
    </>

  );
}

export default FundTable;