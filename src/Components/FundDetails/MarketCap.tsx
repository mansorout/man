import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/joy';
import { chart } from '../../Assets';
import { Button } from '@mui/material';




export default function MarketCap() {
    return (
        <>




            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0} columnSpacing={20} sx={{ display: "flex", paddingLeft: "40px", paddingTop: "7.5px" }}>



                    <Grid item xs={5} sx={{ paddingLeft: "25px" }} >

                        <img src={chart} alt="chart" width="240px"></img>




                    </Grid>

                    <Grid item xs={7} sx={{ paddingLeft: "50px", alignItems: "right" }}>


                        <Box style={{ padding: "6px", backgroundColor: "#23db7b", borderRadius: "50%", height: "2px", width: "2px" }}></Box>
                        <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>LARGE CAP</Typography><br />
                        <Typography sx={{ fontWeight: "500", fontSize: "16" }}>
                            27.88%
                        </Typography>


                        <Box style={{ padding: "6px", backgroundColor: "#fdc100", borderRadius: "50%", height: "2px", width: "2px" }}></Box>
                        <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>MID CAP</Typography><br />
                        <Typography sx={{ fontWeight: "500", fontSize: "16" }}>
                            33.76%
                        </Typography>



                        <Box style={{ padding: "6px", backgroundColor: "#4979e8", borderRadius: "50%", height: "2px", width: "2px" }}></Box>
                        <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>SMALL CAP</Typography><br />
                        <Typography sx={{ fontWeight: "500", fontSize: "16" }}>
                            38.76%
                        </Typography>


                    </Grid>
                    {/* <Grid padding={2} item sm={1} xs={0}>
                            <Divider orientation="vertical" />
                        </Grid> */}

                </Grid>



              

            </Box>

        </>
    );
}
