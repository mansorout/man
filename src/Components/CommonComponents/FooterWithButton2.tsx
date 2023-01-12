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
        boxShadow: "0 0 6px 0 rgb(0 0 0 / 16%) !important",
    },
    premiumAmountFooter: {
        backgroundColor: 'var(--uiWhite)',
        boxShadow: 'var(--themeShadow)',
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
    // boxIcon: React.ReactElement<any>;
    // boxText: string;
    // boxAmount: string;
    btnText: string;
    btnClick: () => void;
}
const FooterWithButton2 = (props: FooterBtnWithBoxType) => {
    const classes = useStyles()
    return (
        <Box sx={{
            position: 'relative',
            zIndex: '1',
            marginTop: '120px',
            
        }}>
            <div className={`${classes.premiumAmountFooter} ${classes.flexCommon}`}>
                <Button type='submit' sx={{ width: { xs: '85%', sm: '30%' } }} variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500', }} onClick={props.btnClick}>{props.btnText}</Button>
            </div>
        </Box>
    )
}

export default FooterWithButton2