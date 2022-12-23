import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Breadcrumbs, Button, Grid, Link, Toolbar, Typography, Modal, Theme } from "@mui/material";
import { HelpOutline, tick } from "../../Assets";
import MutualFundCard2, { MFProp } from "../../Modules/CustomCard/MutualFundCard2";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import BUYNowButton from "../../Modules/Buttons/BUYNowButtton";
import OneTimeMutualFundCard from "../../Modules/CustomCard/OneTimeMutualFundCard";
import { useSelector } from "react-redux";
import { globalConstant } from "../../Utils/globalConstant";
import SelectSipDateButton from "../../Modules/Buttons/SelectSipDateButton";
import Calendar from 'react-calendar';
import { makeStyles } from "@mui/styles";

const enumActiveScreen = Object.freeze({
    CLOSE_MODAL: 0,
    OPEN_DATE_PICKER_MODAL: 1,
    OPEN_CONFIRMATION_MODAL: 2,
    OPEN_NET_BANKING: 3,
});
/*  
const ULIPDatePicker = () => {

    const style = {
        main: {
          boxSizing: "border-box",
          backgroundColor: "#f9f9f9",
          height: "100vh"
        } as React.CSSProperties,
        modalText: {
          backgroundColor: '#FFF',
          width: 338,
          textAlign: 'center',
          marginLeft: '1px',
          padding: '5px',
          borderTopRightRadius: 4,
          borderTopLeftRadius: 4,
          fontWeight: '500',
          borderColor: '#fff'
        },
        button: {
          height: "48px",
          boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
          backgroundColor: "#23db7b",
          transform: "translate(8px, -23px)",
          color: '#fff',
          width: 350,
          marginTop: 21,
          marginLeft: -8
        },
    };

    return (
      
        <Box sx={{
            width: '83.75vw',
            height: '78px',
            position: 'sticky',
            right: 0,
            bottom: 0,
            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ULIPButton 
                text={ props.text } 
                navigateTo={ props.navigateTo } 
                width={ props.width } 
                bgColor={ props.bgColor }  
            />
        </Box>
    

        <Modal sx={{ borderRadius: 8 }} open={activeScreen === enumActiveScreen.OPEN_DATE_PICKER_MODAL ? true : false} onClose={() => { setActiveScreen(enumActiveScreen.CLOSE_MODAL) }}>
        <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '13%', md: '30%' } }}>
          <Typography sx={style.modalText}>Monthly SIP Date</Typography>
          <Calendar />
          <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_CONFIRMATION_MODAL) }} variant='contained' style={style.button} sx={{
            backgroundColor: 'rgba(123, 123, 157, 0.05)',
            color: '#7b7b9d'
          }}>
            Confirm SIP Date
          </Button>
        </Box>
      </Modal>
      <Modal sx={{ borderRadius: 8 }} open={activeScreen === enumActiveScreen.OPEN_CONFIRMATION_MODAL ? true : false} onClose={() => { setActiveScreen(enumActiveScreen.CLOSE_MODAL) }}>
        <>
          <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '13%', md: '30%' } }}>
            <Box sx={{ backgroundColor: '#fff', width: 300, alignItems: 'center', padding: 3, textAlign: 'center' }}>
              <Box><img style={{ height: 120, width: 120 }} src={tick} /></Box>
              <Typography sx={{ marginTop: 1, fontWeight: '600' }} >Date confirmed!</Typography>
              <Typography sx={{ marginTop: 1, color: '#8787a2' }} >Your Monthly SIP Date is 8th of every month</Typography>
            </Box>
            <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_NET_BANKING) }} variant='contained' style={style.button} sx={{ 
            <Button onClick={() => { navigate("/netbanking") }} variant='contained' style={style.button} sx={{
              backgroundColor: 'rgba(123, 123, 157, 0.05)',
              color: '#7b7b9d',
              marginLeft: 8
            }}>
              Continue to Payment
            </Button>
          </Box>

        </>
      </Modal>
          
    )
    
};

export default ULIPDatePicker;
*/