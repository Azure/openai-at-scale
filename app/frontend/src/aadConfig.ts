export const aadConfig = {
    clientId: import.meta.env.VITE_clientId,
    tenantId: import.meta.env.VITE_tenantId,
    redirectUri: "http://localhost:5173",
    authorityBaseUrl: "https://login.microsoftonline.com/"
};
