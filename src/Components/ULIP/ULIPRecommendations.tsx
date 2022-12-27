import { useRef, useState } from "react";
import { Box, Breadcrumbs, Button, Grid, Link, Modal, Toolbar, Typography,Theme } from "@mui/material";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import ULIPCoFundCard, { ULIPProp } from "../../Modules/Cards/ULIP/ULIPCoFundCard";
import ULIPHeader from "../../Modules/Cards/ULIP/ULIPHeader";
import ULIPFooter from "../../Modules/Cards/ULIP/ULIPFooter";
import ULIPBlueButton from "../../Modules/Buttons/ULIP/ULIPBlueButton";
import DateConfirmedDialog from "./DateConfirmedDialog";
import ThirdPartyRedirection from "./ThirdPartyRedirection";
import TransactionsDone from "./TransactionsDone";
import ThirdPartyHdfc from "./ThirdPartyHdfc";
import SelectUlipDateButton from "../../Modules/Buttons/ULIP/SelectUlipDateButton";
import Calendar from "react-calendar";
import { tick } from "../../Assets";
import { useNavigate } from "react-router-dom";
import FooterWithBtn from "../CommonComponents/FooterWithBtn";
import RecommendationsHeader from '../CommonComponents/RecommendationsHeader';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import {
    LUMPSUM,
    MONTHLY
} from '../../Store/Duck/SaveTaxInvestmentType'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const enumActiveScreen = Object.freeze({
    CLOSE_MODAL: 0,
    OPEN_DATE_PICKER_MODAL: 1,
    OPEN_CONFIRMATION_MODAL: 2,
    OPEN_NET_BANKING: 3,
});

const useStyles: any = makeStyles((theme: Theme) => ({
    modalTextButton: {
        // height: "48px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "var(--primaryColor) !important",
        color: 'var(--uiWhite) !important',
        // width: 350,
    },
    dateModal: {
        '&>.MuiBox-root': {
            display: 'inline-block !important   '
        }
    },
}))

