import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { ulipPlanPerformanceImage } from "../../../Assets";

const UlipPlanPerformanceCard = () => {

    const style = {
        subheading: {
            fontSize: '14px',
            color: '#7b7b9d',
        },
        amount: {
            fontSize: '20px',
        }
    };

    return (
        <Card sx={{ 
            width: '37.22vw',
            padding: '1.5625vw 1.25vw',
            opacity: 0.95,
            borderRadius: '0.625vw',
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
            backgroundColor: '#fff',
            fontFamily: 'Roboto', 
        }}>
            <CardHeader title="ULIP Plan Performance" sx={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#3c3e42',
            }} />
            <CardMedia 
                component="img" 
                image={ ulipPlanPerformanceImage }
                alt="ULIP Plan Performance"
                sx={{
                    width: '35.625vw',
                    height: '16.56vw',
                    marginLeft: '1vw',
                }}
            />
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5vw',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#7b7b9d'
                }}>
                    <Typography>5Y</Typography>
                    <Typography>7Y</Typography>
                    <Typography>10Y</Typography>
                    <Typography>12Y</Typography>
                    <Typography>15Y</Typography>
                    <Typography>20Y</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Typography style={ style.subheading }>Invested Value</Typography>
                    <Typography>Projected Value</Typography>
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
