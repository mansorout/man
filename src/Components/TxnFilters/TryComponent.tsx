import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'

export const TryComponent = () => {

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

    const [openRealMandateModal, setOpenRealMandateModal] = useState<boolean>(false)
    const [openRealPaymentModal, setOpenRealPaymentModal] = useState<boolean>(false)
  return (
    <>
 <div>
 <Button onClick={()=>setOpenRealMandateModal(true)}>
   open modal
</Button>
 </div>

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
    </>
  )
}
