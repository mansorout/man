
import { Box, ListItemButton, MenuList, Typography } from '@mui/material'
import React, { useState } from 'react'
import { meria } from '../../Assets'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { styled } from '@mui/system'
import { NavigateNext } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


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

  interface Props {
    logo: string;
    name: string;
    cap: string;
    type: string;
    price: string,
    invested: string,
    year3: string,
    current: string,
    year5: string,
    absolute: string,
    margin:string,
    result:string
  }

function FundCards( props : Props) {

    const [moreAnchorEl, setMoreAnchorEl] = useState<null | HTMLElement>()

    const handleMoreIcon = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        moreAnchorEl ? 
        setMoreAnchorEl(null) :
        setMoreAnchorEl(event.currentTarget)
    }

    const menuActions = React.useRef<MenuUnstyledActions>(null);

    const navigate = useNavigate()

    const style = {
        
        menuContainer: {
          boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
          boxSizing: "border-box",
          padding: "10px",
          backgroundColor: "white",
          marginRight: "20px"
        } as React.CSSProperties
    }

  return (
    <>
        <Box style={{gap:"20px", flexWrap:"wrap", overflowX:"scroll", marginBottom:"15px",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", alignItems:"center", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
            <Box style={{display:"flex", gap:"15px"}}>
                <Box style={{overflow:"hidden",height:"32px", width:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
                    <img src={props.logo} width="100%" alt='mirae'></img>
                </Box>
                <Box>
                    <Typography style={{marginBottom:"10px", color:"#3c3e42", fontSize:"16px", fontWeight:"500", lineHeight:"1.19"}}>Mirae Assest Dynamic Bond</Typography>
                    <Box style={{display:"flex", gap:"10px"}}>
                    <Box style={{padding:"4px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                        <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>{props.cap}</Typography>
                    </Box>
                    <Box style={{padding:"4px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                        <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>{props.type}</Typography>
                    </Box>
                    </Box>
                </Box>
            </Box>
            <Box style={{padding:"4px 8px", backgroundColor:"#d6d5ef", borderRadius:"2px"}}>
                <Typography style={{color:"#6c63ff", fontSize:"16px", fontWeight:"500"}}>₹{props.price}</Typography>
            </Box>
            <Box>
                <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Invested Value</Typography>
                <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹{props.invested}</Typography>
            </Box>
            { props.type == 'Equity' || props.type == 'Balanced' ? 
                    <Box>
                        <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Current Value</Typography>
                        <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹{props.current}</Typography>
                    </Box> : 
                    <Box>
                        <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>3yrs return</Typography>
                        <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹{props.year3}</Typography>
                    </Box>
            }
            { props.type == 'Equity' || props.type == 'Debt' ? 
                    <Box>
                        <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>5yrs return</Typography>
                        <Typography style={{color:'#3c3e42', fontSize:"18px"}}>{`₹${props.year5} ${ props.result == 'profit' ? `(+${props.margin})` : `(-${props.margin})`}`}</Typography>
                    </Box> : 
                    <Box>
                        <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Absolute return</Typography>
                        <Typography style={{color:'#3c3e42', fontSize:"18px"}}>{`₹${props.absolute} ${ props.result == 'profit' ? `(+${props.margin})` : `(-${props.margin})`}`}</Typography>
                    </Box>
            }
            <Box onClick={handleMoreIcon} style={{backgroundColor:"rgba(123, 123, 157, 0.16)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"2px", width:"28px", height:"28px", borderRadius:"50%"}}>
                <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
            </Box>
        </Box>
        <MenuUnstyled
            style={{zIndex:5000}}
            actions={menuActions}
            open={Boolean(moreAnchorEl)}
            onClose={()=>setMoreAnchorEl(null)}
            anchorEl={moreAnchorEl}
        >
            <StyledMenuItem>
            <Box style={style.menuContainer}>
                <Box style={{display:"flex", justifyContent:"space-between"}}>
                <MenuList style={{width:"100%", padding:"0px"}}>
                    <ListItemButton style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Typography style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.87)"}} onClick={()=>navigate("/redeemfund")}>Redeem Funds</Typography>
                    <NavigateNext style={{color:"#93a0b2"}}/>
                    </ListItemButton>
                    <ListItemButton style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Typography style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.87)"}}>Buy More Funds</Typography>
                    <NavigateNext style={{color:"#93a0b2"}}/>
                    </ListItemButton>
                    <ListItemButton style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Typography style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.87)"}}>Show Transaction History</Typography>
                    <NavigateNext style={{color:"#93a0b2"}}/>
                    </ListItemButton>
                    <ListItemButton style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Typography style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.87)"}}>View Fund Details</Typography>
                    <NavigateNext style={{color:"#93a0b2"}}/>
                    </ListItemButton>
                </MenuList>
                </Box>
            </Box>
            </StyledMenuItem>
        </MenuUnstyled>
    </>
  )
}

export default FundCards