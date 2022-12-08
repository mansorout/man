import { SuccessLogo } from '../Assets';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'

const style = {
    button3: {
        height: "48px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",
        marginBottm: "10px",
        width: "100%",
        maxWidth: "400px",
    } as React.CSSProperties,

    text: {
        color: "white"
    },
}

export const SmallModal = () => {
    const [openMandateModal, setOpenMandateModal] = useState<boolean>(false)
    const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
    const [dateConfirmModal, setDateConfirmedModal] = useState<boolean>(false)
    const [openRealPaymentModal, setOpenRealPaymentModal] = useState<boolean>(false)

    function openModal() {
        setDateConfirmedModal(true)
    }
    return (
        <>
            <div>
                <button onClick={openModal}>
                    Open Modal
                </button>
            </div>
            <Modal open={dateConfirmModal} onClose={() => setDateConfirmedModal(false)}>
                <Box style={{
                    height: "-webkit-fill-available",
                    width: "90%",
                    maxWidth: "330px",
                    borderRadius: "8px 8px 0px 0px",
                    boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)"
                }}>
                    <Box my={2} style={{     paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: '50px', borderRadius: "50%", }}>
                        <img src={SuccessLogo} style={{ width: "90px", color: "white", paddingTop: "29px" }} />
                    </Box>
                    <Typography style={{ paddingTop: "53px", fontSize: "24px", color: "#3c3e42", fontWeight: "500" }}>Date Confirmed</Typography>
                    <Typography mx={2} mb={4} style={{ fontSize: "12px", color: "#7b7b9d", textAlign: "center", fontWeight: "500" }}>Your monthly SIP date is 08th of every month.</Typography>
                    <Button variant="contained" style={style.button3} fullWidth onClick={() => { setOpenRealPaymentModal(true); setDateConfirmedModal(false) }} >
                        <Typography style={style.text} className="largeButtonText"> Continue to Payment</Typography>
                    </Button>
                </Box>
            </Modal></>
    )
}

