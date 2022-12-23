import { useState } from "react";
import { Box, Button, Dialog, DialogContent, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
//import EditIcon from '@mui/icons-material/EditIcon';
import CreateIcon from '@mui/icons-material/Create';
import InvestmentTypeDialog from "../../../Components/ULIP/InvestmentTypeDialog";
import { formatter } from "../../../Assets";
import './ULIPHeader.css';


const ULIPHeader = () => {

    const [visible, setVisibility] = useState('hidden');
    const [disabled, setDisabled] = useState(true);

    const [ error, setError ] = useState(false);

    const [amount, setAmount] = useState('');
    const [payment, setPayment] = useState('5');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setDisabled(false);
        

        

        setAmount(e.target.value);
    }

    const updatePlans = () => {
        if (parseInt(amount) < 499) {
            setError(true);
        } else {
            setError(false);
            setVisibility('hidden');
        }
        

    }

    const style = {
        opt: {
            color: '#fff',
        },
        grid: {
            padding: '20px',
        }
    };



    return (
        <Grid container spacing={1}
        sx={{
            paddingTop:{xs:"20px", sm:"0px"},
            position:"relative",
            backgroundColor: '#6c63ff',
            color: '#fff',
        }}>
            <Grid item xs={12} sm={6} style={style.grid}  sx={{
                borderRight: '1px solid #5a53d5',
                display:"flex",
                justifyContent: { xs:"center", sm:"end"},
            }}
            >
                <FormControl variant="outlined" sx={{ width: '162px' }}>
                    <InputLabel id="ppt" style={{ color: '#fff', fontSize: '10px', marginTop: '4px' }}>Premium Payment Term</InputLabel>
                    <Select
                        labelId="ppt"
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                        label="paymentTerms"
                        defaultValue="5"
                        sx={{
                            color: '#fff'
                        }}
                    >
                        <MenuItem value={'5'}>5 Years</MenuItem>
                        <MenuItem value={'7'}>7 Years</MenuItem>
                        <MenuItem value={'10'}>10 Years</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} style={style.grid} sx={{
                display: 'flex',
                gap:"25px",
                justifyContent: { xs:"center", sm:"start"},
                alignItems:"center"
            }}>
                <Box className="InvestmentMonthlyStyle">
                    <Typography sx={{
                        fontSize: '10px',
                        letterSpacing: '0.3px',
                        color: 'rgba(255, 255, 255, 0.87)',
                    }}>Investment Type</Typography>
                    <Typography sx={{
                        fontSize: '18px',
                    }} className="MonthlyStyle">{formatter.format(Number(amount))} Monthly</Typography>
                </Box>
                <CreateIcon onClick={() => setVisibility('visible')} sx={{
                    width: '18px',
                    height: '18px',
                    objectFit: 'contain',
                    opacity: 0.7,
                    margin: '11px 0',
                }} />
                <Box
                 className="ToastterStyle"
                 sx={{
                    position: 'absolute',
                    top:"8vw",
                    left:"50%",
                    transform:"translate(-50%,-0%)",
                    padding: '0',
                    borderRadius: '4px',
                    boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
                    backgroundColor: '#fff',
                    visibility: `${ visible }`,
                }}>

                    <TextField
                        fullWidth
                        onKeyPress={e => !/^\d+$/.test(e.key) && e.preventDefault()}

                        label="Amount I want to invest monthly"
                        value={amount}
                       
                        error={ error }
                        helperText={ error ? "Amount should be morethan Rs.499" : '' }
                        InputProps={{
                            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                            endAdornment: <InputAdornment position="end">
                                <Button
                                    variant='contained'
                                    disabled={disabled}
                                    onClick={updatePlans}
                                    sx={{
                                        backgroundColor: '#23db7b',
                                        borderRadius: '4px',
                                        boxShadow: '0 4px 8px 0 rgba(35, 219, 123, 0.4)',
                                        color: '#fff',
                                        fontSize: '12px',
                                        fontWeight: 500,
                                    }}
                                >Update Plans</Button>
                            </InputAdornment>
                        }}
                        sx={{
                        
                            padding: '14px 16px',
                            borderRadius: '4px',
                            boxShadow: '0 4px 8px 0 rgba(75, 123, 236, 0.2)',
                            
                            backgroundColor: '#fff',
                        }}
                        onChange={handleChange}
                    />
                </Box>
            </Grid>
        </Grid>
    )
};

export default ULIPHeader;
