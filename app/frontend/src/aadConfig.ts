export const aadConfig = {
    clientId: import.meta.env.VITE_CLIENTID,
    tenantId: import.meta.env.VITE_TENANTID,
    redirectUri: "http://localhost:5173",
    authorityBaseUrl: "https://login.microsoftonline.com/"
};
