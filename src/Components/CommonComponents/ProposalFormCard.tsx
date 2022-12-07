import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'
import { SelectGender } from '../../Modal/InsuranceCard';
import CardWithImage from './CardWithImage';
import './commonComponents.css'




interface ProposalFormCardProps {
    // text: string;
    // headIcon: string;
    // isSelected: boolean;
    fName:string,
    lName:string,
    occupation:string,
    gender?:string,
    heightFeet:string,
    heightInch:string,
    weight:string

    handleChange: (attribute:string, value:string ) => void
}
const ProposalFormCard = (props: ProposalFormCardProps) => {

    return (
        <div className='ProposalFormCard' >
            <TextField
                type="text"
                // onBlur={handleBlur}
                label="First Name"
                name="firstName"
                value={props.fName}
                onChange={((e)=>{props.handleChange('fName',e.target.value)})}
                fullWidth
                // error={error}

                id='First Name'
                sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px", fontWeight: "normal",
                    margin: '20px 0'

                }}
            // helperText={error ? errorMessageFN : ""}
            />
            <TextField
                type="text"
                // onBlur={handleBlur}
                label="Last Name"
                name="firstName"
                value={props.lName}
                onChange={((e)=>{props.handleChange('lName',e.target.value)})}
                fullWidth
                // error={error}

                id='Last Name'
                sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px", fontWeight: "normal",
                    margin: '20px 0'

                }}
            // helperText={error ? errorMessageFN : ""}
            />

            <FormControl fullWidth sx={{
                margin: '20px 0'

            }}>
                <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.occupation}
                    label="Occupation"
                    onChange={((e)=>{props.handleChange('occupation',e.target.value)})}
                >
                    <MenuItem value={'Business'}>Business</MenuItem>
                    <MenuItem value={'Privte Job'}>Privte Job</MenuItem>
                    <MenuItem value={"Govt Job"}>Govt Job</MenuItem>
                </Select>
            </FormControl>
            {props.gender && 
            <>
             <p className='purpleText'>Gender</p>
            <div className='genderContainer' style={{ justifyContent: 'flex-start' }}>
                {SelectGender.map((item, index) => {
                    return (
                        <CardWithImage text={item.desc} headIcon={item.logo} isSelected={props.gender == item.desc} btnClick={() => {props.handleChange('gender',item.desc) }} />
                    )
                })}</div>
                </>}
           
            <p className='purpleText'>Height</p>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <TextField
                    type="text"
                    // onBlur={handleBlur}
                    label="Feet"
                    name="firstName"
                    value={props.heightFeet}
                    onChange={((e)=>{props.handleChange('heightFeet',e.target.value)})}
                    // fullWidth
                    // error={error}

                    id='Feet'
                    sx={{
                        color: "rgba(0, 0, 0, 0.6)",
                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                        width: "45%", fontSize: "15px", fontWeight: "normal",
                        margin: '20px 0'

                    }}
                // helperText={error ? errorMessageFN : ""}
                />
                <TextField
                    type="text"
                    // onBlur={handleBlur}
                    label="inches"
                    name="firstName"
                    value={props.heightInch}
                    onChange={((e)=>{props.handleChange('heightInch',e.target.value)})}
                    // fullWidth
                    // error={error}

                    id='inches'
                    sx={{
                        color: "rgba(0, 0, 0, 0.6)",
                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                        width: "45%", fontSize: "15px", fontWeight: "normal",
                        margin: '20px 0'

                    }}
                // helperText={error ? errorMessageFN : ""}
                />
                   

            </div>
            <p className='purpleText'>Weight</p>
                   <TextField
                type="text"
                // onBlur={handleBlur}
                label="Weight"
                name="firstName"
                value={props.weight}
                onChange={((e)=>{props.handleChange('weight',e.target.value)})}
                fullWidth
                // error={error}

                id='Weight'
                sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px", fontWeight: "normal",
                    margin: '20px 0'

                }}
            // helperText={error ? errorMessageFN : ""}
            />
        </div>
    )
}

export default ProposalFormCard