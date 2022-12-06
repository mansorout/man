import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const useStyles: any = makeStyles((theme: Theme) => ({
    flexCommon: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    insuranceCard: {
        backgroundColor: 'var(--uiWhite)',
        padding: '15px 15px',
        borderRadius: '8px',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.1)',
        height: 'calc(100% - 15px)',
        '@media(max-width: 767px)': {
            margin: '0px -7px',
        }
    },
    insuranceCardHead: {
    },
    insuranceCardImage: {
        alignItems: 'flex-end'
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
        marginTop: '15px',
        cursor: 'pointer',
    },
}));

interface BoxCardProps {
    heading: string;
    headIcon: React.ReactElement<any>;
    detailText: string;
    bottomImageUrl: string;
    bottomNavigationIcon: React.ReactElement<any>
    btnClick: () => void
}
const BoxCard = (props: BoxCardProps) => {
    const classes = useStyles()
    return (
        <div className={classes.insuranceCard}>
            <div className={`${classes.insuranceCardHead} ${classes.flexCommon}`}>
                <h5 style={{ margin: '0px', }}>{props.heading}</h5>
                {props.headIcon}
                {/* <ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} /> */}
            </div>
            <p style={{ color: 'var(--typeIndigoColor)', fontSize: '14px', }}>{props.detailText}</p>
            <div className={`${classes.insuranceCardImage} ${classes.flexCommon}`} onClick={props.btnClick}>
                <img src={props.bottomImageUrl} alt="" />
                <div className={classes.insuranceCardIcon} >
                    {/* <ArrowForwardIcon /> */}
                    {props.bottomNavigationIcon}
                </div>
            </div>
        </div>
    )
}

export default BoxCard