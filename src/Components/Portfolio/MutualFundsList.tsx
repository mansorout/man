import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { HelpOutline } from "../../Assets";
import MutualFundCard, { MFProp } from "../../Modules/CustomCard/MutualFundCard";
import SelectSipDateButton from "../../Modules/Buttons/SelectSipDateButton";

const MutualFundsList = () => {

    const [mfCards, setMfCards] = useState<MFProp[]>([]);

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
        <>
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
                            <MutualFundCard {...mfCard} />
                        </Box>
                    )
                }
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '3vw',
            }}>
                <Button sx={{
                    width: '20vw',
                    height: '3.44vw',
                    padding: '0.9375vw 2.19vw',
                    borderRadius: '2.5vw',
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
        </>
    )
};

export default MutualFundsList;