const ULIPRecommendations = () => {

    const classes = useStyles();
    const refContainer = useRef();
    const navigate = useNavigate();
    const { investmentType,investmentAmount } = useSelector((state: any) => state.SaveTaxInvestmentType)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [calenderValue, setCalenderValue] = useState(new Date())
    const [activeScreen, setActiveScreen] = useState<number>(enumActiveScreen.CLOSE_MODAL);
    const [ value, setValue ] = useState(new Date());
    const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
    const [recommendationHeaderSelectArr, setRecommendationHeaderSelectArr] = useState<string[]>(['5','10','15','20'])
    const [recommendationHeaderSelectChoosed, setRecommendationHeaderSelectChoosed] = useState<string>('')
    const [recommendationHeaderInputFeildShow, setRecommendationHeaderInputFeildShow] = useState<boolean>(false)
    const [recommendationHeaderInvestmentAmount, setRecommendationHeaderInvestmentAmount] = useState<string>('')


    const ulipData: ULIPProp[] = [
        {
            logo: '/Miraelogo.svg',
            title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
            projectedAmount: 4.75,
            topPerformingFundReturn: 14.38,
            lifeCoverAmount: 5,
            investedValueAmount: 2.5,
            taxSavings: 15000,
        },
        {
            logo: '/Miraelogo.svg',
            title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
            projectedAmount: 4.75,
            topPerformingFundReturn: 14.38,
            lifeCoverAmount: 5,
            investedValueAmount: 2.5,
            taxSavings: 15000,
        },
    ];

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh",
        } as React.CSSProperties,
        modalText: {
            backgroundColor: '#FFF',
            width: 338,
            textAlign: 'center',
            marginLeft: '1px',
            padding: '5px',
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
            fontWeight: '500',
            borderColor: '#fff'
        },
        modalText2: {
            backgroundColor: '#FFF',
            width: 338,
            textAlign: 'center',
            marginLeft: '1px',
            padding: '5px',
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#6c63ff',
            borderColor: '#fff',
        },
        button: {
            height: "48px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            transform: "translate(8px, -23px)",
            color: '#fff',
            width: 350,
            marginTop: 21,
            marginLeft: -8
        },
        buttons: {
            width: "fit-content",
            padding: '10px',
            borderRadius: '20px',
            border: "0px",
            '&:hover': {
                color: "red !important",
                backgoundColor: "red !important"
            }
        },
    };

    
    const handleULIPDate = () => {
        setOpen(true)
        // setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL)
    }

    const handleBuyNow = () => {
        // loading Com and after that payment screen
        navigate('/payusingnetbanking');
    }
    
    const handleCloseContinuePayment = (
        event: {},
        reason: "backdropClick" | "escapeKeyDown"
    ) => {
        if (reason === "backdropClick") {
            console.log(reason);
        } else {
            setOpenConfirmation(!openConfirmation)
        }
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
            <Box style={{ width: "100vw" }} ref={refContainer}>
                <Navbar />
                <Box sx={style.main}>
                    <Toolbar />
                    <Sidebar />
                    <Grid container>
                        <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "0px", sm: '70px !important', md: '230px !important' } }} item xs={12}>
                        
                            <div>
                                <Grid  container >
                                    <Grid  container spacing={0} >
                                        <Grid  container item sx={{  overflow: "scroll" }} xs={12}>
                                            
                                        <Box sx={{
                                            backgroundColor: "#f9f9f9",
                                            paddingBottom: "50px",
                                            
                                            width:"100%",
                                            fontFamily: 'Roboto',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center'
                                        }}>
                                            {/* <ULIPHeader /> */}
                                                <RecommendationsHeader

                                                    selectTextLabel='Premium Payment Term'
                                                    selectArray={recommendationHeaderSelectArr}
                                                    selectChoosedValue={recommendationHeaderSelectChoosed}
                                                    changeSelectEvent={(event: SelectChangeEvent) => {
                                                        setRecommendationHeaderSelectChoosed(event.target.value);
                                                    }}
                                                    investmentTypeLabel='Investment Type'
                                                    // changeInvestmentTypeEvent={handleChangeInvestmentTypeEvent}
                                                    boxInputLabelText='Amount I want to invest monthly'
                                                    boxInputButtonText='Update Plans'
                                                    boxInputShow={recommendationHeaderInputFeildShow}
                                                    boxInputShowHandleChange={() => setRecommendationHeaderInputFeildShow(true)}
                                                    boxInputHideHandleChange={() => setRecommendationHeaderInputFeildShow(false)}
                                                />
                                            <Box sx={{
                                                padding: 0,
                                                margin: '2.5vw',
                                                fontFamily: 'Roboto',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                gap: '1vw',
                                            }}>
                                                <Breadcrumbs sx={{
                                                    fontSize: '12px',
                                                    color: '#6c63ff',
                                                    marginBottom: '1vw',
                                                }}>
                                                    <Link href="/home">Home</Link>
                                                    <Link href="/insurance">Get Insured</Link>
                                                    <Link href="/ulip/investoptions">ULIP</Link>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        color: '#373e42'
                                                    }}>SprintMoney Recommendation</Typography>
                                                </Breadcrumbs>
                                                <Box>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        color: '#8787a2',
                                                    }}>This plan provide tax benefit of 80C</Typography>
                                                    <Typography sx={{
                                                        fontSize: '18px',
                                                        fontWeight: 500,
                                                        color: '#3c3e42',
                                                    }}>2 ULIP Plan Found</Typography>
                                                </Box>
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '1.5vw',
                                                }}>
                                                    {
                                                        ulipData.map(data => <ULIPCoFundCard {...data} />)
                                                    }
                                                </Box>
                                                <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                    <Button variant="outlined" onClick={()=>navigate("/ulip/options")}
                                                     style={style.buttons} sx={{
                                                        backgroundColor: '#00b4ff',
                                                        }}>
                                                            <Typography sx={{color:"white"}}>EXPLORE OTHER OPTIONS</Typography>
                                                    </Button>
                                                </Box>
                                                {/*
                                                <Button onClick={ handleOpen }>Open dialog</Button>
                                                <ThirdPartyHdfc open={ open } handleClose={ handleClose } />
                                            */}
                                            </Box>
                                            
                                        </Box>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </div >
                        </Grid>
                    </Grid>
                </Box>


            </Box>
            <FooterWithBtn
                // btnText='Select ULIP Date'
                // btnClick={() => setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL)}
                btnText={investmentType === LUMPSUM ? 'Buy Now' : 'Select ULIP Date'}
                btnClick={investmentType === LUMPSUM ? handleBuyNow : handleULIPDate}
            />


            <Dialog onClose={() => setOpenConfirmation(!open)} open={open}>
                {/* <DialogTitle className={classes.modalText}>Set backup account</DialogTitle> */}
                <Typography className={classes.modalText}>Set backup account</Typography>
                <Calendar onChange={(value:any) => setCalenderValue(value)} value={calenderValue} />
                <Button onClick={() => { setOpen(!open); setOpenConfirmation(!openConfirmation) }} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'rgba(123, 123, 157, 0.05)',
                    color: '#7b7b9d'
                }}>
                    Confirm SIP Date
                </Button>
            </Dialog>
            
            <Dialog open={openConfirmation} onClose={handleCloseContinuePayment}>
                {/* <DialogTitle className={classes.modalText}>Set backup account</DialogTitle> */}
                <Box sx={{ backgroundColor: '#fff', maxWidth: 300, alignItems: 'center', padding: 3, textAlign: 'center' }}>
                    <Box><img style={{ height: 'auto', maxWidth: 110 }} src={tick} /></Box>
                    <Typography sx={{ marginTop: 1, fontWeight: '600' }} >Date confirmed!</Typography>
                    <Typography sx={{ marginTop: 1, color: '#8787a2' }} >Your Monthly SIP Date is 8th of every month</Typography>
                </Box>
                <Button onClick={() => {
                    setOpenConfirmation(!openConfirmation);
                    navigate('/payusingnetbanking');
                }} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'rgba(123, 123, 157, 0.05)',
                    color: '#7b7b9d'
                }}>
                    Continue to Payment
                </Button>
            </Dialog>


            {/* <Modal sx={{ borderRadius: 8 }} open={activeScreen === enumActiveScreen.OPEN_DATE_PICKER_MODAL ? true : false} onClose={() => { setActiveScreen(enumActiveScreen.CLOSE_MODAL) }}>
                <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '13%', md: '30%' } }}>
                    <Typography sx={style.modalText}>Select Monthly Instalment Date</Typography>
                    <Typography sx={style.modalText2}>{`${value.getDate()}`} of every month</Typography>
                    <Calendar value={value} onChange={setValue} />
                    <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_CONFIRMATION_MODAL) }} variant='contained' style={style.button} sx={{
                        backgroundColor: 'rgba(123, 123, 157, 0.05)',
                        color: '#7b7b9d'
                    }}>
                        Confirm ULIP Date
                    </Button>
                </Box>
            </Modal> */}


            {/* <Modal sx={{ borderRadius: 8 }} open={activeScreen === enumActiveScreen.OPEN_CONFIRMATION_MODAL ? true : false} onClose={() => { setActiveScreen(enumActiveScreen.CLOSE_MODAL) }}>
                <>
                    <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '13%', md: '30%' } }}>
                        <Box sx={{ backgroundColor: '#fff', width: 300, alignItems: 'center', padding: 3, textAlign: 'center' }}>
                            <Box><img style={{ height: 120, width: 120 }} src={tick} /></Box>
                            <Typography sx={{ marginTop: 1, fontWeight: '600' }} >Date confirmed!</Typography>
                            <Typography sx={{
                                marginTop: 1,
                                color: '#7b7b9d',
                                fontSize: '14px',
                                textAlign: 'center',
                            }}>
                                Your monthly ULIP date is {`${value.getDate()}`} of every month
                            </Typography>
                        </Box>
                        <Button onClick={() => { navigate("/ulip/txndone") }} variant='contained' style={style.button} sx={{
                            backgroundColor: 'rgba(123, 123, 157, 0.05)',
                            color: '#7b7b9d',
                            marginLeft: 8
                        }}>
                            Continue to Payment
                        </Button>
                    </Box>
                </>
            </Modal> */}
        </div >
    )
};

export default ULIPRecommendations;
