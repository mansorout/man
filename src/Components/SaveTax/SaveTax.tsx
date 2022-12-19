import React,{useEffect} from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import Banner from './Banner'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const useStyles: any = makeStyles((theme: Theme) => ({
    main: {
        boxSizing: "border-box",
        backgroundColor: "var(--bgLayoutColor)",
    },
    iconBoxcmp: {
        textAlign: 'center',
        '& p': {
            color: 'var(--typeIndigoColor)',
            width: '65%',
            margin: 'auto',
        }
    },
    iconBoxWrapper: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(100 219 255 / 40%)',
        margin: 'auto',
    },
    iconBoxGroupWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '35px 0px',
        '& svg': {
            fontSize: 'var(--headingFontSize)',
            color: 'var(--primaryColor)'
        },
        '@media(max-width: 550px)': {
            '& p': {
                width: '100% !important',
            },
        },
        '@media(max-width: 440px)': {
            flexDirection: 'column',
        }
    },
    investToSaveTax: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.1)',
        backgroundColor: 'var(--uiWhite)',
        padding: '15px 30px',
        borderRadius: '8px',
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--subHeadingFontSize)',
        }
    },
    btnGroupBox: {
        '& button': {
            fontWeight: '500',
            transition: 'all 0.3s ease-in-out',
            backgroundColor: 'var(--uiWhite)',
            color: 'var(--primaryColor)',
            border: '1px solid var(--primaryColor)',
            boxShadow: 'none',
            margin: '5px 6px',
            '&:hover': {
                backgroundColor: 'var(--primaryColor)',
                color: 'var(--uiWhite)',
            }
        },

        '@media(max-width: 440px)': {
            '& button': {
                width: '100%',
            }
        }
    }
}));

interface iconBoxPropsType {
    imgUrl: string;
    text: string;
}

const IconBox = (props: iconBoxPropsType) => {
    const classes = useStyles()
    return (
        <Box className={classes.iconBoxcmp}>
            <Box className={classes.iconBoxWrapper}>
                <img src={props.imgUrl} alt="" />
            </Box>
            <Typography component='p'>{props.text}</Typography>
        </Box>
    )
}


const SaveTax = () => {
    const classes = useStyles()
    const navigate = useNavigate();

    const handleYesBtn = () => {
        navigate('/saveTax/saveTaxAmount');
    }

    const handleAssitance = () => {
        navigate('/saveTax/taxCanSave');
    }

    

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box className={classes.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' } }} item xs={12}>
                        <Banner
                            smText='SprintMoney offers'
                            planText='tax saving Plans'
                            saveUptoText='SAVE Upto ₹1.5 Lacs'
                            bgGradient='linear-gradient(100deg, #5450a1, #23db7b)'
                            bannerImageUrl={`${process.env.PUBLIC_URL}/assets/images/save-tax-banner.svg`}
                            bgLayoutImgUrl={`${process.env.PUBLIC_URL}/assets/images/save-tax-banner-bg-layout.svg`}
                            btnText='Invest Now'
                            btnAction={() => navigate('/saveTax/saveTaxAmount')} 
                        />

                        <Box className={classes.iconBoxGroupWrapper}>
                            <IconBox
                                imgUrl={`${process.env.PUBLIC_URL}/assets/images/tax_saving.svg`}
                                text='Tax saving under 80C'
                            />
                            <AddCircleIcon />
                            <IconBox
                                imgUrl={`${process.env.PUBLIC_URL}/assets/images/build_wealth.svg`}
                                text='Build wealth with
                                higher returns'
                            />
                            <AddCircleIcon />
                            <IconBox
                                imgUrl={`${process.env.PUBLIC_URL}/assets/images/securing-life.svg`}
                                text='Options for securing life'
                            />
                        </Box>

                        <Box className={classes.investToSaveTax}>
                            <Typography component='p'>Do you know how much you wish to invest to save tax?</Typography>
                            <Box className={classes.btnGroupBox}>
                                <Button variant="contained" onClick={handleYesBtn}>Yes</Button>
                                <Button variant="contained" onClick={handleAssitance}>No, I Need Assistance</Button>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default SaveTax