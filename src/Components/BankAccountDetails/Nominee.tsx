import React, { useState } from "react";
import { Box, Breadcrumbs, Button, FormControl, Grid, InputLabel, Link, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";

const Nominee = () => {

    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ dateOfBirth, setDateOfBirth ] = useState('dd-mm-yyyy');
    const [ relation, setRelation ] = useState('');

    const [ selectErrorMsg, setSelectErrorMsg ] = useState('');

    const [ nameError, setNameError ] = useState(false);
    const [ dobError, setDobError ] = useState(false);
    const [ relationError, setRelationError ] = useState(false);
/*
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setName(value);
        const pattern = /^[A-Za-z\s\.]+$/;
        if (!pattern.test(value)) {
            setNameError(true);
        } else {
            setNameError(false);
            
        }
    }
*/
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setNameError(false);
    }

    const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateOfBirth(e.target.value); 
        setDobError(false);
    }

    const handleRelationChange = (e: any) => {
        setRelation(e.target.value); 
        setRelationError(false);
    }
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (name === '') {
            setNameError(true);
        } else if (dateOfBirth === '') {
            setDobError(true);
        } else if (relation === '') {
            setRelationError(true);
            setSelectErrorMsg('Please select a relation');
        } else {
            navigate('/viewprofile');
        }
    }

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
                            width: '30.5vw',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            gap: '1.5vw',
                            padding: '1.5vw',
                            borderRadius: '0.5vw',
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
                                <Link href="/viewprofile">View Profile</Link>
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
                                <TextField 
                                    required 
                                    label="Full Name" 
                                    value={ name } 
                                    onChange={ handleNameChange }
                                    error={ nameError }
                                    helperText= { nameError ? "Please enter correct name" : '' }
                                />
                            </FormControl>

                            <FormControl>
                                <TextField 
                                    required
                                    type="date" 
                                    label="Date of Birth"
                                    value={ dateOfBirth }
                                    onChange={ handleDateOfBirthChange }
                                    error={ dobError }
                                    helperText={ dobError ? "Please choose a date" : '' }
                                 />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Relation</InputLabel>
                                <Select 
                                    label={ relationError ? "Please choose a relation" : "Relation" }
                                    value={ relation }
                                    onChange={ handleRelationChange }
                                    error={ relationError }
                                >
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
                                <Box component="span" className="select-box" sx={{
                                    color: 'red',
                                    fontSize: '12px',
                                    marginTop: '2px',
                                }}>{ relationError ? selectErrorMsg : '' }</Box>
                            </FormControl>

                            <FormControl>
                                <Button variant="contained" sx={{
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 0.25rem 0.5rem 0 rgba(35, 219, 123, 0.4)',
                                    backgroundColor: '#23db7b',
                                    padding: '1rem',
                                    textTransform: 'capitalize'
                                }} onClick={ handleClick }>Submit Details</Button>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default Nominee;
