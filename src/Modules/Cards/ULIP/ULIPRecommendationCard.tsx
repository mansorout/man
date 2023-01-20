import React,{useState} from 'react'
import { Box, Breadcrumbs, Button, Grid, Link, Modal, Toolbar, Typography, Theme, FormControl, FormControlLabel, RadioGroup, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { makeStyles } from '@mui/styles';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LineChart from '../../../Components/CommonComponents/Charts/LineChart';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Radio from '@mui/material/Radio';
import './Uliprecom.css'
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
            listStyleType: 'none',
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
}))

interface ULIPRecommendationCardProps {
    logoUrl: string;
    companyName: string;
    projectedAmount: number;
    topPerformingFund: string;
    lifeCover: number;
    investedVlaue: number;
    taxSavingOnInvestment: number;
    knowMoreAction: () => void;
    downloadBrochuraAction: () => void;
}

const ULIPRecommendationCard = (props : ULIPRecommendationCardProps) => {
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



    return (
        <div className='cardWrapperstyle'>
              <Box className={classes.cardWrapper}>
            <Grid container >
                <Grid item sm={6} xs={12}>
                    <Box className={classes.logoWrapper}>
                        <Box className={classes.imgWrapper}>
                            <img src={props.logoUrl} alt="" />
                        </Box>
                        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subHeadingFontSize)' }} component='p'>{props.companyName}</Typography>
                    </Box>
                </Grid>
                <Grid item sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                    <Box>
                        <Box className={classes.projectedAmount}>
                            ₹{props.projectedAmount}
                        </Box>
                        &nbsp;
                            <FormControlLabel sx={{margin:'0px 5px'}} value="female" control={<Radio />} label="" />
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)' }} component='p'>Projected Amt.</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Box>
                <ul className={classes.listStyle}>
                    <li>
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p'>Top Performing Fund (10 Years)*</Typography>
                        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>{props.topPerformingFund}% Return</Typography>
                    </li>
                    <li>
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p'>Life Cover</Typography>
                        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>₹{props.lifeCover}</Typography>
                    </li>
                    <li>
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p'>Invested Value</Typography>
                        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>₹{props.investedVlaue}</Typography>
                    </li>
                    <li>
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p'>Tax Saving on Investment</Typography>
                        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>₹{props.taxSavingOnInvestment} {/*Every Year */}</Typography>
                    </li>
                </ul>
            </Box>
            <Box>
                <Box className={classes.btnGroup}>
                    <Button variant="contained" onClick={props.knowMoreAction} sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', },  backgroundColor: '#e3f6eb !important', color: 'var(--primaryColor) !important', }}>
                        <HelpOutlineOutlinedIcon sx={{ margin: '0px 2px' }} />KNOW MORE
                    </Button>
                    <Button variant="contained" onClick={props.downloadBrochuraAction}  sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', }, backgroundColor: 'rgba(123, 123, 157, 0.05) !important' }}>
                        <FileDownloadIcon sx={{ margin: '0px 2px' }} />DOWNLOAD BROCHURE
                    </Button>
                </Box>
            </Box>

        </Box>
        </div>
      
    )
}

export default ULIPRecommendationCard