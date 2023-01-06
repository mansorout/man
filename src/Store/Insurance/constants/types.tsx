

// export type postTermGenerateProps = {
//     lifecover: number | null,
//     frequencytype: number,
//     issmoker: number,
// }



export type postTermPurchaseProps = {
    lifecover: number | null,
    frequencytype: number,
    issmoker: number,
}

export type getTermListApiTypes = {
    providerlogo: string,
    providername: string,
    planname: string,
    lifecover: number,
    annualpremium: number,
    maxage: number,
    ismedicalcheckrequire: number,
    claimsettlementratio: string
}

export type ulipReturnApiParamsTypes = {
    frequencytype: string;
    amount: string;
}

export type getUlipReturnApiTypes = {
    years: number;
    investedamount: number;
    projectedamount: number;
}

export type sendUlipGenrateApiTypes = {
    amount: number,
    frequencytype: number,
    term_id: number
}

export type listApiTypes = {
    recommendation_id: number
}

export type getUlipListApiTypes = {
    providerlogo: string,
    ulipname: string,
    ulip_id: number,
    lifecover: number,
    topreturn: string,
    investedvalue: number,
    projectedvalue: number,
    premiumpayingterm: number
    recommendation_id: number,
    taxsavingoninvestment: number,
    term: string,
}

export type getUlipSchemeDetailApiTypes = {
    ulip_id: number,
    name: string,
    logoimage: string,
    features: [
        {
            ulipfeature_id: string,
            title: string,
            image: string,
            description: string
        }
    ],
    fundPerformance: [
        {
            ulipfund_id: string,
            fundname: string,
            return5years: string,
            return7years: string,
            return10years: string
        }
    ],
    investmentCriteria: {
        minage: number,
        maxage: number,
        minmaturityyears: number,
        maxmaturityyears: number,
        minmonthlyamount: number,
        minquarterlyamount: number,
        minhalfyearlyamount: number,
        minyearlyamount: number,
        mintopup: number
    }
}