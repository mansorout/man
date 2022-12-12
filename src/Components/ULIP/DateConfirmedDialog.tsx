import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@mui/material';
import ULIPButton from '../../Modules/Buttons/ULIP/ULIPButton';
import './DateConfirmedDialog.css';

export interface DialogProp {
    open: boolean;
    handleClose: () => void;
}

const DateConfirmedDialog = (props: DialogProp) => {

    return (
        <Dialog 
            open={ props.open } 
            onClose={ props.handleClose }
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
                    width: '128px', 
                    height: '128px',
                    backgroundColor: '#dff7ea',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img 
                        src={process.env.PUBLIC_URL + '/assets/images/ic_success.svg'} 
                        alt="success icon" 
                        width="76.8"
                        height="76.8"
                        style={{ 
                            objectFit: 'contain',
                            borderRadius: '50%', 
                        }}
                    />
                </Box>
                <DialogContentText sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography sx={{
                        fontSize: '21px',
                        fontWeight: 500,
                        color: 'rgba(0, 0, 0, 0.87)',
                    }}>Date confirmed!</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                        color: '#7b7b9d',
                    }}>
                        Your monthly SIP date is 
                        <Typography component="span" sx={{ fontWeight: 500 }}> 08th of every month.</Typography>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{
                padding: 0,
                margin: 0,
            }}>
                <Button sx={{
                    width: '384px',
                    height: '51px',
                    borderRadius: 0,
                    boxShadow: '0 0 8px 0 rgba(35, 219, 123, 0.4)',
                    backgroundColor: '#23db7b',
                    fontSize: '17px',
                    fontWeight: 500,
                    textAlign: 'center',
                    color: '#fff',
                }}>Continue to Payment</Button>
            </DialogActions>
        </Dialog>
    )
};

export default DateConfirmedDialog;
