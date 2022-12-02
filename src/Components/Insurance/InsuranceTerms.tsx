import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Box, styled } from '@mui/system'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const useStyles: any = makeStyles((theme: Theme) => ({
    flexCommon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    termInsuranceCard: {
        backgroundColor: 'var(--uiWhite)',
        boxShadow: 'var(--themeShadow)',
        padding: '20px 15px',
        borderRadius: '8px',
    },
    quickSelectWrapper: {
        padding: '0px',
        margin: '0px',
        display: 'flex',
        flexWrap: 'wrap',
        '& li': {
            listStyleType: 'none',
            padding: '8px 10px',
            backgroundColor: 'var(--blueColorOpacity)',
            margin: '5px 6px',
            borderRadius: '2px',
            color: 'var(--ui1Color)',
            fontWeight: 500,
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'var(--ui1Color)',
                color: 'var(--uiWhite)',
            }
        }
    },
    premiumAmountFooter: {
        backgroundColor: 'var(--uiWhite)',
        boxShadow: 'var(--themeShadow)',
        padding: '15px',
        marginBottom: '-16px',
        marginLeft: '-16px',
        marginRight: '-16px',
    },
    premiumAmountBox: {
        backgroundColor: 'var(--lightGreenColor)',
        padding: '45px 15px',
        // paddingTop: '45px',
        position: 'absolute',
        top: 'calc(-100% - 38px)',
        zIndex: '-1',
        borderRadius: '20px',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    insuranceCardIcon: {
        backgroundColor: 'var(--primaryColor)',
        color: 'var(--uiWhite)',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '-18px',
    },
    popHeading: {
        textAlign: 'center'
    }
}))



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const InsuranceTerms = () => {
    const classes = useStyles()
    const [insuranceAmount, setInsuranceAmount] = useState<string>('')
    const [quickPickAmount, setQuickPickAmount] = useState<string[]>(['₹25 L', '₹75 L', '₹50 L', '₹1 Cr', '₹5 Cr', '₹10 Cr'])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setInsuranceAmount(event.target.value as string);
    };

    const selectFromQuickPick = (e: any) => {
        console.log("quickPickValue: ", e.target)
    }

    return (
        <div>
            <Box sx={{ padding: '30px 7px', paddingTop: '60px', width: { xs: '100%', sm: '50%' } }}>
                <div className={classes.termInsuranceCard}>
                    <b style={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subHeadingFontSize)', marginBottom: '15px', display: 'inline-block', fontWeight: 500, }}>Term Insurance</b>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">I want life cover of</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={insuranceAmount}
                            label="insuranceAmount"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ paddingTop: '20px', }}>
                        <span style={{ fontSize: 'var(--subTitleFontSize)', color: 'var(--typeBlackColor),' }}>You can quickly choose from below cover option</span>
                        <ul className={classes.quickSelectWrapper}>
                            {
                                quickPickAmount.map((item, index) => (
                                    <li key={index} onClick={selectFromQuickPick}>{item}</li>
                                ))
                            }
                        </ul>
                    </Box>
                </div>
            </Box >

            <Box sx={{
                position: 'relative',
                zIndex: '1',
                marginTop: '150px',
            }}>
                <div className={`${classes.premiumAmountFooter} ${classes.flexCommon}`}>
                    <Button sx={{ width: { xs: '85%', sm: '40%' } }} variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500', }} onClick={handleClickOpen}>Show Me Exact Quote</Button>
                    <Box className={classes.premiumAmountBox} sx={{ width: { xs: '80%', sm: '35%' } }}>
                        <div className={classes.insuranceCardIcon}>
                            <ThumbUpOffAltIcon />
                        </div>
                        <b style={{ fontSize: 'var(--titleFontSize)', fontWeight: '500', color: 'var(--typeBlackColor)', display: 'block', marginBottom: '5px' }}>Monthly Premium</b>
                        <b style={{ fontSize: 'var(--subHeadingFontSize)', fontWeight: '500', color: 'var(--typeBlackColor)', display: 'block', }}>₹599</b>
                    </Box>
                </div>
            </Box>


            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
                </BootstrapDialogTitle> */}
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        <CloseIcon />
                    </Button>
                </DialogActions>
                <DialogContent>
                    <div className={classes.popHeading}>
                        <b style={{ marginBottom: '0px', color: 'var(--typeLightBlackColor)', fontWeight: 500, }}>Fill Details</b>
                        <p style={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)', marginTop: '5px' }}>Just the following details needed to get
                            your exact quote</p>
                    </div>
                    <Typography gutterBottom>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                style={{ display: 'flex' }}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div >
    )
}

export default InsuranceTerms