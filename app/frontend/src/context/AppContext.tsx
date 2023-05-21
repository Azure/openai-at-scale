// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useContext, createContext, useState, MouseEventHandler, useEffect } from "react";
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { InteractionType, PublicClientApplication } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { getUser, getProfilePhoto } from "../GraphService";
import { v4 as uuidv4 } from "uuid";
import { Client } from '@microsoft/microsoft-graph-client';
import { User, Event } from "microsoft-graph";

// <AppContextSnippet>
export interface AppUser {
    displayName?: string;
    email?: string;
    avatar?: string;
}

export interface AppError {
    message: string;
    debug?: string;
}

export interface AccessToken {
    accessToken?: string;
}

export interface sessionInfo {
    sessionId?: string;
}

type AppContext = {
    user?: AppUser;
    error?: AppError;
    accessToken?: AccessToken;
    sessionId?: sessionInfo;
    signIn?: MouseEventHandler<HTMLElement>;
    signOut?: MouseEventHandler<HTMLElement>;
    displayError?: Function;
    clearError?: Function;
    authProvider?: AuthCodeMSALBrowserAuthenticationProvider;
    isAuthenticated?: boolean;
};

const appContext = createContext<AppContext>({
    user: undefined,
    error: undefined,
    accessToken: undefined,
    sessionId: undefined,
    signIn: undefined,
    signOut: undefined,
    displayError: undefined,
    clearError: undefined,
    authProvider: undefined
});

export function useAppContext(): AppContext {
    return useContext(appContext);
}

interface ProvideAppContextProps {
    children: React.ReactNode;
}

export default function ProvideAppContext({ children }: ProvideAppContextProps) {
    const auth = useProvideAppContext();
    return <appContext.Provider value={auth}>{children}</appContext.Provider>;
}
// </AppContextSnippet>

function useProvideAppContext() {
    const [userInfo, setUserInfo] = useState();
    const msal = useMsal();
    const [user, setUser] = useState<AppUser | undefined>(undefined);
    const [error, setError] = useState<AppError | undefined>(undefined);
    const [accessToken, setAccessToken] = useState<AccessToken | undefined>(undefined);
    const [sessionId, setSessionId] = useState<sessionInfo | undefined>(undefined);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const displayError = (message: string, debug?: string) => {
        setError({ message, debug });
    };

    const clearError = () => {
        setError(undefined);
    };

    // <AuthProviderSnippet>
    // Used by the Graph SDK to authenticate API calls
    const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(msal.instance as PublicClientApplication, {
        account: msal.instance.getActiveAccount()!,
        scopes: ["user.read"],
        interactionType: InteractionType.Popup
    });
    // </AuthProviderSnippet>

    async function getAccessToken(): Promise<string | undefined> {
        try {
          console.log("####")
          const response = await fetch('/.auth/me');
          const payload = await response.json();
          console.log(payload[0])
          console.log(payload[0].access_token)
          return payload[0].access_token;
        } catch (error) {
          console.error('No accessToken could be found');
          return undefined;
        }
    }

    let graphClient : Client | undefined = undefined;

    //create graphClient from access token from .auth/me
    async function getGraphClient(accessToken: string) {
        console.log("getGraphClient accessToken: " + accessToken);
        if (graphClient === undefined) {
            graphClient = Client.init({
                authProvider: (done) => {
                    done(null, accessToken);
                }
            });
        }
        return graphClient;
    }
    

    async function getUser(accessToken: string): Promise<User> {
        const client = await getGraphClient(accessToken);
        const user = await client.api('/me').get();
        return user;
    }
    
    async function getProfilePhoto(accessToken: string): Promise<string> {
        const client = await getGraphClient(accessToken);
        const photo = await client.api('/me/photo/$value').get();
        const url = window.URL || window.webkitURL;
        return url.createObjectURL(photo);
    }

    // <UseEffectSnippet>
    useEffect(() => {
        const checkUser = async () => {
            if (!user) {
                try {
                    //if access token exists, set it
                    const token = await getAccessToken();
                    const user = await getUser(token || "")
                    console.log("user", user)
                    const avatar = await getProfilePhoto(token || "")
                    console.log("avatar", avatar)
                    setUser({
                        displayName: user.displayName || "",
                        email: user.mail || "",
                        avatar: avatar || ""
                    });
                    setIsAuthenticated(true);

                } catch (err:any) {
                    displayError("Error signing in", err.message);
                }
            }
        };
        checkUser();
    }
    );

    async function getUserInfo() {
        try {
          const response = await fetch('/.auth/me');
          const payload = await response.json();
          const { clientPrincipal } = payload;
          console.log(clientPrincipal)
          return clientPrincipal;
        } catch (error) {
          console.error('No profile could be found');
          return undefined;
        }
    }

    const signIn = async () => {
        console.log("signIn")

        // setUserInfo(await getUserInfo());

        // await msal.instance.loginPopup({
        //     scopes: ["user.read"],
        //     prompt: "select_account"
        // });

        // // Get the user from Microsoft Graph
        // const user = await getUser(authProvider);

        // setUser({
        //     displayName: user.displayName || "",
        //     email: user.mail || ""
        // });
        // setIsAuthenticated(true);
    };

    const signOut = async () => {
        // await msal.instance.logoutPopup();
        // setUser(undefined);
        // setIsAuthenticated(false);
    };

    const configureSessionId = (sessionId: string) => {
        setSessionId({ sessionId });
    };

    return {
        user,
        error,
        accessToken,
        sessionId,
        signIn,
        signOut,
        displayError,
        clearError,
        authProvider,
        isAuthenticated
    };
}
