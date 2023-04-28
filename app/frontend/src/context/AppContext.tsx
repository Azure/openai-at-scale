// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useContext, createContext, useState, MouseEventHandler, useEffect } from "react";
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { InteractionType, PublicClientApplication } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";

import { getUser, getProfilePhoto } from "../GraphService";

// <AppContextSnippet>
export interface AppUser {
    displayName?: string;
    email?: string;
    avatar?: string;
    timeZone?: string;
    timeFormat?: string;
}

export interface AppError {
    message: string;
    debug?: string;
}

type AppContext = {
    user?: AppUser;
    error?: AppError;
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
    const msal = useMsal();
    const [user, setUser] = useState<AppUser | undefined>(undefined);
    const [error, setError] = useState<AppError | undefined>(undefined);
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

    // <UseEffectSnippet>
    useEffect(() => {
        const checkUser = async () => {
            if (!user) {
                try {
                    // Check if user is already signed in
                    const account = msal.instance.getActiveAccount();
                    if (account) {
                        // Get the user from Microsoft Graph
                        const user = await getUser(authProvider);
                        const avatar = await getProfilePhoto(authProvider);
                        setUser({
                            displayName: user.displayName || "",
                            email: user.mail || "",
                            avatar: avatar || ""
                        });
                    }
                } catch (err: any) {
                    displayError(err.message);
                }
            }
        };
        checkUser();
    });

    const signIn = async () => {
        await msal.instance.loginPopup({
            scopes: ["user.read"],
            prompt: "select_account"
        });

        // Get the user from Microsoft Graph
        const user = await getUser(authProvider);

        setUser({
            displayName: user.displayName || "",
            email: user.mail || ""
        });
        setIsAuthenticated(true);
    };

    const signOut = async () => {
        await msal.instance.logoutPopup();
        setUser(undefined);
        setIsAuthenticated(false);
    };

    return {
        user,
        error,
        signIn,
        signOut,
        displayError,
        clearError,
        authProvider,
        isAuthenticated
    };
}
