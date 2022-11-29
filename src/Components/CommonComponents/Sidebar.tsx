import React from 'react'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Box, styled } from '@mui/system'
import { makeStyles } from '@mui/styles';
import { RootStore } from '../../Redux/Store';
import { useSelector, useDispatch } from 'react-redux';


const useStyles: any = makeStyles((theme: Theme) => ({
    mobileMenu: {
        '@media (max-width: 600px)': {
            opacity: '1 !important',
            pointerEvents: 'initial !important'
        }
    },
}));

const Sidebar = () => {
    const navigate = useNavigate()
    const classes = useStyles()
    const dispatch: any = useDispatch()
    const { toggleState }: any = useSelector((state: RootStore) => state.NavToggleReducer)
    return (
        <div>

            <Box sx={{ display: 'block', opacity: { xs: '0', sm: "1" }, pointerEvents: { xs: 'none', sm: "initial" }, backgroundColor: "white", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)", padding: 0, boxSizing: "border-box", height: "100vh", transition: 'all 0.3s ease-in-out', position: 'fixed', width: '50%', minWidth: '250px', maxWidth: '350px', zIndex: '11' }} className={`${toggleState ? classes.mobileMenu : ''}`}>
                <List sx={{ py: "30px", height: "inherit" }}>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => navigate('/home')}
                            sx={{
                                // minHeight: 48,
                                // px: 2.5,
                                my: 0.5,
                                flexDirection: { sm: "column", md: "row" },
                                background: "rgba(0, 0, 0, 0.05)"
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <HomeIcon sx={{ color: "#23db7b" }} />
                            </ListItemIcon>
                            <ListItemText primary="Home" sx={{ color: "#3c3e42", fontSize: { sm: "14px !important", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => navigate('/portfolio')}
                            sx={{
                                // minHeight: 56,
                                // px: 2.5,
                                my: 0.5,
                                flexDirection: { sm: "column", md: "row" }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <Assessment sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Portfolio" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                // minHeight: 56,
                                // px: 2.5,
                                my: 0.5,
                                flexDirection: { sm: "column", md: "row" }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <Search sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Explore Funds" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block', position: "fixed", width: { sx: "0%", sm: "8.333%", md: "16.666%" }, bottom: "0" }}>
                        <ListItemButton
                            sx={{
                                // minHeight: 56,
                                // px: 2.5,
                                my: 1,
                                flexDirection: { sm: "column", md: "row" }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <PowerSettingsNew sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </div>
    )
}

export default Sidebar