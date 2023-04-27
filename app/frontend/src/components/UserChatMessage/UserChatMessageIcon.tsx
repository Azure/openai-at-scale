import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from "@fluentui/react/lib/Persona";
import { TestImages } from "@fluentui/example-data";
import { useAppContext } from "../../context/AppContext";

export const UserChatMessageIcon = () => {
    const app = useAppContext();

    const examplePersona: IPersonaSharedProps = {
        imageUrl: app.user?.avatar
    };

    return <Persona {...examplePersona} size={PersonaSize.size40} />;
};
