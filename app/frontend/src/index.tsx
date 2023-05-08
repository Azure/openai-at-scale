import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication, IPublicClientApplication, EventMessage, EventType, AuthenticationResult } from "@azure/msal-browser";

import "./index.css";

import Layout from "./pages/layout/Layout";
import NoPage from "./pages/NoPage";
import Chat from "./pages/chat/Chat";
import AppContext from "./context/AppContext";
import { aadConfig } from "./aadConfig";
initializeIcons();

const msalInstance = new PublicClientApplication({
    auth: {
        clientId: aadConfig.clientId,
        redirectUri: aadConfig.redirectUri,
        authority: aadConfig.authorityBaseUrl + aadConfig.tenantId
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
    }
});

const accounts = msalInstance.getAllAccounts();
if (accounts && accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        // Set the active account - this simplifies token acquisition
        const authResult = event.payload as AuthenticationResult;
        msalInstance.setActiveAccount(authResult.account);
    }
});

type AppProps = {
    pca: IPublicClientApplication;
};

export default function App({ pca }: AppProps): JSX.Element {
    return (
        <HashRouter>
            <MsalProvider instance={pca}>
                <AppContext>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Chat />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </AppContext>
            </MsalProvider>
        </HashRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App pca={msalInstance} />
    </React.StrictMode>
);
