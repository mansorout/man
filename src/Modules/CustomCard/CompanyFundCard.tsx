import { Box, Chip, Typography, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, Avatar } from "@mui/material";
import { Star } from "../../Assets";
import './CoFundCard.css';

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
                gap:"10px"
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
                    <Chip className="textPropName" label={ props.cap } sx={{
                        margin: '05px', 
                    }} />
                    <Chip className="textPropName" label={ props.type } sx={{
                        margin: '05px'
                    }} />
                </Box>
                <Chip style={{color:"#6c63ff"}} label={ formatter.format(props.price) } />
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
                                <TableCell className="table_head1">1 yr return</TableCell>
                                <TableCell className="table_head1">3 yrs return</TableCell>
                                <TableCell className="table_head1">5 yrs return</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{padding:"0px"}}>{ props.year1 }%</TableCell>
                                <TableCell style={{padding:"0px"}}>{ props.year3 }%</TableCell>
                                <TableCell style={{padding:"0px"}}>{ props.year5 }%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Chip className="starProsText" avatar={<Avatar alt="star" src={ Star } />}  label={ props.rating + '.0' } />
            </Box>
        </Box>        
    )
};

export default CompanyFundCard;
