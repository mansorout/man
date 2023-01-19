import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Padding } from '@mui/icons-material';
import Radio from '@mui/material/Radio';

const useStyles: any = makeStyles((theme: Theme) => ({
    flexCommon: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    cmpWrap: {
        margin: '25px 0px',
        backgroundColor: 'var(--uiWhite)',
        boxShadow: '0 0 6px 0 rgb(0 0 0 / 16%) !important',
        borderRadius: '8px',
        padding: '6px 12px',
        paddingBottom: '0px',
    },
    planCard: {
        margin: '10px 0px',
    },
    planDetailWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        '&>p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--fontSize14)',
            fontWeight: 500,
        }
    },
    imgWrapper: {
        width: '45px',
        height: '45px',
        boder: '1px solid var(--typeLightGreyColor)',
        borderRadius: '50%',
        '& img': {
            maxWidth: '100%',
            height: 'auto',
        }
    },
    medicalTypeBox: {
        backgroundColor: '#7b7b9d29',
        padding: '4px 8px',
        borderRadius: '2px',
        display: 'inline-block',
        '& span': {
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--subTitleFontSize)',
            fontWeight: 500,
        }
    },
    companyNameWrapper: {
        paddingLeft: '15px',
        '&>p': {
            margin: '10px 0px',
            fontWeight: 500,
        }
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
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--subTitleFontSize)',
        },
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--fontSize14)',
        }
    },
    amount: {
        color: 'var(--ui1Color)',
        fontSize: 'var(--fontSize14)',
        fontWeight: 500,
        backgroundColor: '#6c63ff4d',
        display: 'inline-block',
        textAlign: 'center',
        padding: '5px 8px',
    },
    amountWrapper: {
        alignItems: 'flex-start',
        margin: '10px 0px',
        '& p': {
            margin: '0px',
            marginTop: '6px',
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--subTitleFontSize)',
        }
    },
    planOffer: {
        borderTop:'1px #a6d7e6 solid',
        backgroundColor: '#64dbff40',
        padding: '7px 15px',
        margin: '15px -12px',
        borderRadius: '0px 0px 8px 8px',
        '& p': {
            margin: '0px',
            fontSize: 'var(--subTitleFontSize)',
            color: '#626468',
        }
    }
}))

interface InsurancePlanCardPropsType {
    data:any;
    insuranceCompany: string;
    medicalType: string;
    companyLogo: string;
    lifeCover: number;
    coverUpto: string;
    claimSettled: string;
    planAmount: string;
    amountType: string;
    planOffer: string;
}

const InsurancePlanCard = (props: InsurancePlanCardPropsType) => {
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.cmpWrap}>
                <Box className={`${classes.planCard} ${classes.flexCommon}`}>
                    <Box className={`${classes.planDetailWrapper} ${classes.flexCommon}`}>
                        <Box className={classes.imgWrapper}>
                            <img src={props.companyLogo} alt="" />
                        </Box>
                        <Box className={classes.companyNameWrapper}>
                            <p>{props.insuranceCompany}</p>
                            <Box className={classes.medicalTypeBox}>
                                <span>{props.medicalType}</span>
                            </Box>
                        </Box>
                    </Box>

                    <ul className={classes.planBrief}>
                        <li>
                            <span>Life Cover</span>
                            <p>{props.lifeCover}</p>
                        </li>
                        <li>
                            <span>Cover Upto</span>
                            <p>{props.coverUpto}</p>
                        </li>
                        <li>
                            <span>Claim Settled</span>
                            <p>{props.claimSettled}</p>
                        </li>
                    </ul>

                    <Box className={`${classes.amountWrapper} ${classes.flexCommon}`}>
                        <Box sx={{ marginRight: '20px' }}>
                            <Box className={classes.amount}>
                                <span>{props.planAmount}</span>
                            </Box>
                            <p>{props.amountType}</p>
                        </Box>
                        {/* <FormGroup> */}
                            {/* <FormControlLabel control={<Checkbox defaultChecked />} label="" /> */}
                            <FormControlLabel value={props?.data?.recommendation_id} control={<Radio />} label="" />
                            {/* <FormControlLabel value="female" control={<Radio />} label="Female" /> */}
                        {/* </FormGroup> */}
                    </Box>
                </Box>
                <Box className={classes.planOffer}>
                    {/* <p>Buy online and <b>Save up to 3.75%</b></p> */}
                    {props.planOffer}
                </Box>
            </Box>
        </div>
    )
}

export default InsurancePlanCard