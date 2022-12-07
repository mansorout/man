import { Box, Breadcrumbs, Grid, Link, Toolbar, Typography } from "@mui/material";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import ULIPCoFundCard, { ULIPProp } from "../../Modules/Cards/ULIP/ULIPCoFundCard";
import ULIPHeader from "../../Modules/Cards/ULIP/ULIPHeader";
import ULIPFooter from "../../Modules/Cards/ULIP/ULIPFooter";
import ULIPBlueButton from "../../Modules/Buttons/ULIP/ULIPBlueButton";
import SearchBar from "../../Modules/Buttons/ULIP/SearchBar";

const ULIPOptions = () => {

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
                                    <Link href="/ulip/recommendations">SprintMoney Recommendation</Link>
                                    <Typography sx={{
                                        fontSize: '12px',
                                        color: '#373e42'
                                    }}>Explore ULIP Plans</Typography>
                                </Breadcrumbs>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Box>
                                        <Typography sx={{
                                            fontSize: '12px',
                                            color: '#8787a2',
                                        }}>Explore ULIP Plans</Typography>
                                        <Typography sx={{
                                            fontSize: '18px',
                                            fontWeight: 500,
                                            color: '#3c3e42',
                                        }}>Choose plan to Replace</Typography>
                                    </Box>
                                    <Box>
                                        <SearchBar />
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5vw',
                                }}>
                                    <Typography>{ ulipData.length } plans found</Typography>
                                    {
                                        ulipData.map(data => <ULIPCoFundCard { ...data } />)
                                    }
                                </Box>
                            </Box>
                            <ULIPFooter />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>                
    )
};

export default ULIPOptions;
