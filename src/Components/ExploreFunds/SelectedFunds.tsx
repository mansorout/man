import React, { useEffect, useRef, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Breadcrumbs, Grid, Link, Modal, Theme, Typography } from '@mui/material'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import {
	Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar,
} from '@mui/material'
import Slider from "react-slick";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { InsuranceTermConditionAction } from '../../Store/Duck/InsuranceTermCondition'
import BannerSlider from '../CommonComponents/BannerSlider'
import FundAmtCard from './FundAmtCart';
import { ExploreFundsList } from '../../Modal/ExploreFunds';
import FooterBtnWithBox from '../CommonComponents/FooterBtnWithBox';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { tick } from '../../Assets';
import { globalConstant } from '../../Utils/globalConstant';
import { setMasterFundListForExploreFundsAction, setSelectedFundsForInvestmentAction, setReplaceFundsForExploreFundsAction, setSelectedFundsForExploreFundsAction } from '../../Store/Recommendations/actions/recommendations-action';
import { setOrderSipThunk, setPlaceLumpsumOrderThunk } from '../../Store/Payments/thunk/payments-thunk';
import { apiResponse } from '../../Utils/globalTypes';
import moment from "moment";
import './Portfolio.css'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const style = {
	main: {
		boxSizing: "border-box",
		backgroundColor: "#f9f9f9",
		// height: "100vh"
	} as React.CSSProperties,
	button: {
		height: "48px",
		boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
		backgroundColor: "#23db7b",
		transform: "translate(8px, -23px)",
		color: '#fff',
		width: 350,
		marginTop: 21,
		marginLeft: -8
	},
	modalText: {
		backgroundColor: '#FFF',
		width: 338,
		textAlign: 'center',
		marginLeft: '1px',
		padding: '5px',
		borderTopRightRadius: 4,
		borderTopLeftRadius: 4,
		fontWeight: '500',
		borderColor: '#fff'
	}
}

const useStyles: any = makeStyles((theme: Theme) => ({
	cmpWrapper: {
		backgroundColor: "var(--bgLayoutColor)",
	}
}));

const enumActiveScreen = Object.freeze({
  CLOSE_MODAL: 0,
  OPEN_DATE_PICKER_MODAL: 1,
  OPEN_CONFIRMATION_MODAL: 2,
  OPEN_NET_BANKING: 3,
});

