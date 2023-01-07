import React,{useState} from 'react'
import { Box, Breadcrumbs, Button, Grid, Link, Modal, Toolbar, Typography, Theme, FormControl, FormControlLabel, RadioGroup, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { makeStyles } from '@mui/styles';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LineChart from '../../../Components/CommonComponents/Charts/LineChart';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

const useStyles: any = makeStyles((theme: Theme) => ({
    logoWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    cardWrapper: {
        backgroundColor: 'var(--uiWhite)',
        borderRadius: '8px',
        boxShadow: 'var(--themeShadow)',
        padding: '15px',
        marginBottom: '15px',
    },
    imgWrapper: {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        padding: '6px',
        backgroundColor: 'var(--uiWhite)',
        margin: '0px 15px',
    },
    projectedAmount: {
        listStyleType: 'none',
        padding: '8px 10px',
        backgroundColor: 'var(--blueColorOpacity)',
        margin: '5px 0px',
        borderRadius: '2px',
        color: 'var(--ui1Color)',
        fontWeight: 500,
        display: 'inline-block',
    },
    listStyle: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '@media(max-width: 700px)':{
            justifyContent: 'flex-start',
        },
        '& li': {
            margin: '10px 20px',
            '@media(max-width: 700px)':{
                width: '40%'
            },
        }
    },
    btnGroup: {
        textAlign: 'right',
        marginTop:'15px',
        '& button': {
            fontSize: 'var(--subTitleFontSize) !important',
            // backgroundColor: 'rgba(123, 123, 157, 0.05) !important',
            color: 'var(--typeIndigoColor)',
            // '&:hover': {
            //     backgroundColor: '#e3f6eb !important',
            //     color: 'var(--primaryColor)',
            // }
        }
    },
    knowMoreDialog: {
        display: 'flex',
        position: 'relative',
    },
    knowMoreDialogImageWrapper: {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        '& img': {
            width: '100%',
            height: 'auto',
        }
    },
    chartBox: {
        marginTop: '15px',
        padding: '15px 15px',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        borderRadius: '8px',
    },
    chartCmpName: {
        position: 'relative',
        padding: '15px 20px',
        '&::before': {
            content: '""',
            display: 'inline-block',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#ffc300',
            position: 'absolute',
            top: '17px',
            left: '0'
        }
    },
    cmpInvestmentDetail: {
        marginTop: '15px',
        padding: '15px 15px',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        borderRadius: '8px',
        display: 'flex',
        '& span': {
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--subTitleFontSize)'
        },
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--titleFontSize)',
            marginBottom: '8px',
        }
    },
    featureBox: {
        marginTop: '15px',
        padding: '15px 15px',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        borderRadius: '8px',
    },
    featureText: {
        display: 'flex',
    },
    featureBoxImgWrapper: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--secondaryColor)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '15px',
    }
}))

interface ULIPRecommendationCardProps {
    logoUrl: string;
    companyName: string;
    projectedAmount: number;
    topPerformingFund: string;
    lifeCover: string;
    investedVlaue: string;
    taxSavingOnInvestment: string;
    knowMoreAction: React.MouseEvent<HTMLElement>;
    downloadBrochuraAction: React.MouseEvent<HTMLElement>;
}

