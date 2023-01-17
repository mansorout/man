import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
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
        boxShadow: '0 0 6px 0 rgb(0 0 0 / 16%) !important',
        padding: '15px',
        marginLeft: '-16px',
        marginRight: '-16px',
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        left: '0px !important',
        transform:" translateX(7%)",
        '@media(max-width: 600px)': {
            transform: 'translateX(0%)'
        }
    },
    premiumAmountBox: {
        backgroundColor: 'var(--lightGreenColor)',
        padding: '24px 15px',
        // paddingTop: '45px',
        position: 'absolute',
        top: 'calc(-100% - 28px)',
        zIndex: '0',
        borderRadius: '20px 20px 0px 0px',
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
    bgGreenColor:{
        backgroundColor: 'var(--primaryColor) !important',
    }
}))

interface FooterBtnWithBoxType {
    boxIcon: React.ReactElement<any>;
    boxText: string | ReactNode;
    boxAmount: number | string | null;
    btnText: string;
    btnClick: () => void;
    btnDisable ?: boolean;
}

const FooterBtnWithBox = (props: FooterBtnWithBoxType) => {
    const classes = useStyles()
    return (

        <Box sx={{
            position: 'relative',
            zIndex: '1',
            marginTop: '200px',
        }}>
            <div className={`${classes.premiumAmountFooter} ${classes.flexCommon}`}>
                <Button className={`${props?.btnDisable === true ? '': classes.bgGreenColor}`} sx={{ width: { xs: '85%', sm: '40%' } }} variant="contained" style={{ color: 'var(--uiWhite)', fontWeight: '500', }} onClick={props?.btnClick} disabled={props?.btnDisable}>{props?.btnText}</Button>
                <Box className={classes.premiumAmountBox} sx={{ width: { xs: '80%', sm: '35%' } }}>
                    <div className={classes.insuranceCardIcon}>
                        {props?.boxIcon}
                    </div>
                    <b style={{ fontSize: 'var(--titleFontSize)', fontWeight: '500', color: 'var(--typeBlackColor)', display: 'block', marginBottom: '5px' }}>{props?.boxText}</b>
                    <b style={{ fontSize: 'var(--subHeadingFontSize)', fontWeight: '500', color: 'var(--typeBlackColor)', display: 'block', }}>{props?.boxAmount}</b>
                </Box>
            </div>
        </Box>
    )
}

export default FooterBtnWithBox