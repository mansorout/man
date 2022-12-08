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
import { paymentslogo2, signExclamatory } from '../../Assets';

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

export default function InsuranceKeyFeatures() {
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
                        <Typography className='risko_meter'>Key Features</Typography>
                        <Typography className='Level-of-Risk-in-the-Scheme'>Features highligt of HDFC ERGO</Typography>
                    </Box>

                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: "9px 0" }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                            <div style={{ backgroundColor: '#67d8fb', borderRadius: 50, width: 35, height: 35, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img style={{ height: '21px', width: '21px' }} src={paymentslogo2} />
                            </div>
                            <div style={{ marginLeft: '14px' }}>
                                <p style={{ fontSize: '13px', color: '#7b7b9d', margin: '0' }}>Room Rent</p>
                                <p style={{ fontSize: '15px', fontWeight: 500, color: '#3c3e42', margin: '0' }}>No Limit On Room Rent</p>
                            </div>
                        </div>
                        <div>
                            <img style={{ height: '21px', width: '21px' }} src={signExclamatory} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: "9px 0" }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                            <div style={{ backgroundColor: '#67d8fb', borderRadius: 50, width: 35, height: 35, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img style={{ height: '21px', width: '21px' }} src={paymentslogo2} />
                            </div>
                            <div style={{ marginLeft: '14px' }}>
                                <p style={{ fontSize: '13px', color: '#7b7b9d', margin: '0' }}>Copay</p>
                                <p style={{ fontSize: '15px', fontWeight: 500, color: '#3c3e42', margin: '0' }}>0%</p>
                            </div>
                        </div>
                        <div>
                            <img style={{ height: '21px', width: '21px' }} src={signExclamatory} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: "9px 0" }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                            <div style={{ backgroundColor: '#67d8fb', borderRadius: 50, width: 35, height: 35, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img style={{ height: '21px', width: '21px' }} src={paymentslogo2} />
                            </div>
                            <div style={{ marginLeft: '14px' }}>
                                <p style={{ fontSize: '13px', color: '#7b7b9d', margin: '0' }}>Waiting Period</p>
                                <p style={{ fontSize: '15px', fontWeight: 500, color: '#3c3e42', margin: '0' }}>3 years</p>
                            </div>
                        </div>
                        <div>
                            <img style={{ height: '21px', width: '21px' }} src={signExclamatory} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: "9px 0" }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                            <div style={{ backgroundColor: '#67d8fb', borderRadius: 50, width: 35, height: 35, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img style={{ height: '21px', width: '21px' }} src={paymentslogo2} />
                            </div>
                            <div style={{ marginLeft: '14px' }}>
                                <p style={{ fontSize: '13px', color: '#7b7b9d', margin: '0' }}>Renewal Bonus</p>
                                <p style={{ fontSize: '15px', fontWeight: 500, color: '#3c3e42', margin: '0' }}>50%</p>
                            </div>
                        </div>
                        <div>
                            <img style={{ height: '21px', width: '21px' }} src={signExclamatory} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: "9px 0" }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                            <div style={{ backgroundColor: '#67d8fb', borderRadius: 50, width: 35, height: 35, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img style={{ height: '21px', width: '21px' }} src={paymentslogo2} />
                            </div>
                            <div style={{ marginLeft: '14px' }}>
                                <p style={{ fontSize: '13px', color: '#7b7b9d', margin: '0' }}>Health Checkup</p>
                                <p style={{ fontSize: '15px', fontWeight: 500, color: '#3c3e42', margin: '0' }}>Available</p>
                            </div>
                        </div>
                        <div>
                            <img style={{ height: '21px', width: '21px' }} src={signExclamatory} />
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}