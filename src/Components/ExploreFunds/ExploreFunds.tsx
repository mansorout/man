
import './Portfolio.css'
import { Box, styled } from '@mui/system'
import { Avatar, Chip, Grid, IconButton, InputBase, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Drawer as DrawerList,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Close, ErrorOutline, Filter, FilterAlt, FilterAltOutlined, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search, SearchOutlined, TaskAltOutlined, WrongLocationOutlined } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider,  Theme} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Logo, meria, Profile, Star} from '../../Assets/index'
import { useNavigate } from 'react-router-dom'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import AllExploreFundCard from '../../Modules/CustomCard/AllExploreFundCard'
import { ExploreFundsList } from '../../Modal/ExploreFunds'

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
 
function ExploreFunds() {

  const useStyles : any = makeStyles((theme: Theme) => ({
    appbar: {
      backgroundColor:"white",
      width:"100%",
      height:"64px",
      position:"fixed",
      zIndex: "3000",
    },
  }));

  

  const style = {
    main: {
      boxSizing:"border-box",
      backgroundColor:"#f9f9f9",
      height:"100vh"
    } as React.CSSProperties,
    drawer : {
      zIndex: "500",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
    }as React.CSSProperties,
    image : {
      width: '176px',
    } as React.CSSProperties,
    profileContainer : {
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
    toolbar : {
      display: "flex",
      justifyContent: "space-between"
    },
    profile : {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: "1px solid white"
    },
    profileInter : {
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
    }as React.CSSProperties,
    menuButton: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0px"
    }as React.CSSProperties,
    menuText : {
      color : "black",
      fontSize : "10px",
      fontWeight : "500",
      padding:"5px 10px",
      borderRadius : "4px",
      backgroundColor : "#ffc300",
      cursor:"pointer"
    },
    menuText2 : {
      padding: "6px 12px",
      borderRadius: "4px",
      border: "solid 1px #23db7b",
      backgroundColor: "rgba(35, 219, 123, 0.12)",
      fontSize: "12px",
      fontWeight: "500",
      color : "#09b85d",
      cursor : "pointer"
    },
    button : {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "none",
        backgroundColor: "white",
        textAlign: "left",
        justifyContent: "flex-start",
    } as React.CSSProperties,
    menuIcon : {
      color : "#6c63ff",
      fontSize: "24px"
    },
    appBar: {
      backgroundColor : "white",
    },
    logo : {
      width: "50px",
      padding: "20px 0px",
    } as React.CSSProperties,

  }

  const [fundList, setFundList] = useState<any[]>([])
  const menuActions = React.useRef<MenuUnstyledActions>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    anchorEl ? 
    setAnchorEl(null) :
    setAnchorEl(event.currentTarget)
  };

  useEffect(()=>{
    setFundList(ExploreFundsList)
  },[])

  const classes = useStyles()

  const refContainer = useRef();

  const navigate = useNavigate();

  const [selected, setSelected] = useState<number>(1)

  return (
      <Box style={{width: "100vw"}} ref={refContainer}>
        <Navbar/>
          <Box  sx={style.main}>
          <Grid container spacing={0} >
          <Grid  item xs={0} sm={1} md={2}>
              <Toolbar/>
              <Sidebar/>
            </Grid>
            <Grid container sx={{width:"100%", height:"100vh", overflow:"scroll"}} xs={13} sm={11} md={10}>
              <Grid sx={{height: { xs: "auto", sm: "inherit"}, padding:2, overflow:{ sx: "auto", sm: "scroll"}}} item xs={12}>
                <Toolbar/>
                <Box style={{display:"flex", alignItems:'start', justifyContent:"space-between", flexWrap:'wrap'}}>
                    <Box padding={2} style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:'wrap'}}>
                        <Box>
                            <Typography style={{fontSize:"12px", color:"#8787a2"}}>Choose Funds to Invest</Typography>
                            <Typography style={{fontSize:"18px", color:"#3c3e42", fontWeight:"500"}}>Explore Funds</Typography>
                            <Typography style={{fontSize:"12px", color:"#8787a2", marginTop:"20px"}}>3 funds found</Typography>
    
                        </Box>
                    </Box>
                    <Box padding={2}>
                        <Box style={{border:"1px solid #dddfe2", boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.05)", borderRadius:"4px", display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px", padding:"5px 14px"}}>
                            <Box style={{display:"flex", gap:"10px", alignItems:"center"}}>
                            <SearchOutlined style={{color:"#7b7b9d"}}/>
                            <InputBase onChange={(e)=>setFundList(ExploreFundsList.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())))} placeholder='Search funds...' style={{color:"#7b7b9d", minWidth:"250px"}}></InputBase>
                            </Box>
                          
                            <IconButton >
                                <FilterAltOutlined style={{color:"#09b85d"}}/>
                            </IconButton>
                        </Box>
                        <Box style={{marginBottom:"20px", display:"flex", gap:"15px", alignItems:"center"}}>
                          <Box onClick={()=>{ setSelected(1); setFundList(ExploreFundsList)}} style={{cursor:"pointer", border:`1px solid ${ selected == 1 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 1 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                            <Typography style={{fontWeight:"500", color:`${ selected == 1 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>All Funds ({ExploreFundsList.length})</Typography>
                          </Box>
                          <Box onClick={()=>{ setSelected(2); setFundList(ExploreFundsList.filter((item) => item.type == 'Equity'))}} style={{cursor:"pointer", border:`1px solid ${ selected == 2 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 2 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                            <Typography style={{fontWeight:"500", color:`${ selected == 2 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>Equity ({ExploreFundsList.filter((item) => item.type == 'Equity').length})</Typography>
                          </Box>
                          <Box onClick={()=>{ setSelected(3); setFundList(ExploreFundsList.filter((item) => item.type == 'Debt'))}} style={{cursor:"pointer", border:`1px solid ${ selected == 3 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 3 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                            <Typography style={{fontWeight:"500", color:`${ selected == 3 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>Debt ({ExploreFundsList.filter((item) => item.type == 'Debt').length})</Typography>
                          </Box>
                          <Box onClick={()=>{ setSelected(4); setFundList(ExploreFundsList.filter((item) => item.type == 'Balanced'))}} style={{cursor:"pointer", border:`1px solid ${ selected == 4 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 4 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                            <Typography style={{fontWeight:"500", color:`${ selected == 4 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>Balanced ({ExploreFundsList.filter((item) => item.type == 'Balanced').length})</Typography>
                          </Box>
                         
                        </Box>
                        
                    </Box>
                </Box>
                
                {
                  fundList.length &&   fundList.map((item:any,key:number) => {
                    return(
                      <>
                        <AllExploreFundCard {...item} key={key} />
                      </>
                    )
                  })
                }
                
            </Grid>
          </Grid>
          </Grid>
          </Box>
      </Box>
  )
}

export default ExploreFunds