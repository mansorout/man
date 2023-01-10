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
import { cross, paymentslogo2, signExclamatory } from '../../Assets';
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

export default function InsuranceCoverage() {
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
                        <Typography className='risko_meter'>Coverage</Typography>
                        <Typography className='Level-of-Risk-in-the-Scheme'>What does the policy covers and what not</Typography>
                    </Box>

                </AccordionSummary>
                
                <AccordionDetails>
                    <div>
                        <p style={{ fontWeight: 500, fontSize: '14px' }} >COVERED</p>
                        <div style={{ padding: '0 12px', color: '#7b7b9d' }}>
                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                                <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                                <p>Benefits if you don't claim</p>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                                <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                                <p>Expenses before Admission</p>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                                <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                                <p>Expenses after Discharge</p>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                                <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                                <p>Restore benefits</p>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                                <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                                <p>Organ donor</p>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                                <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                                <p>Day care treatments</p>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                                <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                                <p>Health Checkup</p>
                            </div>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row' }}>
                                <Done style={{ color: "#7b7b9d", fontSize: "14px" }} />
                                <p>Daily hospitalization allowance</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <p style={{ fontWeight: 500, fontSize: '14px' }} >COVERED</p>
                        <div style={{ padding: '0 12px', color: '#7b7b9d' }}>
                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row', color: "#7b7b9d" }}>
                                <img style={{ height: 17, width: 17 }} src={cross} />
                                <p >Benefits if you don't claim</p>
                            </div>
                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: 'row', color: "#7b7b9d" }}>
                                <img style={{ height: 17, width: 17 }} src={cross} />
                                <p >Benefits if you don't claim</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ color: '#7b7b9d' }} >
                        <p style={{ fontSize: '14px', fontWeight: 500, color: "#3c3e42", margin: '0 0' }} >Waiting Period</p>
                        <p style={{ fontWeight: 500, fontSize: '14px', marginBottom: 0 }} >Covered since day 1</p>
                        <p style={{ marginTop: 0 }}>Accidental Injuries</p>
                        <div>
                            <p style={{ fontWeight: 500, fontSize: '14px', marginBottom: 0 }} >30 days cooling period</p>
                            <p style={{ marginTop: 0 }}>No non-accidental medical condition will be covered for first 30 days</p>
                        </div>
                        <div>
                            <p style={{ fontWeight: 500, fontSize: '14px', marginBottom: 0 }} >Covered after 2 years</p>
                            <p style={{ marginTop: 0 }}>Benign Tumor, Prostrate Condition, Joint Surgeries - Degenerative, Osteoarthritis, Cataract, Piles, Varicose Veins, Genito-Urinary Ailments, Gastric Ulcer, Hysterectomy, Slipped disc, Sinus Related Ailments etc</p>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}