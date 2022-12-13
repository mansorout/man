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
        const regex = /^\d+$/;
        
        setDisabled(false);
        

        if (!regex.test(amount)) {
            setError(true);
        } else {
            setError(false);
        }

        setAmount(e.target.value);
    }

    const updatePlans = () => {
        setVisibility('hidden');

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
        <Grid container spacing={1} sx={{
            width: '83.75vw',
            backgroundColor: '#6c63ff',
            color: '#fff',
            display: 'flex',
        }}>
            <Grid item xs={12} md={6} style={style.grid} className="ulip-header" sx={{
                borderRight: '1px solid blue',
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'baseline'
            }}>
                <FormControl className="payment" variant="outlined" sx={{ width: '162px' }}>
                    <InputLabel id="ppt" style={{ color: '#fff', fontSize: '10px', marginTop: '1vw' }}>Premium Payment Term</InputLabel>
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
            <Grid item xs={12} md={6} style={style.grid} sx={{
                display: 'flex',
                padding: '5px',
                gap: '24px',
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: '10px',
                        letterSpacing: '0.3px',
                        color: 'rgba(255, 255, 255, 0.87)',
                    }}>Investment Type</Typography>
                    <Typography sx={{
                        fontSize: '18px',
                    }}>{formatter.format(Number(amount))} Monthly</Typography>
                </Box>
                <CreateIcon onClick={() => setVisibility('visible')} sx={{
                    width: '18px',
                    height: '18px',
                    objectFit: 'contain',
                    opacity: 0.7,
                    margin: '11px 0',
                }} />
                <Box sx={{
                    position: 'relative',
                    top: '8vw',
                    left: '-30vw',
                    padding: '0',
                    borderRadius: '4px',
                    boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
                    backgroundColor: '#fff',
                    visibility: `${ visible }`,
                }}>

                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Amount I want to invest monthly"
                        value={amount}
                        className="monthlyInvest"
                        error={ error }
                        helperText={ error ? "Amount can only be numeric" : '' }
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
