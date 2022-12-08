import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Modal, Theme, Typography } from '@mui/material'

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
    termInsuranceCard: {
        display: 'flex',
        paddingBottom: '0px',
    },
}));

interface HorizontalImgIconLongcardTypes {
    heading: string;
    subHeading: string;
    imgUrl: string;
    headIcon: React.ReactElement<any>;
    navigatIcon: React.ReactElement<any>;
    showInsuranceTerms?: () => void
}


const HorizontalImgIconLongcard = (props: HorizontalImgIconLongcardTypes) => {
    const classes = useStyles()
    return (
        <div className={`${classes.insuranceCard} ${classes.termInsuranceCard}`}>
            <div>
                <img src={props.imgUrl} alt="" />
            </div>
            <div style={{ width: '100%', margin: '0px 15px', }}>
                <div className={`${classes.insuranceCardHead} ${classes.flexCommon}`}>
                    <h5 style={{ margin: '0px', }}>{props.heading}</h5>
                    {props.headIcon}
                </div>
                <div className={`${classes.insuranceCardImage} ${classes.flexCommon}`}>
                    <p style={{ color: 'var(--typeIndigoColor)', fontSize: '14px', }}>{props.subHeading}</p>
                    <div className={classes.insuranceCardIcon} onClick={props.showInsuranceTerms}>
                        {props.navigatIcon}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalImgIconLongcard