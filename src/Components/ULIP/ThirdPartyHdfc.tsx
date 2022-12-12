import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@mui/material';
import { DialogProp } from "./DateConfirmedDialog";
import { HdfcBanklogo } from '../../Assets';
import './DateConfirmedDialog.css';

const ThirdPartyHdfc = (props: DialogProp) => {
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            className="date-confirmed-dialog"
            sx={{
                width: '384px',
                height: '325px',
                borderRadius: '8px',
                boxShadow: '0 -24px 24px 0 rgba(0, 0, 0, 0.16)',
                backgroundColor: '#fff',
            }}
        >
            <DialogContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <Box sx={{
                    width: "148px",
                    height: "180px",
                }}>
                    <img src={ HdfcBanklogo } alt="HDFC Ergo" />
                </Box>
            </DialogContent>
        </Dialog>
    )
};

export default ThirdPartyHdfc;
