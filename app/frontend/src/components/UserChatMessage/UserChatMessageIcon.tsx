import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from "@fluentui/react/lib/Persona";
import { TestImages } from "@fluentui/example-data";

export const UserChatMessageIcon = () => {
    const examplePersona: IPersonaSharedProps = {
        imageUrl: TestImages.personaFemale
    };

    return <Persona {...examplePersona} size={PersonaSize.size40} />;
};
