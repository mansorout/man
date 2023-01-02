import React from 'react'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Box, styled } from '@mui/system'
import { makeStyles } from '@mui/styles';
// import { RootStore } from '../../Redux/Store';
import { useSelector, useDispatch } from 'react-redux';
import { NavToggleAction } from '../../Store/Duck/NavToggle'
import { setIsUserAuthenticatedAction, setUserViewProfileDataAction, setloginDataOnSuccessAction } from '../../Store/Authentication/actions/auth-actions'
import siteConfig from '../../Utils/siteConfig'
import { store } from '../../Store/Store'


const useStyles: any = makeStyles((theme: Theme) => ({
    mobileMenu: {
        '@media (max-width: 600px)': {
            opacity: '1 !important',
            pointerEvents: 'initial !important'
        }
    },
    menuList:{
        '& .MuiListItemText-root':{
            '& span':{
                fontSize: '14px!important'
            }
        }
    }
}));



const Sidebar = () => {
    const navigate = useNavigate()
    const classes = useStyles()

    const pathName = window.location.pathname;

    const dispatch: any = useDispatch()
    const { toggleState }: any = useSelector((state: any) => state.NavToggleReducer)

    const handleMenuOpen = () => {
        dispatch(NavToggleAction(!toggleState))
    }

    const handleUserLogout = () => {
        dispatch(NavToggleAction(!toggleState))
        dispatch(setIsUserAuthenticatedAction(false));
        dispatch(setUserViewProfileDataAction({}));
        store.dispatch(setloginDataOnSuccessAction({}));
        localStorage.clear();
        // localStorage.setItem(siteConfig.ACCESS_TOKEN_KEY, "");
    }

    return (
        <div>

            {/* <Box sx={{ display: 'block', opacity: { xs: '0', sm: "1" }, pointerEvents: { xs: 'none', sm: "initial" }, backgroundColor: "white", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)", padding: 0, boxSizing: "border-box", height: "100vh", transition: 'all 0.3s ease-in-out', position: 'fixed', width: { sm: '70px', md: '230px' }, zIndex: '11' }} className={`${toggleState ? classes.mobileMenu : ''}`}> */}
            <Box sx={{ display: 'block', opacity: { xs: '0', sm: "1" }, pointerEvents: { xs: 'none', sm: "initial" }, backgroundColor: "white", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)", padding: 0, boxSizing: "border-box", height: "100vh", transition: 'all 0.3s ease-in-out', position: 'fixed', width: { sm: '90px', md: '230px' }, zIndex: '11' }} className={`${toggleState ? classes.mobileMenu : ''}`}>
                <List sx={{ py: "30px", height: "inherit" }} className={classes.menuList}>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => { navigate('/home'); handleMenuOpen() }}
                            sx={{
                                // minHeight: 48,
                                // px: 2.5,
                                my: 0.5,
                                flexDirection: { sm: "column", md: "row" },
                                background: pathName == '/home' ? "rgba(0, 0, 0, 0.05)" : "transparent"
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <HomeIcon sx={{ color: pathName == '/home' ? "#23db7b" : 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Home" sx={{ color: "#3c3e42", fontSize: { sm: "14px !important", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => { navigate('/portfolio'); handleMenuOpen() }}
                            sx={{
                                // minHeight: 56,
                                // px: 2.5,
                                my: 0.5,
                                background: pathName == '/portfolio' || pathName == '/holdings' || pathName == '/transactions' || pathName == '/reports' || pathName == '/sips' || pathName == '/cancleSip' ? "rgba(0, 0, 0, 0.05)" : "transparent",
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
                                <Assessment sx={{ color: pathName == '/portfolio' || pathName == '/holdings' || pathName == '/transactions' || pathName == '/reports' || pathName == '/sips' || pathName == '/cancleSip' ? "#23db7b" : 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Portfolio" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => { navigate('/explorefunds'); handleMenuOpen() }}
                            sx={{
                                // minHeight: 56,
                                // px: 2.5,
                                my: 0.5,
                                background: pathName == '/explorefunds' ? "rgba(0, 0, 0, 0.05)" : "transparent",
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
                                <Search sx={{ color: pathName == '/explorefunds' ? "#23db7b" : 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Explore Funds" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block', position: "fixed", width: { sx: "0%", sm: "8.333%", md: "16.666%" }, bottom: "0" }}>
                        <ListItemButton
                            onClick={() => { navigate('/login'); handleMenuOpen() }}

                            sx={{
                                // minHeight: 56,
                                // px: 2.5,
                                my: 1,
                                width: { sm: '70px', md: '230px' },
                                background: pathName == '/logout' ? "rgba(0, 0, 0, 0.05)" : "transparent",
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
                                <PowerSettingsNew sx={{ color: pathName == '/logout' ? "#23db7b" : 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Logout"
                                onClick={() => { navigate('/login'); handleUserLogout() }}
                                sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </div>
    )
}

export default Sidebar