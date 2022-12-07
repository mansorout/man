import { useState } from "react";
import { Box, Divider, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
//import EditIcon from '@mui/icons-material/EditIcon';
import CreateIcon from '@mui/icons-material/Create';
import { Typography } from "@mui/joy";
import { formatter } from "../../../Assets";
import './ULIPHeader.css';


const ULIPHeader = () => {

    const style = {
        opt: {
            color: '#fff',
        },
        grid: {
            padding: '20px',
        }
    };

    const [ amount, setAmount ] = useState(7200);

    return (
        <Grid container spacing={1} sx={{
            width: '83.75vw',
            backgroundColor: '#6c63ff',
            color: '#fff',
            display: 'flex',
        }}>
            <Grid item xs={12} md={6} style={ style.grid } sx={{
                borderRight: '1px solid blue',
                display: 'flex',
                flexDirection: 'row-reverse',
            }}>
                <FormControl variant="standard" sx={{
                    width: '162px',
                   
                }}>
                    <InputLabel 
                        id="ppt"
                        sx={{
                            color: '#fff',
                        }}>
                            Premium Payment Term
                    </InputLabel>
                    <Select 
                        labelId="ppt"
                        value="5 Years"
                        onChange={ () => setAmount(amount) }
                        label="5 Years"
                        defaultValue="5 Years"
                        sx={{
                            color: '#fff',
                        }}
                    >
                        <MenuItem value={5}>5 Years</MenuItem>
                        <MenuItem value={7}>7 Years</MenuItem>
                        <MenuItem value={10}>10 Years</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6} style={ style.grid } sx={{
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
                    }}>{ formatter.format(amount) } Monthly</Typography>
                </Box>
                <CreateIcon sx={{
                    width: '18px',
                    height: '18px',
                    objectFit: 'contain',
                    opacity: 0.7,
                    margin: '11px 0',
                }}/>
            </Grid>
        </Grid>        
    )
};

export default ULIPHeader;
