
import React, { useRef, useState } from 'react'
import './insurance.css'
import { Box } from '@mui/system'
import { Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputLabel, Link, MenuItem, Modal, OutlinedInput, Select, SelectChangeEvent, TextField, Theme, Typography } from '@mui/material'
import { Toolbar } from '@mui/material'

import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { ULIPList } from '../../Modal/ULIP'
import ULIPCard from '../../Modules/CustomCard/ULIPCard'
import { B } from 'chart.js/dist/chunks/helpers.core'
import { hdfclogo } from '../../Assets'
import InsuranceKeyFeatures from './InsuranceKeyFeatures'
import FooterWithBtn from '../CommonComponents/FooterWithBtn'
import InsuranceCoverage from './InsuranceCoverage'
import { RadioButtonChecked, RadioButtonUncheckedOutlined, Search } from '@mui/icons-material';
import HospitalNetwork from './HospitalNetwork'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function InsuranceDetails() {

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
        modalContainer: {
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        } as React.CSSProperties,
        logo: {
            width: "50px",
            padding: "20px 0px",
        } as React.CSSProperties,
        select: {
            color: "white",
            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                border: "1px solid white"
            }
        }
    }


    const refContainer = useRef();
    const [open, setOpen] = useState<boolean>(false)

    const handleClick = () => {
        setOpen(!open)
    }


    return (
        <Box style={{ width: "100vw" }} ref={refContainer}>
            <Navbar />
            <Box sx={style.main}>
                <Grid container spacing={0} >
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />
                        <Sidebar />
                    </Grid>
                    <Grid p={2} container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
                        <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={12}>
                            <Toolbar />
                            <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }} >
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link color="#6495ED" underline="always" href="/explorefunds">
                                        <Typography className='burgerText'>Home</Typography>
                                    </Link>
                                    <Link color="#6495ED" underline="always" href="/explorefunds">
                                        <Typography className='burgerText'>Get Insured</Typography>
                                    </Link>
                                    <Link color="#6495ED" underline="always" href="/explorefunds">
                                        <Typography className='burgerText'>Health Insurance</Typography>
                                    </Link>
                                    <Link color="#6495ED" underline="always" href="/explorefunds">
                                        <Typography className='burgerText'>HDFC </Typography>
                                    </Link>
                                    <Link underline='none' color="#8787a2" aria-current="page">
                                        <Typography className='burgerText'>Hdfc ERGO - Silver Plan For Family</Typography>
                                    </Link>
                                </Breadcrumbs>
                            </Box>
                            <div style={{ backgroundColor: "#6a63f6", borderRadius: '8px', padding: '20px', color: '#fff' }} >
                                <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <img style={{ height: 30, width: 30, borderRadius: 30, marginTop: '7px' }} src={hdfclogo} />
                                        <p style={{ fontSize: 15, fontWeight: 700, marginLeft: '19px' }} >Hdfc ERGO - Silver Plan For Family</p>
                                    </div>
                                    <div>
                                        <p style={{ backgroundColor: '#64dbff', color: '#6a63f6', padding: '2px' }} >₹ 13,800 P.A.</p>
                                    </div>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <p style={{ marginLeft: '50px' }} >Sum Insured: ₹3 Lacs</p>
                                    </div>
                                    <div>
                                        <p>₹ 1,199 P.M.</p>
                                    </div>
                                </div>
                            </div>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} sm={6}>
                                    <InsuranceKeyFeatures />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div style={{ borderRadius: '8px', backgroundColor: '#fff', boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding: '16px', marginTop: '16px' }}>
                                        <p style={{ fontSize: '16px', fontWeight: 500, color: '#3c3e42' }} >Premium Breakup</p>
                                        <hr />
                                        <div style={{ justifyContent: "space-between", display: 'flex', flexDirection: 'row' }}>
                                            <p style={{ color: '#7b7b9d' }}>Total Sum Insured</p>
                                            <p style={{ fontWeight: 500 }}>₹3 Lacs</p>
                                        </div>
                                        <div style={{ justifyContent: "space-between", display: 'flex', flexDirection: 'row', color: '#544ec8' }}>
                                            <p style={{ fontWeight: 500 }} >Total Premium</p>
                                            <p style={{ fontWeight: 500 }} >₹15,688 P.A</p>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <Box width={{ sm: "100%", md: '50%' }} ><InsuranceCoverage /></Box>
                            <Box width={{ sm: "100%", md: '50%' }} ><HospitalNetwork /></Box>
                            <Box width={{ sm: "100%", md: '50%' }} >
                                <Box sx={{ margin: "1rem" }}>
                                    <Accordion sx={{
                                        borderRadius: "8px",
                                        backgroundColor: "white",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                    }} >
                                        <AccordionSummary
                                            sx={{
                                                height: "84px",
                                                padding: "12px 12px 21px 16px",
                                                borderRadius: " 8px",
                                                margin: "0px 16px 0px 16px",
                                                backgroundColor: "#fff"
                                            }}
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Box sx={{}}>
                                                <Typography className='risko_meter'>Compare with</Typography>
                                            </Box>

                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                                    <img style={{ height: 30, width: 30, borderRadius: 30, marginTop: '8px', marginRight: '16px' }} src={hdfclogo} />
                                                    <p style={{ fontSize: '15px' }}>HDFC ERGO - Gold Plan for Family</p>
                                                </div>
                                                <FormControlLabel
                                                    control={<Checkbox onChange={() => console.log("hii")} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b", fontSize: "18px" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b", fontSize: "18px" }} />} />}
                                                    label=""
                                                />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                                                    <img style={{ height: 30, width: 30, borderRadius: 30, marginTop: '8px', marginRight: '16px' }} src={hdfclogo} />
                                                    <p style={{ fontSize: '15px' }}>HDFC ERGO - Premium PLan Optimus</p>
                                                </div>
                                                <FormControlLabel
                                                    control={<Checkbox onChange={() => console.log("hii")} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b", fontSize: "18px" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b", fontSize: "18px" }} />} />}
                                                    label=""
                                                />
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            </Box>
                            <Box width={{ sm: "100%", md: '50%' }} ><Button sx={{ width: '95%', marginLeft: '16px', marginBottom: '15px' }} color='success' variant="outlined">Download Brochure</Button></Box>
                            <Box style={{ backgroundColor: "#fff", marginLeft: "16px", borderRadius: '8px' }} width={{ sm: "100%", md: '47%' }} >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Policy Tenure</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={"1 yrar"}
                                        label="nsuranceAmount"
                                        onChange={() => { console.log("hii") }}
                                        sx={{ color: "#000" }}
                                    >
                                        <MenuItem value={1}>1 year</MenuItem>
                                        <MenuItem value={2}>2 year</MenuItem>
                                        <MenuItem value={3}>3 year</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Modal
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                keepMounted
                                open={open}
                                onClose={() => { setOpen(false) }}
                                aria-labelledby="keep-mounted-modal-title"
                                aria-describedby="keep-mounted-modal-description"
                            >
                                <div style={{ width: '410px', height: '283px', backgroundColor: '#fff', borderRadius: '8px', opacity: 2 }}>
                                    <div style={{ padding: '5px 20px', paddingTop: '12px' }}>
                                        <p style={{ margin: 0 }}>Select Policy Tenure</p>
                                    </div>
                                    <hr />
                                    <div style={{ display: 'flex', flexDirection: 'column', padding: '5px 20px' }}>
                                        <FormControlLabel
                                            control={<Checkbox onChange={() => console.log("hii")} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b", fontSize: "18px" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b", fontSize: "18px" }} />} />}
                                            label="1 Year"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox onChange={() => console.log("hii")} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b", fontSize: "18px" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b", fontSize: "18px" }} />} />}
                                            label="2 Year"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox onChange={() => console.log("hii")} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b", fontSize: "18px" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b", fontSize: "18px" }} />} />}
                                            label="3 Year"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox onChange={() => console.log("hii")} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b", fontSize: "18px" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b", fontSize: "18px" }} />} />}
                                            label="5 Year"
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '28px' }}>
                                        <Button
                                            variant="contained"
                                            style={{
                                                height: "48px",
                                                borderRadius: "8px",
                                                // boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
                                                // backgroundColor: "#23db7b",
                                                // margin: "20px",
                                                width: "90%",
                                                maxWidth: "400px",
                                                backgroundColor: 'var(--primaryColor)',
                                            }}
                                            fullWidth
                                            onClick={() => {setOpen(!open)} }
                                            sx={{
                                                pointerEvents: 'fill',
                                            }}
                                        >
                                            <Typography component="span" style={{
                                                color: "white"
                                            }} className="largeButtonText"  >Done</Typography>
                                        </Button>
                                        <Button
                                            variant="contained"
                                            style={{
                                                height: "48px",
                                                borderRadius: "8px",
                                                // boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
                                                // backgroundColor: "#23db7b",
                                                // margin: "20px",
                                                width: "90%",
                                                maxWidth: "400px",
                                                backgroundColor: '#7e7e7e'
                                            }}
                                            fullWidth
                                            onClick={() => {setOpen(!open)} }
                                            sx={{
                                                pointerEvents: 'fill',
                                            }}
                                        >
                                            <Typography component="span" style={{
                                                color: "white"
                                            }} className="largeButtonText"  >Cancel</Typography>
                                        </Button>
                                    </div>
                                </div>
                            </Modal>
                            <FooterWithBtn
                                btnText='Buy Now'
                                btnClick={handleClick}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default InsuranceDetails