








import React,{useState} from 'react'
import { Box, Breadcrumbs, Button, Grid, Link, Modal, Toolbar, Typography, Theme, FormControl, FormControlLabel, RadioGroup, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { makeStyles } from '@mui/styles';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LineChart from '../../../Components/CommonComponents/Charts/LineChart';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Radio from '@mui/material/Radio';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
        padding: '4px 9px',
        backgroundColor: 'var(--blueColorOpacity)',
        margin: '5px 0px',
        borderRadius: '3px',
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
const { palette } = createTheme();
const theme = createTheme({
  palette: {

  },
});

const ULIPRecommendationCard = (props : ULIPRecommendationCardProps) => {
    const [value, setValue] = React.useState(true);
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
    const radiosvarible = {
        checked: value,
        onClick: () => setValue((v) => !v),
      };


    return (
        <div className='cardWrapperstyle' >
              <Box className={classes.cardWrapper} style={{boxShadow:" 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}}>
            <Grid container >
                <Grid item sm={6} xs={6} md={6}>
                    <Box  style={{display:"flex", alignItems:"center",marginRight:"20px"}} className="ImgwithtexStyle">
                        <Box className={classes.imgWrapper}>
                            <img src={props.logoUrl} alt="" />
                        </Box>
                        <b style={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subHeadingFontSize) 10px'}} className="companyNameStyle">{props.companyName}</b>
                    </Box>
                </Grid>
                <Grid item sm={6} xs={6} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                    <Box className='RadioButtonStyle'>
                        
                        <Box className={classes.projectedAmount}>
                            ₹{props.projectedAmount}
                        </Box >
                        <ThemeProvider theme={theme}>
      {/* pre-defined color */}
     
      <Radio
        {...radiosvarible}
        sx={{
          '&, &.Mui-checked': {
            color: '#70df70;',
            paddingLeft:" 23px "
          },
        }}
        className="radioSpace"
      
      />
    </ThemeProvider>
                        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)', marginTop:"-4px" }} component='p' className='ProjectedAmount'>Projected Amt.</Typography>
                    </Box>
                  
               
                </Grid>
            </Grid>
    <Grid container  sx={{padding:{xs:"20px 20px", sm:"20px", md:"20px 137px"}}} spacing={5}  className="TLITStyle">
        <Grid item xs={6} sm={6} md={3} >
        <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p' className="FontSizeTLIT">Top Performing Fund (10 Years)*</Typography>
        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>{props.topPerformingFund}% Return</Typography>
        </Grid>
             <Grid item xs={6} sm={6} md={3}>
         <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p' className="FontSizeTLIT">Life Cover</Typography>
        <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>₹{props.lifeCover}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className="TaxSavingStyle">
            <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p'className="FontSizeTLIT">Invested Value</Typography>
          <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>₹{props.investedVlaue}</Typography>

            </Grid>
            <Grid item xs={6} sm={6} md={3} className="TaxSavingStyle">
            <Typography sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} component='p'className="FontSizeTLIT">Tax Saving on Investment</Typography>
            <Typography sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} component='p'>₹{props.taxSavingOnInvestment} {/*Every Year */}</Typography>

            </Grid>
    </Grid>

        
            <Box >
                <Box className={classes.btnGroup+ " " + "ButtonKnowStyle"} >
                    <Button variant="contained" onClick={props.knowMoreAction} sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', },  backgroundColor: '#e3f6eb !important', color: 'var(--primaryColor) !important', }}>
                        <HelpOutlineOutlinedIcon sx={{ margin: '0px 2px' }} /> <Typography className="BROCHURESTYLE"> KNOW MORE</Typography> 
                    </Button>
                    <Button variant="contained" onClick={props.downloadBrochuraAction}  sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', }, backgroundColor: 'rgba(123, 123, 157, 0.05) !important' }}>
                        <FileDownloadIcon sx={{ margin: '0px 2px' }} /><Typography className="BROCHURESTYLE">DOWNLOAD BROCHURE</Typography>
                    </Button>
                </Box>
            </Box>

        </Box>
        </div>
      
    )
}

export default ULIPRecommendationCard