import { useState } from "react";
import { Box, Breadcrumbs, Button, Grid, Link, Modal, Toolbar, Typography } from "@mui/material";
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

const enumActiveScreen = Object.freeze({
    CLOSE_MODAL: 0,
    OPEN_DATE_PICKER_MODAL: 1,
    OPEN_CONFIRMATION_MODAL: 2,
    OPEN_NET_BANKING: 3,
});

const ULIPRecommendations = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [activeScreen, setActiveScreen] = useState<number>(enumActiveScreen.CLOSE_MODAL);

    const navigate = useNavigate();

    const [ value, setValue ] = useState(new Date());


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
    };

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box sx={style.main}>
                <Grid container spacing={0} >
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />
                        <Sidebar />
                    </Grid>
                    <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
                        <Toolbar />

                        <Box sx={{
                            padding: 0,
                            margin: 0,
                            marginLeft: '4vw',
                            fontFamily: 'Roboto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '1.5vw',
                        }}>
                            <ULIPHeader />
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
                                    marginBottom: '3vw',
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
                                <ULIPBlueButton text="EXPLORE OTHER OPTIONS" navigateTo="/ulip/options" />
                                {/*
                                <Button onClick={ handleOpen }>Open dialog</Button>
                                <ThirdPartyHdfc open={ open } handleClose={ handleClose } />
                            */}
                            </Box>
                            <Box sx={{
                                width: '83.75vw',
                                height: '6.1vw',
                                marginTop: '8vw',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
                                backgroundColor: '#fff'
                            }}>
                                <SelectUlipDateButton
                                    openModal={() => setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL)}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Modal sx={{ borderRadius: 8 }} open={activeScreen === enumActiveScreen.OPEN_DATE_PICKER_MODAL ? true : false} onClose={() => { setActiveScreen(enumActiveScreen.CLOSE_MODAL) }}>
                    <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '13%', md: '30%' } }}>
                        <Typography sx={style.modalText}>Select Monthly Instalment Date</Typography>
                        <Typography sx={ style.modalText2 }>{`${ value.getDate() }`} of every month</Typography>
                        <Calendar value={ value } onChange={ setValue } />
                        <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_CONFIRMATION_MODAL) }} variant='contained' style={style.button} sx={{
                            backgroundColor: 'rgba(123, 123, 157, 0.05)',
                            color: '#7b7b9d'
                        }}>
                            Confirm ULIP Date
                        </Button>
                    </Box>
                </Modal>
                <Modal sx={{ borderRadius: 8 }} open={activeScreen === enumActiveScreen.OPEN_CONFIRMATION_MODAL ? true : false} onClose={() => { setActiveScreen(enumActiveScreen.CLOSE_MODAL) }}>
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
                                    Your monthly ULIP date is {`${ value.getDate() }`} of every month
                                </Typography>
                            </Box>
                            {/* <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_NET_BANKING) }} variant='contained' style={style.button} sx={{ */}
                            <Button onClick={() => { navigate("/ulip/txndone") }} variant='contained' style={style.button} sx={{
                                backgroundColor: 'rgba(123, 123, 157, 0.05)',
                                color: '#7b7b9d',
                                marginLeft: 8
                            }}>
                                Continue to Payment
                            </Button>
                        </Box>

                    </>
                </Modal>
            </Box>
        </Box>
    )
};

export default ULIPRecommendations;
