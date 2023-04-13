import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>OpenAI at Scale</h3>
                    </Link>
                    <ul className={styles.headerNavList}>
                        <li className={styles.headerNavList}>
                            <a href="https://aka.ms/entgptsearch" target={"_blank"} title="Github repository link">
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
