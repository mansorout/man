import { useState } from "react";
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Radio, Tabs, Tab, Typography, FormControl, RadioGroup, FormControlLabel } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


export interface UlipFilterProp {
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const UlipFilterDialog = (props: UlipFilterProp) => {

    const [ open, setOpen ] = useState(props.open);
    const [ value, setValue ] = useState(0);

    const handleOpen = props.onOpen;
    const handleClose = props.onClose;

    const handleChange = (e: React.SyntheticEvent, newValue: number) => setValue(newValue);

    return (
        <Dialog open={ open } onClose={ handleClose } sx={{
            width: '384px',
            height: '348px',
            padding: '12px 0 0',
            borderRadius: '8px',
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.16)',
            backgroundColor: '#fff',
        }}>
            <DialogTitle sx={{
                width: '384px',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Typography>Filters</Typography>
                <IconButton onClick={ handleClose }>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                <Tabs orientation="vertical" value={ value } onChange={ handleChange } sx={{
                    width: '131px',
                }}>
                    <Tab label="Sort" id='vertical-tab-0' />
                    <Tab label="Policy Term" id='vertical-tab-1' />
                    <Tab label="Life Cover" id='vertical-tab-2' />
                </Tabs>
                <Box hidden={ value !== 0} id="vertical-tab-0" sx={{
                    width: '245px'
                }}>
                    {
                        value === 0 && (
                            <Box>
                                <FormControl>
                                    <RadioGroup>
                                        <FormControlLabel 
                                            value='Return - High to Low' 
                                            control={ <Radio /> } 
                                            label='Return - High to Low'
                                        />
                                        <FormControlLabel 
                                            value='Rating - High to Low' 
                                            control={ <Radio /> } 
                                            label='Rating - High to Low'
                                        />
                                        <FormControlLabel 
                                            value='Fund Size - High to Low' 
                                            control={ <Radio /> } 
                                            label='Fund Size - High to Low'
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        )
                    }
                </Box>
                <Box hidden={ value !== 1} id="vertical-tab-1" sx={{
                    width: '253px'
                }}>
                    {
                        value === 1 && (
                            <Box>
                                <FormControl>
                                    <RadioGroup>
                                        <FormControlLabel 
                                            value='5' 
                                            control={ <Radio /> } 
                                            label='5 Years'
                                        />
                                        <FormControlLabel 
                                            value='7' 
                                            control={ <Radio /> } 
                                            label='7 Years'
                                        />
                                        <FormControlLabel 
                                            value='10' 
                                            control={ <Radio /> } 
                                            label='10 Years'
                                        />
                                        <FormControlLabel 
                                            value='15' 
                                            control={ <Radio /> } 
                                            label='15 Years'
                                        />
                                        <FormControlLabel 
                                            value='20' 
                                            control={ <Radio /> } 
                                            label='20 Years'
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        )
                    }
                </Box>
                <Box hidden={ value !== 2} id="vertical-tab-2" sx={{
                    width: '253px'
                }}>
                    {
                        value === 2 && (
                            <Box>
                                <FormControl>
                                    <RadioGroup>
                                        <FormControlLabel 
                                            value='1 Crore' 
                                            control={ <Radio /> } 
                                            label='₹1 Crore'
                                        />
                                        <FormControlLabel 
                                            value='75 Lacs' 
                                            control={ <Radio /> } 
                                            label='₹75 Lacs'
                                        />
                                        <FormControlLabel 
                                            value='50 Lacs' 
                                            control={ <Radio /> } 
                                            label='₹50 Lacs'
                                        />
                                        <FormControlLabel 
                                            value='25 Lacs' 
                                            control={ <Radio /> } 
                                            label='₹25 Lacs'
                                        />
                                        <FormControlLabel 
                                            value='10 Lacs' 
                                            control={ <Radio /> } 
                                            label='₹10 Lacs'
                                        />
                                        <FormControlLabel 
                                            value='5 Lacs' 
                                            control={ <Radio /> } 
                                            label='₹5 Lacs'
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        )
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
};

export default UlipFilterDialog;
