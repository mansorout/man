
import { meria, Star } from '../../Assets'
import { Box, styled } from '@mui/system'
import { Avatar, Button, Chip, Grid, Icon, List, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Divider, } from '@mui/material';
import { Close, ErrorOutline, InfoRounded, TaskAltOutlined, Warning } from '@mui/icons-material';
import { warning } from '../../Assets/index'
import { useNavigate } from 'react-router-dom';
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from 'react-redux';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface Prop {
  secid: any,
  fundimage: any,
  fundname: string,
  category: string,
  categorygroup: string,
  aum: string,
  return1yr: string,
  return3yr: string,
  return5yr: string,
  ratingoverall: string,
  box: boolean
}


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
  button3: {
    height: "48px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    marginBottm: "10px",
    width: "100%",
    maxWidth: "400px",
  } as React.CSSProperties,
}

function AllExploreFundCard({ secid, fundname, aum, return1yr, return3yr, return5yr, categorygroup, fundimage, ratingoverall
  , category, box }: Prop) {

  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
  const [exploreFundData, setExploreFundData] = useState<any>({});
  const [fundCard, setFundCard] = useState<any>([]);
  const [term, setTerm] = useState("");
  // const url = name.replace(/ /g, '')
  const navigate = useNavigate()

  // const explorFundlist: any = useSelector((state: any) => state.globalReducer?.explorefundlist);
  // console.log(explorFundlist)

  const handleSelect = (id: any) => {
    navigate('/funddetails', { state: { secid: id, parentRoute: "/explorefunds" } })
  }

  let original: any = [];

  const exFunction = () => {

  }


  const handleOnChange = (event: any) => {



    // let newArray = [...fundCard, event.target.value];
    // if (fundCard.includes(event.target.value)) {
    //   newArray = newArray.filter(day => day !== event.target.value);
    // }
   
    // let addedArr =newArray.join()
    // console.log(addedArr)
    // setFundCard(newArray);


    // alert(event.target.id)
    // setFundCard(celebs => [ ...celebs, ...event.target.value]);
     
    // const value = event.target.value;
    // setFundCard((prev:any) =>
    //   fundCard.includes(value)
    //     ? prev.filter((cur:any) => cur !== value)
    //     : [...prev, event.target.value]
    // );

    const value = event.target.value;

    let modArr = fundCard;
    console.log(modArr)
    modArr.push(value);
    console.log(modArr)

    // if(fundCard.includes(value) ){
    //   fundCard.filter((cur:any) => cur !== value)
    // }
    // else{
      setFundCard(modArr);
      // }
      console.log(fundCard)
        
        
  

   
    



  }

  // useEffect(() => {
  //   console.log(fundCard)
  // }, [fundCard])







  return (
    <>

      <Box style={{ gap: "20px", flexWrap: "wrap", overflowX: "scroll", marginBottom: "15px", display: "flex", backgroundColor: "white", borderRadius: "8px", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding: "10px 20px" }}>
        <Box onClick={() => { handleSelect(secid) }} style={{ display: "flex", gap: "10px", flexWrap: "wrap", width: "100%", maxWidth: "400px" }}>
          <Box style={{ overflow: "hidden", height: "32px", width: "32px", border: "1px solid #d1d6dd", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <img src={fundimage} width="100%" alt='mirae'></img>
          </Box>
          <Box>
            <Typography style={{ marginBottom: "10px", color: "#3c3e42", fontSize: "16px", fontWeight: "500", lineHeight: "1.19" }}>{fundname}</Typography>
            <Box style={{ display: "flex", gap: "10px" }}>
              <Box style={{ padding: "4px 5px", backgroundColor: "rgba(123, 123, 157, 0.16)" }}>
                <Typography style={{ color: "#7b7b9d", fontSize: "12px" }}>{category}</Typography>
              </Box>
              <Box style={{ padding: "4px 5px", backgroundColor: "rgba(123, 123, 157, 0.16)" }}>
                <Typography style={{ color: "#7b7b9d", fontSize: "12px" }}>{categorygroup}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box style={{ padding: "4px 8px", backgroundColor: "#d6d5ef", borderRadius: "2px" }}>
          <Typography style={{ color: "#6c63ff", fontSize: "16px", fontWeight: "500" }}>???{aum}</Typography>
        </Box>
        <Chip style={{ borderRadius: "0px", backgroundColor: "#fef4d6" }} avatar={<Avatar alt="star" src={Star} />} label={ratingoverall
        } />
        <Box style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          <Box>
            <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>1yr return</Typography>
            <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>???{return1yr}</Typography>
          </Box>
          <Box>
            <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>3yrs return</Typography>
            <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>???{return3yr} </Typography>
          </Box>
          <Box>
            <Typography style={{ color: '#7b7b9d', fontSize: "14px" }}>5yrs return</Typography>
            <Typography style={{ color: '#3c3e42', fontSize: "18px" }}>???{return5yr}</Typography>

          </Box>
          <Box>
            <Checkbox
              value={secid}
              onChange={handleOnChange}
              id={secid} name="topping"
              {...label}
              defaultChecked={false}
              sx={{
                color: "#3D70B2"[800],
                "&.Mui-checked": {
                  color: "#09b85d"
                }
              }}
            />
          </Box>

        </Box>

      </Box>

      <Modal open={openPaymentModal} onClose={() => setOpenPaymentModal(false)}>
        <Box style={{
          width: "90%",
          maxWidth: "330px",
          borderRadius: "8px",
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
          <Box my={2} style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#6c63ff", width: "50px", height: '50px', borderRadius: "50%", }}>
            <ErrorOutline sx={{ width: "48px", color: "white" }} />
          </Box>
          <Typography mb={2} style={{ fontSize: "24px", color: "#3c3e42", fontWeight: "500" }}>NEFT/RTGS Pending</Typography>
          <Box style={{ backgroundColor: "#6c63ff", width: "100%" }}>
            <Typography style={{ fontSize: "14px", color: 'white', padding: "10px 20px" }}>Transfer ???30,000 to below account</Typography>
          </Box>
          <Grid container xs={12} style={{ backgroundColor: "white", width: "100%" }}>
            <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Bank Name</Typography></Grid>
            <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>ICICI Bank</Typography></Grid>
          </Grid>
          <Grid container xs={12} style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", width: "100%" }}>
            <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Account Name</Typography></Grid>
            <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>ICICI Ltd.</Typography></Grid>
          </Grid>
          <Grid container xs={12} style={{ backgroundColor: "white", width: "100%" }}>
            <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Account Type</Typography></Grid>
            <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>Current Account</Typography></Grid>
          </Grid>
          <Grid container xs={12} style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", width: "100%" }}>
            <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Account Number</Typography></Grid>
            <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>000405103922</Typography></Grid>
          </Grid>
          <Grid container xs={12} style={{ backgroundColor: "white", width: "100%" }}>
            <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>IFSC Code</Typography></Grid>
            <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>ICICI0000104</Typography></Grid>
          </Grid>
          <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "10px 20px" }}>
            <InfoRounded style={{ color: "#6c63ff", width: "20px" }}></InfoRounded>
            <Typography style={{ fontSize: "10px", color: '#919eb1' }}>The transaction will be processed once BSE Star MF gets money from your bank. Your transaction will be cancelled if the money isn???t received within 5 working days.</Typography>
          </Box>
          <Button variant="contained" style={style.button3} fullWidth onClick={() => { setOpenPaymentModal(false) }} >
            <Typography style={style.text} className="largeButtonText">Continue</Typography>
          </Button>
        </Box>
      </Modal>
    </>
  )
}


export default AllExploreFundCard