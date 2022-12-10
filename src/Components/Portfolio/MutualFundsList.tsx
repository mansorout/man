import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Breadcrumbs, Button, Grid, Link, Toolbar, Typography } from "@mui/material";
import { HelpOutline } from "../../Assets";
import MutualFundCard2, { MFProp } from "../../Modules/CustomCard/MutualFundCard2";
import SelectSipDateButton from "../../Modules/Buttons/SelectSipDateButton";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";


const data = [
    {
      logo: '/Miraelogo.svg',
      title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
      fundType: 'Equity',
      price: 30000,
      rating: 3.7,
      morningStarLogo: true,
      oneYearReturn: 12.3,
      threeYearReturn: 18.76,
      fiveYearReturn: 24.33,
      checkbox: true,
    },
    {
      logo: '/Miraelogo.svg',
      title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
      fundType: 'Large Cap',
      price: 30000,
      rating: 3.7,
      morningStarLogo: true,
      oneYearReturn: 12.3,
      threeYearReturn: 18.76,
      fiveYearReturn: 24.33,
      checkbox: true,
    },
    {
      logo: '/Miraelogo.svg',
      title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
      fundType: 'Balanced',
      price: 30000,
      rating: 3.7,
      morningStarLogo: true,
      oneYearReturn: 12.3,
      threeYearReturn: 18.76,
      fiveYearReturn: 24.33,
      checkbox: true,
    },
    {
      logo: '/Miraelogo.svg',
      title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
      fundType: 'Equity',
      price: 30000,
      rating: 3.7,
      morningStarLogo: true,
      oneYearReturn: 12.3,
      threeYearReturn: 18.76,
      fiveYearReturn: 24.33,
      checkbox: true,
    },
    {
      logo: '/Miraelogo.svg',
      title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
      fundType: 'Equity',
      price: 30000,
      rating: 3.7,
      morningStarLogo: true,
      oneYearReturn: 12.3,
      threeYearReturn: 18.76,
      fiveYearReturn: 24.33,
      checkbox: true,
    },
  ]
  

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
        setMfCards(data);
    }, []);
    const handlePrice = (value: any) => {

        if (value === 12.3) {
            navigate('/funddetails')
        }




    }

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
                                        <Box sx={{ marginTop: '1.25vw' }}
                                            onClick={() => handlePrice(mfCard.oneYearReturn)}
                                        >

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