import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../Store/Store";
import { getUserProfileDataThunk } from "../../Store/Authentication/thunk/auth-thunk";
import { cameraIcon } from "../../Assets/index";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Grid,
  IconButton,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { emaillogo, GrouMobilecicon } from "../../Assets/index";
import { cakelogo } from "../../Assets/index";
import { icbirthplacelogo } from "../../Assets/index";
import { locationlogo } from "../../Assets/index";
import { ic_income } from "../../Assets/index";
import { wclogo } from "../../Assets/index";
import { EditProfieButton } from "../Buttons/EditProfieButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import Paper from "@mui/material/Paper";
import "./style.css";
import { height, padding } from "@mui/system";
import siteConfig from "../../Utils/siteConfig";
import { checkExpirationOfToken } from "../../Utils/globalFunctions";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { postData } from "../../Utils/api";
import { setUploadImageThunk } from "../../Store/Global/thunk/global-thunk";
import { setProfileImage } from "../../Store/Global/actions/global-actions";
import { enumActiveGender } from "../../Utils/globalConstant";

const style = {
  containertwo: {
    backgroundColor: "#fff",
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
    borderRadius: "8px",
    padding: "21px 40px",
  },

  cameraIcon: {
    borderRadius: "50%",

    width: "76px",
    height: "76px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1px",
    boxShadow: "0 0 10px 0 rgb(0 0 0 / 8%)",
    // border: "solid 1px rgba(0, 0, 0, 0.08)",
    display: "block",
    marginTop: "20px",
    marginBottom: "30px",
  },

  emailIcon: {
    borderRadius: "170px 175px 175px 163px",
    backgroundColor: "#64dbff",
    width: "80px",
    height: "80px",
    margin: "0 54px 22px 34px",
    padding: "20px",
    boxShadow: "0 0 10px 0 rgb(0 0 0 / 8%)",
    border: "solid 1px rgba(0, 0, 0, 0.08)",
  },

  ca: {
    // borderRadius: "170px 175px 175px 163px",
    backgroundColor: "rgba(100, 219, 255, 0.3)",
    width: "20px",
    height: "20px",

    padding: "10px",

    // width: '80px',
    // height: '80px',
    // margin: '0 54px 22px 34px',
    // padding: '20px',
    // boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
    // border: 'solid 1px rgba(0, 0, 0, 0.08)',
  } as React.CSSProperties,
};

type formDataProps = {
  mobilenumber: string;
  emailaddress: string;
  dateofbirth: string;
  gender: string;
  placeofbirth: string;
  addressline1: string;
  incomeslab: string;
};

const initialFormData: formDataProps = {
  mobilenumber: "",
  emailaddress: "",
  dateofbirth: "",
  gender: "",
  placeofbirth: "",
  addressline1: "",
  incomeslab: "",
};

type IProps = {
  userDetails: any;
};

