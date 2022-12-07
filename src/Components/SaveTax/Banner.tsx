import React from 'react'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';



const useStyles: any = makeStyles((theme: Theme) => ({
    bannerWrap: {
        backgroundImage: 'linear-gradient(100deg, #5450a1, #23db7b)',
        padding: '20px 30px',
        borderRadius: '16px',
        color: 'var(--uiWhite)',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        '& b': {
            fontSize: 'var(--fontSize14)',
            fontWeight: 500,
        },
        '& p': {
            fontSize: 'var(--subHeadingFontSize)',
            textTransform: 'uppercase',
            marginBottom: '6px',
        },
        '& span': {
            fontSize: 'var(--subTitleFontSize)',
        }
    },
    bannerBoxImg: {
        position: 'absolute',
        right: '0px',
        bottom: '0px',
    }
}));

const Banner = () => {
    const classes = useStyles()
    return (
        <Box className={classes.bannerWrap}>
            <Box>
                <b>SprintMoney offers</b>
                <Typography component="p">tax saving Plans</Typography>
                <Typography component="span">SAVE Upto ₹1.5 Lacs</Typography>
                <Button variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500', display: 'block', marginTop: '15px', zIndex: '1111' }}>Invest Now</Button>
            </Box>
            <Box>
                <img src={process.env.PUBLIC_URL + '/assets/images/save-tax-banner.svg'} alt="" />
                <img className={classes.bannerBoxImg} src={process.env.PUBLIC_URL + '/assets/images/save-tax-banner-bg-layout.svg'} alt="" />
            </Box>
        </Box>
    )
}

export default Banner