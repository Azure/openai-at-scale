import { Outlet, NavLink, Link } from "react-router-dom";
import { AccountInfo, AuthenticationResult, PublicClientApplication } from "@azure/msal-browser";
import github from "../../assets/github.svg";
import { IPersonaProps, Persona } from "@fluentui/react/lib/Persona";

import styles from "./Layout.module.css";
import { useContext, useState } from "react";
import { aadConfig } from "../../aadConfig";

type Account = Partial<AccountInfo>;

const Layout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<any>(null);
    const [user, setUser] = useState<Account | null>(null);
    const [profilePicture, setProfilePicture] = useState("");

    const publicClientApp = new PublicClientApplication({
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

    const getProfileImageAsync = async (res: AuthenticationResult, callback: Function) => {
        let profileImageUrl = "";
        try {
            const profileResponse = await fetch(`https://graph.microsoft.com/v1.0/me/photo/$value`, {
                headers: { Authorization: `Bearer ${res.accessToken}` }
            });
            const profileImage = await profileResponse.blob();
            profileImageUrl = URL.createObjectURL(profileImage);
        } finally {
            callback(profileImageUrl);
        }
    };

    const login = async () => {
        try {
            const res = await publicClientApp.loginPopup({
                scopes: ["user.read"],
                prompt: "select_account"
            });
            setIsAuthenticated(true);
            console.log(res);
            setUser({ ...res.account });
            getProfileImageAsync(res, setProfilePicture);
        } catch (error) {
            setIsAuthenticated(false);
            setUser(null);
            setError(error);
        }
    };

    const examplePersona: IPersonaProps = {
        imageUrl: profilePicture,
        text: user?.name
    };

    const logout = async () => {
        await publicClientApp.logoutPopup();
        setIsAuthenticated(false);
        setUser(null);
    };
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>OpenAI at Scale</h3>
                    </Link>
                    <div className={styles.headerNavList}>
                        {isAuthenticated ? <button onClick={logout}>logout</button> : <button onClick={login}>login</button>}
                        {error ? <> {error.message} </> : null}

                        {user ? <> You are logged-in with {user.username}</> : null}

                        {/* <img src={profilePicture} /> */}
                    </div>
                    <ul className={styles.headerNavList}>
                        <li className={styles.headerNavList}>
                            <a href="https://github.com/Azure/openai-at-scale" target={"_blank"} title="Github repository link">
                                <img
                                    src={github}
                                    alt="Github logo"
                                    aria-label="Link to github repository"
                                    width="20px"
                                    height="20px"
                                    className={styles.githubLogo}
                                />
                            </a>
                        </li>
                    </ul>
                    <Persona {...examplePersona} hidePersonaDetails />
                </div>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;
