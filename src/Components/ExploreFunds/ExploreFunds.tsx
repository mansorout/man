import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

//Components imports
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import FooterWithBtn from '../CommonComponents/FooterWithBtn'
import MutualFundCard2 from '../../Modules/CustomCard/MutualFundCard2'

//redux actions imports
import AddMoreFunds from './AddMoreFunds';
import { apiResponse } from '../../Utils/globalTypes'
import SearchCmp from '../CommonComponents/SearchCmp'
import { globalConstant } from '../../Utils/globalConstant'
import SprintMoneyLoader from '../CommonComponents/sprintMoneyLoader'
import { getCategoryGroupListThunk, getListOfMutualFundProviderCoThunk, getMasterFundListThunk } from '../../Store/Recommendations/thunk/recommendations-thunk'
import { setMasterFundListForExploreFundsAction, setSelectedFundsForExploreFundsAction, setSelectedFundsForInvestmentAction } from '../../Store/Recommendations/actions/recommendations-action'

//Global constant and functions imports
import siteConfig from '../../Utils/siteConfig';
import AddToPlanComp from '../CommonComponents/AddToPlanComp'
import { lookUpMasterKeys } from '../../Utils/globalConstant'
import AllExploreFundCard from '../../Modules/CustomCard/AllExploreFundCard'
import { checkExpirationOfToken, isMultipleofNumber } from '../../Utils/globalFunctions'
import { getMutualFundRecommendationListWRTUserAmount } from '../../Utils/globalFunctions'
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions'
import ClearIcon from "@mui/icons-material/Clear";

//MUI imports
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Box, styled } from '@mui/system'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Avatar, Breadcrumbs, Chip, Grid, IconButton, InputBase, Typography, Link } from '@mui/material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'

//Style imports
import './Portfolio.css'
import { ConstructionOutlined } from '@mui/icons-material';
// import { AnchorOpenAction } from "../../Store/Duck/FilterBox";

const StyledMenuItem = styled(MenuItemUnstyled)(
  ({ theme: Theme }) => `
  list-style: none;
  border-radius: 8px;
  width: 300px;
  boxSizing: border-box;
  zIndex: 4000;
  &.${menuItemUnstyledClasses.focusVisible} {
    outline: none;
  }
  `,
);
const useStyles: any = makeStyles((theme: Theme) => ({
  appbar: {
    backgroundColor: "white",
    width: "100%",
    height: "64px",
    position: "fixed",
    zIndex: "3000",
  },
}));

const style = {
  main: {
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    height: "100vh"
  } as React.CSSProperties,
  drawer: {
    zIndex: "500",
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
  } as React.CSSProperties,
  image: {
    width: '176px',
  } as React.CSSProperties,
  profileContainer: {
    borderRadius: "8px",
    border: "solid 1px #4f46de",
    backgroundColor: "#6c63ff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  profile: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "1px solid white"
  },
  profileInter: {
    width: "40px",
    height: "40px",
    border: "solid 1px rgba(75, 123, 236, 0.49)",
    borderRadius: "50%"
  },
  menuContainer: {
    boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
    boxSizing: "border-box",
    padding: "10px",
    backgroundColor: "white",
    marginRight: "20px"
  } as React.CSSProperties,
  menuButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0px"
  } as React.CSSProperties,
  menuText: {
    color: "black",
    fontSize: "10px",
    fontWeight: "500",
    padding: "5px 10px",
    borderRadius: "4px",
    backgroundColor: "#ffc300",
    cursor: "pointer"
  },
  menuText2: {
    padding: "6px 12px",
    borderRadius: "4px",
    border: "solid 1px #23db7b",
    backgroundColor: "rgba(35, 219, 123, 0.12)",
    fontSize: "12px",
    fontWeight: "500",
    color: "#09b85d",
    cursor: "pointer"
  },
  button: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "none",
    backgroundColor: "white",
    textAlign: "left",
    justifyContent: "flex-start",
  } as React.CSSProperties,
  menuIcon: {
    color: "#6c63ff",
    fontSize: "24px"
  },
  appBar: {
    backgroundColor: "white",
  },
  logo: {
    width: "50px",
    padding: "20px 0px",
  } as React.CSSProperties,

}

const initialMFDataForAddFund = {
  showCheckbox: true,
  showButtons: false,
  isMutualFundScreen: false,
  isChecked: false
}

const initialMFDataForReplaceFund = {
  showCheckbox: false,
  showButtons: false,
  isMutualFundScreen: false,
  isChecked: false
}

const initialMFDataForExploreFund = {
  showCheckbox: true,
  showButtons: false,
  isMutualFundScreen: false,
  isChecked: false
}

const enumFilterIndexes = {
  SORT: 'Sort',
  FUND_TYPE: 'Fund Type',
  FUND_HOUSE: 'Fund House'

}

const enumIndexesOfFilterType = {
  SORT: 0,
  FUND_TYPE: 1,
  FUND_HOUSE: 2
}

const initialFilterIndexes: any[] = [
  {
    key: 'Sort',
    selectType: 'radio',
    activeSortIndex:0,
    keyValues: [
      {
        value: 'return',
        label: 'Return - High to Low',
      },
      {
        value: 'rating',
        label: 'Rating - High to Low',
      },
      {
        value: 'size',
        label: 'Fund Size - High to Low',
      }
    ]
  },
  {
    key: 'Fund Type',
    selectType: 'radio',
    activeCategoryIndex: 0,
    keyValues: [],
  },
  {
    key: 'Fund House',
    selectType: 'checked',
    keyValues: []
  }
]


