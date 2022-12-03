import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'

const style={
    button3 : {
        height: "48px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",
        marginBottm: "10px",
        width:"100%",
        maxWidth:"400px",
    } as React.CSSProperties,

    text : {
        color: "white"
    },
}

export const SmallModal = () => {
    const [openMandateModal, setOpenMandateModal] = useState<boolean>(false)
    const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
    const [openRealMandateModal,setOpenRealMandateModal]=useState<boolean>(false)
    const [openRealPaymentModal, setOpenRealPaymentModal] = useState<boolean>(false)
  return (
   <>
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
    </Modal></>
  )
}
