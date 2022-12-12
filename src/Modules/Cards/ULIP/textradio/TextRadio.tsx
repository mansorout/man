import { Box, FormControl, FormControlLabel, InputAdornment, Radio, TextField } from "@mui/material";
import { useState } from "react";
import './TextRadio.css';

interface TextRadioProps {
    textFieldLabel: string;
    radioText: string;
}

const TextRadio = (props: TextRadioProps) => {

    const [ amount, setAmount ] = useState(0);
    const [ investmentMethod, setInvestmentMethod ] = useState('');

    return (
        <Box>
            <FormControl>
                <TextField 
                    variant="outlined"
                    required 
                    defaultValue={0} 
                    label={ props.textFieldLabel }
                    value={ amount }
                    onChange={ (e) => setAmount(Number(e.target.value)) }
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                        endAdornment:   <InputAdornment position="end">
                                            <FormControlLabel 
                                                control={ <Radio /> } 
                                                label={ props.radioText } 
                                                value={ props.radioText }
                                                onChange={ () => setInvestmentMethod(props.radioText) }
                                                sx={{
                                                    width: '8.6vw',
                                                    height: '4.375vw',
                                                    backgroundColor: 'rgba(135, 135, 162, 0.1)',
                                                    margin: 0,
                                                }}
                                            />
                                        </InputAdornment>
                    }}
                    sx={{
                        boxSizing: 'border-box',
                        width: '35.55vw',
                        height: '4.375vw',
                        backgroundColor: '#fff',
                        padding: '1px 1px 0 16px',
                        border: '1px solid #dddfe2',
                        borderRadius: '4px',
                    }}
                />
            </FormControl>
        </Box>
    )
};

export default TextRadio;
