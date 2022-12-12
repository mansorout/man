import { Box, Breadcrumbs, Grid, Link, Toolbar, Typography } from "@mui/material";
import UlipCard from "../../Modules/Cards/ULIP/UlipCard";
import UlipPlanPerformanceCard from "../../Modules/Cards/ULIP/UlipPlanPerformanceCard";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import ULIPFooter from "../../Modules/Cards/ULIP/ULIPFooter";


const UlipBox = () => {

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh"
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
                    <Grid container item sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
                        <Toolbar />
                        <Box sx={{
                            padding: 0,
                            margin: '5vw',
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
                                <Link href="/">Home</Link>
                                <Link href="/ulip/home">Get Insured</Link>
                                <Typography sx={{
                                    fontSize: '12px',
                                    color: '#373e42'
                                }}>ULIP</Typography>
                            </Breadcrumbs>

                            <Grid container item className="header" spacing={2} xs={12} sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Grid item xs={12} md={6}>
                                    <UlipCard />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <UlipPlanPerformanceCard />
                                </Grid>
                            </Grid>
                        </Box>
                        <ULIPFooter 
                            text="Show Me Recommendations" 
                            navigateTo="/ulip/recommendations" 
                            width="384px"
                            bgColor="#23db7b" 
                        />
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    )
};

export default UlipBox;
