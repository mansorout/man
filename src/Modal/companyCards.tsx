import { Bank1, Bank2 } from "../Assets";


interface Prop {
    logo: string;
    name: string;
    cap: string;
    type: string;
    price: number;
    year1: number;
    year3: number;
    year5: number;
    rating: number;
    morning_star_logo?: string;
}



export const companyCards = [ 
    {
        logo: Bank2,
        name: "ICICI Prudential Bluechip Fund - Growth",
        cap: "Large Cap",
        type: "Equity",
        price: 30000,
        year1: 16.34,
        year3: 24.53,
        year5: 37.32,
        rating: 5,
        morning_star_logo: "",
    },
    {
        logo: Bank1,
        name: "Nippon India Balanced Advantage Fund",
        cap: "Mid Cap",
        type: "Debt",
        price: 30000,
        year1: 12.34,
        year3: 25.53,
        year5: 31.32,
        rating: 4,
        morning_star_logo: "",
    },
    {
        logo: Bank2,
        name: "ICICI Prudential Bluechip Fund - Growth",
        cap: "Large Cap",
        type: "Equity",
        price: 30000,
        year1: 16.34,
        year3: 24.53,
        year5: 37.32,
        rating: 5,
        morning_star_logo: "",
    }
]