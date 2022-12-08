import React, { useEffect, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Breadcrumbs, Button, Checkbox, CircularProgress, Grid, Modal, Popover, TextField, Typography } from '@mui/material'
import { closelogo, hdfcErgo, hdfclogo, Logo, MonoLogo, Profile, SIP, sipiclogo, SuccessLogo } from '../../Assets/index'
import { useDispatch, useSelector } from 'react-redux'
import SaveSipDetailsButton from '../../Modules/Buttons/SaveSipDetailsButton'
import { useForm, Controller } from "react-hook-form";
import set from 'date-fns/fp/set/index.js'
import { Navigate, useNavigate } from 'react-router-dom'
import './insurance.css'
import { CheckBox } from '@mui/icons-material'


function HdfcModal(props: any) {
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
                <div className='modalContainer' style={{width:'431px'}}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img src={hdfcErgo} alt="S__M" style={{height:'148px', width:'148px'}}/>
                        <p style={{ fontWeight: '500' }}>Loading...</p>

                    </div>

                </div>

            </Modal>


        </>
    )

}

export default HdfcModal