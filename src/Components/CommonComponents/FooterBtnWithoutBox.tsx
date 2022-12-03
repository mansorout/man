import React from 'react'
import { Box, styled } from '@mui/system'
import { makeStyles } from '@mui/styles';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const useStyles: any = makeStyles((theme: Theme) => ({
    flexCommon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    premiumAmountFooter: {
        backgroundColor: 'var(--uiWhite)',
        boxShadow: 'var(--themeShadow)',
        padding: '15px',
        marginBottom: '-16px',
        marginLeft: '-16px',
        marginRight: '-16px',
    },
    premiumAmountBox: {
        backgroundColor: 'var(--lightGreenColor)',
        padding: '45px 15px',
        // paddingTop: '45px',
        position: 'absolute',
        top: 'calc(-100% - 38px)',
        zIndex: '-1',
        borderRadius: '20px',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    insuranceCardIcon: {
        backgroundColor: 'var(--primaryColor)',
        color: 'var(--uiWhite)',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '-18px',
    },
}))

interface FooterBtnWithBoxType {
    boxIcon: React.ReactElement<any>;
    boxText: string;
    boxAmount: string;
    btnText: string;
    btnClick: () => void
}

const FooterBtnWithoutBox = (props: FooterBtnWithBoxType) => {
    const classes = useStyles()
    return (

       
            <div className={`${classes.premiumAmountFooter} ${classes.flexCommon}`}>
                <Button sx={{ width: { xs: '85%', sm: '40%' } }} variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500', }} onClick={props.btnClick}>{props.btnText}</Button>
                <Box className={classes.premiumAmountBox} sx={{ width: { xs: '80%', sm: '35%' } }}>
                    <div className={classes.insuranceCardIcon}>
                        {props.boxIcon}
                    </div>
                    <b style={{ fontSize: 'var(--titleFontSize)', fontWeight: '500', color: 'var(--typeBlackColor)', display: 'block', marginBottom: '5px' }}>{props.boxText}</b>
                    <b style={{ fontSize: 'var(--subHeadingFontSize)', fontWeight: '500', color: 'var(--typeBlackColor)', display: 'block', }}>{props.boxAmount}</b>
                </Box>
            </div>
       
    )
}

export default FooterBtnWithoutBox