let getlocalstoragelattitude= localStorage.getItem("Latitude")
let getlocalstoragelangitude= localStorage.getItem("Longitude")

export const mobileOtpLoginApi  = 'http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/otp/send'
export const mobileOtpVerifyApi = 'http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/otp/verify'
export const uploadSignatureApi = 'http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/signature/add'
export const panVerificationApi = 'http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/pan/verification'
export const nomineeAddApi = 'http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/nominee/add'
export const userDetailsApi = 'http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/profile/edit'
export const usersBankDetailsApi = 'http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/ifsc/details?ifsc=PYTM0123456'
export const userPostDetailsApi = 'http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/bank/add'
export const uploadChequeApi    =  'http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/cheque/add'
export const refreshtokenApi = 'http://15.207.181.111:3000/sprintbeans-auth/mobile/v1/token/refresh'
export const usersaddressDetailsApi= `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${getlocalstoragelattitude}&longitude=${getlocalstoragelangitude}&localityLanguage=en`



