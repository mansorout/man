import React, { useEffect, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Breadcrumbs, Button, Checkbox, Grid, Modal, Popover, TextField, Typography } from '@mui/material'
import { closelogo, Logo, MonoLogo, Profile, SIP, sipiclogo, SuccessLogo } from '../../Assets/index'
import { useDispatch, useSelector } from 'react-redux'
import SaveSipDetailsButton from '../../Modules/Buttons/SaveSipDetailsButton'
import { useForm, Controller } from "react-hook-form";
import set from 'date-fns/fp/set/index.js'
import { Navigate, useNavigate } from 'react-router-dom'
import './insurance.css'
import { CheckBox } from '@mui/icons-material'


function CompleteModal(props: any) {

    const [checked, setChecked] = useState<boolean>(false)
    const [completed, setCompleted] = useState<boolean>(false)
    const navigate = useNavigate();
    return (
        <>

            <Modal
                sx={{ backdropFilter: "blur(10px)", display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                keepMounted
                open={props.open}
                onClose={() => { props.setOpen(false) }}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <div className='modalContainer'>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img src={SuccessLogo} alt="S__M" />
                        <p style={{ fontWeight: '500' }}>Congrats! Your transaction is being processed</p>
                        <p style={{ fontWeight: '500' }}>We will notify you once we got confirmation from the
                            insurance partner. You can track the status of
                            transaction under your portfolio</p>
                        <Button
                            variant="contained"
                            style={{
                                height: "48px",
                                borderRadius: "8px",
                                // boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
                                // backgroundColor: "#23db7b",
                                margin: "20px",
                                width: "90%",
                                maxWidth: "400px",
                                marginTop: '50px'
                            }}
                            fullWidth
                            onClick={() => props.onBtnPress()}
                            sx={{
                                pointerEvents: 'fill',
                            }}
                        >
                            <Typography component="span" style={{
                                color: "white"
                            }} className="largeButtonText"  >Back to Home</Typography>
                        </Button>
                    </div>


                </div>

            </Modal>


        </>
    )

}

export default CompleteModal