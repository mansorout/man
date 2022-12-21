import { useEffect, useState } from "react";

import { Box, Breadcrumbs, Grid, InputBase, IconButton, Link, Toolbar, Typography } from "@mui/material";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import ULIPCoFundCard, { ULIPProp } from "../../Modules/Cards/ULIP/ULIPCoFundCard";
import ULIPHeader from "../../Modules/Cards/ULIP/ULIPHeader";
import ULIPFooter from "../../Modules/Cards/ULIP/ULIPFooter";
import ULIPBlueButton from "../../Modules/Buttons/ULIP/ULIPBlueButton";
import SearchBar from "../../Modules/Buttons/ULIP/SearchBar";
import { SearchOutlined, FilterAltOutlined } from "@mui/icons-material";
import UlipDropDownFilter from "./UlipDropDownFilter";
import { Transactions } from "../../Modal/Transactions";
import { AnchorOpenAction } from '../../Store/Duck/FilterBox';
import { useDispatch } from "react-redux";

const ULIPOptions = () => {

    const dispatch:any = useDispatch()

    const handleFilter =(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        dispatch(AnchorOpenAction(event))
    }
    
      
      const [transactions, setTransactions] = useState<any[]>([])
    
      useEffect(() => {
        setTransactions(Transactions) 
      }, [])

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
        <Box style={{ width: "100vw" }}
     
        >
            <Navbar />
            <Box sx={style.main}>
                <Grid container spacing={0} >
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />
                        <Sidebar />
                    </Grid>
                    <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
                        <Toolbar />

                        <Box 
                           className="UlipoptionStyle"
                        sx={{
                            padding: 0,
                            margin: 0,
                            fontFamily: 'Roboto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '1.5vw',
                        }}>
                        
                            <Box sx={{
                                padding: 0,
                                margin: '2.5vw',
                                marginTop: '10vw',
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
                                    <Link href="/insurance">Get Insured</Link>
                                    <Link href="/ulip/investoptions">ULIP</Link>
                                    <Link href="/ulip/recommendations">SprintMoney Recommendation</Link>
                                    <Typography sx={{
                                        fontSize: '12px',
                                        color: '#373e42'
                                    }}>Explore ULIP Plans</Typography>
                                </Breadcrumbs>
                                <Grid container sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Typography sx={{
                                            fontSize: { xs: '9x', sm: '10px', md: '11px', lg: '12px' },
                                            color: '#8787a2',
                                        }}>Explore ULIP Plans</Typography>
                                        <Typography sx={{
                                            fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' },
                                            fontWeight: 500,
                                            color: '#3c3e42',
                                        }}>Choose plan to Replace</Typography>
                                    </Grid>

                                    <Grid style={{ 
                                        border: "1px solid #dddfe2", 
                                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)", 
                                        borderRadius: "4px", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        gap: "10px", 
                                        padding: '5px 14px', 
                                    }}>
                                        <SearchOutlined style={{ color: "#7b7b9d" }} />
                                        <InputBase 
                                            placeholder='Search Transactions' 
                                            onChange={(e) => setTransactions(Transactions.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())))} 
                                            style={{ color: "#7b7b9d", minWidth: "250px" }} 
                                        />
                                        <IconButton onClick={(e) => handleFilter(e)} >
                                            <FilterAltOutlined style={{ color: "#09b85d" }} />
                                        </IconButton>
                                    </Grid>
                                    <UlipDropDownFilter />
                                </Grid>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5vw',
                            }}>

                                <Typography>{ulipData.length} plans found</Typography>
                                {
                                    ulipData.map(data => <ULIPCoFundCard {...data} />)
                                }
                            </Box>
                        </Box>
                        <ULIPFooter
                            text="Replace Plan"
                            navigateTo="/ulip/details"
                            width="384px"
                            bgColor="#23db7b"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box >                
    )
};

export default ULIPOptions;
