import React, { useEffect, useRef, useState } from 'react';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box, styled } from '@mui/system'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search } from '@mui/icons-material'
import { Grid, Modal, Typography } from '@mui/material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { useNavigate } from 'react-router-dom'
import { Ad1, Ad1_1, Ad1_2, Ad2, Logo, MonoLogo, Profile, SIP } from '../../Assets/index'
import { useSelector, useDispatch } from 'react-redux';
import { NavToggleAction } from '../../Store/Duck/NavToggle'
import siteConfig from '../../Utils/siteConfig';
import { checkExpirationOfToken, modifyName } from '../../Utils/globalFunctions';
import ViewProfileCard from '../../Modules/Cards/ViewProfileCard';
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions';
import { setUploadImageThunk } from '../../Store/Global/thunk/global-thunk';
// import { any } from '../../Redux/Store';


const useStyles: any = makeStyles((theme: Theme) => ({
    appbar: {
        backgroundColor: "white",
        width: "100%",
        height: "64px",
        position: "fixed",
        zIndex: "3000",
    },
}));


const StyledMenuItem = styled(MenuItemUnstyled)(
    ({ theme: Theme }) => `
    list-style: none;
    border-radius: 8px;
    width: 300px;
    boxSizing: border-box;
    zIndex: 4000;
    &.${menuItemUnstyledClasses.focusVisible} {
      outline: none;
    }
    `,
);

const style = {
    main: {
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9",
        height: "100%"
    } as React.CSSProperties,
    drawer: {
        zIndex: "500",
        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
    } as React.CSSProperties,
    image: {
        width: '176px',
    } as React.CSSProperties,
    profileContainer: {
        borderRadius: "8px",
        border: "solid 1px #4f46de",
        backgroundColor: "#6c63ff",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    profile: {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid white"
    },
    profileInter: {
        width: "40px",
        height: "40px",
        border: "solid 1px rgba(75, 123, 236, 0.49)",
        borderRadius: "50%"
    },
    menuContainer: {
        boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
        boxSizing: "border-box",
        padding: "10px",
        backgroundColor: "white",
        marginRight: "20px"
    } as React.CSSProperties,
    menuButton: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0px"
    } as React.CSSProperties,
    menuText: {
        color: "black",
        fontSize: "10px",
        fontWeight: "500",
        padding: "5px 10px",
        borderRadius: "4px",
        backgroundColor: "#ffc300",
        cursor: "pointer"
    },
    menuText2: {
        padding: "6px 12px",
        borderRadius: "4px",
        border: "solid 1px #23db7b",
        backgroundColor: "rgba(35, 219, 123, 0.12)",
        fontSize: "12px",
        fontWeight: "500",
        color: "#09b85d",
        cursor: "pointer"
    },
    button: {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "none",
        backgroundColor: "white",
        textAlign: "left",
        justifyContent: "flex-start",
    } as React.CSSProperties,
    menuIcon: {
        color: "#6c63ff",
        fontSize: "24px"
    },
    appBar: {
        backgroundColor: "white",
    },
    modalContainer: {
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    } as React.CSSProperties,
    logo: {
        width: "50px",
        padding: "20px 0px",
    } as React.CSSProperties,

}

