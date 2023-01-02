import React from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom';


const useStyles: any = makeStyles((theme: Theme) => ({

}))
const PaymentOptionCmp = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box className={classes.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '105px !important', md: '245px !important', marginTop: '-15px', }, }} item xs={12}>
                        PaymentOptionCmp
                    </Grid>
                </Grid >
            </Box >
        </Box >
    )
}

export default PaymentOptionCmp