const ViewProfileCard = (props: IProps) => {
  const dispatchLocal = useDispatch();

  /**refernce variables */
  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  /**reducer state */
  const userData: any = useSelector((state: any) => state.userProfileDetails);
  // const g_viewProfileState: any = useSelector((state: any) => state?.authReducer?.profile);
  // console.log(g_viewProfileState, "g_viewProfileState viewprofilecard() child")

  // const g_viewProfileState: any = useSelector((state: any) => state?.authReducer?.profile);
  /**local states */
  const [imgSrc, setImgSrc] = useState<any>("");
  const [formData, setFormData] = useState<formDataProps>(initialFormData);
  // const [profileImage,setProfileImage] = useState<any>("")
  const [profileImage2, setProfileImage2] = useState<any>("")
  const [showImage, setShowImage] = useState(false)
  const userProfileStatus: any = useSelector((state: any) => state?.authReducer?.profileValidationData?.data?.isProfileComplete);
  const ImageData = {
    filename: "kk",
    image: "wwww.png",
    module: "profile",
  };

  const checkDOB = (strDOB: string) => {
    if (!strDOB) {
      return "";
    }

    let num: number = parseInt(strDOB);
    // @ts-ignore
    if (!num) {
      return "";
    }

    return strDOB;
  };

  useEffect(() => {
    // let { userdetails }: { userdetails: any } = g_viewProfileState?.data;
    // if (userdetails) {
    let userdetails: any = { ...props?.userDetails };
    if (userdetails?.addressline1) {
    }
    let strAddress: string =
      (userdetails?.addressline1 ? `${userdetails?.addressline1} -` : "") +
      (userdetails?.city ? ` ${userdetails?.city}` : "") +
      (userdetails?.state ? ` ${userdetails?.state}` : "") +
      (userdetails?.pincode ? ` ${userdetails?.pincode}` : "");
    if (userdetails) {
      setFormData((prev) => ({
        ...prev,
        mobilenumber: userdetails?.mobilenumber || "",
        emailaddress: userdetails?.emailaddress || "",
        dateofbirth: checkDOB(userdetails?.dateofbirth),
        gender: userdetails?.gender || "",
        // placeofbirth: userdetails?.placeofbirth || "",
        placeofbirth: userdetails?.placeofbirthcity || "",
        addressline1: strAddress || "",
        incomeslab: userdetails?.incomeslab || "",
      }));
    }
  }, [props?.userDetails]);
  // }, [g_viewProfileState])

  //   const onSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {

  //     if (e.target.files && e.target.files.length > 0) {
  //       const reader = new FileReader();
  //       reader.addEventListener("load", () =>
  //         setImgSrc(reader.result?.toString() || "")
  //       );
  //        let dddddd = reader.readAsDataURL(e.target.files[0]);
  //        console.log(dddddd)
  //     }

  //     //  @ts-ignore
  //    let res : apiResponse = await setUploadImageThunk(ImageData)
  // console.log(res)
  // localStorage.setItem("imgSrc",imgSrc)
  // console.log(imgSrc)
  //     // @ts-ignore
  //   handleApiResponse(res, [setImgSrc]);
  //   console.log(imgSrc)

  // }
  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // alert("jjjj")
    if (e.target.files && e.target.files.length > 0) {
      // alert("h")
      const reader = new FileReader();
      reader.onload = (fileLoadedEvent: any) => {
        let base64: any = fileLoadedEvent.target.result;
        // setProfileImage(base64)

        // console.log(base64)

        dispatchLocal(setProfileImage(base64));


        localStorage.setItem("imgSrc", base64)





        //  console.log(image)


        setImgSrc(base64);


        setShowImage(true)

      };
      reader.readAsDataURL(e.target.files[0]);
    }





    //  @ts-ignore
    //      let res : apiResponse = await setUploadImageThunk(ImageData)
    // console.log(res)
    // localStorage.setItem("imgSrc",imgSrc)
    // console.log(imgSrc)
    //     @ts-ignore
    //   handleApiResponse(res, [setImgSrc]);

  };


  // upload image setten in a state

  useEffect(() => {
    let image = localStorage.getItem("imgSrc")
    // console.log(image)
    setImgSrc(image)

  }, [])
  // console.log("profile image",profileImage2)


  // @ts-ignore
  const handleApiResponse = (res: apiResponse, arrFunc: void[]) => {
    alert("eeee");
    if (checkExpirationOfToken(res?.code)) {
      dispatch(setTokenExpiredStatusAction(true));

      return;
    }

    if (res?.error === true) {
      return;
    }

    arrFunc.forEach((item: void) => {
      // @ts-ignore
      if (res?.data) item(res?.data);
      console.log(res?.data);
    });
  };

  //   postData(
  //     ImageData,
  //     siteConfig.AUTHENTICATION_METAUPLOAD_IMAGE,
  //     siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
  //     siteConfig.AUTHENTICATION_API_ID
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (checkExpirationOfToken(data?.code)) {
  //         dispatchLocal(setTokenExpiredStatusAction(true));
  //         return;
  //       }

  //       if (data?.error) {

  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const getGenderValue = () => {
    let strGender = "";
    switch (formData?.gender) {
      case enumActiveGender?.MALE: { strGender = "Male"; break; }
      case enumActiveGender?.FEMALE: { strGender = "Female"; break }
      case enumActiveGender?.TRANS: { strGender = "Transgender"; break; }
      default: strGender = "";
    }

    return strGender;
  }

  return (

    <>

      <Card
        sx={{
          p: 1,
          marginTop: "0px",
          height: " fit-content",
        }}
      // className="paddingviewprofilestyle"
      >
        {" "}
        <Box>
          <List>
            <Box
              onClick={() =>
                uploadInputRef.current && uploadInputRef.current.click()
              }
            >
              <img alt="" src={imgSrc} style={style.cameraIcon} />
              <input
                ref={uploadInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={onSelectFile}
              />
            </Box>
            <Typography
              onClick={() => setImgSrc("")}
              sx={{
                textDecoration: "underline",
                color: "#6c63ff",
                textAlign: "center",
                fontWeight: "500",
                marginTop: "-4%",
              }}
              className="RemoveStyle_Style"
            >
              Remove
            </Typography>
            <ListItem
              secondaryAction={
                userProfileStatus ?
                  <Typography
                    sx={{
                      backgroundColor: "#23db7b",
                      fontSize: "12px",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      color: "white",
                      padding: "2px 8px",
                    }}

                  >
                    Completed
                  </Typography> : <Typography
                    sx={{
                      backgroundColor: "#ffc300",
                      fontSize: "12px",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      color: "#000",
                      padding: "2px 8px",
                    }}
                    className="IncompleteStyle"
                  >
                    Incomplete
                  </Typography>

              }
            ></ListItem>
            <Typography
              sx={{
                marginLeft: "25px",
                marginTop: "-18px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Personal Details
            </Typography>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="" src={GrouMobilecicon} style={style.ca} />
              </ListItemAvatar>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: formData.mobilenumber || "" ? "#7b7b9d" : "#3c3e42",
                }}
                className="CommonStyle__Class"
              >
                Mobile Number
                {
                  <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>
                    {formData?.mobilenumber || ""}
                  </Typography>
                }
              </Typography>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar alt="" src={emaillogo} style={style.ca} />{" "}
              </ListItemAvatar>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: formData.emailaddress || "" ? "#7b7b9d" : "#3c3e42",
                }}
                className="CommonStyle__Class"
              >
                Email Address
                {
                  // ViewProfileState?.userdetails?.emailaddress !== "" ?
                  <Typography sx={{ fontSize: "14px", color: "#3c3e42" }} className="ViewFontSizeEmail">
                    {formData?.emailaddress || ""}
                  </Typography>
                }
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="" src={cakelogo} style={style.ca} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: formData.dateofbirth || "" ? "#7b7b9d" : "#3c3e42",
                    }}
                  // className="CommonStyle__Classofb_Date"
                  >
                    Date of Birth
                  </Typography>
                }
                secondary={
                  userData?.formData?.dateofbirth !== "" ? (
                    <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>
                      {" "}
                      {formData?.dateofbirth || ""}
                    </Typography>
                  ) : (
                    ""
                  )
                }
              />
              <Avatar
                className="Gender_Logo_Style"
                alt=""
                src={wclogo}
                style={style.ca}
                sx={{ marginLeft: "25px" }}
              />
              {/* ViewProfileState?.userdetails */}
              <ListItemText
                // className="CommonStyle__Class_Gender"
                primary="Gender"
                // secondary={g_viewProfileState?.userdetails?.gender !== "" ? g_viewProfileState?.userdetails?.gender : ""}
                secondary={getGenderValue()}
                sx={{
                  marginLeft: "20px",
                  fontSize: "13px",
                  color: formData.gender || "" ? "#7b7b9d" : "#3c3e42",
                }}
                className="GenderStylefontsize"
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar alt="" src={icbirthplacelogo} style={style.ca} />
              </ListItemAvatar>

              <Typography
                sx={{
                  fontSize: "13px",
                  color: formData.placeofbirth ? "#7b7b9d" : "#3c3e42",
                }}
              // className="CommonStyle__Class"
              >
                Place of Birth
                {/* {
                  g_viewProfileState?.userdetails?.placeofbirth !== "" ?
                    <Typography sx={{ fontSize: "14px" }}>{g_viewProfileState?.userdetails?.placeofbirth}</Typography> : ""
                  } */}
                <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>
                  {formData?.placeofbirth}
                </Typography>
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                {" "}
                <Avatar alt="" src={locationlogo} style={style.ca} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: formData.addressline1 ? "#7b7b9d" : "#3c3e42",
                    }}
                    className="CommonStyle__Class"
                  >
                    Communication Address
                    <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>
                      {formData?.addressline1}
                    </Typography>
                    {/* {
                      g_viewProfileState?.userdetails?.addressline1 !== "" ?
                        <Typography sx={{ fontSize: "14px" }}>{g_viewProfileState?.userdetails?.addressline1}</Typography> : ""
                    } */}
                  </Typography>
                }
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar alt="" src={ic_income} style={style.ca} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: formData.incomeslab ? "#7b7b9d" : "#3c3e42",
                    }}
                    className="CommonStyle__Class"
                  >
                    Income slab
                    <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>
                      {formData?.incomeslab}
                    </Typography>
                    {/* {
                      // {ViewProfileState?.userdetails?.emailaddress}
                      g_viewProfileState?.userdetails?.incomeslab !== "" ?
                        <Typography sx={{ fontSize: "14px" }}>{g_viewProfileState?.userdetails?.incomeslab}</Typography> : ""
                    } */}
                  </Typography>
                }
              />
            </ListItem>
            <EditProfieButton />
          </List>
        </Box>
      </Card>
    </>
  );
};

export default ViewProfileCard;
// function setUploadImageThunk(ImageData: { filename: string; image: string; module: string; }): any {
//   throw new Error("Function not implemented.");
// }

function dispatch(arg0: { type: string; payload: any }) {
  throw new Error("Function not implemented.");
}
