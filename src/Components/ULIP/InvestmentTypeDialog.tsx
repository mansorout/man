import { useState } from 'react';
import { Button, Dialog, DialogContent, InputAdornment, TextField } from '@mui/material';

export interface InvestmentTypeDialogProp {
    open: boolean;
    handleClose: () => void;
    handleAmount: (e: any) => void;
}

const InvestmentTypeDialog = (props: InvestmentTypeDialogProp) => {

    const [ disabled, setDisabled ] = useState(true);

    const updatePlans = () => {
        setDisabled(true);
        props.handleClose();
    }

    return (
        <Dialog open={ props.open } onClose={ props.handleClose } sx={{
            position: 'absolute',
            top: '-17vw',
            left: '20vw',
        }}>
            <DialogContent sx={{
                width: '385px',
                padding: '16px',
                borderRadius: '4px',
                boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
                backgroundColor: '#fff',                
            }}>
                <TextField 
                    label="Amount I want to invest monthly" 
                    defaultValue={0}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                        endAdornment: <InputAdornment position="end">
                            <Button 
                                variant='contained' 
                                disabled={ disabled } 
                                onClick={ updatePlans }
                                sx={{
                                    backgroundColor: '#23db7b',
                                    borderRadius: '4px',
                                    boxShadow: '0 4px 8px 0 rgba(35, 219, 123, 0.4)',
                                    color: '#fff',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                }}
                            >Update Plans</Button>
                        </InputAdornment>
                    }}
                    sx={{
                        margin: '7px 0 0',
                        padding: '14px 16px',
                        borderRadius: '4px',
                        boxShadow: '0 4px 8px 0 rgba(75, 123, 236, 0.2)',
                        border: 'solid 1px #4b7bec',
                        backgroundColor: '#fff',
                    }}
                    onChange={ () => setDisabled(false) }
                />
            </DialogContent>
        </Dialog>
    )
};

export default InvestmentTypeDialog;