const ULIPRecommendationCard = () => {
    const classes = useStyles();
    const [knowMoreDialog, setKnowMoreDialog] = useState<boolean>(false)


    ChartJS.register(
        Filler,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                display: false,
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'july', "Aug"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 530, 85, 120, 440, 65, 300, 700],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    };


    const handleKnowMoreDialog = (ulip_id?: number) => {
        // dispatch(getUlipSchemeDetailApi(ulip_id))
        setKnowMoreDialog(true)
    }

    return (
        <Box className={classes.cardWrapper}>
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <Box className={classes.logoWrapper}>
                        <Box className={classes.imgWrapper}>
                            <img src="/Miraelogo.svg" alt="" />
                        </Box>
                        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subHeadingFontSize)' }} component='p'>HDFC Life Pro Growth Plus</Typography>
                    </Box>
                </Grid>
                <Grid item sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                    <Box>
                        <Box className={classes.projectedAmount}>₹5.80 Lacs</Box>
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)' }} component='p'>Projected Amt.</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Box>
                <ul className={classes.listStyle}>
                    <li>
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p'>Top Performing Fund (10 Years)*</Typography>
                        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>Projected Amt.</Typography>
                    </li>
                    <li>
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p'>Life Cover</Typography>
                        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>₹5 Lac</Typography>
                    </li>
                    <li>
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p'>Invested Value</Typography>
                        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>₹2.5 Lac</Typography>
                    </li>
                    <li>
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p'>Tax Saving on Investment</Typography>
                        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>₹15,000 Every Year</Typography>
                    </li>
                </ul>
            </Box>
            <Box>
                <Box className={classes.btnGroup}>
                    <Button variant="contained" onClick={() => handleKnowMoreDialog()} sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', },  backgroundColor: '#e3f6eb !important', color: 'var(--primaryColor) !important', }}>
                        <HelpOutlineOutlinedIcon sx={{ margin: '0px 2px' }} />KNOW MORE
                    </Button>
                    <Button variant="contained" sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', }, backgroundColor: 'rgba(123, 123, 157, 0.05) !important' }}>
                        <FileDownloadIcon sx={{ margin: '0px 2px' }} />DOWNLOAD BROCHURE
                    </Button>
                </Box>
            </Box>

            
            <Dialog onClose={() => setKnowMoreDialog(false)} open={knowMoreDialog}>
                <DialogTitle sx={{ boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)' }}>
                    <Box className={classes.knowMoreDialog}>
                        <Box className={classes.knowMoreDialogImageWrapper}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/investment-cmp-logo.webp'} alt="" />
                        </Box>
                        <Box>
                            <Typography component='span' sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} >Know More</Typography>
                            <Typography component='p' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)' }} >Bajaj Allianz Future Gain</Typography>
                        </Box>
                        <CloseOutlinedIcon
                            onClick={() => setKnowMoreDialog(false)}
                            sx={{ position: 'absolute', right: '0px', top: '0px', cursor: 'pointer', color: '#d1d6dd' }}
                        />
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box className={classes.chartBox}>
                        <Typography component='p' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} >Fund Performance</Typography>
                        <LineChart optionsValues={chartOptions} dataValues={chartData} />

                        <Box className={classes.chartCmpName}>
                            <Typography component='p' sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)', fontWeight: 500, }} >BAJAJ</Typography>
                            <Typography component='b' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--titleFontSize)', fontWeight: 500, }} >14.38%</Typography>
                            <Typography component='span' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subTitleFontSize)', }} >in 1 Year</Typography>
                        </Box>
                    </Box>

                    <Box className={classes.cmpInvestmentDetail}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Investment Term</Typography>
                                        <Typography component='p'>5 Years</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Top Performing Fund (10 Years)*</Typography>
                                        <Typography component='p'>14.38% Return</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Tax Saving on Investment</Typography>
                                        <Typography component='p'>₹15,000 Every Year</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Investment Type</Typography>
                                        <Typography component='p'>₹7,200 pm</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Life Cover</Typography>
                                        <Typography component='p'>₹5 Lac</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Tax Saving on Maturity</Typography>
                                        <Typography component='p'>₹1.5 Lac</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box className={classes.featureBox}>
                        <Box className={classes.featureText}>
                            <Box className={classes.featureBoxImgWrapper}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/feature-icon.svg'} alt="" />
                            </Box>
                            <Box>
                                <Typography component='p' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--titleFontSize)', fontWeight: 500, }}>Features</Typography>
                                <Typography component='span' sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }}>A value for money investment option that
                                    match tax saving requirements!</Typography>
                            </Box>
                        </Box>
                        <Box>

                        </Box>
                    </Box>

                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default ULIPRecommendationCard