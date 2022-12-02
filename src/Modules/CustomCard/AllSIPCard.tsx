
import { meria } from '../../Assets'
import { Box, styled } from '@mui/system'
import { Button, Grid, Icon, IconButton, InputBase, List, ListItemButton, Modal, Theme, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Divider,} from '@mui/material';
import { ArrowDropDown, Close, ErrorOutline, FilterAltOutlined, InfoRounded, NavigateNext, SearchOutlined, TaskAltOutlined, Warning } from '@mui/icons-material';
import {warning} from '../../Assets/index'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { MenuList } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

  interface Prop {
    logo: string,
    name: string,
    order: string,
    cap: string,
    mandate: boolean,
    SIPDate: string,
    type: string,
    SIPAmount : string,
    status:string,
    stopDate: string,
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

function AllSIPCard({name,SIPDate, SIPAmount, type, logo, mandate, order, cap, status, stopDate } : Prop) {

    
      
      
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
          button2 : {
              height: "48px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
              backgroundColor: "#23db7b",
              width:"100%",
              marginTop:"40px"
          } as React.CSSProperties,
          text : {
              color: "white"
          },
          button3 : {
            height: "48px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            marginBottm: "10px",
            padding:"10px 20px"
        } as React.CSSProperties,
        button4 : {
          height: "48px",
          boxShadow: "0 4px 8px 0 white",
          backgroundColor: "rgba(60, 62, 66, 0.1)",
          marginBottm: "20px",
          padding:"10px 20px",
      } as React.CSSProperties,
        }


  const [openMandateModal, setOpenMandateModal] = useState<boolean>(false)
  const [openRealMandateModal, setOpenRealMandateModal] = useState<boolean>(false)
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
  const [openRealPaymentModal, setOpenRealPaymentModal] = useState<boolean>(false)
  const menuActions = React.useRef<MenuUnstyledActions>(null);
  const [moreAnchorEl, setMoreAnchorEl] = useState<null | HTMLElement>()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()
  const [error, setError] = useState<boolean>(false)

  const [changes, setChanges] = useState<string>('')

  const handleMoreIcon = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    moreAnchorEl ? 
    setMoreAnchorEl(null) :
    setMoreAnchorEl(event.currentTarget)
  }

  const navigate = useNavigate()


  return (
    <>
    <Box style={{marginBottom:"20px"}}>
      <Box style={{gap:"20px", flexWrap:"wrap", overflowX:"scroll",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px", zIndex:"100"}}>
        
          <Box style={{display:"flex",gap:"20px"}}>
            <Box style={{overflow:"hidden",height:"32px", width:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
              <img src={logo} width="100%" alt='mirae'></img>
            </Box>
            <Box>
              <Typography style={{marginBottom:"10px", color:"#3c3e42", fontSize:"16px", fontWeight:"500", lineHeight:"1.19"}}>{name}</Typography>
              <Box style={{marginBottom:"10px", display:"flex",alignItems:"center"}}>
                <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>Order No: </Typography>
                <Typography style={{color:"#7b7b9d", fontSize:"14px", fontWeight:"500"}}> {order} </Typography>
              </Box>
              <Box style={{display:"flex", gap:"10px"}}>
                <Box style={{padding:"2px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                  <Typography style={{color:"#7b7b9d", fontSize:"12px"}}> {cap} </Typography>
                </Box>
                <Box style={{padding:"2px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                  <Typography style={{color:"#7b7b9d", fontSize:"12px"}}> {type} </Typography>
                </Box>
                {
                  mandate ? 
                  <Box onClick={()=>setOpenRealMandateModal(true)} style={{display:"flex", cursor:"pointer"}}>
                    <Box style={{width:"25px",height:"25px", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#6c63ff"}}>
                        <ErrorOutline style={{color:"white", width:"15px"}}/>
                      </Box>
                    <Box style={{padding:"2px 5px", backgroundColor:"#e1e0ff"}}>
                      <Typography style={{color:"black", fontSize:"12px", fontWeight:"500"}}>Mandate Pending</Typography>
                    </Box>
                  </Box> : null
                }
                
              </Box>
            </Box>
          </Box>
          
          <Box>
            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>SIP Date</Typography>
            <Typography style={{color:'#3c3e42', fontSize:"18px"}}> {SIPDate} </Typography>
          </Box>
          <Box>
            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>SIP Amount</Typography>
            <Typography style={{color:'#3c3e42', fontSize:"18px"}}> {SIPAmount} </Typography>
          </Box>
          <Box>
            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Status</Typography>
            <Box style={{padding:"2px 5px", backgroundColor: status=='Active' ? "#d2f8e3" : status=='Awaited' ? "#fff1cc" : "#feddcc" }}>
              <Typography style={{color:"black", fontSize:"14px", fontWeight:"500"}}>{status}</Typography>
            </Box>
          </Box>
          <Box>
            <Box onClick={handleMoreIcon} style={{backgroundColor:"rgba(123, 123, 157, 0.16)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"2px", width:"28px", height:"28px", borderRadius:"50%"}}>
              <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
              <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
              <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
            </Box>
          </Box>
      </Box>
      {
        status == 'Stoped' || status == 'Awaited' ? 
        <Box style={{zIndex:"99", backgroundColor:"#e0f8ff", padding:"10px", borderRadius:"0px 0px 8px 8px"}}>
          <Typography style={{color:"#544ec8", fontSize:"12px", fontWeight:"500", paddingLeft:"60px"}}>Stopped SIP on {stopDate}</Typography>
        </Box> : null
      }
    </Box>
    <Modal open={openMandateModal} onClose={()=>setOpenMandateModal(false)}>
      <Box style={{
        width:"90%",
        maxWidth:"330px",
        borderRadius:"8px",
        boxShadow:"0 24px 24px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        overflow:"hidden",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)"
      }}>
        <Box my={2} style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#fddaca", width:"80px", height:'80px', borderRadius:"50%", }}>
          <Close sx={{ fontSize:"40px", color:"#ff5300"}}/>
        </Box>
        <Typography mx={2}  style={{fontSize:"24px", color:"#3c3e42", fontWeight:"500", textAlign:"center"}}>Are you sure you want to stop this SIP?</Typography>
        <Typography mx={2} mb={4} style={{fontSize:"12px", color:"#7b7b9d",textAlign:"center", fontWeight:"500"}}>If your SIP date is within three working day of today’s date, then the next installment will get deducted and SIP will stop after that.</Typography>
        <Box mb={2} style={{display:"flex", gap:"20px"}}>
          
          <Button variant="contained" style={style.button3} onClick={()=>{setOpenMandateModal(false)}} >
              <Typography style={{color:"white"}} className="largeButtonText">No</Typography>
          </Button>
          <Button variant="contained" style={style.button4} onClick={()=>{setOpenPaymentModal(true); setOpenMandateModal(false)}} >
              <Typography style={{color:"#626468"}} className="largeButtonText">Yes</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
    <Modal open={openPaymentModal} >
    <Box style={{
        width:"90%",
        maxWidth:"330px",
        borderRadius:"8px",
        boxShadow:"0 24px 24px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        overflow:"hidden",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)"
      }}>
        <Box my={2} style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#fddaca", width:"80px", height:'80px', borderRadius:"50%", }}>
          <Close sx={{ fontSize:"40px", color:"#ff5300"}}/>
        </Box>
        <Typography mx={2}  style={{fontSize:"24px", color:"#3c3e42", fontWeight:"500", textAlign:"center"}}>Help us with your reason to stop the SIP</Typography>
        <Box my={2} style={{width:"80%", border:"1px solid #dddfe2", boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.05)", borderRadius:"4px", display:"flex", alignItems:"center", gap:"10px", padding:"5px 14px"}}>
          
          <InputBase onChange={(e)=>setChanges(e.target.value)} placeholder='Select a reason to stop SIP' style={{color:"#7b7b9d", width:"250px"}}></InputBase>
          <ArrowDropDown/>  
        </Box>
        <Box mb={2} style={{width:"80%", height:"100px", border:"1px solid #dddfe2", boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.05)", borderRadius:"4px", display:"flex", alignItems:"start", gap:"10px", padding:"5px 14px"}}>
          
          <InputBase onChange={(e)=>setChanges(e.target.value)} placeholder='Any other reason' style={{color:"#7b7b9d", width:"250px"}}></InputBase>
          
        </Box>

        { error ? <Typography mx={2}  style={{fontSize:"10px", color:"#ff5300", textAlign:"center"}}>Please provide some input.</Typography> : ""}

        <Box mb={2} p={2} style={{display:"flex", gap:"20px"}}>
          
          <Button variant="contained" style={style.button3} onClick={()=> changes.length > 0 ? navigate('/cancleSip') : setError(true)} >
              <Typography style={{color:"white"}} className="largeButtonText">Proceed & Submit</Typography>
          </Button>
          <Button variant="contained" style={style.button4} onClick={()=>{setOpenPaymentModal(false)}} >
              <Typography style={{color:"#626468"}} className="largeButtonText">Cancel</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
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
              <ListItemButton onClick={()=>setOpenMandateModal(true)} style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Typography style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.87)"}}>Stop SIP</Typography>
                <NavigateNext style={{color:"#93a0b2"}}/>
              </ListItemButton>
            </MenuList>
          </Box>
        </Box>
      </StyledMenuItem>
    </MenuUnstyled>
    <Modal open={openRealMandateModal} onClose={()=>setOpenRealMandateModal(false)}>
      <Box style={{
        width:"90%",
        maxWidth:"330px",
        borderRadius:"8px",
        boxShadow:"0 24px 24px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        overflow:"hidden",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)"
      }}>
        <Box my={2} style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#6c63ff", width:"50px", height:'50px', borderRadius:"50%", }}>
          <ErrorOutline sx={{ width:"48px", color:"white"}}/>
        </Box>
        <Typography style={{fontSize:"24px", color:"#3c3e42", fontWeight:"500"}}>Mandate Pending</Typography>
        <Typography mx={2} mb={4} style={{fontSize:"12px", color:"#7b7b9d",textAlign:"center", fontWeight:"500"}}>Mandate Registration is important to auto debit the investment amount for every month.</Typography>
        <Button variant="contained" style={style.button3} fullWidth onClick={()=>{setOpenRealPaymentModal(true); setOpenRealMandateModal(false)}} >
            <Typography style={style.text} className="largeButtonText">Register Now</Typography>
        </Button>
      </Box>
    </Modal>
    <Modal open={openRealPaymentModal} onClose={()=>setOpenRealPaymentModal(false)}>
      <Box style={{
        width:"90%",
        maxWidth:"330px",
        borderRadius:"8px",
        boxShadow:"0 24px 24px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        overflow:"hidden",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)"
      }}>
        <Box my={2} style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#6c63ff", width:"50px", height:'50px', borderRadius:"50%", }}>
          <ErrorOutline sx={{ width:"48px", color:"white"}}/>
        </Box>
        <Typography mb={2} style={{fontSize:"24px", color:"#3c3e42", fontWeight:"500"}}>NEFT/RTGS Pending</Typography>
        <Box style={{backgroundColor:"#6c63ff", width:"100%"}}>
          <Typography style={{fontSize:"14px", color:'white', padding:"10px 20px"}}>Transfer ₹30,000 to below account</Typography>
        </Box>
        <Grid container xs={12} style={{backgroundColor:"white", width:"100%" }}>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#7d7d9e', padding:"10px 20px"}}>Bank Name</Typography></Grid>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#3c3e42', padding:"10px 20px"}}>ICICI Bank</Typography></Grid>
        </Grid>
        <Grid container xs={12} style={{backgroundColor:"rgba(0, 0, 0, 0.05)", width:"100%"}}>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#7d7d9e', padding:"10px 20px"}}>Account Name</Typography></Grid>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#3c3e42', padding:"10px 20px"}}>ICICI Ltd.</Typography></Grid>
        </Grid>
        <Grid container xs={12} style={{backgroundColor:"white", width:"100%"}}>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#7d7d9e', padding:"10px 20px"}}>Account Type</Typography></Grid>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#3c3e42', padding:"10px 20px"}}>Current Account</Typography></Grid>
        </Grid>
        <Grid container xs={12} style={{backgroundColor:"rgba(0, 0, 0, 0.05)", width:"100%"}}>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#7d7d9e', padding:"10px 20px"}}>Account Number</Typography></Grid>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#3c3e42', padding:"10px 20px"}}>000405103922</Typography></Grid>
        </Grid>
        <Grid container xs={12} style={{backgroundColor:"white", width:"100%"}}>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#7d7d9e', padding:"10px 20px"}}>IFSC Code</Typography></Grid>
          <Grid item xs={6}><Typography style={{ fontSize:"14px",fontWeight:"500", color:'#3c3e42', padding:"10px 20px"}}>ICICI0000104</Typography></Grid>
        </Grid>
        <Box style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:"20px", padding:"10px 20px"}}>
          <InfoRounded style={{color:"#6c63ff", width:"20px"}}></InfoRounded>
          <Typography style={{ fontSize:"10px",color:'#919eb1'}}>The transaction will be processed once BSE Star MF gets money from your bank. Your transaction will be cancelled if the money isn’t received within 5 working days.</Typography>
        </Box>
        <Button variant="contained" style={style.button3} fullWidth onClick={()=>{setOpenRealPaymentModal(false); setOpenRealMandateModal(false)}} >
            <Typography style={style.text} className="largeButtonText">Continue</Typography>
        </Button>
      </Box>
    </Modal>
    </>
  )
}

export default AllSIPCard