function ExploreFunds(props: any) {

  const classes = useStyles();
  const dispatch: any = useDispatch();
  const refContainer = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const g_investment: any = useSelector((state: any) => state?.recommendationsReducer?.investment);
  const g_masterFundListForExploreFunds = useSelector((state: any) => state?.recommendationsReducer?.masterFundListForExploreFunds);
  const g_mutaulFundListWrtUserAmount = useSelector((state: any) => state?.recommendationsReducer?.mutaulFundListWrtUserAmount?.data);

  const [loading, setLoading] = useState<boolean>(false);
  const [filterValues, setFilterValues] = useState<any>({});
  const [fundSelecteds, setFundSelecteds] = useState<any[]>([]);
  const [addFundOpen, setAddFundOpen] = useState<boolean>(false);
  const [masterFundList, setMasterFundList] = useState<any[]>([]);
  const [initialMFData, setInitialMFData] = useState<boolean>(false);
  const [fundProviderList, setFundProviderList] = useState<any[]>([]);
  const [categoryGroupList, setCategoryGroupList] = useState<any[]>([]);
  const [masterFundListLength, setMasterFundListLength] = useState<number>(0);
  const [filterIndexes, setFilterIndexes] = useState<any>(initialFilterIndexes);
  const [variableMasterFundList, setVariableMasterFundList] = useState<any[]>([]);
  const [activeCategoryGroupIndex, setActiveCategoryGroupIndex] = useState<number>(0);
  const [activeSortIndex, setActiveSortIndex] = useState<number>(0)
  const [isInitialVariableFundListFetched, setIsInitialVariableFundListFetched] = useState<boolean>(false);

  const status: any = useMemo(() => { return location?.state?.status }, []);
  const investmentCardType: string | null = useMemo(() => { return localStorage.getItem(siteConfig.INVESTMENT_CARD_TYPE) }, []);

  useEffect(() => {
    initiate();
    return () => {
      setIsInitialVariableFundListFetched(false);
      console.log("explore fund unmounted");
    }
  }, []);

  /**Initial Functions */
  const initiate = async () => {
    await getCategoryGroupList();
    await getFundProviderList();
  }
  /***************************************************************************************/

  useEffect(() => {
    if (categoryGroupList && categoryGroupList.length) {

      // getMasterFundList(siteConfig.RECOMMENDATION_FUND_LIST);
      // getMasterFundList(siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${categoryGroupList[0]}`);


      // const { data, isFundPurchased } = g_masterFundListForExploreFunds;
      // if (isFundPurchased) {
      //   getMasterFundList(siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${categoryGroupList[0]}`);
      // } else {
      //   if (data && data.length) {
      //     setMasterFundList(data);
      //   } else {
      //   }
      // }
      console.log("categoryGroupList : ", categoryGroupList)
      // return;


      let temp: any[] = [...filterIndexes];
      if (temp && temp?.length) {
        // temp.map((item, index) => {
        //   // if(item?.key === enumFilterIndexes?.SORT){
        //   //   console.log("temp filter SORT :", temp[index])
        //   //   temp[index].activeSortIndex = activeSortIndex;
        //   // }

        //   if (item?.key === enumFilterIndexes?.FUND_TYPE) {
        //     console.log("temp filter :", temp[index]?.keyValues)
        //     temp[index].keyValues = categoryGroupList;
        //     temp[index].activeCategoryIndex = activeCategoryGroupIndex;
        //   }
        // })

        temp[enumIndexesOfFilterType.FUND_TYPE]["keyValues"] = categoryGroupList;
        temp[enumIndexesOfFilterType.FUND_TYPE]["activeCategoryIndex"] = activeCategoryGroupIndex;

        setFilterIndexes(temp);
      }

      // console.log("temp filter changed :", temp)
    }
  }, [categoryGroupList]);

  useEffect(() => {
    const temp = [...filterIndexes]
    if (temp && temp?.length) {
      // temp.map((item, index) => {
      //   if (item?.key === enumFilterIndexes?.FUND_TYPE) {
      //     temp[index].activeCategoryIndex = activeCategoryGroupIndex;
      //   }
      // })
      temp[enumIndexesOfFilterType.SORT]['activeSortIndex'] = activeSortIndex;
      temp[enumIndexesOfFilterType.FUND_TYPE]["activeCategoryIndex"] = activeCategoryGroupIndex;

    }

    setFilterIndexes(temp);
  }, [activeCategoryGroupIndex]);

  useEffect(() => {
    const temp = [...filterIndexes];

    // temp && temp?.length &&
    //   temp.map((item, index) => {
    //     if (item?.key === enumFilterIndexes?.FUND_HOUSE) {
    //       temp[index].keyValues = fundProviderList;
    //       temp[index].keyValues.unshift({
    //         providerid: "0",
    //         providername: "All"
    //       })
    //       setFilterIndexes(temp)
    //       console.log("temp filter FUND_HOUSE:", temp[index]?.keyValues)
    //     }
    //   })

    if (temp && temp?.length) {
      temp[enumIndexesOfFilterType.FUND_HOUSE]["keyValues"] = fundProviderList;
      temp[enumIndexesOfFilterType.FUND_HOUSE]["keyValues"].unshift({
        providerid: "0",
        providername: "All"
      })

      setFilterIndexes(temp)
    }
  }, [fundProviderList]);

  useEffect(() => {
    handlingFeatureWiseCard(masterFundList);
  }, [masterFundList]);

  useEffect(() => {
    if (status === globalConstant.CEF_EXPLORE_FUND || status === globalConstant.CEF_ADD_FUND) {
      let { data } = g_masterFundListForExploreFunds;
      // setFundSelecteds(p => [...p, data]);
      // filteringDataWrtSelectedFunds(data, variableMasterFundList);

    }
  }, [g_masterFundListForExploreFunds, activeCategoryGroupIndex])


  /** Getting Provider and Categorygroup list for getting fund list according to them */
  const getCategoryGroupList = async () => {
    let res: apiResponse = await getCategoryGroupListThunk();
    res.data = [...res.data?.categorygroups];
    res.data.unshift("All Funds");
    // @ts-ignore
    handleApiResponse(res, [setCategoryGroupList]);
  };
  const getFundProviderList = async () => {
    let response: apiResponse = await getListOfMutualFundProviderCoThunk();
    console.log("fundProviderList response :", response)

    response.data = [...response.data];
    // @ts-ignore
    handleApiResponse(response, [setFundProviderList]);

    // response.data = [...response.data];
    // @ts-ignore
    // handleApiResponse(response, [setFundProviderList]);
    return response;
  };
  /***************************************************************************************/

  /**Below four functions are the backbone of explore funds, Features:- getting fund list data from API, modifying data according to the user selections */
  const getMasterFundList = async (url: string) => {
    setLoading(true);
    let res: apiResponse = await getMasterFundListThunk(url);

    setTimeout(() => {
      setLoading(false);
    }, 500);

    // @ts-ignore
    handleApiResponse(res?.data, [setMasterFundList]);
  };
  const handleApiResponse = (res: apiResponse, arrFunc: void[]) => {
    if (checkExpirationOfToken(res?.code)) {
      dispatch(setTokenExpiredStatusAction(true));
      return;
    }

    if (res?.error === true) {
      return;
    }

    arrFunc.forEach((item: void) => {

      // @ts-ignore
      if (item === setMasterFundList) {
        if (fundSelecteds && fundSelecteds.length) {
          //while toggling categories, selected fund of previous category has removed, so these below line codes handling that
          filteringDataWrtSelectedFunds(fundSelecteds, res?.data, true);
        }
      }

      // @ts-ignore
      if (item === setMasterFundList && status !== globalConstant.CEF_EXPLORE_FUND) {


        if (status === globalConstant.CEF_ADD_FUND || status === globalConstant.CEF_REPLACE_FUND) {

          let { recommendations }: any = { ...g_mutaulFundListWrtUserAmount };
          if (recommendations && recommendations.length) {
            filteringDataWrtSelectedFunds(recommendations, res?.data, false);
          }
        }

        if (status === globalConstant.CEF_ADD_FUND_OF_EXPLORE_FUND || status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND) {
          let { data } = g_masterFundListForExploreFunds;

          if (data && data.length) {
            filteringDataWrtSelectedFunds(data, res?.data, false);
          }
        }


        return;
      }



      // @ts-ignore
      if (res?.data) item(res?.data);
    })

  };
  const handlingFeatureWiseCard = async (arrRecom: any[]) => {
    if (initialMFData) {//this state use to avoid adding or updating isChecked key in initialMFData
      setVariableMasterFundList(arrRecom);
      return;
    }

    // if (initialMFData) {//this state use to avoid adding or updating isChecked key in initialMFData
    //   setVariableMasterFundList(arrRecom);
    //   return;
    // }

    if (arrRecom && arrRecom.length) {

      setMasterFundListLength(arrRecom.length);

      //setting initialMFData according to status of screens
      let arrNew: any[] = [];
      if (status === globalConstant.CEF_ADD_FUND || status === globalConstant.CEF_ADD_FUND_OF_EXPLORE_FUND) {
        arrNew = await getMutualFundRecommendationListWRTUserAmount(arrRecom, initialMFDataForAddFund);
      } else if (status === globalConstant.CEF_REPLACE_FUND || status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND) {
        arrNew = await getMutualFundRecommendationListWRTUserAmount(arrRecom, initialMFDataForReplaceFund);
      } else {
        arrNew = await getMutualFundRecommendationListWRTUserAmount(arrRecom, initialMFDataForExploreFund);
      }

      if (arrNew && arrNew.length) {
        // let a = arrNew.map((item)=> {return {...item, }})
        setVariableMasterFundList(arrNew); //setting this variable list state
      } else {
        setVariableMasterFundList([]); //setting this variable list state
      }

      // setIsInitialVariableFundListFetched(true);
    } else {
      setVariableMasterFundList([]); //setting this variable list state
      setMasterFundListLength(0)
    }
  };
  const filteringDataWrtSelectedFunds = (arrFundSelected: any[], arrVariableMasterFundList: any[], type: boolean) => {
    let arrSecIds: string[] = arrFundSelected.map((item: any) => item?.secid);
    let arrFilteredList: any[] = [];

    /** */
    if (type) {
      if (arrVariableMasterFundList && arrVariableMasterFundList.length) {
        for (let i = 0; i < arrVariableMasterFundList.length; i++) {
          for (let j = 0; j < arrFundSelected.length; j++) {
            if (arrVariableMasterFundList[i]["secid"] === arrFundSelected[j]["secid"]) {
              arrVariableMasterFundList[i] = {
                ...arrVariableMasterFundList[i],
                fundSelected: arrFundSelected[j]["fundSelected"]
              }
            }
          }
        }

        console.log(arrVariableMasterFundList, "fund selected filtered data");

        setMasterFundList(arrVariableMasterFundList);
        setMasterFundListLength(arrVariableMasterFundList.length);
        setIsInitialVariableFundListFetched(true);
      }
      return;
    }


    /**Removing Duplicate entry of selected funds by Add and Replace funds */
    if (arrVariableMasterFundList && arrVariableMasterFundList.length) {
      arrFilteredList = arrVariableMasterFundList.filter((item: any) => {
        if (!arrSecIds.includes(item?.secid)) {
          return item;
        }
      });
    }

    setMasterFundList(arrFilteredList);
    setMasterFundListLength(arrFilteredList.length);

    // if (arrFilteredList && arrFilteredList.length) {
    //   setIsInitialVariableFundListFetched(true);
    // } else {
    //   setIsInitialVariableFundListFetched(false);
    // }
  };
  /***************************************************************************************/

  /**This function handles adding and replacing functionality*/
  const handleAddFundsSelection = (secid: number, isChecked: any, elt: string, index: number) => {

    // let arrMasterFundList: any[] = [...masterFundList];
    let arrMasterFundList: any[] = [...variableMasterFundList];
    if (status === globalConstant.CEF_EXPLORE_FUND || status === globalConstant.CEF_ADD_FUND || status === globalConstant.CEF_ADD_FUND_OF_EXPLORE_FUND) {
      //explore fund and add fund of investment
      let arrFundSelected: any[] = [...fundSelecteds];
      if (isChecked) {
        if (arrMasterFundList[index]["secid"] === secid) {
          arrMasterFundList[index]["fundSelected"] = isChecked;
          arrFundSelected.push(arrMasterFundList[index])
        }
      } else {
        arrMasterFundList[index]["fundSelected"] = false;
        arrFundSelected.splice(arrMasterFundList[index], 1);
      }

      // let arrNew: any[] = [...fundSelecteds, ...arrMasterFundList.filter(item => item["fundSelected"] === true)];
      // let arrNew: any[] = [...fundSelecteds, arrMasterFundList.filter(item => item["fundSelected"] === true)];
      // let arrNew: any[] = arrMasterFundList.filter(item => item["fundSelected"] === true);


      // let arrFundSelected: any[] = [fundSelecteds.concat(arrNew)];
      // let arrFundSelected: any[] = [...fundSelecteds, arrNew];
      console.log(arrFundSelected, "arrFundSelected concate")

      if (status === globalConstant.CEF_EXPLORE_FUND) {
        dispatch(setMasterFundListForExploreFundsAction(arrFundSelected));
      } else if (status === globalConstant.CEF_ADD_FUND) {
        dispatch(setSelectedFundsForInvestmentAction(arrFundSelected));
      } else if (status === globalConstant.CEF_ADD_FUND_OF_EXPLORE_FUND) {
        dispatch(setSelectedFundsForExploreFundsAction(arrFundSelected));
      }

      // setFundSelecteds(arrNew);
      setFundSelecteds(arrFundSelected);
      // setMasterFundList(arrMasterFundList);
      setVariableMasterFundList(arrMasterFundList);
    } else if (status === globalConstant.CEF_REPLACE_FUND || status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND) {
      //replace fund

      //replacing fund according to sec id 
      let objFundListSelectedItem: any = {};
      let arrSelectedFundList: any[] = arrMasterFundList.map((item: any) => {
        if (item?.isChecked !== undefined) {
          if (item["secid"] === secid) {
            item["isChecked"] = true;
            objFundListSelectedItem = { ...item };
          } else {
            item["isChecked"] = false;
          }
        }

        return item;
      });


      setFundSelecteds([objFundListSelectedItem]);
      // setAddAllFunds([objFundListSelectedItem])
      setVariableMasterFundList(arrSelectedFundList);
      setInitialMFData(true);
    } else {
      //replace of explore fund


    }
  };
  /***************************************************************************************/

  /**Search functionality */
  const handleSearchFunctionality = (e: any) => {
    if (masterFundList && masterFundList.length) {
      const { value } = e?.target;
      let arrMasterFundList: any[] = [...masterFundList];
      if (!value) {
        setVariableMasterFundList(arrMasterFundList);
        return;
      }

      let arrFiltered: any[] = arrMasterFundList.filter((item: any) => item?.fundname?.toLowerCase().includes(value?.toLowerCase()));

      if (arrFiltered && arrFiltered.length) {
        // handlingFeatureWiseCard(arrFiltered);
        setVariableMasterFundList(arrFiltered)
      } else {
        setVariableMasterFundList([]);
      }
    } else {
      console.log("master fund list is empty");
    }
  };
  /***************************************************************************************/

  /**Filter functionality */
  const getCommaSepratedProviderIds = async (url: string, arrFundHouse: any[]) => {
    url += `&providerids=`;
    await arrFundHouse?.map((item: string) => {
      url += item + ','
    })
    return url;
  }
  const urlWithFilter = async (data: any, categoryIndex: number = -1) => {
    console.log("urlWithFilter()")
    let url: string = "";

    if (data && data[enumFilterIndexes.FUND_TYPE] || data[enumFilterIndexes.SORT] || (data[enumFilterIndexes.FUND_HOUSE] && data[enumFilterIndexes.FUND_HOUSE]?.length)) {

      if (data[enumFilterIndexes.FUND_TYPE] === "All Funds") {

        url = siteConfig.RECOMMENDATION_FUND_LIST;

        if (data[enumFilterIndexes.SORT]) {
          url = siteConfig.RECOMMENDATION_FUND_LIST + `?orderon=${data[enumFilterIndexes.SORT]}`;
        }

        if (data[enumFilterIndexes.FUND_HOUSE].length) {
          url = await getCommaSepratedProviderIds(url, data[enumFilterIndexes.FUND_HOUSE]);
        }

        return url;
      }


      url = siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${data[enumFilterIndexes.FUND_TYPE]}&orderon=${data[enumFilterIndexes.SORT]}`;

      if (data[enumFilterIndexes.FUND_HOUSE].length) {
        url = await getCommaSepratedProviderIds(url, data[enumFilterIndexes.FUND_HOUSE]);
        // url += `&providerids=`;
        // data[enumFilterIndexes.FUND_HOUSE].map((item: string) => {
        //   url += item + ','
        // })
      }

      return url;
    }


    // else if (categoryIndex >= 0) {
    //   if (categoryIndex === 0) {// handling case for all funds
    //     url = siteConfig.RECOMMENDATION_FUND_LIST;
    //   } else {
    //     url = siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${categoryGroupList[categoryIndex]}`;
    //   }

    //   return url;
    // } else {
    //   // return siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${categoryGroupList[activeCategoryGroupIndex]}`
    //   // return siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${categoryGroupList[categoryIndex]}`
    // }

    return url;
  };
  const handleFilterCB = async (data: any) => {
    let tempIndex = categoryGroupList.indexOf(data[enumFilterIndexes.FUND_TYPE]);

    if (tempIndex < 0 || tempIndex === -1) return;

    // let tempSortIndex = filterIndexes[enumIndexesOfFilterType.SORT]?.keyValues.filter((item: any) => item.value === data?.Sort)
    let tempSortIndex = filterIndexes[enumIndexesOfFilterType.SORT]?.keyValues.findIndex((obj:any) => obj.value === data.Sort)
    setActiveSortIndex(tempSortIndex)
    console.log('tempSortIndex :', tempSortIndex)
    // const sortedItem = filterIndexes[0].keyValues.filter((item:any) =>{
      //   if(item.value === data[enumFilterIndexes.SORT]){
        //   return filterIndexes[0].keyValues
        //   }
        // })  
        // const tempSortIndex = filterIndexes[0].keyValues.findIndex((x:any) => x.value === data[enumFilterIndexes.SORT])
        // setActiveSortIndex(tempSortIndex);
        // var url = siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${data[enumFilterIndexes.FUND_TYPE]}&orderon=${data[enumFilterIndexes.SORT]}&providerids=`;
        // data[enumFilterIndexes.FUND_HOUSE].map((item: string) => {
          //   url += item + ',' 
          // })
          // const tempUrl: any = await urlWithFilter(data, -1);
          
          // if (tempIndex !== 0 || tempIndex === activeCategoryGroupIndex) {
            //   console.log("active index are same")
            //   return;
            // }
            
            
    if(activeCategoryGroupIndex !== tempIndex ) setActiveCategoryGroupIndex(tempIndex);
    setFilterValues(data)
    if(activeCategoryGroupIndex === tempIndex){
      const tempUrl: any = await urlWithFilter(data, tempIndex);
      if (tempUrl) {
        getMasterFundList(tempUrl);
      } else {
        // getMasterFundList([]);
      }
    }
  };
  /***************************************************************************************/

  /**Fund Details */
  const handleNavigationOfFundDetails = (secid: string) => {
    if (secid) {
      navigate("/funddetails", { state: { secid: secid, parentRoute: "/explorefunds" } });
    } else {
      console.log(secid, "invalid secid");
    }
  };
  /***************************************************************************************/

  /** Add amount functionality */
  const handleClose = () => {
    setAddFundOpen(false);
  };
  /***************************************************************************************/

  const handleNavigation = (strRoute: string) => {
    navigate(strRoute);
  };

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0} >
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <SprintMoneyLoader
            loadingStatus={loading}
          />
          <Grid container sx={{ width: "100%", height: "100%", overflow: "scroll", overflowX: 'hidden' }} xs={12} sm={11} md={10} >
            <Toolbar />
            <Grid container>
              <Grid item xs={12}>
                <Box className="BoxPadding">
                  <Box className="BoxExploreBottom">
                    {
                      status === globalConstant.CEF_REPLACE_FUND || status === globalConstant.CEF_ADD_FUND ?
                        <Box className="exploreBreadCrumb">
                          <Breadcrumbs
                            sx={{
                              fontSize: "12px",
                              color: "#6c63ff",
                            }}
                          >
                            <Link onClick={() => handleNavigation("/home")}>Home</Link>
                            <Link
                              onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/sipInvestment" : "/oneTimeInvestment")}
                            >
                              Investment
                            </Link>
                            <Link
                              onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/startAnSip" : "/investNow")}

                            >
                              {g_investment?.type === globalConstant.SIP_INVESTMENT ? "monthly investment" : "one time lumpsum"}
                            </Link>
                            <Link
                              onClick={() => handleNavigation("/onetimemutualfundrecommendation")}
                            >
                              Mutual Fund Recommendation
                            </Link>
                            <Link
                              onClick={() => handleNavigation("/customizemf")}
                            >
                              Customize Plan</Link>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#373e42",
                              }}
                            >
                              {
                                status === globalConstant.CEF_REPLACE_FUND ?
                                  "Choose fund to Replace" : "Choose fund to Add"
                              }
                            </Typography>
                          </Breadcrumbs>
                        </Box>
                        : null

                    }

                    {
                      status === globalConstant.CEF_ADD_FUND_OF_EXPLORE_FUND || status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND ?
                        <Box className="exploreBreadCrumb">
                          <Breadcrumbs
                            sx={{
                              fontSize: "12px",
                              color: "#6c63ff",
                            }}
                          >
                            <Link onClick={() => handleNavigation("/explorefunds")}>Explore Funds</Link>
                            <Link
                              onClick={() => handleNavigation("/selectedfunds")}
                            >
                              Selected Funds
                            </Link>

                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#373e42",
                              }}
                            >
                              {
                                status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND ?
                                  "Choose fund to Replace" : "Choose fund to Add"
                              }
                            </Typography>
                          </Breadcrumbs>
                        </Box>
                        : null

                    }

                    <Box style={{ display: "flex", alignItems: 'start', justifyContent: "space-between", flexWrap: 'wrap' }}>

                      <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: 'wrap' }}>
                        {
                          status === globalConstant.CEF_REPLACE_FUND ?
                            <Box>
                              <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                              <Typography style={{ fontSize: "18px", color: "#3c3e42", fontWeight: "500" }}>Choose Funds to Replace</Typography>
                              <Typography style={{ fontSize: "12px", color: "#8787a2", paddingTop: "10px" }}>{investmentCardType === globalConstant.SIP_INVESTMENT ? globalConstant.SIP_INVESTMENT : globalConstant.LUMPSUM_INVESTMENT}</Typography>
                              <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "10px", marginBottom: "10px" }}>{masterFundListLength} funds found</Typography>

                            </Box> :
                            <>
                              {
                                status === globalConstant.CEF_ADD_FUND ?
                                  <Box>
                                    <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                                    <Typography style={{ fontSize: "18px", color: "#3c3e42", paddingTop: "10px", fontWeight: "500" }}>Choose Funds to Add</Typography>
                                    <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "15px" }}>{investmentCardType === globalConstant.SIP_INVESTMENT ? globalConstant.SIP_INVESTMENT : globalConstant.LUMPSUM_INVESTMENT}</Typography>
                                    <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "10px", marginBottom: "10px", fontWeight: "500" }}>{masterFundListLength} funds found</Typography>
                                  </Box> :
                                  status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND ?
                                    <Box>
                                      <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                                      <Typography style={{ fontSize: "18px", color: "#3c3e42", paddingTop: "10px", fontWeight: "500" }}>Choose Funds to Replace</Typography>
                                      {/* <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "15px" }}>{investmentCardType === globalConstant.SIP_INVESTMENT ? globalConstant.SIP_INVESTMENT : globalConstant.LUMPSUM_INVESTMENT}</Typography> */}
                                      <Typography style={{ fontSize: "12px", color: "#8787a2", fontWeight: "500", marginTop: "10px", marginBottom: "10px" }}>{masterFundListLength} funds found</Typography>
                                    </Box>
                                    : status === globalConstant.CEF_ADD_FUND_OF_EXPLORE_FUND ?
                                      <Box>
                                        <Typography style={{ fontSize: "12px", color: "#8787a2" }}>Explore Funds</Typography>
                                        <Typography style={{ fontSize: "18px", color: "#3c3e42", paddingTop: "10px", fontWeight: "500" }}>Choose Funds to Add</Typography>
                                        {/* <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "15px" }}>{investmentCardType === globalConstant.SIP_INVESTMENT ? globalConstant.SIP_INVESTMENT : globalConstant.LUMPSUM_INVESTMENT}</Typography> */}
                                        <Typography style={{ fontSize: "12px", color: "#8787a2", fontWeight: "500", marginTop: "10px", marginBottom: "10px" }}>{masterFundListLength} funds found</Typography>
                                      </Box>
                                      :
                                      <Box className="exploreBreadCrumb">
                                        <Typography style={{ fontSize: "12px", color: "#8787a2", marginBottom: "10px" }}>Explore Funds </Typography>
                                        <Typography style={{ fontSize: "12px", color: "#8787a2", paddingTop: "10px" }}>Choose Funds to Invest</Typography>
                                        <Typography style={{ fontSize: "18px", color: "#3c3e42", fontWeight: "500" }}>Explore Funds</Typography>
                                        <Typography style={{ fontSize: "12px", color: "#8787a2", marginTop: "10px", marginBottom: "10px" }}>{masterFundListLength} funds found</Typography>
                                      </Box>

                              }
                            </>
                        }


                      </Box>
                      <Box className="width100pxExplore">
                        {/* <Box style={{ backgroundColor: "white", border: "1px solid #dddfe2", boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", padding: "5px 14px" }}>
                    <Box style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <SearchOutlined style={{ color: "#7b7b9d" }} />
                      <InputBase
                        onChange={handleSearchFunctionality}
                        placeholder='Search funds...'
                        style={{ color: "#7b7b9d", minWidth: "250px" }}
                      /> 
                    </Box>

                    <Box onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                      handleFilter(e);
                    }}>
                      <IconButton >
                        <FilterAltOutlined style={{ color: "#09b85d" }} />
                      </IconButton>
                    </Box>
                    <DropDownFilterInvestment />
                  </Box> */}



                        <Box sx={{ marginBottom: '15px', marginTop: "10px" }}>
                          <SearchCmp
                            // filtersOptions={structuredClone(filterIndexes)}
                            // filtersOptions={[...filterIndexes]}
                            searchBox={true}
                            handleCB={handleFilterCB}
                            filtersOptions={filterIndexes}
                            searchKeysFun={handleSearchFunctionality}
                          />
                        </Box>

                        <Box className="categoryScrollMobile">
                          <Box style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
                            {
                              categoryGroupList &&
                              categoryGroupList.length &&
                              categoryGroupList.map((item: any, index: number) => {
                                return (
                                  <Box
                                    key={index}
                                    onClick={async () => {
                                      if (activeCategoryGroupIndex === index) return;

                                      // let url = siteConfig.RECOMMENDATION_FUND_LIST + `?categorygroup=${item}`;
                                      setActiveCategoryGroupIndex(index);
                                      // let url: any = await urlWithFilter(filterValues, index)
                                      // setFundSelecteds([]);
                                      setInitialMFData(false);
                                      setIsInitialVariableFundListFetched(false);
                                      // getMasterFundList(url);
                                    }}
                                    style={{
                                      cursor: "pointer",
                                      border: `1px solid ${activeCategoryGroupIndex === index ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`,
                                      borderRadius: "8px",
                                      backgroundColor: `${activeCategoryGroupIndex === index ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`,
                                      textAlign: "center",
                                      padding: "12px 14px"
                                    }}>
                                    <Typography
                                      style={{
                                        fontWeight: "500",
                                        color: `${activeCategoryGroupIndex === index ? "#09b85d" : "#7b7b9d"}`,
                                        fontSize: "14px"
                                      }}>
                                      {/* {item}({getTotalFundCound(item)}) */}
                                      {item}
                                    </Typography>
                                  </Box>
                                )
                              })
                            }
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    {/* {console.log("variableMasterFundList :", variableMasterFundList)} */}
                    {
                      variableMasterFundList &&
                        variableMasterFundList.length ?

                        <>
                          {
                            variableMasterFundList.map((item: any, index: number) => {
                              return (
                                <Box key={index}>
                                  <MutualFundCard2
                                    {...item}
                                    activeIndex={index}
                                    onCardClick={handleNavigationOfFundDetails}
                                    onClick={handleAddFundsSelection}
                                    cefType={false}
                                  />
                                </Box>
                              )
                            })
                          }
                        </>
                        :
                        <>
                          <Grid className='NoRecordFoundBox' sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography component="h6" sx={{ color: "var(--uiDarkGreyColor) !important" }}>No record found!</Typography>
                          </Grid>
                        </>
                    }


                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {
            status === globalConstant.CEF_REPLACE_FUND || status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND ?
              <FooterWithBtn
                btnText="Replace Fund"
                btnClick={() => {
                  if (status === globalConstant.CEF_REPLACE_FUND) {
                    dispatch(setSelectedFundsForInvestmentAction(fundSelecteds));
                    navigate("/customizemf");
                  } else if (status === globalConstant.CEF_REPLACE_OF_EXPLORE_FUND) {
                    dispatch(setSelectedFundsForExploreFundsAction(fundSelecteds));
                    navigate("/selectedfunds");
                  }
                }}
              />
              : (
                fundSelecteds.length > 0 ?
                  <>
                    <AddToPlanComp
                      fundsCount={fundSelecteds.length}
                      onClick={() => {
                        if (status === globalConstant.CEF_EXPLORE_FUND) {
                          dispatch(setMasterFundListForExploreFundsAction(fundSelecteds));
                          navigate("/selectedfunds");
                        } else if (status === globalConstant.CEF_ADD_FUND) {

                          // setSelctedFundDialog(true);
                          // dispatch(setSelectedFundsForInvestmentAction(fundSelecteds));
                          setAddFundOpen(true)
                          // console.log(addAllFunds)


                          // navigate("/customizemf");
                        } else if (status === globalConstant.CEF_ADD_FUND_OF_EXPLORE_FUND) {
                          dispatch(setSelectedFundsForExploreFundsAction(fundSelecteds));
                          navigate("/selectedfunds");
                        }
                      }}
                      buttonText={"Funds Selected"}
                      buttonnametext={"Add To Plan"} />
                  </>
                  : null
              )
          }
        </Grid>
      </Box>
      <Box>
        <SelectedFundsDialog
          addFundOpen={addFundOpen}
          handleClose={handleClose}
          fundSelecteds={fundSelecteds}
        />
      </Box>
    </Box >

  )
}

