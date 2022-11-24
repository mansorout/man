import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { HelpOutline } from "../../Assets";
import MutualFundCard, { MFProp } from "../../Modules/CustomCard/MutualFundCard";
import SelectSipDateButton from "../../Modules/Buttons/SelectSipDateButton";

const CustomizeMF = () => {

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
                    <Button sx={{
                        width: '14vw',
                        height: '3vw',
                        padding: '0.86vw 2.8vw',
                        borderRadius: '0.625vw',
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
                            <MutualFundCard {...mfCard} />
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
        </>
    )
};

export default CustomizeMF;
