import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";
import { Box, Card, Grid, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';


export default function FundInfoWithInput() {
    const [value, setValue] = useState("Original Val");

    return (
        <Card sx={{padding:"15px"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={9} >
                        <Typography sx={{ padding: "12px" }}>Fund Name</Typography>
                    </Grid>
                    <Grid item xs={3}  >
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setValue('');
                            }}
                        > <DeleteForeverIcon sx={{ color: "red" }} />

                        </Button>
                    </Grid>

                </Grid>
                <Grid container spacing={2} >
                    <Grid item xs={9} >
                        <TextField
                            type="number"
                            onChange={(newValue) => {
                                setValue(newValue.target.value);
                            }}
                            variant="outlined"
                            defaultValue={value}
                            value={value}
                            // sx={{
                            //     m: 2
                            // }}
                        />
                    </Grid>
                    <Grid item xs={3} >
                        <Button
                            variant="outlined"
                            onClick={() => {
                                alert(value)
                            }}
                        >
                            <DoneIcon sx={{ color: "#23db7b" }} />

                        </Button>
                    </Grid>
                </Grid>
            </Box>






        </Card>

    );
}