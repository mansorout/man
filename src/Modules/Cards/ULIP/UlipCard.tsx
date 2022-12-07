import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import TextRadio from "./textradio/TextRadio";

const UlipCard = () => {

    const [years, setYears] = useState(0);

    return (
        <Box sx={{
            width: '36vw',
            padding: '1.25vw',
            borderRadius: '0.625vw',
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
            backgroundColor: '#fff',
        }}>
            <Typography sx={{
                fontSize: '18px',
                fontWeight: 500,
                color: '#3c3e42',
                marginLeft: '2vw',
                marginBottom: '2vw',
            }}>ULIP</Typography>
            <Box component="form" sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2vw',
            }}>

                <TextRadio {...{ textFieldLabel: 'I want to invest', radioText: 'Lumpsum' }} />
                <Divider sx={{
                    width: '23.63vw',
                    fontSize: '16px',
                    color: '#7b7b9d',
                }}>OR</Divider>
                <TextRadio {...{ textFieldLabel: 'I want to invest', radioText: 'Monthly' }} />
                <FormControl sx={{
                    width: '100%',
                    marginTop: '1vw',
                }}>
                    <InputLabel id="years">For next</InputLabel>
                    <Select labelId="years" value={years} label="For next">
                        <MenuItem value={5}>5 Years</MenuItem>
                        <MenuItem value={10}>10 Years</MenuItem>
                        <MenuItem value={15}>15 Years</MenuItem>
                        <MenuItem value={20}>20 Years</MenuItem>
                        <MenuItem value={25}>25 Years</MenuItem>
                        <MenuItem value={30}>30 Years</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
};

export default UlipCard;
