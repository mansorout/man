import { Box, Chip, Typography, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, Avatar } from "@mui/material";
import { Star } from "../../Assets";
 
 
function createData(
    name: string,
    calories: any,
    fat: any,
    carbs: any,
    protein: any,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  

  const FirstRow = ["","29 Apr INF209K01090","15th of every month","2,000","20.08%"];

const TransactionsDatacard = (props: Props) => {

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
            <TableCell>Mirae Asset Dynamic Bond Fund Direct Growth</TableCell>
            <TableCell align="right">SIP Date</TableCell>
            <TableCell align="right">SIP Amount</TableCell>
            <TableCell align="right">3 Years return</TableCell>
            <TableCell align="right">logo</TableCell>
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

export default TransactionsDatacard;
