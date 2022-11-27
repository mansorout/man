import * as t from './actionTypes'
import { mobileOtpLoginApi } from '../../APIs/apis'
import { mobileOtpVerifyApi } from '../../APIs/apis'
import { uploadSignatureApi } from '../../APIs/apis'
import { panVerificationApi } from '../../APIs/apis'
import { nomineeAddApi } from '../../APIs/apis'

import {userDetailsApi} from '../../APIs/apis'
import {usersBankDetailsApi} from '../../APIs/apis'
import {userPostDetailsApi} from '../../APIs/apis'
import { uploadChequeApi } from '../../APIs/apis'
import { refreshtokenApi } from '../../APIs/apis'


const setLoginState = (loginData: any) => {
    console.log(loginData)
    return {
        type: t.SET_LOGIN_STATE,
        payload: loginData,
    }
}
const SET_VERIFY_STATE = (verifyData: any) => {
    console.log(verifyData)
    return {
        type: t.SET_VERIFY_STATE,
        payload: verifyData,
    }
}
const SET_EDIT_STATE =(verifyData:any)=>{
    console.log(verifyData)
    return{
        type: t.SET_EDIT_STATE,
        payload: verifyData,
    }
}




export const login = (loginInput: any) => {
    const { number } = loginInput;
    return async (dispatch: any) => {
        const result = {}
        try {
            const result = await fetch(mobileOtpLoginApi, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "mobilenumber": number,
                    "type": "auth"
                })

            })


        } catch (err) {
            console.log(err)
        }
        return result


    };

}
export const verifycxotp = (verifyInput: any) => {
    const { otp, number } = verifyInput;


    return async (dispatch: any) => {
        console.log(number, "number")
        console.log(otp, "otp")
        const result = {}
        try {
            const result = await fetch(mobileOtpVerifyApi, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "mobilenumber": number,
                    "otp": otp,
                    "type": "auth"
                })
            }).then((response) => response.json())
                .then((data) => {

                    console.log(data.data.accesstoken);
                    // console.log(data.userInfo.userdetails.mobilenumber)
                    console.log(data.error)
                    console.log(data.accesstoken)
                    localStorage.setItem("accesstoken", data.data.accesstoken)
                    dispatch({
                        type: 'LOGIN_SUCCESS',
                        payload: data
                    })

                })
        }
        catch (err) {
            //dispatch({type: 'LOGIN_FAILED'})
            console.log(err)
        }

        return result
    };


}

export const uploadsignature = (singatureInput: any) => {
    const { signdata } = singatureInput;
    let token: any = localStorage.getItem('accesstoken')
    return async (dispatch: any) => {
        const result = {}
        try {
            const result = await fetch(uploadSignatureApi, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authentication": token
                },
                body: JSON.stringify({
                    "signature": signdata,
                })
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data.error)
                    console.log(data)
                    // dispatch({
                    //   type:'SIGNATURE_UPLOAD_SUCCESS',
                    //   payload:data
                    // })

                })
        }
        catch (err) {
            //dispatch({type: 'LOGIN_FAILED'})
            console.log(err)
        }

        return result
    };


}

export const panVerification = (pan: string) => {
    const token: string | null = localStorage.getItem('accesstoken');

    interface Response {

        status: boolean,
        code: number,
        error: string,
        data: {
            pandetails: {
                '@entity': string,
                pan: string,
                full_name: string,
                status: string,
                category: string
            },
            cvldetails: {
                isverified: boolean,
                remarks: string
            }
        }

    }

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    requestHeaders.set('Authentication', token as string);

    return async (dispatch: any) => {
        let data: Response = {} as Response;
        try {
            const result = await fetch(panVerificationApi, {
                method: "POST",
                headers: requestHeaders,
                body: JSON.stringify({
                    pannumber: pan,
                })
            });
            data = await result.json();
            dispatch({
                type: 'PAN_VERIFICATION',
                payload: data
            })
        }
        catch (err) {
            //dispatch({type: 'LOGIN_FAILED'})
            console.error(err)
        }

        return data
    };

}

export const nomineeAdd = ({ fullname, dateofbirth, relation_id }: { fullname: string, dateofbirth: string, relation_id: number } ) => {
    const token = localStorage.getItem('accesstoken');
 
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    requestHeaders.set('Authentication', token as string);

    return async (dispatch: any) => {
        let data = {};
        try {
            const result = await fetch(nomineeAddApi, {
                method: "POST",
                headers: requestHeaders,
                body: JSON.stringify({
                    fullname,
                    dateofbirth,
                    relation_id
                })
            });
            data = await result.json();
            dispatch({
                type: 'NOMINEE_ADD',
                payload: data
            })
        }
        catch (err) {
            //dispatch({type: 'LOGIN_FAILED'})
            console.error(err)
        }

        return data
    };
}


