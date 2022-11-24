import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ContactError } from "../../Assets";
import { useNavigate } from 'react-router-dom'

const PanUpdate = () => {

    const error : string[] = useSelector((state : any) => state.error)

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
    const navigate = useNavigate()
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
                    sx={{
                        "& .MuiInputLabel-root": {color: '#acb4bf'},
                        "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: error?.includes("PAN") ? "#ff5300" : "#dddfe2" },
                        "&:hover > fieldset": { borderColor: error?.includes("PAN") ? "#ff5300" : "#dddfe2" },
                        "&.Mui-focused > fieldset": { borderColor: error?.includes("PAN") ? "#ff5300" : "#4b7bec", borderWidth: "1px", boxShadow: "0 4px 8px 0 rgba(75, 123, 236, 0.2)" },
                          },
                        }}
                    InputProps = {{
                        endAdornment :  error?.includes("PAN") ? <InputAdornment position="end"> <img src={ContactError} width="22px" alt="Cross"/> </InputAdornment> : "",
                    }}
                    inputProps={{
                        maxLength: 10,
                        minLength: 10,
                        pattern: '[A-Za-z]{5}\d{4}[A-Za-z]'
                    }}
                />
            </FormControl>

            <FormControl>
                <Button variant="contained" style={style.button} fullWidth onClick={()=>navigate("/completedview")} >
                    <Typography style={style.text} className="largeButtonText">
                        Continue
                    </Typography>
                </Button>
            </FormControl>
        </Box>
    )
};

export default PanUpdate;   
