import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'


const useStyles: any = makeStyles((theme: Theme) => ({
    BannerWrapper: {
        backgroundColor: 'var(--ui1Color)',
        borderRadius: '8px',
        padding: '20px 20px'
    },
    bannerFlexBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    medicalTypeBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.54)',
        padding: '4px 8px',
        borderRadius: '2px',
        display: 'inline-block',
        '& span': {
            color: 'var(--ui2Color)',
            fontSize: 'var(--subTitleFontSize)',
            fontWeight: 500,
        }
    },
    leftContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    companyName: {
        color: 'var(--uiWhite)',
        fontSize: 'var(--headingMediumFontSize)',
        margin: '0px',
        marginBottom: '10px',
    },
    imgWrapper: {
        width: '75px',
        height: '75px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        padding: '6px',
        backgroundColor: 'var(--uiWhite)',
        margin: '0px 15px',
    },
    rightContent: {
        textAlign: 'right',
        '& span': {
            display: 'block',
            color: 'rgb(249 249 249 / 50%)',
            fontSize: 'var(--fontSize14)',
            margin: '6px 0px'
        },
        '@media(max-width: 725px)': {
            textAlign: 'left',
            margin: '15px 0px',
        }
    },
    amount: {
        backgroundColor: 'var(--uiWhite)',
        borderRadius: '4px',
        display: 'inline-block',
        padding: '4px 6px',
        '& p': {
            margin: '0px',
            color: 'var(--ui1Color) !important',
            fontSize: 'var(--subHeadingFontSize) !important',
        }
    },
    savingAmount: {
        '& p': {
            color: 'var(--uiWhite)',
            fontSize: 'var(--subHeadingFontSize)',
            marginBottom: '0px',
        }
    },
    bottomContent: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    planBrief: {
        margin: '10px 0px',
        padding: '0px',
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        '& li': {
            listStyleType: 'none',
            margin: '0px 20px'
        },
        '& span': {
            color: 'rgb(249 249 249 / 50%)',
            fontSize: 'var(--subTitleFontSize)',
        },
        '& p': {
            color: 'var(--uiWhite)',
            fontSize: 'var(--fontSize14)',
            margin: '6px'
        },
        '@media(max-width: 515px)': {
            justifyContent: 'center',
            '& li': {
                margin: '0px 8px'
            },
        }
    },
    leftRightBorder: {
        borderLeft: '1px solid rgb(249 249 249 / 50%)',
        borderRight: '1px solid rgb(249 249 249 / 50%)',
        padding: '0px 60px',

        '@media(max-width: 515px)': {
            padding: '0px 0px',
            border: 'none',
        }
    }
}))

interface InsurancePlanBannerPropsType {
    companyName: string;
    medicalType: string;
    imgUrl: string;
    amount: string;
    amountType: string;
    saveAmount: string;
    saveAmountType: string;
    bottomText: {
        lifeCoverKey: string;
        lifeCoverValue: string;
        CoverUptoKey: string;
        CoverUptovalue: string;
        claimSettledKey: string;
        claimSettledValue: string;
    }
}

const InsurancePlanBanner = (props: InsurancePlanBannerPropsType) => {
    const classes = useStyles()
    return (
        <Box className={classes.BannerWrapper}>
            <Box className={classes.bannerFlexBox}>
                <Box className={classes.leftContent}>
                    <Box className={classes.imgWrapper}>
                        <img src={props.imgUrl} alt="" />
                    </Box>
                    <Box>
                        <p className={classes.companyName}>{props.companyName}</p>
                        <Box className={classes.medicalTypeBox}>
                            <span>{props.medicalType}</span>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.rightContent}>
                    <Box className={classes.amount}>
                        <p>{props.amount}</p>
                    </Box>
                    <span>{props.amountType}</span>
                    <Box className={classes.savingAmount}>
                        <p>{props.saveAmount}</p>
                        <span>{props.saveAmountType}</span>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.bottomContent}>

                <ul className={classes.planBrief}>
                    <li>
                        <span>{props.bottomText.lifeCoverKey}</span>
                        <p>{props.bottomText.lifeCoverValue}</p>
                    </li>
                    <li className={classes.leftRightBorder}>
                        <span>{props.bottomText.CoverUptoKey}</span>
                        <p>{props.bottomText.CoverUptovalue}</p>
                    </li>
                    <li>
                        <span>{props.bottomText.claimSettledKey}</span>
                        <p>{props.bottomText.claimSettledValue}</p>
                    </li>
                </ul>
            </Box>
        </Box>
    )
}

export default InsurancePlanBanner