export const submituserdetails = (userdetails:any) => {
    const { userdata} = userdetails;
    console.log(userdata);
  
    let token :any = localStorage.getItem('accesstoken')
    return async (dispatch:any)=>{
       
                const result ={}
                try{
                    const result = await fetch(userDetailsApi,{
                        method:"POST",
                        headers: {  
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            "Authentication":token
                          },
                          body:JSON.stringify({
                           "firstname":userdata.firstName,
                           "middlename":userdata.middleName,
                           "lastname":userdata.lastName,
                           "emailaddress":userdata.emailaddress,
                           "mobilenumber":userdata.mobilenumber,
                           "dateofbirth":userdata.dateofbirth,
                           "image":"",
                           "gender":userdata.gender,
                           "addressline1":userdata.addressline1,
                           "addressline2":"",
                           "pincode":userdata.pincode,
                           "incomeslab":userdata.IncomeSlab,
                           "country":userdata.country
                           
                        })
                          
                    
                    }).then((response) => response.json())
                    .then((data) => {
                      console.log(data.error)
                      dispatch({
                        type:'USERDETAILS_SUCCESS',
                        payload:data
                      })
                        
                    })
                } 
                catch (err){
                     //dispatch({type: 'LOGIN_FAILED'})
                     console.log(err)}

        return result
    };

    
}

export const bankuserdetails = (userdetails:any) => {
    const { bankuserdata} = userdetails;
    console.log(bankuserdata);
  
    let token :any = localStorage.getItem('accesstoken')
    return async (dispatch:any)=>{
       
                const result ={}
                try{
                    const result = await fetch(usersBankDetailsApi,{
                        method:"GET",
                        headers: {  
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                          },
                
                          
                    
                    }).then((response) => response.json())
                    .then((data) => {
                      console.log(data.error)
                      dispatch({
                        type:'BANKDETAILS_SUCCESS',
                        payload:data
                      })
                        
                    })
                } 
                catch (err){
                     //dispatch({type: 'LOGIN_FAILED'})
                     console.log(err)}

        return result
    };

    
}
// usersBankDetailsApi

export const submitPostuserdetails = (userdetails:any) => {
    const { userdata} = userdetails;
    console.log(userdata);
  
    let token :any = localStorage.getItem('accesstoken')
    return async (dispatch:any)=>{
       
                const result ={}
                try{
                    const result = await fetch(userPostDetailsApi,{
                        method:"POST",
                        headers: {  
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            "Authentication":token
                          },
                          body:JSON.stringify({
                            "EnterIFSCcode":userdata.EnterIFSCcode,
                             "accounttype":userdata.accounttype,
                           "accountnumber":userdata.accountnumber
                        //    "firstname":userdata.firstName,
                        //    "middlename":userdata.middleName,
                        //    "lastname":userdata.lastName,
                        //    "emailaddress":userdata.emailaddress,
                        //    "mobilenumber":userdata.mobilenumber,
                        //    "dateofbirth":userdata.dateofbirth,
                        //    "image":"",
                        //    "gender":userdata.gender,
                        //    "addressline1":userdata.addressline1,
                        //    "addressline2":"",
                        //    "pincode":userdata.pincode,
                        //    "incomeslab":userdata.IncomeSlab,
                        //    "country":userdata.country
                           
                        })
                          
                    
                    }).then((response) => response.json())
                    .then((data) => {
                      console.log(data.error)
                      dispatch({
                        type:'BANKPOSTDETAILS_SUCCESS',
                        payload:data
                      })
                        
                    })
                } 
                catch (err){
                     //dispatch({type: 'LOGIN_FAILED'})
                     console.log(err)}

        return result
    };

    
}

export const uploadcheque = (chequeInput:any) => {
    const {chequedata} = chequeInput;
    console.log(chequedata)
    let token :any = localStorage.getItem('accesstoken')
    console.log(token);
    return async (dispatch:any)=>{
      const result ={}
                try{
                    const result = await fetch(uploadChequeApi,{
                        method:"POST",
                        headers: {  
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            "Authentication":token
                          },
                          body:JSON.stringify({
                           "cheque":chequedata,
                            })
                        }).then((response) => response.json())
                    .then((data) => {
                      console.log(data.error)
                      console.log(data)
                      // dispatch({
                      //   type:'CHEQUE_UPLOAD_SUCCESS',
                      //   payload:data
                      // })
                        
                    })
                } 
                catch (err){
                     
                     console.log(err)}

        return result
    };


}
export const resendotp = (refreshtokendata:any) => {
    const {refreshtoken} = refreshtokendata;
    console.log(refreshtoken)
    return async (dispatch:any)=>{
      const result ={}
                try{
                    const result = await fetch(refreshtokenApi,{
                        method:"POST",
                        headers: {  
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                            // "Authentication":token
                          },
                          body:JSON.stringify({
                           "refreshtoken":refreshtoken,
                            })
                        }).then((response) => response.json())
                    .then((data) => {
                      console.log(data.error)
                      console.log(data)
                      })
                } 
                catch (err){
                     
                     console.log(err)}

        return result
    };


}







