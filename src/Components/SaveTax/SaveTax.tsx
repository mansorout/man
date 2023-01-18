import React,{useEffect} from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Breadcrumbs, Theme, Typography, Link } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import Banner from './Banner'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { getDataModuleDefaultListApi } from '../../Store/Save Tax/thunk/save-tax-thunk';
import { useDispatch } from 'react-redux';



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
        marginBottom:"20px",
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
        '& button:first-child': {
            fontWeight: '500',
            transition: 'all 0.3s ease-in-out',
            backgroundColor: 'var(--primaryColor)',
            color: 'var(--uiWhite)',
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
    const dispatch:any = useDispatch();

    const handleYesBtn = () => {
        navigate('/saveTax/saveTaxAmount');
    }

    const handleAssitance = () => {
        navigate('/saveTax/taxCanSave');
    }

    useEffect(() => {
        dispatch(getDataModuleDefaultListApi(2))
    }, [])
    
    

    return (
        <Box style={{ width: "100vw" }}>
        <Navbar />
        <Box sx={{width:"100%"}}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid sx={{ height: "100vh", padding: 0, boxSizing: "border-box", overflow: "scroll" }} xs={12} sm={10} md={10}>
                <Grid container>
                    <Grid xs={12} sm={12} md={12}>
                    <Toolbar />
                    <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="#6495ED" underline="always" href='Home' >
                      <Typography className='burgerText'> Home</Typography>
                    </Link>
                    <Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                      <Typography className='burgerText'>saveTax</Typography>
                    </Link>
                  </Breadcrumbs>
                </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{padingTop:{xs:"-20px", sm:"-40px"}}}>
                    <Grid xs={12} sm={12} md={12}>
                    <Box className="BoxMarginLeftRight">
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
                    </Box>
                    </Grid>
                </Grid>
          </Grid>
                   
          </Grid>
            </Box>
        </Box>
    )
}

export default SaveTax