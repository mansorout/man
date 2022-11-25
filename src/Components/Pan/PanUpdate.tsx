import { ChangeEvent, useState } from "react";
import { Box, Button, FormControl, InputAdornment, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ContactError } from "../../Assets";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import { useNavigate } from "react-router-dom";

const PanUpdate = () => {

    const [value, setValue] = useState("");

    const error : string[] = useSelector((state : any) => state.error)

    const dispatch = useDispatch();
    const { addError, removeError } = bindActionCreators(ActionCreators, dispatch);
    const navigate = useNavigate();

    const validate = () => {
        const regex = /A-Za-z]{5}\d{4}[A-Za-z]/;
        if (!regex.test(value)) {
            addError('PAN_error')
        } else {
            removeError('PAN_error');
            navigate('/bad');
        }
    };

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
                    value={ value } 
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
                    inputProps={{ pattern: '[A-Za-z]{5}\d{4}[A-Za-z]' }}
                    onChange={(e) => setValue(e.target.value)}
                />
            </FormControl>

            <FormControl>
                <Button variant="contained" style={style.button} fullWidth onClick={ validate }>
                    <Typography style={style.text} className="largeButtonText">
                        Continue
                    </Typography>
                </Button>
            </FormControl>
        </Box>
    )
};

export default PanUpdate;   
