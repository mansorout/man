import { useState } from 'react';
import { AppBar, Box, Dialog, IconButton, Toolbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/joy';
import { ULIPProp } from '../../Modules/Cards/ULIP/ULIPCoFundCard';
import { BajajAllianzLogo } from '../../Assets';

const ulipData: ULIPProp = {
    logo: BajajAllianzLogo,
    title: 'Bajaj Allianz Future Gain',
    projectedAmount: 4.75,
    topPerformingFundReturn: 14.38,
    lifeCoverAmount: 5,
    investedValueAmount: 2.5,
    taxSavings: 15000,
};

const ULIPDetails = (props: ULIPProp) => {

    const [open, setOpen] = useState(true);

    const handleClose = () => setOpen(false);

    

    return (
        <>
            <Dialog open={open} onClose={handleClose} sx={{
                width: '384px',
                height: '651px',
                padding: '0 0 12px',
                borderRadius: '8px',
                boxShadow: '0 -24px 24px 0 rgba(0, 0, 0, 0.16)',
                backgroundColor: '#f9f9f9',
            }}>
                <AppBar>
                    <Toolbar sx={{
                        backgroundColor: '#fff',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <img src={ BajajAllianzLogo } alt="Company logo" />
                            <Box>
                                <Typography sx={{
                                    fontSize: '12px',
                                    color: '#7b7b9d',
                                }}>Know More</Typography>
                                <Typography sx={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#3c3e42',
                                }}>{props.title}</Typography>
                            </Box>
                        </Box>

                        <IconButton edge="end" onClick={handleClose} sx={{
                            width: '14px',
                            height: '14px',
                            objectFit: 'contain',
                            color: '#d1d6dd',
                        }}>
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Dialog>
        </>
    )
};

export default ULIPDetails;
