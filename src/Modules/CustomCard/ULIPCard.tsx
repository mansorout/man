
import { meria } from '../../Assets'
import { Box, styled } from '@mui/system'
import { Button, Checkbox, FormControlLabel, Grid, Icon, List, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Divider,} from '@mui/material';
import { AirplaneTicket, Close, Compare, Done, ErrorOutline, HelpOutline, InfoRounded, RadioButtonChecked, RadioButtonUncheckedOutlined, RampRightOutlined, TaskAltOutlined, Warning } from '@mui/icons-material';
import {warning} from '../../Assets/index'
import { useDispatch, useSelector } from 'react-redux';
import { ULIPCompareAddId, ULIPCompareRemoveId } from '../../Store/Duck/ULIPCompare';
import { useNavigate } from 'react-router-dom';

  interface Prop {
    id : number,
    logo : string,
    name : string,
    renewalBonus : string,
    cashlessHospital : string,
    anualEMI : string,
    monthEMI : string
  }

function ULIPCard({id, logo, name, renewalBonus, cashlessHospital, anualEMI, monthEMI} : Prop) {

    
      
      
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
            width:"100%",
            maxWidth:"400px",
        } as React.CSSProperties,
        }

  const dispatch:any = useDispatch()

  const [optSelected, setOptSelected] = useState<boolean>(false)

  const handleOptChange =  () => {
    if(optSelected) {
      dispatch(ULIPCompareRemoveId(id))
    } else {
      dispatch(ULIPCompareAddId(id))
    }
    setOptSelected(!optSelected)
  }

  const navigate = useNavigate();

  const { ULIPId }: any = useSelector((state: any) => state.ULIPCompare)

  const handleCompare = () => {
    if(ULIPId.length > 1){
      navigate("/healthInsurance/compareULIP")
    }
  }
  const handleKnowMore = () => {
    if(ULIPId.length > 1){
      navigate("/healthInsurance/knowMore")
    }
  }

  return (
    <>
    <Box style={{ position:"relative", gap:"20px", flexWrap:"wrap", overflowX:"scroll", marginBottom:"15px",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
      <Box style={{display:"flex", flexWrap:'wrap', gap:"15px"}}>
        <Box style={{overflow:"hidden",height:"32px", width:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
          <img src={logo} width="100%" alt='logo'></img>
        </Box>
        <Box>
          <Typography style={{marginBottom:"10px", color:"#3c3e42", fontSize:"16px", fontWeight:"500", lineHeight:"1.19", marginRight:"20px"}}>{name}</Typography>
          <Box style={{display:"flex", gap:"10px", alignItems:"center"}}>
            <Done style={{color:"#7b7b9d", fontSize:"14px" }}/>
            <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>Renewal Bonus: <b>{renewalBonus}</b></Typography>
          </Box>
          <Box style={{display:"flex", gap:"10px", alignItems:"center"}}>
            <Done style={{color:"#7b7b9d", fontSize:"14px" }}/>
            <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>Cashless Hospital: <b>{cashlessHospital}</b></Typography>
          </Box>
          
        </Box>
      </Box>
      <Box style={{textAlign:"right"}}>
        <Box style={{display:"flex", flexWrap:'wrap', gap:"15px"}}>
          <Box style={{padding:"4px 8px", backgroundColor:"#d6d5ef", borderRadius:"2px"}}>
            <Typography style={{color:"#6c63ff", fontSize:"14px", fontWeight:"500"}}>{anualEMI} P.A.</Typography>
          </Box>
          <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>{monthEMI} P.M.</Typography>
        </Box>
        <Box style={{display:'flex', flexWrap:"wrap", gap:"15px", marginTop:'15px'}}>
        <Box onClick={handleCompare} style={{cursor:"pointer",  borderRadius:"4px", backgroundColor:`rgba(123, 123, 157, 0.1)`, textAlign:"center", padding:"4px 20px", display:"flex", alignItems:"center", gap:"5px"}}>
          <Compare style={{color:`#7b7b9d`, fontSize:"14px"}}/>
          <Typography style={{color:`#7b7b9d`, fontSize:"12px"}}>COMPARE</Typography>
        </Box>
        <Box style={{cursor:"pointer",  borderRadius:"4px", backgroundColor:`#dff7ea`, textAlign:"center", padding:"4px 14px", display:"flex", alignItems:"center", gap:"5px"}}>
          <HelpOutline style={{color:`#09b85d`, fontSize:"14px"}}/>
          <Typography onClick={handleKnowMore} style={{color:`#09b85d`, fontSize:"12px"}}>KNOW MORE</Typography>
        </Box>
        </Box>
      </Box>
      <FormControlLabel
        control={<Checkbox onChange={()=>handleOptChange()} checked={optSelected} icon={<RadioButtonUncheckedOutlined style={{color:"#23db7b", fontSize:"18px"}} />} checkedIcon={<RadioButtonChecked style={{color:"#23db7b", fontSize:"18px"}}/>}/> }
        label="" 
        style={{position:"absolute", right:"0px", top:"0px"}}
      />
    </Box>
    </>
  )
}

export default ULIPCard