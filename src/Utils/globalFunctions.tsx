import siteConfig from "./siteConfig"

export const getModuleWiseBaseUrl = (strApiId: string) => {
    return `https://${strApiId}${siteConfig.BASE_URL}`;
}

export const checkExpirationOfToken = (code: number) => {
    if (code === 401) return true;
    else return false;
}