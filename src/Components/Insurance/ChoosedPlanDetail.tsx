import React from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FooterBtnWithBox from '../CommonComponents/FooterBtnWithBox'

const style = {
    main: {
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9",
        // height: "100vh"
    } as React.CSSProperties,
}

const ChoosedPlanDetail = () => {

    const handleBuyNow = () => {

    }
    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box sx={style.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' } }} item xs={12}>
                        <h1>kp</h1>
                        <FooterBtnWithBox
                            boxIcon={<ThumbUpOffAltIcon />}
                            boxText='Total Annual Premium'
                            boxAmount='₹8,777'
                            btnText='Buy Now'
                            btnClick={handleBuyNow}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ChoosedPlanDetail