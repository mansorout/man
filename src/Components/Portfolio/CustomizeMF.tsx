import { useEffect, useState } from "react";
import { Box, Breadcrumbs, Button, Grid, Link, Toolbar, Typography } from "@mui/material";
import { HelpOutline } from "../../Assets";
import MutualFundCard2, { MFProp } from "../../Modules/CustomCard/MutualFundCard2";
import SelectSipDateButton from "../../Modules/Buttons/SelectSipDateButton";
import { useNavigate } from "react-router-dom";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";


const CustomizeMF = () => {

    const navigate = useNavigate();

    const [mfCards, setMfCards] = useState<MFProp[]>([]);

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh"
        } as React.CSSProperties,
    };

    useEffect(() => {
        setMfCards([
            {
                logo: '/Miraelogo.svg',
                title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
                fundType: ['Large Cap', 'Equity'],
                price: 30000,
                rating: 5.0,
                morningStarLogo: true,
                oneYearReturn: 12.3,
                threeYearReturn: 18.76,
                fiveYearReturn: 24.33,
                buttons: true,
            },
            {
                logo: '/SBIFundLogo.png',
                title: 'SBI Equity Hybrid Fund',
                fundType: ['Mid Cap', 'Debt'],
                price: 30000,
                rating: 4.0,
                morningStarLogo: true,
                oneYearReturn: 18.5,
                threeYearReturn: 27.49,
                fiveYearReturn: 35.38,
                buttons: true,
            },
            {
                logo: '/Miraelogo.svg',
                title: 'ICICI Prudential Fund',
                fundType: ['Small Cap', 'Balanced'],
                price: 40000,
                rating: 3.7,
                morningStarLogo: true,
                oneYearReturn: 12.57,
                threeYearReturn: 20.8,
                fiveYearReturn: 27.15,
                buttons: true,
            },
        ]);
    }, []);

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
                            width: '80.875vw',
                            padding: 0,
                            margin: '2.5vw',
                            fontFamily: 'Roboto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <Breadcrumbs sx={{
                                fontSize: '12px',
                                color: '#6c63ff',
                                marginBottom: '3vw',
                            }}>
                                <Link href="/home">Home</Link>
                                <Link href="/">Investment</Link>
                                <Link href="/">One-time lumpsum</Link>
                                <Link href="/">Mutual Fund Recommendation</Link>
                                <Typography sx={{
                                    fontSize: '12px',
                                    color: '#373e42'
                                }}>Customize Plan</Typography>
                            </Breadcrumbs>
                            <Box className="header" sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItem: 'flex-end'
                            }}>
                                <Box className="heading_main">
                                    <Typography sx={{
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        color: '#8787a2',
                                    }}>Explore Funds</Typography>
                                    <Typography sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: '#3c3e42',
                                    }}>
                                        {mfCards.length} Mutual Funds Found
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '14px',
                                        color: '#7b7b9d',
                                    }}>
                                        Monthly investment of ₹5,000
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}>
                                    <Button onClick={() => navigate('/addfunds')} sx={{
                                        width: '200px',
                                        height: '38px',
                                        padding: '11px 36px',
                                        borderRadius: '8px',
                                        border: 'solid 1px #23db7b',
                                        backgroundColor: '#dff7ea',
                                        textTransform: 'capitalize',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: '#09b85d',
                                    }}>Add More Funds</Button>
                                </Box>
                            </Box>
                            <Box>
                                {
                                    mfCards.map(mfCard =>
                                        <Box sx={{ marginTop: '1.25vw' }}>
                                            <MutualFundCard2 {...mfCard} />
                                        </Box>
                                    )
                                }
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '83.75vw',
                            height: '6.1vw',
                            marginTop: '8vw',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
                            backgroundColor: '#fff'
                        }}>
                            <SelectSipDateButton />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default CustomizeMF;
