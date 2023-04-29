import { Outlet, Link } from "react-router-dom";
import { Stack } from "@fluentui/react";

import styles from "./Layout.module.css";

import Avatar from "../../Avatar";
import Bar from "../../Bar";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header role={"banner"}>
                <Stack horizontal className={styles.header}>
                    <Stack.Item align="center" grow className={styles.headerTitle}>
                        <Link to="/" className={styles.headerTitleText}>
                            OpenAI at Scale
                        </Link>
                    </Stack.Item>
                    <Stack.Item align="center" grow disableShrink className={styles.headerCommandBar}>
                        <Bar />
                    </Stack.Item>
                    <Stack.Item align="center" grow disableShrink className={styles.headerAvatar}>
                        <div className={styles.headerAvatar}>
                            <Avatar />
                        </div>
                    </Stack.Item>
                </Stack>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;
