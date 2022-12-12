import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@mui/material';
import { DialogProp } from "./DateConfirmedDialog";
import { BajajAllianzLogo1x } from '../../Assets';
import './DateConfirmedDialog.css';

const ThirdPartyRedirection = (props: DialogProp) => {
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
                    width: "95.2px",
                    height: "95.2px",
                    borderRadius: '50%',
                    overflow: 'hidden',
                }}>
                    <img
                        src={ BajajAllianzLogo1x }
                        alt="Bajaj Allianz Logo"
                    />
                </Box>
                <Typography sx={{
                    fontSize: '14px',
                    color: '#7b7b9d',
                }}>
                    Loading...
                </Typography>

            </DialogContent>
        </Dialog>
    )
};

export default ThirdPartyRedirection;
