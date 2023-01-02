import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, Grid } from '@mui/material';
import { ContactError, SuccessLogo } from '../../Assets';
import { useSelector } from 'react-redux';


interface SprintMoneyMessanger {

    btnText: string;
    btnClick: () => void
    open: boolean
    errorText: string;
    succesText: string;

}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const SprintMoneyMessanger = (props: SprintMoneyMessanger) => {
    const [open, setOpen] = React.useState(false);
    const [succesmsg, setSuccesMsg] = React.useState("");
    const [errorMsg, setErrorMsg] = React.useState("");
    const [showmsg, setShowmsg] = React.useState(false);


    const panmsg: any = useSelector((state: any) => state?.globalReducer.commonmsg)

    console.log(panmsg?.error)
    // useEffect(() => {
    //     setErrorMsg(panmsg)
    // }, [errorMsg])

    console.log(errorMsg)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle></DialogTitle>

                <DialogContent sx={{ minWidth: "201px" }}>
                    {
                        !props.errorText  ? <Grid container>
                            <Grid item xs={6}>
                                <DialogContentText sx={{ color: "green" }} id="alert-dialog-slide-description">
                                    {props.succesText}
                                </DialogContentText>
                            </Grid>
                            <Grid item xs={6}>

                                <Box sx={{ borderRadius: "50%", height: "50px", width: "50px" }}>
                                    <img style={{ height: "25px", width: "25px", }} src={SuccessLogo} alt="error" />
                                </Box>
                            </Grid>

                        </Grid> : <Grid container>
                            <Grid item xs={6}>
                                <DialogContentText sx={{ color: "red" }} id="alert-dialog-slide-description">
                                    {props.errorText}
                                </DialogContentText>
                            </Grid>
                            <Grid item xs={6}>

                                <Box sx={{ borderRadius: "50%", height: "50px", width: "50px" }}>
                                    <img style={{ height: "25px", width: "25px", }} src={ContactError} alt="error" />
                                </Box>
                            </Grid>

                        </Grid>
                    }








                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose}>Agree</Button> */}
                    <Button sx={{ width: { xs: '85%', sm: '40%',maxHeight: "50px"} }} variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500', }} onClick={props.btnClick}>{props.btnText}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}










export default function AlertDialogSlide() {

}