export default ExploreFunds;


const SelectedFundsDialog = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = React.useState<any>("");
  const [addAllFunds, setAddAllFunds] = useState<any[]>([]);
  const [errorAmount, setErrorAmount] = React.useState<any>("");
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setError("");
    }
  }, [])

  useEffect(() => {
    let arrFundSelecteds: any[] = [...props?.fundSelecteds]
    if (arrFundSelecteds && arrFundSelecteds.length) {
      let arrNew: any[] = [];
      // if (bFlag) {
      //   arrNew = [...arrFundSelecteds];
      // }
      arrNew = arrFundSelecteds.map((item: any) => {
        return {
          ...item,
          ["userRecommendedAmount"]: 0,
          ["ErrorMsg"]: ""
        }
      })

      console.log(arrNew, "arrNew");
      // setBFlag(true);
      setAddAllFunds(arrNew);
    }
  }, [props?.fundSelecteds])


  const handleOnChangeFunAddFund = (e: any, key: any, index: number) => {
    let arrAddAllFunds: any[] = [...addAllFunds];

    arrAddAllFunds[index]["ErrorMsg"] = "";
    setError("");

    let { value } = e?.target

    value = parseInt(value);

    if (value < 0) return;

    arrAddAllFunds[index]["userRecommendedAmount"] = value;


    if (!isMultipleofNumber(parseInt(value), 100)) {
      arrAddAllFunds[index]["ErrorMsg"] = "Amount should be multiple of 100";
      // setIsShouldBuyFundEnable(false);
    } else {
      // setIsShouldBuyFundEnable(true);
      arrAddAllFunds[index]["ErrorMsg"] = "";
    }

    setAddAllFunds(arrAddAllFunds);
  }

  const buyNow = () => {
    let arrFiltered: any[] = addAllFunds.filter((item: any) => item?.userRecommendedAmount === 0);
    let arrError: any[] = addAllFunds.filter((item: any) => item.ErrorMsg !== "");

    if (arrFiltered && arrFiltered.length) {
      setError("Please fill all the investment amount fields!");
      return;
    }

    // if (!isShouldBuyFundEnable) {
    if (arrError && arrError.length) {
      // setError("Please fill the amount which is multiple of 100!");
      return;
    }

    dispatch(setSelectedFundsForInvestmentAction(addAllFunds));
    props?.handleClose();
    navigate("/customizemf");
  };

  return (
    <Dialog
      open={props?.addFundOpen}
      onClose={props?.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="sm"
      style={{
        width: "100%",
      }}
    >
      <DialogTitle sx={{ fontSize: { xs: "18px !important", sm: "25px !important" }, textAlign: "left" }} id="alert-dialog-title">
        {"Add Funds"}
      </DialogTitle>
      <DialogContent className='addMoreFundScroll'>
        <Grid container>
          <Grid xs={12} sm={12}>
            {
              addAllFunds &&
              addAllFunds?.length &&
              addAllFunds?.map((item: any, index: number) => {
                return (
                  <Box key={index}>
                    <AddMoreFunds
                      data={item}
                      index={index}
                      handleOnChangeFunAddFund={handleOnChangeFunAddFund}
                      // removeBtnAction={(data) => handleRemoveAddFund(data)}
                      removeBtnAction={(data) => null}
                      errorAmount={errorAmount}
                    />
                  </Box>
                )
              })

            }
          </Grid>

        </Grid>
        {
          error && error.length ?
            <Box>
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {error}
              </Typography>
            </Box>
            : null
        }
      </DialogContent>
      <DialogActions>

        <Button fullWidth
          sx={{
            backgroundColor: " #23db7b",
            ml: 1,
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#23db7b",
            },
            padding: "10px 32px 9px",
            borderRadius: " 4px",
            marginLeft: "0px"

          }} onClick={buyNow} disabled={buttonDisable}><Typography
            sx={{
              color: "white",

            }}
          >
            Buy Now
          </Typography></Button>

        <Button onClick={props?.handleClose} sx={{ position: "absolute", right: "0", top: "12px" }} >
          <ClearIcon />
        </Button>
      </DialogActions>
    </Dialog>
  )
}


