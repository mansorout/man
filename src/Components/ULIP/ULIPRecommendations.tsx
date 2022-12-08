import { useState } from "react";
import { Box, Breadcrumbs, Button, Grid, Link, Toolbar, Typography } from "@mui/material";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import ULIPCoFundCard, { ULIPProp } from "../../Modules/Cards/ULIP/ULIPCoFundCard";
import ULIPHeader from "../../Modules/Cards/ULIP/ULIPHeader";
import ULIPFooter from "../../Modules/Cards/ULIP/ULIPFooter";
import ULIPBlueButton from "../../Modules/Buttons/ULIP/ULIPBlueButton";
import DateConfirmedDialog from "./DateConfirmedDialog";
import ThirdPartyRedirection from "./ThirdPartyRedirection";
import TransactionsDone from "./TransactionsDone";
import ThirdPartyHdfc from "./ThirdPartyHdfc";

const ULIPRecommendations = () => {

    const [ open, setOpen ] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const ulipData: ULIPProp[] = [
        {
            logo: '/Miraelogo.svg',
            title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
            projectedAmount: 4.75,
            topPerformingFundReturn: 14.38,
            lifeCoverAmount: 5,
            investedValueAmount: 2.5,
            taxSavings: 15000,
        },
        {
            logo: '/Miraelogo.svg',
            title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
            projectedAmount: 4.75,
            topPerformingFundReturn: 14.38,
            lifeCoverAmount: 5,
            investedValueAmount: 2.5,
            taxSavings: 15000,
        },
    ];

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh",
        } as React.CSSProperties,
    };

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box sx={style.main}>
                <Grid container spacing={0} >
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />
                        <Sidebar />
                    </Grid>
                    <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
                        <Toolbar />
                        
                        <Box sx={{
                            padding: 0,
                            margin: 0,
                            fontFamily: 'Roboto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '1.5vw',
                        }}>
                            <ULIPHeader />
                            <Box  sx={{
                                padding: 0,
                                margin: '2.5vw',
                                fontFamily: 'Roboto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '1vw',
                            }}>
                                <Breadcrumbs sx={{
                                    fontSize: '12px',
                                    color: '#6c63ff',
                                    marginBottom: '3vw',
                                }}>
                                    <Link href="/home">Home</Link>
                                    <Link href="/">Get Insured</Link>
                                    <Link href="/">ULIP</Link>
                                    <Typography sx={{
                                        fontSize: '12px',
                                        color: '#373e42'
                                    }}>SprintMoney Recommendation</Typography>
                                </Breadcrumbs>
                                <Box>
                                    <Typography sx={{
                                        fontSize: '12px',
                                        color: '#8787a2',
                                    }}>This plan provide tax benefit of 80C</Typography>
                                    <Typography sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: '#3c3e42',
                                    }}>2 ULIP Plan Found</Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5vw',
                                }}>
                                {
                                    ulipData.map(data => <ULIPCoFundCard { ...data } />)
                                }
                                </Box>
                                <ULIPBlueButton text="EXPLORE OTHER OPTIONS" navigateTo="/ulip/options" />
                                {/*
                                <Button onClick={ handleOpen }>Open dialog</Button>
                                <ThirdPartyHdfc open={ open } handleClose={ handleClose } />
                            */}
                            </Box>
                            <ULIPFooter text="Select ULIP Date" navigateTo="/ulip/datepicker" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>                
    )
};

export default ULIPRecommendations;
