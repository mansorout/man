import { Box, Chip, Typography, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, Avatar } from "@mui/material";
import { maskgroup, Star } from "../../Assets";
 
 
function createData(
    name: string,
    sipdate: any,
    sipamount: any,
    time: any,
    image: any,
  ) {
    return { name, sipdate, sipamount, time, image };
  }
  
  

  const FirstRow = ["","29 Apr INF209K01090","Not Alloted","76.25","40,000","Lumpsum",""];

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
                        <TableCell>
                        <img alt="Money Sprint" src={maskgroup } style={{
                              width: "34px",
                              height: "34px"
                              
                        }} />
                            </TableCell> 
            <TableCell
            sx={{
                width: "336px",
                height: "19px",
                margin:" 4px 115px 7px 15px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "500",
                textAlign: "left",
                color: "#3c3e42",
           }} 
            >Axis Small cap Regular Growth Fund</TableCell>
            <TableCell align="right">Units</TableCell>
            <TableCell align="right">NAV</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Investment Type</TableCell>
            <Typography
              sx={{
                width: "12px",
                height: "12px",
                margin: "1px 6px 1px 0",
                borderRadius:"30px",
                backgroundColor:"#23db7b",
                fontSize:"12px",
                fontWeight:"500"
            }}
            ></Typography>
                <Typography sx={{
                color:"#23db7b",
                marginLeft:"20px",
                marginTop:'-17px'
                }} >Buy</Typography>
          </TableRow>
                        </TableHead>
                        <TableBody sx={{height:""}}>

                            {FirstRow.map((i:any)=>{
                               return  <TableCell align="right"
                               sx={{
                                height: "16px",
                                fontSize: "14px",
                                fontWeight: "500",
                                letterSpacing: "0.42px",
                                textAlign:" left",
                                color: "#7b7b9d"
                              
                               }}
                               
                               >{i}</TableCell>
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
