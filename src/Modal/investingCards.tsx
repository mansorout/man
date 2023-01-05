
import {BuildWealth, GetLoan, InvestNow, SIP} from '../Assets/index'


export const investingCards = [
    {
        BgColor: "rgba(45, 118, 255, 0.07)",
        Heading: "Start an SIP",
        Text: "Start investing in small amount and reap big returns",
        Img: SIP,
        Route:"sipInvestment"
    },
    {
        BgColor: "#ecf6f6",
        Heading: "Invest Now",
        Text: "A right way of investing is to build a mutual fund portfolio",
        Img: InvestNow,
        Route:"oneTimeInvestment"
    },
    // {
    //     BgColor: "#ecf6fa",
    //     Heading: "Build Wealth",
    //     Text: "Handpicked best performing funds for you based on your future goals",
    //     Img: BuildWealth
    // },
    // {
    //     BgColor: "#ecf6f6",
    //     Heading: "Get a Loan",
    //     Text: "With nil foreclosure charges you can close you loan as per your convenience",
    //     Img: GetLoan
    // },
   
]