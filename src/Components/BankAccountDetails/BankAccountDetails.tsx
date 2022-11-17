import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
//import './BankAccountDetails.css';

const BankAccountDetails = () => {
    return (
        <Box component="form" sx={{
            width: '100%',
            maxWidth: '500px',
            gap: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
            backgroundColor: '#fff',
            fontFamily: 'Roboto',
            fontSize: '14px',
        }}>
            <Typography sx={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#3c3e42',
            }}>Add Bank Account Details</Typography>

            <FormControl>
                <FormLabel sx={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#6c63ff',
                }}>Select your account type</FormLabel>
                    <RadioGroup defaultValue="savings">
                        <FormControlLabel value="savings" control={<Radio />} label="Savings"  />
                        <FormControlLabel value="current" control={<Radio />} label="Current" />
                    </RadioGroup>
            </FormControl>

            <FormControl>
                <TextField required id="outlined-ifsc-code" label="Enter IFSC code" />
            </FormControl>

            <FormControl>
                <TextField type="password" id="outlined-bank-acc-no" required label="Bank Account Number" />
            </FormControl>

            <FormControl>
                <TextField required id="confirmed-bank-acc-no" label="Confirm Bank Account Number" /> 
            </FormControl>

            <FormControl>
                <TextField required label="Account Holder's Name" />
            </FormControl>

            <FormControl>
                <Button variant="contained" sx={{
                    borderRadius: '0.5rem',
                    boxShadow: '0 0.25rem 0.5rem 0 rgba(35, 219, 123, 0.4)',
                    backgroundColor: '#23db7b',
                    padding: '1rem',
                    textTransform: 'capitalize',
                }}>Continue</Button>
            </FormControl>
        </Box>        
    )
};

export default BankAccountDetails;
