import styles from "./UserChatMessage.module.css";
import { UserChatMessageIcon } from "./UserChatMessageIcon";
import { BotAdd24Regular } from "@fluentui/react-icons";
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from "@fluentui/react/lib/Persona";
import { TestImages } from "@fluentui/example-data";

interface Props {
    message: string;
}

export const UserChatMessage = ({ message }: Props) => {
    const examplePersona: IPersonaSharedProps = {
        imageUrl: TestImages.personaFemale
    };

    return (
        <div className={styles.container}>
            <div className={styles.message}>{message}</div>
            <div className={styles.logo}>
                <UserChatMessageIcon />
            </div>
        </div>
    );
};
