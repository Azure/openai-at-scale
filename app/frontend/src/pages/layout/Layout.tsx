import { Outlet, NavLink, Link } from "react-router-dom";
import { AccountInfo, PublicClientApplication } from "@azure/msal-browser";
import github from "../../assets/github.svg";

import styles from "./Layout.module.css";
import { useState } from "react";
import { aadConfig } from "../../aadConfig";

type Account = Partial<AccountInfo>;

const Layout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<any>(null);
    const [user, setUser] = useState<Account | null>(null);

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

    const login = async () => {
        try {
            const res = await publicClientApp.loginPopup({
                scopes: ["user.read"],
                prompt: "select_account"
            });
            setIsAuthenticated(true);
            setUser({ ...res.account });
        } catch (error) {
            setIsAuthenticated(false);
            setUser(null);
            setError(error);
        }
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
                </div>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;
