import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Link, Typography } from '@mui/material';
import ULIPButton from '../../Modules/Buttons/ULIP/ULIPButton';
import { DialogProp } from './DateConfirmedDialog';
import './TransactionsDone.css';

const TransactionsDone = (props: DialogProp) => {

    return (
        <Dialog 
            open={ props.open } 
            onClose={ props.handleClose }
            className="date-confirmed-dialog"
            sx={{
                width: '46.172vw',
                borderRadius: '8px',
                boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
                backgroundColor: '#fff',
                padding: '41px',
                position:"absolute",
                top:"50%",
                left:"50%",
            }}
        >
            <DialogContent sx={{
                width: '46.172vw',
                height: '38.44vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <Box sx={{
                    width: '120px', 
                    height: '120px',
                    backgroundColor: '#dff7ea',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img 
                        src={process.env.PUBLIC_URL + '/assets/images/ic_success.svg'} 
                        alt="success icon" 
                        width="72"
                        height="72"
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
                        fontSize: '22px',
                        fontWeight: 500,
                        color: '#3c3e42',
                        width: '384px',
                    }}>Congrats! Your transaction is being processed</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                        color: '#7b7b9d',
                        width: '384px',
                    }}>
                        SprintMoney will notify you via email in 1 or 2 working days once the 
                        confirmation received. You can track status under <Link href="/">transactions</Link>
                        tab of your portfolio.
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2vw',
            }}>
                <ULIPButton text="Back to Home" navigateTo='/' bgColor='rgb(35, 219, 123)' width="336px" />
                <ULIPButton text="Track Transactions" navigateTo='/' bgColor='rgb(43, 46, 45)' width="336px" />
            </DialogActions>
        </Dialog>
    )
}

export default TransactionsDone;
