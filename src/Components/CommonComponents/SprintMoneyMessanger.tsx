import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Grid, Typography } from "@mui/material";
import { ContactError, SuccessLogo } from "../../Assets";
import { useSelector } from "react-redux";
import './recommandation.css'

interface SprintMoneyMessanger {
  btnText: string;
  btnClick: () => void;
  open: boolean;
  errorText: string;
  succesText: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const SprintMoneyMessanger = (props: SprintMoneyMessanger) => {
  const [open, setOpen] = React.useState(false);
  const [succesmsg, setSuccesMsg] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [showmsg, setShowmsg] = React.useState(false);

  const panmsg: any = useSelector(
    (state: any) => state?.globalReducer.commonmsg
  );

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
        
     
          {!props.errorText ? (
            <Grid container>
              <Grid item xs={12}  md={12}>
                <Box
                  sx={{ borderRadius: "50%", height: "50px", width: "50px", paddingLeft: "41%",
                  paddingTop: "18px" }}
                  textAlign="center"

                >
                  <img
                    style={{ height: "25px", width: "25px",marginTop:"10px"}}
                    src={SuccessLogo}
                    alt="error"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={12}  textAlign="center">
                <DialogContentText
                  sx={{ color: "green" }}
                  id="alert-dialog-slide-description"
                >
                  {props.succesText}
                </DialogContentText>
              </Grid>
            </Grid>
          ) : (
            <Grid container>
              
              <Grid item xs={12} md={12}>
                <Box
                  onClick={() => handleClose}
                  sx={{ borderRadius: "50%", height: "50px", width: "50px",  paddingLeft: "39%",
                  paddingTop: "18px"}}
                  textAlign="center"
                 className="errorlogo"
                >
                  <img
                    style={{ height: "25px", width: "25px" }}
                    src={ContactError}
                    alt="error"
                    
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={12} >
                
                <DialogContentText
                  sx={{ color: "red", textAlign: "center",marginTop:"-10px" }}
                  id="alert-dialog-slide-description"
                >
                  {props.errorText}
                </DialogContentText>
              </Grid>



            </Grid>
          )}

      
        <DialogActions sx={{ paddingRight: "10px" }}>
          <Button
            sx={{ width: "100%" }}
            variant="contained"
            style={{
              backgroundColor: "var(--primaryColor)",
              color: "var(--uiWhite)",
              fontWeight: "500",
            }}
            onClick={props.btnClick}
          >
            <Typography sx={{ size: "12px" }}>{props.btnText}</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default function AlertDialogSlide() {}