const Navbar = () => {

    // const userName: string | null = localStorage.getItem(siteConfig.USER_NAME);
    // const userEmail: string | null = localStorage.getItem(siteConfig.USER_EMAIL);

    const g_profileData: any = useSelector((state: any) => state?.authReducer?.profile?.data);
    const [profileImage2, setProfileImage2] = useState<any>("")
    const g_profileImagge: any = useSelector((state: any) => state?.globalReducer?.profileimage);
    const g_userKycStatus: any = useSelector((state: any) => state?.authReducer?.profileValidationData?.data?.isKycCompleted);

    // console.log("upload image api response",g_profileImagge)

    const [objUserDetail, setObjUserDetail]: any = useState<any>({
        userName: localStorage.getItem(siteConfig.USER_NAME),
        userEmail: localStorage.getItem(siteConfig.USER_EMAIL)
    })
    const [imgSrc, setImgSrc] = useState<any>()


    useEffect(() => {
        if (g_profileData?.userdetails) {
            setObjUserDetail({
                userName: localStorage.getItem(siteConfig.USER_NAME),
                userEmail: localStorage.getItem(siteConfig.USER_EMAIL)
            })
        };
    }, [g_profileData?.userdetails]);

    useEffect(() => {

        let image = localStorage.getItem("imgSrc")
        // console.log(image)
        setImgSrc(image)
    }, [])

    let image: any = localStorage.getItem("imgSrc")
    //   console.log("profile image",profileImage2)


    // useEffect(() => {
    //     setObjUserDetail((prev: any) => ({
    //         ...prev,
    //         userEmail: userEmail
    //     }))
    // }, [userEmail])

    // useEffect(() => {
    //     setObjUserDetail((prev: any) => ({
    //         ...prev,
    //         userName: userName
    //     }))
    // }, [userName])

    const dispatch: any = useDispatch()
    const { toggleState }: any = useSelector((state: any) => state.NavToggleReducer)
    const [OTP, setOTP] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const menuActions = React.useRef<MenuUnstyledActions>(null);
    const [mpin, setMpin] = useState<string | null>();

    const handleOtpChange = (otp: any) => {
        setOTP(otp)
    }
    const classes = useStyles()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()

    const handleClick = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        anchorEl ?
            setAnchorEl(null) :
            setAnchorEl(event.currentTarget)
        //            // @ts-ignore
        //    let res : apiResponse = await setUploadImageThunk(ImageData)
        //    console.log(res)
        //    localStorage.setItem("imgSrc",imgSrc)
        //    console.log(imgSrc)
        //        // @ts-ignore
        //      handleApiResponse(res, [setImgSrc]);

    };

    //@ts-ignore
    const handleApiResponse = (res: apiResponse, arrFunc: void[]) => {

        if (checkExpirationOfToken(res?.code)) {
            dispatch(setTokenExpiredStatusAction(true));

            return;
        }

        if (res?.error === true) {
            return;
        }

        arrFunc.forEach((item: void) => {
            // @ts-ignore
            if (res?.data) item(res?.data);
            console.log(res?.data);
        });
    };

    const handleMenuOpen = () => {
        dispatch(NavToggleAction(!toggleState))
        dispatch(setTokenExpiredStatusAction(true));
        let keyImg = localStorage.getItem("onSelectFile");
    }
    const handelResponeImage = async () => {

    }

    return (
        <div>

            <AppBar elevation={2} style={style.appBar} classes={classes.appBar}>
                <Toolbar style={style.toolbar}>
                    <Box sx={{ cursor: 'pointer' }}>
                        <MenuRounded onClick={handleMenuOpen} sx={{ color: "#8787a2", display: { sx: "block", sm: "none" }, marginRight: "20px", }} />
                        <img onClick={() => navigate("/home")} src={Logo} alt="Sprint Money" style={style.image} />
                    </Box>
                    <Box onClick={handleClick} style={style.profileContainer}>
                        <img src={g_profileImagge || image}
                            onClick={handelResponeImage}

                            alt="image" style={style.profile} />


                        <Typography sx={{ fontSize: "16px", color: "white", display: { xs: "none", sm: "block" } }}>Hi{objUserDetail?.userName ? (objUserDetail?.userName.length > 8 ? modifyName(objUserDetail?.userName, 8) : `, ${objUserDetail?.userName}`) : ``}</Typography>
                        {anchorEl ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
                    </Box>
                    <MenuUnstyled
                        style={{ zIndex: 5000 }}
                        actions={menuActions}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        anchorEl={anchorEl}
                    >
                        <StyledMenuItem>
                            <Box style={style.menuContainer}>
                                <img src={g_profileImagge || image} alt="image" style={style.profileInter} />

                                <Typography className='mediumButtonText'>{objUserDetail?.userName ? objUserDetail?.userName : ""}</Typography>
                                <Typography className="caption">{objUserDetail?.userEmail ? objUserDetail?.userEmail : ""}</Typography>
                                <Box style={style.menuButton}>
                                    {
                                        !g_userKycStatus ?
                                            <Typography style={style.menuText}>KYC PENDING</Typography>
                                            : null
                                    }
                                    <Typography style={style.menuText2} onClick={() => navigate('/viewprofile')}>View Profile</Typography>
                                </Box>
                                <Divider style={{ margin: "15px 0px" }} />
                                <Button variant="contained" style={style.button} fullWidth startIcon={<Support style={style.menuIcon} />}>
                                    <Typography component="span" className="subTitle3">Help & Support</Typography>
                                </Button>
                            </Box>
                        </StyledMenuItem>
                    </MenuUnstyled>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar