
import { meria } from '../../Assets'
import { Box, styled } from '@mui/system'
import { Grid, MenuList, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, NavigateNext, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Logo, Profile } from '../../Assets/index'
import { useNavigate } from 'react-router-dom'
import AddMoreFundsModal from '../../Components/Portfolio/AddMoreFundsModal'

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

interface Prop {
  logo: string,
  name: string,
  cap: string,
  type: string,
  price: string,
  invested: string,
  // year3: string,
  current: string,
  // year5: string,
  absolute: string,
  // margin: string,
  result: string

  absoluteReturnInPercent: string
  fundId: string
}

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
  }

}

// function HoldingCards({ name, price, year3, current, absolute, year5, result, margin, cap, type, invested, absoluteReturnInPercent }: Prop) {
function HoldingCards({ name, price, current, absolute, result, cap, type, invested, absoluteReturnInPercent, fundId }: Prop) {


  const [open, setOpen] = useState<boolean>(false)

  const menuActions = React.useRef<MenuUnstyledActions>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()
  const [moreAnchorEl, setMoreAnchorEl] = useState<null | HTMLElement>()


  const handleMoreIcon = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    moreAnchorEl ?
      setMoreAnchorEl(null) :
      setMoreAnchorEl(event.currentTarget)
  }


  const navigate = useNavigate();

  return (
    <>
      <Box style={{ position: "relative", gap: "20px", flexWrap: "wrap", overflowX: "scroll", marginBottom: "15px", display: "flex", backgroundColor: "white", borderRadius: "8px", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding: "10px 40px 10px 20px" }}>
        <Box style={{ display: "flex", flexWrap: "wrap", gap: "10px", width: "100%", maxWidth: "300px" }}>
          <Box style={{ overflow: "hidden", height: "32px", width: "32px", border: "1px solid #d1d6dd", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <img src={meria} width="100%" alt='mirae'></img>
          </Box>
          <Box>
            <Typography style={{ marginBottom: "10px", color: "#3c3e42", fontSize: "16px", fontWeight: "500", lineHeight: "1.19" }}>{name}</Typography>
            <Box style={{ display: "flex", gap: "10px" }}>
              <Box style={{ padding: "4px 5px", backgroundColor: "rgba(123, 123, 157, 0.16)" }}>
                <Typography style={{ color: "#7b7b9d", fontSize: "12px" }}>{cap}</Typography>
              </Box>
              <Box style={{ padding: "4px 5px", backgroundColor: "rgba(123, 123, 157, 0.16)" }}>
                <Typography style={{ color: "#7b7b9d", fontSize: "12px" }}>{type}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mx: { xs: "auto", sm: "30px" }, padding: "4px 8px", backgroundColor: "#d6d5ef", borderRadius: "2px" }}>
          <Typography style={{ color: "#6c63ff", fontSize: "16px", fontWeight: "500" }}>₹{price}</Typography>
        </Box>
        <Box style={{ display: "flex", gap: "30px", flexWrap: 'wrap' }}>
          <Box>
            <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Invested Value</Typography>
            <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹{invested}</Typography>
          </Box>
          {/* {
            type == "Debt" ?
              <Box>
                <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>3 yrs returns</Typography>
                <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹{year3}</Typography>
              </Box> :
              <Box>
                <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Current Value</Typography>
                <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹{current}</Typography>
              </Box>
          } */}
          <Box>
            <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Current Value</Typography>
            <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹{current}</Typography>
          </Box>
          <Box>
            <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Absolute Return</Typography>
            <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹{absolute} <span style={{ color: `${result == 'profit' ? '#23db7b' : '#db2323'}` }}>{`(${result == 'profit' ? '+' : '-'} ${absoluteReturnInPercent})`}</span></Typography>
          </Box>

          {/* {
            type == "Balanced" ?
              <Box>
                <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>Absolute Return</Typography>
                <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹{absolute} <span style={{ color: `${result == 'profit' ? '#23db7b' : '#db2323'}` }}>{`(${result == 'profit' ? '+' : '-'} ${margin})`}</span></Typography>
              </Box> :
              <Box>
                <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>5 yrs return</Typography>
                <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>₹{year5} <span style={{ color: `${result == 'profit' ? '#23db7b' : '#db2323'}` }}>{`(${result == 'profit' ? '+' : '-'} ${margin})`}</span></Typography>
              </Box>
          } */}
        </Box>
        <Box onClick={handleMoreIcon} style={{ right: '10px', top: '10px', position: "absolute", backgroundColor: "rgba(123, 123, 157, 0.16)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "2px", width: "28px", height: "28px", borderRadius: "50%" }}>
          <Box style={{ backgroundColor: "#6c63ff", width: "4px", height: "4px", borderRadius: "50%" }}></Box>
          <Box style={{ backgroundColor: "#6c63ff", width: "4px", height: "4px", borderRadius: "50%" }}></Box>
          <Box style={{ backgroundColor: "#6c63ff", width: "4px", height: "4px", borderRadius: "50%" }}></Box>
        </Box>
      </Box>
      <MenuUnstyled
        style={{ zIndex: 5000 }}
        actions={menuActions}
        open={Boolean(moreAnchorEl)}
        onClose={() => setMoreAnchorEl(null)}
        anchorEl={moreAnchorEl}
      >
        <StyledMenuItem>
          <Box style={style.menuContainer}>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <MenuList style={{ width: "100%", padding: "0px" }}>
                <ListItemButton onClick={() => navigate('/redeemfund')} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.87)" }} >Redeem Funds</Typography>
                  <NavigateNext style={{ color: "#93a0b2" }} />
                </ListItemButton>
                <ListItemButton onClick={() => {
                  setOpen(true)
                }} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.87)" }}>Buy More Funds</Typography>
                  <NavigateNext style={{ color: "#93a0b2" }} />
                </ListItemButton>
                <ListItemButton style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.87)" }}>Show Transaction History</Typography>
                  <NavigateNext style={{ color: "#93a0b2" }} />
                </ListItemButton>
                <ListItemButton style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }} onClick={() => { if (fundId) navigate("/funddetails", { state: { secid: fundId, parentRoute: "/holdings" } }) }}>
                  <Typography style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.87)" }}>View Fund Details</Typography>
                  <NavigateNext style={{ color: "#93a0b2" }} />
                </ListItemButton>
              </MenuList>
            </Box>
          </Box>
        </StyledMenuItem>
      </MenuUnstyled>


      <AddMoreFundsModal open={open} close={() => setOpen(false)} />
    </>
  )
}

export default HoldingCards