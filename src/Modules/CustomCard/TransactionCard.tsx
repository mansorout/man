import { Box, Chip, Typography, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, Avatar } from "@mui/material";
import { Star } from "../../Assets";
import './TransactionCard.css';

interface Prop {
    logo: string;
    name: string;
    cap: string;
    type: string;
    price: number;
    year1: number;
    year3: number;
    year5: number;
    rating: number;
    morning_star_logo?: string;
}

const TransactionCard = (props: Prop) => {

    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });

    return (
        <Box id="CoCard" sx={{
            padding: '1rem',
            fontFamily: 'Roboto',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
            backgroundColor: '#fff',
            margin:"1rem"
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
            }}>
                <img src={ props.logo } alt="Logo of the company" style={{
                    width: '3rem',
                    height: '3rem',
                    border: 'solid 1px #d1d6dd',
                    borderRadius: '50%',
                }} />
                <Box sx={{
                    width: { xs: '246px', sm: '217px' }
                }}>
                    <Typography>{ props.name }</Typography>
                    
                </Box>
                <Chip label={ formatter.format(props.price) } />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ color: '#acb4bf' }}>
                                <TableCell className="table_head">SIP Date</TableCell>
                                <TableCell className="table_head">SIP Amount</TableCell>
                                <TableCell className="table_head">3 yrs return</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{ props.year1 }</TableCell>
                                <TableCell>₹{ props.year3 }</TableCell>
                                <TableCell>{ props.year5 }%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </Box>
        </Box>        
    )
};

export default TransactionCard;
