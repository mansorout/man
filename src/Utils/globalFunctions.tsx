import siteConfig from "./siteConfig"

export const getModuleWiseBaseUrl = (strApiId: string) => {
    return `https://${strApiId}${siteConfig.BASE_URL}`;
}

export const isMultipleofNumber = (n:number, multipleNum:number) => {
    // while (n > 0)
    //     n = n - multipleNum;

    if (n % multipleNum === 0){
        return true;
    }else{
        return false;
    }

}