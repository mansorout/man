import React, { useState } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import RecommendationsHeader from './RecommendationsHeader';
import Button from '@mui/material/Button';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FooterWithBtn from '../CommonComponents/FooterWithBtn'


const useStyles: any = makeStyles((theme: Theme) => ({
    main: {
        boxSizing: "border-box",
        backgroundColor: "var(--bgLayoutColor)",
    },
    cmpHeading: {
        padding: '15px 0px',
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--subHeadingFontSize)',
            fontWeight: 500,
        },
        '& span': {
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--fontSize14)',
        },
    },
    cardStyle: {
        backgroundColor: 'var(--uiWhite)',
        // boxShadow: 'var(--themeShadow)',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        borderRadius: '8px',
        padding: '15px',
    },
    cardStyleCmpName: {
        display: 'flex',
        flexWrap: 'wrap',
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--titleFontSize)',
            fontWeight: 500,
        }
    },
    cardBadge: {
        padding: '4px 8px',
        backgroundColor: 'rgba(123, 123, 157, 0.16)',
        margin: '4px 8px !important',
        display: 'inline-block',
        borderRadius: '4px',
        color: 'var(--typeIndigoColor)',
        fontSize: 'var(--subTitleFontSize) !important',
        fontWeight: 500,
    },
    cardImgWrapper: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        border: '1px solid var(--typeIndigoColor)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        boxSizing: 'border-box',
    },
    priceBadge: {
        borderRadius: '4px',
        padding: '4px 8px',
        color: 'var(--ui1Color)',
        fontSize: 'var(--titleFontSize) !important',
        backgroundColor: 'rgb(108 99 255 / 20%)',
        display: 'inline-block',
        fontWeight: 500,
    },
    cardContent: {
        marginBottom: '10px',
        '& span': {
            fontSize: 'var(--fontSize14)',
            color: 'var(--typeIndigoColor)',
        },
        '& p': {
            fontSize: 'var(--subHeadingFontSize)',
            color: 'var(--typeLightBlackColor)',
            fontWeight: 500,
        }
    },
    btnGroup: {
        textAlign: 'right',
        '& button': {
            fontSize: 'var(--subTitleFontSize) !important',
            backgroundColor: 'rgba(123, 123, 157, 0.05) !important',
            color: 'var(--typeIndigoColor)',
            '&:hover': {
                backgroundColor: '#e3f6eb !important',
                color: 'var(--primaryColor)',
            }
        }
    },
    exploreOtherOptionsBtn: {
        textAlign: 'center',
        padding: '15px',
        '& button': {
            fontSize: 'var(--buttonFontSize) !important',
            backgroundColor: '#00b4ff !important',
            borderRadius: '20px',
        }
    }
}))

const RecommendationsULIP = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    // const [headerSelectArr, setHeaderSelectArr] = useState<string[]>([])

    const handleULIPDate = () => {

    }

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box className={classes.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important', marginTop: '-15px', }, }} item xs={12}>
                        <RecommendationsHeader />
                        <Box className={classes.cmpHeading}>
                            <Typography component='p'>1 ULIP Plan Found</Typography>
                            <Typography component='span'>This plan provide tax benefit of 80C</Typography>
                        </Box>

                        <Box className={classes.cardStyle}>
                            <Grid container>
                                <Grid item sm={5}>
                                    <Box className={classes.cardStyleCmpName}>
                                        <Box className={classes.cardImgWrapper}>
                                            <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/assets/images/build_wealth.svg'} alt="" />
                                        </Box>
                                        <Box sx={{ margin: '0px 8px' }}>
                                            <Typography component='p'>Bajaj Allianz Future Gain</Typography>
                                            <Typography component='div' className={classes.cardBadge}>Large Cap</Typography>
                                            <Typography component='div' className={classes.cardBadge}>Equity</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item sm={2}>
                                    <Box className={classes.priceBadge} sx={{ margin: { xs: '6px 0px', sm: '0px', } }}>
                                        <Typography component='div'>₹6.5 lacs</Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={3}>
                                    <Box sx={{ padding: { xs: '0px', sm: '0px 10px', } }}>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>Top Performing Fund (10 Years)*</Typography>
                                            <Typography component='p'>14.38% Return</Typography>
                                        </Box>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>Tax Saving on Investment</Typography>
                                            <Typography component='p'>₹15,000 Every Year</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item sm={2}>
                                    <Box>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>Life Cover</Typography>
                                            <Typography component='p'>₹5 Lac</Typography>
                                        </Box>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>Tax Saving on Maturity</Typography>
                                            <Typography component='p'>₹1.5 Lac</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box>
                                <Box className={classes.btnGroup}>
                                    <Button variant="contained" sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                        <HelpOutlineOutlinedIcon sx={{ margin: '0px 2px' }} />KNOW MORE
                                    </Button>
                                    <Button variant="contained" sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                        <LoopOutlinedIcon sx={{ margin: '0px 2px' }} />DOWNLOAD BROCHURE
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        <Box className={classes.exploreOtherOptionsBtn}>
                            <Button variant="contained" sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                Explore other options
                            </Button>
                        </Box>

                        <FooterWithBtn
                            btnText='Select ULIP Date'
                            btnClick={handleULIPDate}
                        />
                    </Grid>
                </Grid >
            </Box >
        </Box >
    )
}

export default RecommendationsULIP