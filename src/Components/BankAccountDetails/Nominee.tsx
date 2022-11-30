import { Box, Breadcrumbs, Button, FormControl, Grid, InputLabel, Link, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";

const Nominee = () => {

    const navigate = useNavigate();

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh"
        } as React.CSSProperties,
    };


    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box sx={style.main}>
                <Grid container spacing={0} >
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />

                        <Sidebar />
                    </Grid>
                    <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
                        <Toolbar />
                        <Box component="form" sx={{
                            width: '30.5rem',
                            height: '25rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            padding: '1.5rem',
                            borderRadius: '0.5rem',
                            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
                            backgroundColor: '#fff',
                            fontFamily: 'Roboto',
                            fontSize: '14px',
                            marginTop: '6vw',
                        }}>
                            <Breadcrumbs sx={{
                                fontSize: '12px',
                                color: '#6c63ff',
                                marginBottom: '3vw',
                            }}>
                                <Link href="/home">Home</Link>
                                <Link href="/vp">View Profile</Link>
                                <Typography sx={{
                                    fontSize: '12px',
                                    color: '#373e42'
                                }}>Nominee & Declarations</Typography>
                            </Breadcrumbs>
                            <Typography sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#3c3e42',
                            }}>Add Nominee & Declarations</Typography>

                            <FormControl>
                                <TextField required label="Full Name" />
                            </FormControl>

                            <FormControl>
                                <TextField type="date" label="Date of Birth" placeholder="" />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Relation</InputLabel>
                                <Select label="Relation">
                                    <MenuItem value="father">Father</MenuItem>
                                    <MenuItem value="mother">Mother</MenuItem>
                                    <MenuItem value="wife">Wife</MenuItem>
                                    <MenuItem value="husband">Husband</MenuItem>
                                    <MenuItem value="sister">Sister</MenuItem>
                                    <MenuItem value="brother">Brother</MenuItem>
                                    <MenuItem value="son">Son</MenuItem>
                                    <MenuItem value="daughter">Daughter</MenuItem>
                                    <MenuItem value="nephew">Nephew</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <Button variant="contained" sx={{
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 0.25rem 0.5rem 0 rgba(35, 219, 123, 0.4)',
                                    backgroundColor: '#23db7b',
                                    padding: '1rem',
                                    textTransform: 'capitalize'
                                }} onClick={() => navigate("/completedview")}>Submit Details</Button>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default Nominee;
