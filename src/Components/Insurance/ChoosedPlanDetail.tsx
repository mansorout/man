import React, { useState } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FooterBtnWithBox from '../CommonComponents/FooterBtnWithBox'
import InsurancePlanBanner from './InsurancePlanBanner'
import { clockClasses } from '@mui/x-date-pickers';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
import BackToHomeDiloag from '../CommonComponents/BackToHomeDiloag';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { useNavigate } from 'react-router-dom';

const style = {
    main: {
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9",
        // height: "100vh"
    } as React.CSSProperties,
}

const useStyles: any = makeStyles((theme: Theme) => ({
    whyBuyTermInsurance: {
        backgroundColor: 'var(--uiWhite)',
        boxShadow: 'var(--themeShadow)',
        padding: '15px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'flex-start',
        flexWrap: 'wrap',
        margin: '20px 0px',
        '@media(max-width: 600px)':{
            '&>div':{
                width: '100%',
            }
        }
        // paddingBottom: '50px',
    },
    whyBuyTermInsuranceContentWrapper: {
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--subHeadingFontSize)',
            margin: '6px 0px',
        },
        '& span': {
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--fontSize14)'
        }
    },
    broucherDownloadBtnWrapper: {
        textAlign: 'right',
    },
    broucherDownloadBtn: {
        display: 'flex !important',
        alignItems: 'center',
        backgroundColor: '#f8f8fa !important',
        boxShadow: 'var(--themeShadow) !important',
        color: 'var(--typeIndigoColor) !important',
        marginTop: '20px !important',
    },
    arrowTransition: {
        transform: 'rotate(180deg)',
    }

}))
const ChoosedPlanDetail = () => {
    const classes = useStyles()
    const navigate = useNavigate();
    const [broucherBtnShowHide, setBroucherBtnShowHide] = useState<boolean>(false)
    const [lodaingCmpShow, setLodaingCmpShow] = useState<boolean>(false)
    const [backHomeCmp, setBackHomeCmp] = useState<boolean>(false)

    const handleBuyNow = () => {
        setLodaingCmpShow(true)

        setTimeout(() => {
            setLodaingCmpShow(false)
            setBackHomeCmp(true)
        }, 1000);

    }

    const handleGreenBtnAction = () => {
        navigate('/home')
    }

    const handleGrayBtnAction = () => {

    }

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box sx={style.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' } }} item xs={12}>
                        {
                            !lodaingCmpShow && !backHomeCmp ? (
                                <Box>
                                    <Box >
                                        <InsurancePlanBanner
                                            companyName='HDFC Life  - C2PP Life Option'
                                            medicalType='No Medical'
                                            imgUrl={`${process.env.PUBLIC_URL}assets/images/travel-insurance.svg`}
                                            amount='₹8,777'
                                            amountType='Annual Premium'
                                            saveAmount='₹1,46,625'
                                            saveAmountType='Buy online and Save Upto'
                                            bottomText={{
                                                lifeCoverKey: 'Life Cover',
                                                lifeCoverValue: '₹1 Crore',
                                                CoverUptoKey: 'Cover Upto',
                                                CoverUptovalue: '65 Years',
                                                claimSettledKey: 'Claim Settled',
                                                claimSettledValue: '98.8%'
                                            }
                                            }
                                        />
                                    </Box>
                                    <Box className={classes.whyBuyTermInsurance}>
                                        <Box className={classes.whyBuyTermInsuranceContentWrapper}>
                                            <p>Key Advantages</p>
                                            <span>Why should you Buy Term Insurance?</span>
                                        </Box>
                                        <Box className={classes.broucherDownloadBtnWrapper}>
                                            <Button style={{ transition: 'all 0.3 linear' }} onClick={() => setBroucherBtnShowHide(!broucherBtnShowHide)}> <KeyboardArrowUpOutlinedIcon className={`${broucherBtnShowHide ? classes.arrowTransition : ''}`} /> </Button>
                                            {
                                                broucherBtnShowHide && (
                                                    <Button variant="contained" className={classes.broucherDownloadBtn}> <FileDownloadIcon /> download brochure </Button>
                                                )
                                            }

                                        </Box>
                                    </Box>
                                    <FooterBtnWithBox
                                        boxIcon={<ThumbUpOffAltIcon />}
                                        boxText='Total Annual Premium'
                                        boxAmount='₹8,777'
                                        btnText='Buy Now'
                                        btnClick={handleBuyNow}
                                    />
                                </Box>
                            ) : lodaingCmpShow ? (
                                <Box>Loding...</Box>
                            ) : (
                                <Box>
                                    <BackToHomeDiloag
                                        icon={<TaskAltOutlinedIcon />}
                                        heading='Congrats! Your Transaction is being Processed'
                                        paragraph='We will notify you via email in 1 or 2 working days once the units are allotted. You can track status under transactions tab of your portfolio.'
                                        greenBtnText='Back to Home'
                                        grayBtnText='Track Transactions'
                                        greenBtnAction={handleGreenBtnAction}
                                        grayBtnAction={handleGrayBtnAction}
                                    />
                                </Box>
                            )
                        }
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ChoosedPlanDetail