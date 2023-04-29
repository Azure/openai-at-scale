import styles from "./UserChatMessage.module.css";
import { UserChatMessageIcon } from "./UserChatMessageIcon";
import { Stack } from "@fluentui/react";
import { useAppContext } from "../../context/AppContext";

interface Props {
    message: string;
}

export const UserChatMessage = ({ message }: Props) => {
    const app = useAppContext();
    return (
        <div className={styles.container}>
            <div className={styles.message}>{message}</div>
            <div className={styles.logo}>
                <UserChatMessageIcon />
                {app.user?.displayName || "Anonymous"}
            </div>
        </div>
    );
};
