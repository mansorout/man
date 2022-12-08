import React, { useEffect, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Breadcrumbs, Button, Checkbox, CircularProgress, Grid, Modal, Popover, TextField, Typography } from '@mui/material'
import { closelogo, Logo, MonoLogo, Profile, SIP, sipiclogo, SuccessLogo } from '../../Assets/index'
import { useDispatch, useSelector } from 'react-redux'
import SaveSipDetailsButton from '../../Modules/Buttons/SaveSipDetailsButton'
import { useForm, Controller } from "react-hook-form";
import set from 'date-fns/fp/set/index.js'
import { Navigate, useNavigate } from 'react-router-dom'
import './insurance.css'
import { CheckBox } from '@mui/icons-material'


function ThanksModal(props: any) {
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
                        <p style={{ fontWeight: '500' }}>Thank you for the details</p>
                        <p style={{ fontWeight: '500' }}>Please wait while we bring together best recommendations for you.</p>

                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <CircularProgress size={20} />
                    </div>
                </div>

            </Modal>


        </>
    )

}

export default ThanksModal