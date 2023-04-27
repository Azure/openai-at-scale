// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <GetUserSnippet>
import { Client, GraphRequestOptions, PageCollection, PageIterator } from "@microsoft/microsoft-graph-client";
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
// import { endOfWeek, startOfWeek } from "date-fns";
// import { zonedTimeToUtc } from "date-fns-tz";
import { User, Event } from "microsoft-graph";

let graphClient: Client | undefined = undefined;

function ensureClient(authProvider: AuthCodeMSALBrowserAuthenticationProvider) {
    if (!graphClient) {
        graphClient = Client.initWithMiddleware({
            authProvider: authProvider
        });
    }

    return graphClient;
}

export async function getUser(authProvider: AuthCodeMSALBrowserAuthenticationProvider): Promise<User> {
    ensureClient(authProvider);

    // Return the /me API endpoint result as a User object
    const user: User = await graphClient!
        .api("/me")
        // Only retrieve the specific fields needed
        .select("displayName,mail,userPrincipalName,photo")
        .get();

    return user;
}

export async function getProfilePhoto(authProvider: AuthCodeMSALBrowserAuthenticationProvider): Promise<string> {
    ensureClient(authProvider);

    // Return the /me/photo API endpoint result as a ProfilePhoto object
    let blob = await graphClient!.api("/me/photo/$value").get();
    const url = window.URL || window.webkitURL;
    return url.createObjectURL(blob);
}
