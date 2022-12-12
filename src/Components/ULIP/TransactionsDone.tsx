import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid, Link, Toolbar, Typography } from '@mui/material';
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import ULIPButton from '../../Modules/Buttons/ULIP/ULIPButton';
import { DialogProp } from './DateConfirmedDialog';
import { SuccessFullOtp } from '../../Assets';
import UlipSuccessButton from '../../Modules/Buttons/ULIP/UlipSuccessButton';
import UlipTrackTransactionButton from '../../Modules/Buttons/ULIP/UlipTrackTransactionButton';
//import './TransactionsDone.css';

const TransactionsDone = () => {

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh",
        } as React.CSSProperties,
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
        container : {
            backgroundColor: "white",
            width: "100%",
            maxWidth: "500px",
            marginTop: "100px",
            padding: "10px 0px",
            borderRadius: " 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:'0 1px 5px 0 rgba(0, 0, 0, 0.2)',
            transform: "translate(-50%, 0%)",
            left: "50%",
            position: "absolute"
        } as React.CSSProperties,
        logo : {
            width: "90px",
            margin:'30px 0px',
        } as React.CSSProperties
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
                        <Box style={style.container}>
                            <img alt="Money Sprint" src={SuccessFullOtp} style={style.logo} />
                            <Typography mb={1} variant="h1" align="center" className="SipSucessScreen">
                                Congrats! Your transaction is being processed
                            </Typography>
                            <Typography mb={2} style={{ maxWidth: "90%" }} className="VerificationOtp" align="center">
                                SprintMoney will notify you via email in 1 or 2 working days once the 
                                confirmation is received. You can track status 
                                under <Link href="#">transactions</Link> tab of your portfolio.
                            </Typography>
                            <UlipSuccessButton />
                            <UlipTrackTransactionButton />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default TransactionsDone;
