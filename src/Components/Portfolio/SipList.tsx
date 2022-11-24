import { useState } from "react";
import { Box } from "@mui/material";
import SearchAppBar from "./SearchAppBar";
import TabPanelItems from "./TabPanelItems";
import SipCard, { SipProp } from "../../Modules/CustomCard/SipCard";

const SipList = () => {

    const [sipData, setSipData] = useState<SipProp[]>([
        {
            logo: '/Miraelogo.svg',
            title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
            orderNo: 'INF209K01090',
            fundType: ['Large Cap', 'Equity'],
            mandatePending: true,
            sipDate: '9th of every month',
            sipAmount: 5000,
            status: 'Active',
        },
        {
            logo: '/SBIFundLogo.png',
            title: 'SBI Equity Hybrid Fund',
            orderNo: 'INF209K01090',
            fundType: ['Mid Cap', 'Equity'],
            mandatePending: false,
            sipDate: '15th of every month',
            sipAmount: 5000,
            status: 'Active',
        },
        {
            logo: '/SBIFundLogo.png',
            title: 'ICICI Prudential Fund',
            orderNo: 'INF209K01090',
            fundType: ['Small Cap', 'Equity'],
            mandatePending: false,
            sipDate: '20th of every month',
            sipAmount: 3000,
            status: 'Awaited',
            stopMessage: 'Requested to stop SIP on 25 Nov, 2020'
        },
        {
            logo: '/Miraelogo.svg',
            title: 'Kotak Small Cap Growth',
            orderNo: 'INF209K01090',
            fundType: ['Small Cap', 'Equity'],
            mandatePending: false,
            sipDate: '20th of every month',
            sipAmount: 3000,
            status: 'Stopped',
            stopMessage: 'Stopped SIP on 12 Oct, 2020'
        },
    ]);

    return (
        <Box>
            <TabPanelItems />
            <SearchAppBar />
            {
                sipData.map(data =>  
                    <Box sx={{
                        marginTop: '1.25vw'
                    }}>
                        <SipCard { ...data } />
                    </Box>
                )
            }

        </Box>    
    )
};

export default SipList;