const SelectedFunds = () => {
	const dispatch: any = useDispatch();
	const navigate = useNavigate()
	const refContainer = useRef();
	const classes = useStyles()
	const [insuranceTermCondition, setInsuranceTermCondition] = useState<boolean>(false)
	const { insuranceTermConditionState } = useSelector((state: any) => state.InsuranceTermConditionReducer);
	const g_selectedFunds = useSelector((state: any) => state?.recommendationsReducer?.masterFundListForExploreFunds.data) // select funds
	const g_selectedFundsForExploreFunds = useSelector((state: any) => state?.recommendationsReducer?.selectedFundsForExploreFunds); // add & replace 
	const g_replaceForExploreFunds = useSelector((state: any) => state?.recommendationsReducer?.replaceFundActiveIndexForExploreFund?.data);
	const [selectedFundsList, setselectedFundsList] = useState<any>([])
	const [selected, setSelected] = useState<number>(1)
	const [fundList, setFundList] = useState<any[]>([])
	const [open, setOpen] = React.useState<boolean>(false);
	const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
	const [onetimeLumpsum, setOnetimeLumpsum] = useState<boolean>(true);
	const [totalAmount, setTotalAmount] = useState(0)
	const [footerBtn, setFooterBtn] = useState<boolean>(false)
  const [sipStartDay, setSipStartDay] = useState<any>();
  const [activeScreen, setActiveScreen] = useState<number>(enumActiveScreen.CLOSE_MODAL);
	const [finalDataBuyNow, setFinalDataBuyNow] = useState<any>({
		// 'sipstartday': 0,
		"funds": []
	})


	const defaultKeys = Object.freeze({
		userRecommendedAmount: 'userRecommendedAmount'
	})

	const handleNavigation = (selectedFundAction: string) => {
		navigate("/explorefunds", { state: { status: selectedFundAction, parentRoute: "/home" } })
	}

	useEffect(() => {
		dispatch(InsuranceTermConditionAction(false))
	}, [])

	useEffect(() => {
		setInsuranceTermCondition(insuranceTermConditionState)
	}, [insuranceTermConditionState])


	useEffect(() => {
		if (!g_selectedFunds?.length) handleNavigation(globalConstant.CEF_EXPLORE_FUND)
		setselectedFundsList(g_selectedFunds)
		const funds = [];
		let amount = 0;
		let userRecommendedAmountCount = 0
		for (var key in g_selectedFunds) {
			// debugger
			const validate = selected === 1 ?
				g_selectedFunds[key].userRecommendedAmount >= g_selectedFunds[key].lumpsumminamount ? true : false
				: g_selectedFunds[key].userRecommendedAmount >= g_selectedFunds[key].sipminamount ? true : false;

			if (g_selectedFunds[key].hasOwnProperty(defaultKeys.userRecommendedAmount) && g_selectedFunds[key].userRecommendedAmount && validate) {
				const temp = {
					"fund_id": g_selectedFunds[key]?.secid,
					"amount": `${g_selectedFunds[key]?.userRecommendedAmount}`
				}
				funds.push(temp)
				amount += g_selectedFunds[key]?.userRecommendedAmount;
				// console.log("use Effect : ", g_selectedFunds[key].userRecommendedAmount)
				userRecommendedAmountCount++
			} else {
				setFooterBtn(true)
			}
		}
		if (userRecommendedAmountCount === g_selectedFunds?.length) {
			setFooterBtn(false)
		}
		
			setFinalDataBuyNow({
				'funds': funds,
			})
		// if(selected){
		// 	setFinalDataBuyNow({
		// 		'funds': funds,
		// 	})
		// }else{
		// 	setFinalDataBuyNow({
		// 		'sipstartday': sipStartDay,
		// 		'funds': funds,
		// 	})
		// }
		setTotalAmount(amount)
		console.log("g_selectedFunds : ", g_selectedFunds, amount)

	}, [g_selectedFunds])




	useEffect(() => {
		console.log(g_selectedFundsForExploreFunds, "explore fund screen and useEffect of g_selectedFundsForExploreFunds");

		// debugger
		if (g_selectedFundsForExploreFunds && g_selectedFundsForExploreFunds?.data && g_selectedFundsForExploreFunds?.data?.length) {
			if (g_selectedFundsForExploreFunds && g_selectedFundsForExploreFunds?.data && g_selectedFundsForExploreFunds?.data[0]?.isChecked === false && g_selectedFundsForExploreFunds?.data[0]?.fundSelected && (g_selectedFundsForExploreFunds?.data.length === 1 || g_selectedFundsForExploreFunds?.data.length > 1)) {
				// debugger
				// For Add Fund
				const addMoreFundTemp: any = [...g_selectedFunds];
				g_selectedFundsForExploreFunds?.data.map((item: any) => {
					if (item?.fundSelected === true && item?.isChecked === false) {
						// setselectedFundsList((prevState:any) => [...prevState, item])
						addMoreFundTemp.push(item)
					}
				})
				addMoreFundTemp && addMoreFundTemp?.length && dispatch(setMasterFundListForExploreFundsAction(addMoreFundTemp));
				dispatch(setSelectedFundsForExploreFundsAction({}))
				console.log("replaceItem.secid : ", addMoreFundTemp);

			} else {
				// debugger
				// For replace
				// g_selectedFunds.filter((item: any, index) => item.secid !== g_replaceForExploreFunds?.secid)
				if (g_selectedFunds && g_selectedFunds?.length && g_replaceForExploreFunds) {
					const tempReplace = [...g_selectedFunds];
					tempReplace.map((item: any, index) => {
						if (item?.secid === g_replaceForExploreFunds?.secid) {
							tempReplace[index] = g_selectedFundsForExploreFunds?.data[0];
							console.log("g_selectedFunds inside:", tempReplace, item, g_selectedFundsForExploreFunds, index)
						}
					})

					dispatch(setMasterFundListForExploreFundsAction(tempReplace))
					dispatch(setSelectedFundsForExploreFundsAction({}))
				}

				// removeItem && removeItem?.length && removeItem.push(g_selectedFundsForExploreFunds?.data[0])
				// console.log("remove Item :", removeItem)
				//  setselectedFundsList(removeItem)
			}
		}

		// dispatch(setSelectedFundsForInvestmentAction(temp));
	}, [g_selectedFundsForExploreFunds])

	// useEffect(() => {
	//     if(selectedFundsList && selectedFundsList?.length){
	//         dispatch(setMasterFundListForExploreFundsAction(selectedFundsList));
	//     }
	// }, [selectedFundsList])


	const handleClick = () => {
		setOpen(!open)
	}
	const handleClick2 = () => {
		navigate('/payusingnetbanking')
	}
	const handleDateChange = () => {
		console.log("Date is: ");
	};



	const handleRemoveBtn = (selectedFundAction: any) => {
		const temp = selectedFundsList && selectedFundsList?.length && selectedFundsList.filter((item: any) => item?.secid !== selectedFundAction?.secid)
		console.log("temp kp:", temp)
		dispatch(setMasterFundListForExploreFundsAction(temp));
	}

	// const handleTimer = (cb: any | void, a: any) => {
	//     clearTimeout(timerRef.current);
	//     timerRef.current = setTimeout(() => {
	//         dispatch(cb(a));
	//     }, 550);
	// }

	const handleOnChangeFun = (e: any, arg: any,) => {
		// const temp = arg; 
		// temp.userRecommendedAmount = parseInt(e.target.value);
		const temp: any = [];
		g_selectedFunds && g_selectedFunds?.length && g_selectedFunds.map((item: any) => {
			if (item?.secid === arg?.secid) {
				item.userRecommendedAmount = parseInt(e.target.value);
			}
			temp.push(item)
		})
		// const finalTemp = [...filterVal, temp]
		// setselectedFundsList(finalTemp)
		dispatch(setMasterFundListForExploreFundsAction(temp));
		console.log("handleOnChange  Fun:", arg, temp)
	}

	const handleBuyNow = async () => {
		// debugger
		console.log("finalDataBuyNow data:", finalDataBuyNow, selected)
		if (finalDataBuyNow?.funds?.length) {
			if (selected) {
				let res: any = setPlaceLumpsumOrderThunk(finalDataBuyNow)
				console.log("finalDataBuyNow :", res);
				navigate('/payusingnetbanking')
			} else {
				
			const temp = {...finalDataBuyNow};
			temp['sipstartday'] = sipStartDay
			let res: apiResponse = await setOrderSipThunk(temp);
			console.log("finalDataBuyNow :", res, temp);
				navigate('/payusingnetbanking')
			}
		}
	}

	const handleSelectApi = () => {
		setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL)
		console.log("sipStartDay :",sipStartDay)
		// setOpen(!open)
	}


	//   const handleApiResponse = (res: apiResponse, arrFunc: void[]) => {

	//     if (checkExpirationOfToken(res?.code)) {
	//       dispatch(setTokenExpiredStatusAction(true));
	//       return;
	//     }

	//     if (res?.error === true) {
	//       return;
	//     }

	//     arrFunc.forEach((item: void) => {

	//       // @ts-ignore
	//       if (item === setMasterFundList && status !== globalConstant.CEF_EXPLORE_FUND) {

	//         if (status === globalConstant.CEF_ADD_FUND || status === globalConstant.CEF_REPLACE_FUND) {

	//           let { recommendations }: any = { ...g_mutaulFundListWrtUserAmount };
	//           if (recommendations && recommendations.length) {
	//             filteringDataWrtSelectedFunds(recommendations, res?.data);
	//           }
	//         }

	//         if (status === globalConstant.CEF_ADD_FUND_OF_EXPLORE_FUND || status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND) {
	//           let { data } = g_masterFundListForExploreFunds;

	//           if (data && data.length) {
	//             filteringDataWrtSelectedFunds(data, res?.data);
	//           }
	//         }

	//         return;
	//       }

	//       // @ts-ignore
	//       if (res?.data) item(res?.data);
	//     })

	//   }

	return (
		<Box ref={refContainer}>
			<Navbar />
			<Box className={classes.cmpWrapper}>
				<Grid container spacing={0}>
					<Grid item xs={0} sm={1} md={2}>
						<Toolbar />
						<Sidebar />
					</Grid>
					<Grid container xs={13} sm={11} md={10}>
						<Grid sx={{ padding: 2, paddingBottom: '150px' }} item xs={12}>
							<Toolbar />
							<Grid container>
								<Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px" }, paddingBottom: '70px', }} item xs={12}>
									<Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }} >
										<Breadcrumbs aria-label="breadcrumb">
											<Link color="#6495ED" underline="always" onClick={() => navigate("/explorefunds", { state: { status: globalConstant.CEF_EXPLORE_FUND, parentRoute: "/home" } })}>
												<Typography className='burgerText'>Explore Funds</Typography>
											</Link>
											<Link underline='none' color="#8787a2" aria-current="page">
												<Typography className='burgerText'>Selected Funds</Typography>
											</Link>
										</Breadcrumbs>
									</Box>
									<Box sx={{ margin: "27px 0px 21px 25px" }}>
										<Typography style={{ fontSize: "18px", color: "#3c3e42", fontWeight: "500" }}>{selectedFundsList && selectedFundsList?.length} Funds Selected</Typography>
									</Box>

									<Grid container sx={{ display: "flex" }} >

										<Grid item xs={12} md={6} >
											<Box>
												{
													selectedFundsList && selectedFundsList?.length &&
													selectedFundsList?.map((selectedFund: any) => (
														<FundAmtCard
															data={selectedFund}
															investmentType={selected}
															handleOnChangeFun={handleOnChangeFun}
															replaceBtnAction={(item) => {
																handleNavigation(globalConstant.CEF_REPLACE_OF_EXPLORE_FUND)
																dispatch(setReplaceFundsForExploreFundsAction(item))
															}}
															removeBtnAction={(item) => handleRemoveBtn(item)}
														/>
													))
												}
												{/* <FundAmtCard heading={'PGIM India Midcap Opportunities Fund Growth'} />
                                                <FundAmtCard heading={'Quant Mid Cap Fund Growth'} /> */}
											</Box>

											<Button
												onClick={() =>
													handleNavigation(globalConstant.CEF_ADD_FUND_OF_EXPLORE_FUND)
												}
												sx={{
													backgroundColor: "#00b4ff",

													height: "45px",
													borderRadius: "32px",
													padding: "22px",
													ml: 1,
													"&.MuiButtonBase-root:hover": {
														bgcolor: "#00b4ff"
													}
												}}
											>
												<Typography sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>
													ADD MORE FUNDS
												</Typography>
											</Button>



										</Grid>

										<Grid item xs={12} md={6} sx={{ textAlign: "center" }}>

											<Grid item >
												<Box sx={{ backgroundColor: '#fff', padding: 2, marginLeft: 2, borderRadius: 3, alignItems: 'start', width: '400px' }}>
													<Typography style={{ color: 'rgb(79, 70, 222)', marginBottom: 8, fontWeight: '500' }} >How would you like to invest ?</Typography>
													<Box style={{ display: "flex", gap: "15px", alignItems: "center" }}>
														<Box onClick={() => { setSelected(1); setFundList(ExploreFundsList) }} style={{ cursor: "pointer", border: `1px solid ${selected == 1 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 1 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
															<Typography style={{ fontWeight: "500", color: `${selected == 1 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>One-Time Lump Sum</Typography>
														</Box>
														<Box onClick={() => { setOnetimeLumpsum(false); setSelected(0); setFundList(ExploreFundsList.filter((item) => item.type == 'Equity')) }} style={{ cursor: "pointer", border: `1px solid ${selected == 0 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 0 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
															<Typography style={{ fontWeight: "500", color: `${selected == 0 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Monthly SIP </Typography>
														</Box>
													</Box>
												</Box>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<FooterBtnWithBox
							boxIcon={<ThumbUpOffAltIcon />}
							boxText={'Great! Your total investment is'}
							boxAmount={totalAmount}
							btnText={selected ? `Buy Now` : `Select SIP Date`}
							btnClick={selected ? handleBuyNow : handleSelectApi}
							btnDisable={footerBtn}
						/>
					</Grid>
				</Grid>
				{
					// onetimeLumpsum ? <FooterWithBtn
					//     btnText={selected == 1 ? `Buy Now` : `Select SIP Date`}
					//     btnClick={handleClick2}
					// /> : <FooterWithBtn
					//     btnText={selected == 1 ? `Buy Now` : `Select SIP Date`}
					//     btnClick={handleClick}
					// />
					<Box sx={{ position: 'fixed', bottom: '10px', left: '0px', right: '0px', zIndex: '11' }}>

					</Box>
				}
			</Box>

			
			<Modal
          sx={{ borderRadius: 8, }}
          open={
            activeScreen === enumActiveScreen.OPEN_DATE_PICKER_MODAL
              ? true
              : false
          }
          onClose={() => {
            setActiveScreen(enumActiveScreen.CLOSE_MODAL);
          }}
        >
          <Box
            alignItems="center"
            justifyContent="center"
						sx={{position: 'fixed', left: '50%', top: '50%', transform : 'translate(-50%, -50%)'}}
          >
            <Typography sx={style.modalText}>Monthly SIP Date</Typography>
            <Calendar
              showNeighboringMonth={false}
              showNavigation={false}
              // @ts-ignore
              onChange={(val, e) => {
                let date = moment(val).format("L") ? moment(val).format("L").split("/")[1] : ""
                setSipStartDay(date);
              }}
            />
            <Button
              onClick={() => {
                if (sipStartDay) {
                  setActiveScreen(enumActiveScreen.OPEN_CONFIRMATION_MODAL);
                }
              }}
              variant="contained"
              style={style.button}
              sx={{
                backgroundColor: "rgba(123, 123, 157, 0.05)",
                color: "#7b7b9d",
              }}
            >
              Confirm SIP Date
            </Button>
          </Box>
        </Modal>


		
        <Modal
          sx={{ borderRadius: 8 }}
          open={
            activeScreen === enumActiveScreen.OPEN_CONFIRMATION_MODAL
              ? true
              : false
          }
          onClose={() => {
            setActiveScreen(enumActiveScreen.CLOSE_MODAL);
          }}
        >
          <>
            <Box
              alignItems="center"
              justifyContent="center"
							sx={{position: 'fixed', left: '50%', top: '50%', transform : 'translate(-50%, -50%)'}}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  width: 300,
                  alignItems: "center",
                  padding: 3,
                  textAlign: "center",
                }}
              >
                <Box>
                  <img style={{ height: 120, width: 120 }} src={tick} />
                </Box>
                <Typography sx={{ marginTop: 1, fontWeight: "600" }}>
                  Date confirmed!
                </Typography>
                <Typography sx={{ marginTop: 1, color: "#8787a2" }}>
                  Your Monthly SIP Date is {sipStartDay}th of every month
                </Typography>
              </Box>
              {/* <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_NET_BANKING) }} variant='contained' style={style.button} sx={{ */}
              <Button
                onClick={() => {
                  // handleOrderInvestment()
									if(sipStartDay){
										handleBuyNow()
									}
                }}
                variant="contained"
                style={style.button}
                sx={{
                  backgroundColor: "rgba(123, 123, 157, 0.05)",
                  color: "#7b7b9d",
                  marginLeft: 8,
                }}
              >
                Continue to Payment
              </Button>
            </Box>
          </>
        </Modal>

		</Box>
	)
}

export default SelectedFunds








// <Grid container xs={13} sm={11} md={10}>
// <Grid sx={{ padding: 2 }} item xs={12}>
//     <Toolbar />
//     <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }} >
//         <Breadcrumbs aria-label="breadcrumb">
//             <Link color="#6495ED" underline="always" href="/home">
//                 <Typography className='burgerText'>Home</Typography>
//             </Link>
//             <Link color="#6495ED" underline="always" href="/investNow">
//                 <Typography className='burgerText'>Investment</Typography>
//             </Link>
//             <Link color="#6495ED" underline="always" href="/sipInvestment">
//                 <Typography className='burgerText'>Monthly Investment</Typography>
//             </Link>
//             <Link color="#6495ED" underline="always" href="/mflist">
//                 <Typography className='burgerText'> Mutual Fund Recommendation</Typography>
//             </Link>
//             <Link color="#6495ED" underline="always" href="/customizemf">
//                 <Typography className='burgerText'>Customize Plan </Typography>
//             </Link>
//             <Link color="#6495ED" underline="always" href="/replaceFunds">
//                 <Typography className='burgerText'>Choose Fund to Replace </Typography>
//             </Link>
//             <Link underline='none' color="#8787a2" aria-current="page">
//                 <Typography className='burgerText'>   Axis Small Cap Fund Regular Growth</Typography>
//             </Link>
//         </Breadcrumbs>
//     </Box>
//     {
//         FundCardsData.map((item, index) => {
//             return (
//                 <FundDetailCard
//                     key={index}
//                     logo={item.logo}
//                     name={item.name}
//                     cap={item.cap}
//                     type={item.type}
//                     year1={item.year1}
//                     year3={item.year3}
//                     year5={item.year5}
//                     rating={item.rating}
//                     morning_star_logo={item.morning_star_logo}
//                 />
//             )
//         })
//     }




//     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         <Grid item xs={12}>

//         </Grid>
//         <Grid item xs={12}>
//             <FundPerformance />
//         </Grid>
//     </Grid>

//     <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ paddingTop: "15px", paddingBottom: "56px" }}>
//         <Grid item xs={12} sm={6} >
//             <MinInvest />
//         </Grid>
//         <Grid item xs={12} sm={6} >
//             <SchemeDoc />
//         </Grid>
//         <Grid item xs={12} sm={6} >
//             <RiskoMeter />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//             <LatestAssets />
//         </Grid>
//     </Grid>
// </Grid>
// <FooterWithBtn
//     btnText='Add This Fund to Plan'
//     btnClick={handleClick}
// />
// </Grid>