import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import './customComponentCss.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const CustomSelectBox = React.memo((props: any) => {
  // console.log('custom select box ()');

  const [inputValue, setInputValue] = useState<string>('');
  // const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    if (props?.value) {
      setInputValue(props?.value);
    }
  }, [props?.value]);

  // useEffect(() => {
  //   if (props?.pagination) {
  //     let arrOptions: any[] = [...props?.options];
  //     if(arrOptions && arrOptions.length){
  //       arrOptions
  //     }
      
  //   } else {
  //   }
  // }, [props?.pagination])

  const optionSelected = (key: string, value: string) => {
    // setInputValue(key);
    props.onChange(key);
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        id="demo-simple-select-label"
        sx={props?.inputLabelSX ? props?.inputLabelSX : {}}
        className={props?.className ? props?.className : ""}
      >
        {props?.inpurLabelValue ? props?.inpurLabelValue : ""}
      </InputLabel>
      <Select
        fullWidth
        id="demo-simple-select"
        labelId="demo-simple-select-label"
        defaultValue=''
        name={props?.name}
        value={inputValue}
        onBlur={props?.onBlur}
        sx={props?.selectSX ? props?.selectSX : {}}
        error={props?.error}
        MenuProps={MenuProps}
      >
        {
          props.options && props.options.length ?
            props.options.map((item: any, index: number) => {
              return (
                <MenuItem key={index} value={item[props?.valueKey] ? item[props?.valueKey] : ""} onClick={() => {
                  optionSelected(item[props?.valueKey], item[props?.labelKey]);
                }}
                >
                  <Typography variant="body2" color="textSecondary">
                    {item[props?.labelKey] ? item[props?.labelKey] : ""}
                  </Typography>
                </MenuItem>
              )
            })
            : <MenuItem></MenuItem>
        }
      </Select>
      {
        props?.formHelperText ?
          <FormHelperText sx={{ color: "red" }}>
            {props?.formHelperText}
          </FormHelperText>
          : null
      }
    </FormControl >
  );
});

export default CustomSelectBox;
