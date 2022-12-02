import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Modal, Theme, Typography } from '@mui/material'

const useStyles: any = makeStyles((theme: Theme) => ({
    insuranceTextSaving: {
        padding: '30px 15px',
        position: 'relative',
        // paddingBottom: '160px',
        height: 'calc(100% - 75px)',
        borderRadius: '8px'
    },
    insuranceTextSavingImage: {
        position: 'absolute',
        bottom: '-5px',
        right: '0px',
        maxWidth: '100%',
        overflow: 'hidden',
        borderRadius: '8px'
    },
}));

interface LongCardPropsTypes {
    heading: string;
    subHeading: string;
    amountText: string;
    amount: string;
    imgUrl: string;
    bgColor: string;
}
const LongCard = (props: LongCardPropsTypes) => {
    const classes = useStyles()
    return (
        <div className={classes.insuranceTextSaving} style={{ background: props.bgColor, }}>
            <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginBottom: '0px', fontWeight: 400, }}>{props.heading}</p>
            <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginTop: '7px', marginBottom: '40px', }}>{props.subHeading}</p>
            <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginBottom: '0px' }}>{props.amountText}</p>
            <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginTop: '0px', fontWeight: 400, }}>{props.amount}</p>

            <div className={classes.insuranceTextSavingImage}>
                <img src={props.imgUrl} alt="" />
            </div>
        </div>
    )
}

export default LongCard