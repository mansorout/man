import React from "react";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const ExpireTokenDialog = () => {

  const g_isTokenExpired: boolean = useSelector((state: any) => state?.globalReducer?.isTokenExpired) || true;

  return (
    <Dialog
      open={g_isTokenExpired}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Session Expired!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Hey! your session has been expired. Please do Re-login your application.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => null}>Re-login</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ExpireTokenDialog;