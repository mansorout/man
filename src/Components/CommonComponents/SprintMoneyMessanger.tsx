import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, Grid, Typography } from '@mui/material';
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

    // console.log(panmsg?.error)
    // useEffect(() => {
    //     setErrorMsg(panmsg)
    // }, [errorMsg])

    // console.log(errorMsg)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button> */}
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle></DialogTitle>

                <DialogContent sx={{width:{xs:"100%", sm:"100%"}, minWidth:{xs:"100%", sm:"300px"},
            padding:{xs:"10px 4px", sm:"0px 0px"} }}>
                    {
                        !props.errorText ? <Grid container>

                            <Grid item xs={2}>

                                <Box sx={{ borderRadius: "50%", height: "50px", width: "50px" }}>
                                    <img style={{ height: "25px", width: "25px", }} src={SuccessLogo} alt="error" />
                                </Box>
                            </Grid>

                            <Grid item xs={10}>
                                <DialogContentText sx={{ color: "green" }} id="alert-dialog-slide-description">
                                    {props.succesText}
                                </DialogContentText>
                            </Grid>


                        </Grid> : <Grid container>
                            <Grid item xs={10} sm={11}>
                                <DialogContentText sx={{ color: "red", textAlign: "center" }} id="alert-dialog-slide-description">
                                    {props.errorText}
                                </DialogContentText>
                            </Grid>
                            <Grid item xs={2} sm={1}>

                                <Box sx={{ borderRadius: "50%", height: "50px", width: "50px" }}>
                                    <img style={{ height: "25px", width: "25px", }} src={ContactError} alt="error" />
                                </Box>
                            </Grid>

                        </Grid>
                    }


                    {/* <Grid container sx={{
                        display: "flex",
                        flexDirection: "column"
                    }} >
                        <Grid item md={4}>

                            <img style={{ paddingLeft: " 85px", height: "25px", width: "25px", }} src={SuccessLogo} alt="error" />

                        </Grid>
                        <Grid item md={4}>
                            <Typography sx={{ textAlign: "center",minWidth: "100% !important"}}>Succes Message</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography sx={{ textAlign: "center"}}>
                                Error Message
                            </Typography>
                        </Grid>
                        <Grid item md={12}>

                            <Button sx={{ width: { xs: '85%', sm: '40%', md: '100%', maxHeight: "50px" } }} variant="contained" style={{ backgroundColor: 'var(--primaryColor)' }} ><Typography sx={{
                                textAlign: "center", minWidth: " 100%"
                            }}>Continue</Typography></Button>

                        </Grid>
                    </Grid> */}





                </DialogContent>
                <DialogActions sx={{ paddingRight: "10px" }}>

                    <Button sx={{ width: "100%" }} variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500', }} onClick={props.btnClick}><Typography sx={{ size: "12px" }}>{props.btnText}</Typography></Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}










export default function AlertDialogSlide() {

}
