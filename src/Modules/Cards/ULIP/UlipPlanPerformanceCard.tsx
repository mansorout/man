import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { ulipPlanPerformanceImage } from "../../../Assets";
import './UlipPlanPerformanceCard.css';


const UlipPlanPerformanceCard = () => {

    const style = {
        subheading: {
            fontSize: '14px',
            color: '#7b7b9d',
        },
        amount: {
            fontSize: '20px',
        },
        year: {
            fontSize: '12px',
        }
    };

    return (
        <Card sx={{ 
            boxSizing: 'border-box',
            opacity: 0.95,
            borderRadius: '0.625vw',
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
            backgroundColor: '#fff',
            fontFamily: 'Roboto',
            padding: '15px',
        }}>
            <Typography sx={{
                fontSize: '18px',
                fontWeight: 500,
                color: '#3c3e42',
            }}>
                ULIP Plan Performance
            </Typography>
            <CardMedia 
            className="graphUlipStyle"
                component="img" 
                image={ ulipPlanPerformanceImage }
                alt="ULIP Plan Performance"
                sx={{
                    width: { xs: '300px', sm: '93%' },
                    height: '180px',
                    marginLeft: '1vw',
                }}
            />
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5vw',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#7b7b9d'
                }}>
                    <Typography style={ style.year }>5Y</Typography>
                    <Typography style={ style.year }>7Y</Typography>
                    <Typography style={ style.year }>10Y</Typography>
                    <Typography style={ style.year }>12Y</Typography>
                    <Typography style={ style.year }>15Y</Typography>
                    <Typography style={ style.year }>20Y</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Typography style={ style.subheading }>Invested Value</Typography>
                    <Typography style={ style.subheading }>Projected Value</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Typography style={ style.amount } sx={{ fontWeight: 300, color: '#3c3e42' }}>&#8377;2.5 Lac</Typography>
                    <Typography style={ style.amount } sx={{ fontWeight: 500, color: '#23db7b' }}>&#8377;4.75 Lac</Typography>
                </Box>
            </CardContent>
        </Card>
    )
};

export default UlipPlanPerformanceCard;
