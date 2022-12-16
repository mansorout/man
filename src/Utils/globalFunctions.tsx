import siteConfig from "./siteConfig"

export const getModuleWiseBaseUrl = (strApiId: string) => {
    return `https://${strApiId}${siteConfig.BASE_URL}`;
}