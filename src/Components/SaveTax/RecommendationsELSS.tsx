import React, { useState } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import RecommendationsELSSHeader from './RecommendationsELSSHeader'
import FooterWithBtn from '../CommonComponents/FooterWithBtn'
import Button from '@mui/material/Button';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import { tick } from '../../Assets';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


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
        '@media(max-width: 500px)':{
            marginLeft: '0px !important',
        }
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
    exploreOtherOptionsBtn: {
        textAlign: 'center',
        padding: '15px',
        '& button': {
            fontSize: 'var(--buttonFontSize) !important',
            backgroundColor: '#00b4ff !important',
            borderRadius: '20px',
        }
    },
    ratingBox: {
        '& div': {
            backgroundColor: 'rgb(255 195 0 / 30%)',
            display: 'inline-flex',
            padding: '4px',
            borderRadius: '4px',
            '& svg': {
                color: '#ffc300',
                marginRight: '3px',
            }
        }
    },
    ratingBoxImgWrapper: {
        backgroundColor: 'transparent !important',
    }
}))

const RecommendationsELSS = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { investmentType } = useSelector((state: any) => state.SaveTaxInvestmentType)
    const [open, setOpen] = React.useState<boolean>(false);
    const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
    const [calenderValue, setCalenderValue] = useState(new Date())


    const handleULIPDate = () => {
        setOpen(true)
    }

    const handleBuyNow = () => {
        // loading Com and after that payment screen
        navigate('/payusingnetbanking');
    }

    const handleCalender = (value: any) => {
        setCalenderValue(value)
        console.log("calender value", value)
    }

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box className={classes.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' }, marginTop: '-15px', }} item xs={12}>
                        <RecommendationsELSSHeader />
                        <Box className={classes.cmpHeading}>
                            <Typography component='p'>1 ULIP Plan Found</Typography>
                            <Typography component='span'>This plan provide tax benefit of 80C</Typography>
                        </Box>


                        <Box className={classes.cardStyle}>
                            <Grid container>
                                <Grid item xs={12} sm={5}>
                                    <Box className={classes.cardStyleCmpName}>
                                        <Box className={classes.cardImgWrapper}>
                                            <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/assets/images/build_wealth.svg'} alt="" />
                                        </Box>
                                        <Box sx={{ margin: {sx: '0px', sm:'0px 8px'} }}>
                                            <Typography component='p'>Mirae Asset Dynamic Bond
                                                Fund Direct Growth</Typography>
                                            <Typography component='div' className={classes.cardBadge}>Large Cap</Typography>
                                            <Typography component='div' className={classes.cardBadge}>Equity</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Box className={classes.priceBadge} sx={{ margin: { xs: '6px 0px', sm: '0px', } }}>
                                        <Typography component='div'>₹2400 PM</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Box sx={{ padding: { xs: '0px', sm: '0px 10px', } }}>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>1 yr return</Typography>
                                            <Typography component='p'>12.3%</Typography>
                                        </Box>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>5 yr return</Typography>
                                            <Typography component='p'>24.33%</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Box>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>3 yr return</Typography>
                                            <Typography component='p'>18.76%</Typography>
                                        </Box>
                                        <Box className={classes.ratingBox}>
                                            <Typography component='div'>
                                                <StarOutlinedIcon />
                                                <Typography component='span'>5.0
                                                </Typography>
                                            </Typography>
                                            <Box className={classes.ratingBoxImgWrapper}>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/rating-logo.webp'} alt="" />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box className={classes.exploreOtherOptionsBtn}>
                            <Button variant="contained" sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                Explore other options
                            </Button>
                        </Box>

                        <FooterWithBtn
                            btnText={investmentType === 'lumpsum' ? 'Buy Now' : 'Select ULIP Date'}
                            btnClick={investmentType === 'lumpsum' ? handleBuyNow : handleULIPDate}
                        />
                    </Grid>
                </Grid>
            </Box>


            <Dialog onClose={() => setOpenConfirmation(!open)} open={open}>
                {/* <DialogTitle className={classes.modalText}>Set backup account</DialogTitle> */}
                <Typography className={classes.modalText}>Set backup account</Typography>
                <Calendar onChange={handleCalender} value={calenderValue} />
                <Button onClick={() => { setOpen(!open); setOpenConfirmation(!openConfirmation) }} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'rgba(123, 123, 157, 0.05)',
                    color: '#7b7b9d'
                }}>
                    Confirm SIP Date
                </Button>
            </Dialog>

            <Dialog open={openConfirmation} onClose={() => { setOpenConfirmation(!openConfirmation) }}>
                {/* <DialogTitle className={classes.modalText}>Set backup account</DialogTitle> */}

                <Box sx={{ backgroundColor: '#fff', width: 300, alignItems: 'center', padding: 3, textAlign: 'center' }}>
                    <Box><img style={{ height: 120, width: 120 }} src={tick} /></Box>
                    <Typography sx={{ marginTop: 1, fontWeight: '600' }} >Date confirmed!</Typography>
                    <Typography sx={{ marginTop: 1, color: '#8787a2' }} >Your Monthly SIP Date is 8th of every month</Typography>
                </Box>
                <Button onClick={() => {
                    setOpenConfirmation(!openConfirmation);
                    navigate('/payusingnetbanking');
                }} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'rgba(123, 123, 157, 0.05)',
                    color: '#7b7b9d'
                }}>
                    Continue to Payment
                </Button>
            </Dialog>

        </Box >
    )
}

export default RecommendationsELSS