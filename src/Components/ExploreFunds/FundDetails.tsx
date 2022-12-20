import { Breadcrumbs, Grid, Toolbar, Link, Typography, Button } from '@mui/material';
import { Box } from '@mui/system'
import React, { useRef } from 'react'
import { FundCardsData } from '../../Modal/FundCardsData';
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import FundDetailCard from '../TxnFilters/FundDetailCard';
import MinInvest from '../FundDetails/MinInvest'
import { SchemeDoc } from '../FundDetails/SchemeDoc';
import { LatestAssets } from '../FundDetails/LatestAssets';
import { RiskoMeter } from '../FundDetails/RiskoMeter';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,
} from 'chart.js'
import FooterWithBtn from '../CommonComponents/FooterWithBtn';
import FundPerformance from './FundPerformance';
import { useNavigate } from 'react-router-dom';
import ExploreFundChart from './ExploreFundChart';

function Details() {
    const refContainer = useRef();

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh"
        } as React.CSSProperties,
        drawer: {
            zIndex: "500",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
        } as React.CSSProperties,
        image: {
            width: '176px',
        } as React.CSSProperties,
        profileContainer: {
            borderRadius: "8px",
            border: "solid 1px #4f46de",
            backgroundColor: "#6c63ff",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer"
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between"
        },
        profile: {
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "1px solid white"
        },
        profileInter: {
            width: "40px",
            height: "40px",
            border: "solid 1px rgba(75, 123, 236, 0.49)",
            borderRadius: "50%"
        },
        menuContainer: {
            boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
            boxSizing: "border-box",
            padding: "10px",
            backgroundColor: "white",
            marginRight: "20px"
        } as React.CSSProperties,
        menuButton: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px 0px"
        } as React.CSSProperties,
        menuText: {
            color: "black",
            fontSize: "10px",
            fontWeight: "500",
            padding: "5px 10px",
            borderRadius: "4px",
            backgroundColor: "#ffc300",
            cursor: "pointer"
        },
        menuText2: {
            padding: "6px 12px",
            borderRadius: "4px",
            border: "solid 1px #23db7b",
            backgroundColor: "rgba(35, 219, 123, 0.12)",
            fontSize: "12px",
            fontWeight: "500",
            color: "#09b85d",
            cursor: "pointer"
        },
        button: {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "none",
            backgroundColor: "white",
            textAlign: "left",
            justifyContent: "flex-start",
        } as React.CSSProperties,
        menuIcon: {
            color: "#6c63ff",
            fontSize: "24px"
        },
        appBar: {
            backgroundColor: "white",
        },
        modalContainer: {
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        } as React.CSSProperties,
        logo: {
            width: "50px",
            padding: "20px 0px",
        } as React.CSSProperties,

    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    // const data = {
    //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    //     datasets: [
    //         {
    //             label: "First dataset",
    //             data: [10,1,2,3,4,5,6,7,8,9, 12, 15, 12, 12, 34,12, 12, 34,12, 12, 34,12, 12, 34,12, 12, 34],
    //             fill: true,
    //             backgroundColor: "rgba(75,192,192,0.2)",
    //             borderColor: "rgba(75,192,192,1)"
    //         }
    //     ]
    // };




    const data = {
        labels: ["18Jan", "28Feb", "5Mar", "13Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    }

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/selectedfunds')
    }

    return (
        <Box style={{ width: "100vw", backgroundColor: "red" }} ref={refContainer}>
            <Navbar />
            <Box sx={style.main}>
                <Grid container spacing={0} sx={{ height: "100vh" }}>
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />
                        <Sidebar />
                    </Grid>
                    <Grid container xs={13} sm={11} md={10}>
                        <Grid sx={{ padding: 2 }} item xs={12}>
                            <Toolbar />
                            <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={13}>
                                <Grid
                                    sx={{
                                        height: { xs: "auto", sm: "inherit" },
                                        padding: 0, boxSizing: "border-box",
                                        overflow: { sx: "auto", sm: "auto", md: "auto" }
                                    }}
                                    item xs={13}>
                                    <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }} >
                                        <Breadcrumbs aria-label="breadcrumb">
                                            <Link color="#6495ED" underline="always" href="/home">
                                                <Typography className='burgerText'>Home</Typography>
                                            </Link>
                                            <Link color="#6495ED" underline="always" href="/investNow">
                                                <Typography className='burgerText'>Investment</Typography>
                                            </Link>
                                            <Link color="#6495ED" underline="always" href="/sipInvestment">
                                                <Typography className='burgerText'>Monthly Investment</Typography>
                                            </Link>
                                            <Link color="#6495ED" underline="always" href="/mflist">
                                                <Typography className='burgerText'> Mutual Fund Recommendation</Typography>
                                            </Link>
                                            <Link color="#6495ED" underline="always" href="/customizemf">
                                                <Typography className='burgerText'>Customize Plan </Typography>
                                            </Link>
                                            <Link color="#6495ED" underline="always" href="/replaceFunds">
                                                <Typography className='burgerText'>Choose Fund to Replace </Typography>
                                            </Link>
                                            <Link underline='none' color="#8787a2" aria-current="page">
                                                <Typography className='burgerText'>   Axis Small Cap Fund Regular Growth</Typography>
                                            </Link>
                                        </Breadcrumbs>
                                    </Box>

                                    {
                                        FundCardsData.map((item, index) => {
                                            return (
                                                <FundDetailCard
                                                    key={index}
                                                    logo={item.logo}
                                                    name={item.name}
                                                    cap={item.cap}
                                                    type={item.type}
                                                    year1={item.year1}
                                                    year3={item.year3}
                                                    year5={item.year5}
                                                    rating={item.rating}
                                                    morning_star_logo={item.morning_star_logo}
                                                />
                                            )
                                        })
                                    }
                                    <Grid container rowSpacing={1} columnSpacing={2}>
                                        <Grid item md={12} xs={12}>
                                            <ExploreFundChart />
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <FundPerformance />
                                        </Grid>
                                    </Grid>
                                    





                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid item xs={12} sm={6}>
                                            <MinInvest />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <SchemeDoc />
                                        </Grid>
                                    </Grid>

                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid item xs={12} sm={6}>
                                            <RiskoMeter />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <LatestAssets />
                                        </Grid>
                                    </Grid>
                                    {/* <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ marginTop: '1rem' }} >
                                        <Button
                                            variant="contained"
                                            sx={{
                                                borderRadius: '0.5rem',
                                                boxShadow: '0 0.25rem 0.5rem 0 rgba(35, 219, 123, 0.4)',
                                                backgroundColor: '#23db7b',
                                                padding: '1rem',
                                                textTransform: 'capitalize',
                                            }}>Add This Fund To Plan</Button>
                                    </Grid> */}
                                    <FooterWithBtn
                                        btnText='Add This Fund to Plan'
                                        btnClick={handleClick}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Details