import React, { useState } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import FooterBtnWithBox from '../CommonComponents/FooterBtnWithBox';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { useNavigate } from 'react-router-dom';
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
    tableStyle:{
        '& td':{
            '@media(max-width: 600px)':{
                padding: '10px',
            }
        },
        '& th':{
            '@media(max-width: 600px)':{
                padding: '10px',
            }
        }
    }

}))


const SaveTaxInvestmentType = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch: any = useDispatch()
    const {investmentAmount} = useSelector((state:any) => state.SaveTaxInvestmentType)
    const [investmentRecommendation, setInvestmentRecommendation] = useState<string>('ulip')

    function createData(
        heading: string,
        ulip: number | string,
        elss: number | string,
    ) {
        return { heading, ulip, elss, };
    }

    const rows = [
        createData('Post Tax Return in 10 Years', '₹ 10,00,000', '₹ 9,70,000'),
        createData('Investment (%) Return *', '18.6 %', '13.5%'),
        createData('Life Insurance Cover', '₹ 5,00,000', '(NIL)'),
        createData('Minimum investment period & Lock-in period', '5 Years', '3 Years'),
    ];

    const handleInvestmentRecommendation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvestmentRecommendation((event.target as HTMLInputElement).value);
    };
    const handleShowRecommendation = () => {
        investmentRecommendation === 'ulip' ? navigate('/saveTax/RecommendationsULIP') : navigate('/saveTax/RecommendationsELSS')
    }

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box className={classes.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' }, }} item xs={12}>
                        <h4>SprintMoney Recommendation</h4>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={investmentRecommendation}
                            onChange={handleInvestmentRecommendation}
                        >
                            <Box className={`${classes.blueBoxWithoutBorder}`}>
                                <Box className={`${classes.BlueBoxCustom}`}>
                                    <Box className={`${classes.recommendationsBox} ${investmentRecommendation === 'ulip' ? classes.recommendationsBoxBackgroundHover : ''}`}>

                                        <Badge
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            badgeContent='Recommended'
                                            color="primary"
                                            className={classes.badgeStyle}
                                        >
                                            <Box className={classes.blueBoxIconBox}>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/save-tax-wealth.svg'} alt="" />
                                            </Box>
                                        </Badge>
                                        <FormControlLabel value="ulip" control={<Radio />} label="ULIP" />
                                    </Box>

                                    <Box className={`${classes.recommendationsBox} ${investmentRecommendation === 'elss' ? classes.recommendationsBoxBackgroundHover : ''}`}>
                                        <Box className={classes.blueBoxIconBox}>
                                            <img src={process.env.PUBLIC_URL + '/assets/images/save-tax-wealth.svg'} alt="" />
                                        </Box>
                                        <FormControlLabel value="elss" control={<Radio />} label="ELSS" />
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
                                    </TableRow>
                                </TableHead> */}
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.heading}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.heading}
                                            </TableCell>
                                            <TableCell
                                                className={`${investmentRecommendation === 'ulip' ? classes.bgTableHighlightState : ''}`}
                                                align="right"
                                                sx={{ width: '130px', boxSizing: 'border-box' }}>
                                                {row.ulip}
                                            </TableCell>

                                            <TableCell
                                                className={`${investmentRecommendation === 'elss' ? classes.bgTableHighlightState : ''}`}
                                                align="right"
                                                sx={{ width: '130px', boxSizing: 'border-box' }}>
                                                {row.elss}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                        <FooterBtnWithBox
                            boxIcon={<ThumbUpAltOutlinedIcon />}
                            boxText='Great! Your total investment is'
                            boxAmount={`₹${investmentAmount}  Every Year`}
                            btnText='Show Me Recommendations'
                            btnClick={handleShowRecommendation}
                            btnDisable={false}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default SaveTaxInvestmentType