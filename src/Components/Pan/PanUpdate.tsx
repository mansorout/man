import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

const PanUpdate = () => {

    const style = {
        button : {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            marginBottm: "10px",
            width:"100%",
            maxWidth:"30.5rem",
        } as React.CSSProperties,
        text : {
            color: "white"
        }
    };

    return (

        <Box component="form" sx={{
            width: '30.5rem',
            gap: '2rem',
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
            }}>Update PAN Details</Typography>

            <FormControl>
                <TextField 
                    required 
                    label="Enter your PAN number" 
                    helperText="Your PAN will be used to verify your KYC" 
                />
            </FormControl>

            <FormControl>
                <Button variant="contained" style={style.button} fullWidth onClick={() => {}}>
                    <Typography style={style.text} className="largeButtonText">
                        Continue
                    </Typography>
                </Button>
            </FormControl>
        </Box>
    )
};

export default PanUpdate;   
