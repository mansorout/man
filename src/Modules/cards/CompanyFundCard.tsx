import { Box, Chip, Typography, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, Avatar } from "@mui/material";
import { Star } from "../../Assets";
import './CompanyFundCard.css';

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

const CompanyFundCard = (props: Prop) => {

    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });

    return (
        <Box sx={{
            maxWidth: '400px',
            padding: '1rem',
            fontFamily: 'Roboto',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
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
                    <Chip label={ props.cap } sx={{
                        marginRight: '10px'
                    }} />
                    <Chip label={ props.type } />
                </Box>
                <Chip label={ formatter.format(props.price) } />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{
                            fontSize: '10px',
                            color: '#acb4bf',
                        }}>1 yr return</TableCell>
                                <TableCell align="left">3 yrs return</TableCell>
                                <TableCell align="left">5 yrs return</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">{ props.year1 }%</TableCell>
                                <TableCell align="left">{ props.year3 }%</TableCell>
                                <TableCell align="left">{ props.year5 }%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Chip avatar={<Avatar alt="star" src={ Star } />}  label={ props.rating + '.0' } />
            </Box>
        </Box>        
    )
};

export default CompanyFundCard;
