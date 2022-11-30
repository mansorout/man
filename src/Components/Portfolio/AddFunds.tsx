import React, { useState } from "react";
import { Box, Breadcrumbs, Button, ButtonGroup, Grid, InputAdornment, Link, TextField, Toolbar, Typography } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import MutualFundCard2 from "../../Modules/CustomCard/MutualFundCard2";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";

const AddFunds = () => {

    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

    const data = [
        {
            logo: '/Miraelogo.svg',
            title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
            fundType: ['Large Cap', 'Equity'],
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
            fundType: ['Large Cap', 'Equity'],
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
            fundType: ['Large Cap', 'Equity'],
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
            fundType: ['Large Cap', 'Equity'],
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
            fundType: ['Large Cap', 'Equity'],
            price: 30000,
            rating: 3.7,
            morningStarLogo: true,
            oneYearReturn: 12.3,
            threeYearReturn: 18.76,
            fiveYearReturn: 24.33,
            checkbox: true,
        },
    ]

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh"
        } as React.CSSProperties,
        button: {
            color: 'rgba(123, 123, 157, 0.3)',
            padding: '0.625vw 1.25vw',
            borderRadius: '0.625vw',
            border: 'solid 1px rgba(123, 123, 157, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0)',
        } as React.CSSProperties,
        selected: {
            color: '#23db7b',
            padding: '0.625vw 1.25vw',
            borderRadius: '0.625vw',
            border: 'solid 1px #23db7b',
            backgroundColor: '#dff7ea',
        } as React.CSSProperties,
    };
    /*
        const handleClick = (event: React.SyntheticEvent<HTMLElement>) => {
            event.preventDefault();
            const target = event.target;
            target.set
    
        }
    */
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
                        <Box id="addfunds" sx={{
                            backgroundColor: '#f9f9f9',
                            width: '83.75vw',
                            padding: '3.75vw 2.4vw',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1vw',
                        }}>
                            <Breadcrumbs sx={{
                                fontSize: '12px',
                                color: '#6c63ff'
                            }}>
                                <Link href="/home">Home</Link>
                                <Link href="/">Investment</Link>
                                <Link href="/">Monthly Investment</Link>
                                <Link href="/">Mutual Fund Recommendation</Link>
                                <Link href="/">Customize Plan</Link>
                                <Typography sx={{
                                    fontSize: '12px',
                                    color: '#373e42'
                                }}>Choose fund to add</Typography>
                            </Breadcrumbs>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                height: '10vw',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box>
                                        <Typography sx={{
                                            fontSize: '12px',
                                            color: '#8787a2',
                                        }}>Explore Funds</Typography>
                                        <Typography sx={{
                                            fontSize: '18px',
                                            fontWeight: 500,
                                            color: '#3c3e42',
                                        }}>Choose Fund to Add</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontSize: '12px',
                                            color: '#8787a2',
                                        }}>SIP Investment</Typography>
                                        <Typography sx={{
                                            fontSize: '14px',
                                            color: '#7b7b9d',
                                        }}>20 funds found</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                }}>
                                    <TextField
                                        placeholder="Search funds..."
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>,
                                            endAdornment: <InputAdornment position="end" sx={{
                                                width: '30px',
                                                height: '30px',
                                                backgroundColor: '#efefef',
                                                borderRadius: '50%',
                                                padding: '0.375vw',
                                                color: '#09b85d',
                                            }}><FilterAltOutlinedIcon /></InputAdornment>
                                        }}
                                        sx={{
                                            width: '30vw',
                                            height: '3.6vw',
                                            borderRadius: '0.3125vw',
                                            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.05)',
                                            border: 'solid 1px #dddfe2',
                                            backgroundColor: '#fff'
                                        }}
                                    />

                                    <Box>
                                        <ButtonGroup sx={{
                                            display: 'flex',
                                            gap: '1vw',
                                        }}>
                                            <Button variant="contained" style={style.selected}>All</Button>
                                            <Button variant="contained" style={style.button}>Equity</Button>
                                            <Button variant="contained" style={style.button}>Debt</Button>
                                            <Button variant="contained" style={style.button}>Balanced</Button>
                                        </ButtonGroup>
                                    </Box>
                                </Box>
                            </Box>
                            {
                                data.map(d => <MutualFundCard2 {...d} />)
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default AddFunds;