// <>
//   <Grid xs={12} sm={12}>
//     <p>{selectedFund.fundname}</p>
//     <Box sx={{position:"relative"}}>
//     <TextField sx={{width:"500px", maxWidth:"80%"}} id="outlined-basic" label="Outlined" variant="outlined" />
//     <Button onClick={() => { handleRemoveAddFund(selectedFund) }} sx={{position:"absolute", right:"0", textAlign:"center", justifyContent: "end",height: "55px"}} variant="outlined" startIcon={<DeleteIcon />}>

//   </Button>
//     </Box>
//   </Grid>
//   </>


// Breadcrumbs code 
{/* {
                add_fund_button_fromSipFlow || add_replace_button_fromSipFlow ? <Breadcrumbs
                  sx={{
                    fontSize: "12px",
                    color: "#6c63ff",
                  }}
                >
                  <Link to='/home'>Home</Link>
                  <Link
                    onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/sipInvestment" : "/oneTimeInvestment")} to={''}                >
                    Investment
                  </Link>
                  <Link
                    onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/startAnSip" : "/investNow")} to={''}
                  >
                    {g_investment?.type === globalConstant.SIP_INVESTMENT ? "monthly investment" : "one time lumpsum"}
                  </Link>
                  <Link
                    onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/mflist" : "/onetimemutualfundrecommendation")} to={''}                >
                    Mutual Fund Recommendation
                  </Link>
                  <Link
                    onClick={() => handleNavigation("/customizemf")} to={''}                >
                    Customize Plan</Link>
                  {add_fund_button_fromSipFlow ?
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#373e42",
                      }}
                    >
                      Choose fund to Add
                    </Typography> : <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#373e42",
                      }}
                    >
                      Choose fund to Replace
                    </Typography>
                  }
                </Breadcrumbs> : ""
              } */}