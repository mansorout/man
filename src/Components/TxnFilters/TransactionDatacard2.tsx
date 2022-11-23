import { Box, Chip, Typography, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, Avatar } from "@mui/material";
import { Star } from "../../Assets";
 
 
function createData(
    name: string,
    sipdate: any,
    sipamount: any,
    time: any,
    image: any,
  ) {
    return { name, sipdate, sipamount, time, image };
  }
  
  

  const FirstRow = ["","29 Apr INF209K01090","Not Alloted","76.25","40,000","Lumpsum","logo"];

const TransactionDatacard2 = (props: Props) => {

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
            {/* <Box sx={{
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
                    <Chip label={ props.cap } sx={{
                        marginRight: '10px'
                    }} />
                    <Chip label={ props.type } />
                </Box>
                <Chip label={ formatter.format(props.price) } />
            </Box> */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                     
                        <TableRow>
                        <TableCell>logo</TableCell> 
            <TableCell>Axis Small cap Regular Growth Fund</TableCell>
            <TableCell align="right">Units</TableCell>
            <TableCell align="right">NAV</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Investment Type</TableCell>
            <TableCell align="right">Logo</TableCell>
          </TableRow>
                        </TableHead>
                        <TableBody sx={{height:""}}>

                            {FirstRow.map((i:any)=>{
                               return  <TableCell align="right">{i}</TableCell>
                            })}
             
                         
                
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <Chip avatar={<Avatar alt="star" src={ Star } />}  label={ props.rating + '.0' } /> */}
            </Box>
        </Box>        
    )
};

export default TransactionDatacard2;
