import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Modal, Theme, Typography } from '@mui/material'

const useStyles: any = makeStyles((theme: Theme) => ({
    insuranceCardIcon: {
        // backgroundColor: 'var(--primaryColor)',
        // color: 'var(--uiWhite)',
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

interface IconWithBgColorPropsType {
    icon: React.ReactElement<any>;
    bgColor: string;
    iconColor: string;
}

const IconWithBgColor = (props: IconWithBgColorPropsType) => {
    const classes = useStyles()
    return (
        <div className={classes.insuranceCardIcon} style={{ backgroundColor: props.bgColor, color: props.iconColor }}>
            {props.icon}
        </div>
    )
}

export default IconWithBgColor