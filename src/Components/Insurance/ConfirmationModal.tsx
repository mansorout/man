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


function ConfirmationModal(props: any) {

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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ fontWeight: '500' }}>Certify your Information</p>
                        <img src={closelogo} alt="smallarrow Logo" style={{ width: "22px", height: "22px", cursor: 'pointer' }} onClick={() => { props.setOpen(false) }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                        <Checkbox onChange={() => setChecked(!checked)} checked={checked} />
                        <p>I hereby certify that the information provided by me is complete, true and correct to the best of my knowledge.</p>

                    </div>
                    <p className='fotterText'>
                        You will now be redirected to partner site to complete the payment process.
                    </p>
                    <Button
                        disabled={!checked}
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
                        onClick={() => { props.onBtnPress() }}
                        sx={{
                            pointerEvents: 'fill',
                        }}
                    >
                        <Typography component="span" style={{
                            color: "white"
                        }} className="largeButtonText"  >Proceed to Buy</Typography>
                    </Button>
                </div>

            </Modal>


        </>
    )

}

export default ConfirmationModal