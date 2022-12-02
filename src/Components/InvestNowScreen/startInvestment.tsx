
import React, { useEffect, useRef, useState } from 'react'
// import './Portfolio.css'
import '../../Components/Portfolio/Portfolio.css'
import { Box, styled } from '@mui/system'
import { Grid, MenuList, Typography } from '@mui/material'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, NavigateNext, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Logo, Profile } from '../../Assets/index'
import { useNavigate } from 'react-router-dom'
import { chart, meria } from '../../Assets/index'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import HoldingCards from '../../Modules/CustomCard/HoldingCards'
import { AllHolding } from '../../Modal/AllHoldingCards'
import { InvestButton } from '../../Modules/Buttons/InvestButton'

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

const enumType = {
  ONE_TIME_LUMSOM: 1,
  MONTHLY_INCOME: 2
}

const StartInvestment = () => {

  const useStyles: any = makeStyles((theme: Theme) => ({
    appbar: {
      backgroundColor: "white",
      width: "100%",
      height: "64px",
      position: "fixed",
      zIndex: "3000",
    },
  }));

  const style = {
    main: {
      boxSizing: "border-box",
      backgroundColor: "#f9f9f9",
      height: "100vh"
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
    logo: {
      width: "50px",
      padding: "20px 0px",
    } as React.CSSProperties,
    button2: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      width: "100%",
      marginTop: "40px"
    } as React.CSSProperties,
    text: {
      color: "white"
    },
    activeBtn: {
      color: "#3c3e42",
      fontWeight: "500",
      fontSize: "16px",
      cursor: "pointer",
    },
    nonActiveBtn: {
      color: "#919eb1",
      fontWeight: "500",
      fontSize: "16px",
      cursor: "pointer"
    }
  }


  const refContainer = useRef();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()
  const [moreAnchorEl, setMoreAnchorEl] = useState<null | HTMLElement>()
  const [holding, setHolding] = useState<any>([])
  const [activeButton, setActiveButton] = useState<number>(enumType.ONE_TIME_LUMSOM);

  useEffect(() => {
    setHolding(AllHolding)
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    anchorEl ?
      setAnchorEl(null) :
      setAnchorEl(event.currentTarget)
  };

  const handleMoreIcon = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    moreAnchorEl ?
      setMoreAnchorEl(null) :
      setMoreAnchorEl(event.currentTarget)
  }


  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>


          <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
            <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13}>
              <Toolbar />
              <Grid container>
                <Grid item xs={12} sx={{ padding: 2 }}>
                  <Box style={{ marginBottom: "20px", padding: "15px", borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%", maxWidth: "600px", flexWrap: "wrap", gap: "20px" }}>
                      <Box style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography style={activeButton === enumType.ONE_TIME_LUMSOM ? style.activeBtn : style.nonActiveBtn} onClick={() => setActiveButton(enumType.ONE_TIME_LUMSOM)}>One-Time Lumpsom</Typography>
                        {
                          activeButton === enumType.ONE_TIME_LUMSOM ?
                            <Box style={{ position: "absolute", bottom: "0px", padding: "1px", backgroundColor: "#23db7b", width: "106%" }}></Box>
                            : null
                        }
                      </Box>
                      <Typography style={activeButton === enumType.MONTHLY_INCOME ? style.activeBtn : style.nonActiveBtn} onClick={() => setActiveButton(enumType.MONTHLY_INCOME)}>Monthly Income</Typography>
                      {
                        activeButton === enumType.MONTHLY_INCOME ?
                          <Box style={{ position: "absolute", bottom: "0px", padding: "1px", backgroundColor: "#23db7b", width: "106%" }}></Box>
                          : null
                      }
                    </Box>
                  </Box>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <Box>
                      {
                        activeButton === enumType.ONE_TIME_LUMSOM ?
                          <>
                            <MultipleInvestmentHandling
                              type={enumType.ONE_TIME_LUMSOM}
                              data={{
                                title: "Lum Some Investment"
                              }}
                            />
                          </>
                          :
                          <>
                            <MultipleInvestmentHandling
                              type={enumType.MONTHLY_INCOME}
                              data={{
                                title: "Monthly Income"
                              }}
                            />
                          </>
                      }
                    </Box>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}


type IProps = {
  type: number;
  data: any
}

const MultipleInvestmentHandling = (props: IProps) => {
  const style = {
    button: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      margin: "15px",
      width: "90%",
      maxWidth: "400px",
    } as React.CSSProperties,
    text: {
      color: "white"
    }
  }

  return (
    <>
      <Grid item xs={12} sx={{ padding: 2 }}>
        <Box style={{display:"flex"}}>
          <Typography component="span">{props?.data?.title}</Typography>
          <Button variant="contained" style={style.button} fullWidth>
            <Typography component="span" style={style.text} className="largeButtonText">Get Started Now</Typography>
          </Button>
        </Box>

        <Box style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "red", height: "100vh" }}>
          <Box>
            {/* handle box */}
          </Box>
          <Box>
            {/* advantage */}
            <Typography>Advantages of {props?.data?.title}</Typography>
            <Box>
              {/* convience */}

            </Box>
            <Box>
              {/* capital appreciation */}
            </Box>
            <Box>
              {/* low charges */}
            </Box>
            <Box>
              {/* sub advantage  */}
            </Box>
            <Box>
              {/* sub advantage  */}
            </Box>
          </Box>
          <Box>
            {/* disadvantage box*/}
            <Box>
              {/* sub disadvantage sub comparison */}
            </Box>
          </Box>
          <Box>
            {/* factor box */}
          </Box>

        </Box>
      </Grid>

    </>
  )
}


// const OneTimeLumpsome = () => {
//   return (
//     <>
//       <Grid item xs={12} sx={{ padding: 2 }}>
//         <Box style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "red" }}>
//           <Typography >One-Time Lumpsom</Typography>
//         </Box>
//       </Grid>

//     </>
//   )
// }

// const MonthlyIncome = () => {
//   return (
//     <>
//       <Grid item xs={12} sx={{ padding: 2 }}>
//         <Box style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "red" }}>
//           <Typography >Monthky income</Typography>
//         </Box>
//       </Grid>

//     </>
//   )
// }

export default StartInvestment