import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1 month', 11.56, 10.43, 24, 4.0),
    createData('3 month', 26.41, 19.27, 37, 4.3),
    createData('6 month', 17.85, 11.56, 24, 6.0),
    createData('1 year', 16.96, 3.7, 67, 4.3),
    createData('3 year', 9.45, 16.0, 49, 3.9),
];

export default function FundPerformance() {
    return (
        <Box sx={{ margin: "1rem" }}>
            <Accordion sx={{
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
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Box sx={{}}>
                        <Typography className='risko_meter'>Fund Performance</Typography>
                        <Typography className='Level-of-Risk-in-the-Scheme'>* Return over one year as analysed</Typography>
                    </Box>

                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{
                        margin: "1rem",

                        // margin: "24px 32px",
                        padding: " 12px 12px 21px 16px",
                        borderRadius: "8px",

                        boxSizing: "border-box",
                        backgroundColor: "white",
                    }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead style={{ backgroundColor: '#fff', color: '#fff' }}>
                                    <TableRow>
                                        <StyledTableCell>Period</StyledTableCell>
                                        <StyledTableCell align="right">Return</StyledTableCell>
                                        <StyledTableCell align="right">Benchmark</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}