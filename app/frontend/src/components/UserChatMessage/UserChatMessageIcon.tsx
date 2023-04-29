import { IPersonaSharedProps, Persona, PersonaSize, PersonaInitialsColor } from "@fluentui/react";
import { useAppContext } from "../../context/AppContext";

export const UserChatMessageIcon = () => {
    const app = useAppContext();

    const examplePersona: IPersonaSharedProps = {
        imageUrl: app.user?.avatar
    };

    return <Persona {...examplePersona} initialsColor={PersonaInitialsColor.darkBlue} size={PersonaSize.size40} hidePersonaDetails />;
};
