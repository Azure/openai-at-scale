// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <WelcomeSnippet>
import { Button, Container } from "react-bootstrap";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useAppContext } from "./context/AppContext";

export default function Welcome() {
    const app = useAppContext();

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <Container fluid>
                {/* <h1>React Graph Tutorial</h1> */}
                {/* <p className="lead">This sample app shows how to use the Microsoft Graph API to access a user's data from React</p> */}
                <AuthenticatedTemplate>
                    <div>
                        <Button onClick={app.signOut!}>sign out</Button>
                        {app.user?.displayName || ""}
                    </div>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <Button color="primary" onClick={app.signIn!}>
                        Click here to sign in
                    </Button>
                </UnauthenticatedTemplate>
            </Container>
        </div>
    );
}
// </WelcomeSnippet>
