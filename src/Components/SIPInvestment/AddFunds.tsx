import React, { useState } from "react";
import { Box, Breadcrumbs, InputAdornment, Link, List, Tab, Tabs, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const AddFunds = () => {

    const [value, setValue] = useState(0);

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                hidden={value !== index}
                {...other}
            >
                {
                    value === index && (
                        <Box sx={{ p: 3 }}>
                            <Typography>{children}</Typography>
                        </Box>
                    )
                }
            </div>
        );
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

    return (
        <Box id="addfunds" sx={{
            backgroundColor: '#f9f9f9',
            width: '83.75vw',
            padding: '3.75vw 2.4vw',
            display: 'flex',
            flexDirection: 'column',
            gap: '1vw',
        }}>
            <Breadcrumbs sx={{
                fontSize: '12px',
                color: '#6c63ff'
            }}>
                <Link href="/home">Home</Link>
                <Link href="/">Investment</Link>
                <Link href="/">Monthly Investment</Link>
                <Link href="/">Mutual Fund Recommendation</Link>
                <Link href="/">Customize Plan</Link>
                <Typography sx={{
                    fontSize: '12px',
                    color: '#373e42'
                }}>Choose fund to add</Typography>
            </Breadcrumbs>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: '12px',
                        color: '#8787a2',
                    }}>Explore Funds</Typography>
                    <Typography sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        color: '#3c3e42',
                    }}>Choose Fund to Add</Typography>
                </Box>
                <TextField
                
                    placeholder="Search funds..."
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>,
                        endAdornment: <InputAdornment position="end" sx={{
                            width: '30px',
                            height: '30px',
                            backgroundColor: '#efefef',
                            borderRadius: '50%',
                            padding: '0.375vw',
                            color: '#09b85d',
                        }}><FilterAltOutlinedIcon /></InputAdornment>
                    }}
                    sx={{
                        width: '30vw',
                        height: '3.6vw',
                        paddingBottom: '2vw',
                        borderRadius: '0.3125vw',
                        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.05)',
                        border: 'solid 1px #dddfe2',
                        backgroundColor: '#fff'
                    }}
                />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: '12px',
                        color: '#8787a2',
                    }}>SIP Investment</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                        color: '#7b7b9d',
                    }}>20 funds found</Typography>
                </Box>
                <Box>
                    <Box>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="All" />
                            <Tab label="Equity" />
                            <Tab label="Debt" />
                            <Tab label="Balanced" />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                </Box>
            </Box>
        </Box>
    )
};

export default AddFunds;

