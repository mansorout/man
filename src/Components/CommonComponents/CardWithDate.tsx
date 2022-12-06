import zIndex from '@mui/material/styles/zIndex';
import { LocalizationProvider, DesktopDatePicker, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import React from 'react'
import './commonComponents.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { TextField } from '@mui/material';



interface CardWithDatePickerProps {
    value: Date | null;
    headIcon: string;
    text: string;
   
    handleChange: (value:Date | null ) => void
}
const CardWithDatePicker = (props: CardWithDatePickerProps) => {

    return (
        <div className='countCard' >
            <div style={{ display: 'flex', alignItems: 'center' ,width:'150px'}}>
                <img src={props.headIcon} alt="" style={{ height: '28px', width: '23px', margin: '0 10px' }} />
                <span style={{ fontSize: '12px' }}>{props.text} </span>
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Start Date"
                inputFormat="dd/mm/yyyy"
                value={props.value}
                onChange={(value)=>{props.handleChange?.(value)}}
                renderInput={(param: any) => <TextField sx={{ width: "150px" }} {...param} />}
                components={{
                    OpenPickerIcon: CalendarTodayIcon,
                }}
            />
            </LocalizationProvider>

        </div>
    )
}

export default CardWithDatePicker