import React, { useState, useEffect } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Breadcrumbs, Link, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import FooterBtnWithBox from '../CommonComponents/FooterBtnWithBox';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { useNavigate, } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Badge from '@mui/material/Badge';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import {
    getDataSaveTaxInvestmentType,
    postSaveTaxGenrateApi
} from '../../Store/Save Tax/thunk/save-tax-thunk'
import siteConfig from '../../Utils/siteConfig'
import { bannerSectionValues, globalConstant, lookUpMasterKeys } from '../../Utils/globalConstant';
import { customParseJSON, getLookUpIdWRTModule } from '../../Utils/globalFunctions';
import { config } from 'process';
import { getComparisonBetweenMutualFundThunkAndUlip } from '../../Store/Recommendations/thunk/recommendations-thunk';
import FooterWithBtn from '../CommonComponents/FooterWithBtn';


const useStyles: any = makeStyles((theme: Theme) => ({
    main: {
        boxSizing: "border-box",
        backgroundColor: "var(--bgLayoutColor)",
    },
    blueBoxWithoutBorder: {
        backgroundColor: 'var(--ui1Color)',
        // padding: '15px',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },
    blueBoxIconBox: {
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bgColor)',
        margin: '0px 15px',
    },
    BlueBoxCustom: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& p': {
            color: 'var(--uiWhite)',
            fontSize: 'var(--subHeadingFontSize)',
        }
    },
    recommendationsBox: {
        padding: '15px 18px',
        paddingBottom: '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: '#6a63f6',
        '& p': {
            marginTop: '4px',
        },
        '& label': {
            margin: '0px',
            marginTop: '6px',
            '& span': {
                color: 'var(--uiWhite) !important',
            }
        },
        "&:hover": {
            backgroundColor: 'rgb(255 255 255 / 30%)'
        }
    },
    recommendationsBoxBackgroundHover: {
        backgroundColor: 'rgb(255 255 255 / 30%) !important'
    },
    bgTableHighlightState: {
        backgroundColor: '#e9f8fe',
        borderLeft: '1px solid var(--ui1Color) !important',
        borderRight: '1px solid var(--ui1Color) !important',
    },
    badgeStyle: {
        '&>span': {
            right: '50% !important',
        }
    },
    tableStyle: {
        '& td': {
            '@media(max-width: 600px)': {
                padding: '10px',
            }
        },
        '& th': {
            '@media(max-width: 600px)': {
                padding: '10px',
            }
        }
    }

}))

const enumRecommendationOptions = {
    ULIP: 'ULIP',
    MUTUAL_FUND: 'Mutual Fund',
}

