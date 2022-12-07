import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Breadcrumbs, Button, Grid, Link, Toolbar, Typography } from "@mui/material";
import { HelpOutline } from "../../Assets";
import MutualFundCard2, { MFProp } from "../../Modules/CustomCard/MutualFundCard2";
import SelectSipDateButton from "../../Modules/Buttons/SelectSipDateButton";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";

const MutualFundsList = () => {

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
                                <Typography sx={{
                                    fontSize: '12px',
                                    color: '#373e42'
                                }}>Mutual Fund Recommendation</Typography>
                            </Breadcrumbs>

                            <Box className="header" sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Box className="heading_main">
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
                                        One-time lumpsum investment of ₹1,00,000
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}>
                                    <img src={HelpOutline} width={22} height={22} style={{
                                        margin: '0 4px 0 0',
                                        objectFit: 'contain',
                                        opacity: 0.54,
                                    }} />
                                    <Typography sx={{
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        textAlign: 'right',
                                        color: '#6c63ff',
                                    }}>Know Why</Typography>
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
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '3vw',
                            }}>
                                <Button onClick={() => navigate('/customizemf')} sx={{
                                    width: '200px',
                                    height: '44px',
                                    padding: '13px 27px 12px 28px',
                                    borderRadius: '32px',
                                    backgroundColor: '#00b4ff',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    color: '#fff',
                                }}>Customize Plan</Button>
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

export default MutualFundsList;
/*
<Box sx={{
            width: '80.875vw',
            padding: 0,
            margin: '2.5vw',
            fontFamily: 'Roboto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Box className="header" sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box className="heading_main">
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
                        One-time lumpsum investment of ₹1,00,000
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <img src={HelpOutline} width={22} height={22} style={{
                        margin: '0 4px 0 0',
                        objectFit: 'contain',
                        opacity: 0.54,
                    }}/>
                    <Typography sx={{
                        fontSize: '16px',
                        fontWeight: 500,
                        textAlign: 'right',
                        color: '#6c63ff',
                    }}>Know Why</Typography>
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
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '3vw',
            }}>
                <Button onClick={ () => navigate('/customizemf') } sx={{
                    width: '200px',
                    height: '44px',
                    padding: '13px 27px 12px 28px',
                    borderRadius: '32px',
                    backgroundColor: '#00b4ff',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#fff',
                }}>Customize Plan</Button>
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
*/