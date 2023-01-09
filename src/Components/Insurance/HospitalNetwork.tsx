import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { paymentslogo2, signExclamatory } from '../../Assets';
import { Done } from '@mui/icons-material';

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

export default function HospitalNetwork() {
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
                    <Box>
                        <Typography className='risko_meter'>Network Hospitals (150)</Typography>
                        <Typography className='Level-of-Risk-in-the-Scheme'>Cashless treatment available in your area</Typography>
                    </Box>

                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <TextField
                            sx={{ "& .MuiInputLabel-root": {color: '#acb4bf'} }}
                            label="Search hospital by name"
                            type="text"
                        />
                        <p style={{ fontWeight: 500, fontSize: '14px' }}>158 Hospitals found in your area</p>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                            <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                            <p>Arihant Orthoaedic Hospital And Joint</p>
                        </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                            <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                            <p>Replacement Centre</p>
                        </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                            <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                            <p>Bavishi Eye Hospital</p>
                        </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                            <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                            <p>Dr. Jaladhi M. Parikh Eye Hospital</p>
                        </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                            <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                            <p>Fusion Kidney Institute</p>
                        </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                            <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                            <p>Global Long Life Hospital And Research Pvt Ltd</p>
                        </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                            <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                            <p>Tapan Hospital</p>
                        </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                            <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                            <p>Hcg Hospitals (A Unit Of Health Care Global Enterprises Limited)</p>
                        </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                            <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                            <p>Life Care Institute Of Medical Science & Research</p>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}