const SipComparison = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch: any = useDispatch()
    const { investmentAmount, savetaxPercentageAmount } = useSelector((state: any) => state.InvestmentTypeReducers)
    // const {comparisonData} = useSelector((state:any) => state.saveTaxReducer)
    const [investmentRecommendation, setInvestmentRecommendation] = useState<string>(enumRecommendationOptions?.ULIP)
    const [comparisonData, setComparisonData] = useState<any>({})
    const [rows, setRows] = useState<{
        heading: string;
        ulip: string | number;
        elss: string | number;
    }[]>([])


    function createData(
        heading: string,
        ulip: number | string,
        elss: number | string,
    ) {
        return { heading, ulip, elss, };
    }



    useEffect(() => {
        // const bannersectionArr = customParseJSON(localStorage.getItem(lookUpMasterKeys.BANNER_SECTION))
        // // const lookUpSaveTaxObj = bannersectionArr.filter((item:any) => item.value === bannerSectionValues.SAVE_TAX && item)
        // const lookUPId = getLookUpIdWRTModule(bannersectionArr, bannerSectionValues.SAVE_TAX)

        // const saveTavGenrateBody = {
        //     investmenttype_id: lookUPId,
        //     amount: parseInt(investmentAmount),
        // }
        // if(parseInt(investmentAmount) === 0) navigate(-1)
        const tempAmount = localStorage.getItem(siteConfig?.SIP_USER_AMOUNT)
        const tempUrl = `/recommendation/mutualfund/comparison/?amount=${tempAmount}&frequencytype=1`
        const res = getComparisonBetweenMutualFundThunkAndUlip(tempUrl)
        res.then((data) => {
            console.log("getComparisonBetweenMutualFundThunkAndUlip :", data.data)
            setComparisonData(data.data)
        }).catch((err) => {
            console.error(err.error)
        })
        // dispatch(getDataSaveTaxInvestmentType(res))
        // dispatch(getDataSaveTaxInvestmentType(investmentAmount))
        // console.log("investmentAmount :", investmentAmount, savetaxPercentageAmount)

        // dispatch(postSaveTaxGenrateApi(saveTavGenrateBody))
    }, [])

    useEffect(() => {
        const tempArr = [];
        let index = 0;
        for (let k in comparisonData) {
            tempArr.push(createData(Object.keys(comparisonData)[index], comparisonData[k].ULIP, comparisonData[k][enumRecommendationOptions?.MUTUAL_FUND],))
            index++
        }
        setRows(tempArr);
    }, [comparisonData])



    const handleInvestmentRecommendation = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("setInvestmentRecommendation :", (event.target as HTMLInputElement).value)
        setInvestmentRecommendation((event.target as HTMLInputElement).value);
    };
    const handleShowRecommendation = () => {
        investmentRecommendation === enumRecommendationOptions?.ULIP && navigate('/SipRecommendationsULIP')
        investmentRecommendation === enumRecommendationOptions?.MUTUAL_FUND && navigate('/onetimemutualfundrecommendation')
    }

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box sx={{ width: "100%" }}>
                <Grid container spacing={0}>
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />
                        <Sidebar />
                    </Grid>
                    <Grid sx={{ height: "100vh", padding: 0, boxSizing: "border-box", overflow: "scroll" }} xs={12} sm={11} md={10}>
                        <Grid container>
                            <Grid xs={12} sm={12} md={12}>
                                <Toolbar />
                                <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Link color="#6495ED" underline="always" href='Home' >
                                            <Typography className='burgerText'> Home</Typography>
                                        </Link>
                                        <Link color="#6495ED" underline="always" onClick={() => navigate('/sipInvestment',{
                                            state: {
                                                cardType: globalConstant.SIP_INVESTMENT
                                            }
                                            })}>
                                            <Typography className='burgerText'> Investment</Typography>
                                        </Link>
                                        <Link color="#6495ED" underline="always" onClick={() => navigate('/startAnSip')}>
                                            <Typography className='burgerText'> Start an SIP</Typography>
                                        </Link>
                                        <Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                                            <Typography className='burgerText'>Recommendation</Typography>
                                        </Link>
                                    </Breadcrumbs>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs={12} sm={12} md={12}>
                                <Box className="BoxMarginLeftRight">
                                    <Typography component='h4' sx={{ margin: { xs: '5px 0px 5px 1px', sm: '-12px 0px 12px 0px' }, position: "relative" }} >SprintMoney Recommendation</Typography>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={investmentRecommendation}
                                        onChange={handleInvestmentRecommendation}
                                    >
                                        <Box className={`${classes.blueBoxWithoutBorder}`}>
                                            <Box className={`${classes.BlueBoxCustom}`}>
                                                <Box className={`${classes.recommendationsBox} ${investmentRecommendation === enumRecommendationOptions?.ULIP ? classes.recommendationsBoxBackgroundHover : ''}`}>

                                                    <Badge
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'right',
                                                        }}
                                                        // badgeContent='Recommended'
                                                        color="primary"
                                                        className={classes.badgeStyle}
                                                    >
                                                        <Box className={classes.blueBoxIconBox}>
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/UlipLogoasLogo.svg'} alt="" />
                                                        </Box>
                                                    </Badge>
                                                    <FormControlLabel value={enumRecommendationOptions?.ULIP} control={<Radio />} label="ULIP" />
                                                </Box>

                                                <Box className={`${classes.recommendationsBox} ${investmentRecommendation === enumRecommendationOptions?.MUTUAL_FUND ? classes.recommendationsBoxBackgroundHover : ''}`}>
                                                    <Box className={classes.blueBoxIconBox}>
                                                        <img src={process.env.PUBLIC_URL + '/assets/images/Ells-icon.svg'} alt="" />
                                                    </Box>
                                                    <FormControlLabel value={enumRecommendationOptions?.MUTUAL_FUND} control={<Radio />} label={enumRecommendationOptions?.MUTUAL_FUND} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </RadioGroup>


                                    <TableContainer component={Paper}>
                                        <Table aria-label="a dense table" className={classes.tableStyle}>
                                            {/* <TableHead>
            <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
            </TableRow>P
        </TableHead> */}
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                        key={row?.heading}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row?.heading}
                                                        </TableCell>
                                                        <TableCell
                                                            className={`${investmentRecommendation === enumRecommendationOptions?.ULIP ? classes.bgTableHighlightState : ''}`}
                                                            align="right"
                                                            sx={{ width: '130px', boxSizing: 'border-box' }}>
                                                            {row?.ulip}
                                                        </TableCell>

                                                        <TableCell
                                                            className={`${investmentRecommendation === enumRecommendationOptions?.MUTUAL_FUND ? classes.bgTableHighlightState : ''}`}
                                                            align="right"
                                                            sx={{ width: '156px', boxSizing: 'border-box' }}>
                                                            {row?.elss}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>


                                    <FooterWithBtn
                                        // boxIcon={<ThumbUpAltOutlinedIcon />}
                                        // boxText='Great! Your SIP is'
                                        // boxAmount={`₹${localStorage.getItem(siteConfig?.SIP_USER_AMOUNT)}`}
                                        btnText='Show Me Recommendations'
                                        btnClick={handleShowRecommendation}
                                        btnDisable={false}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default SipComparison