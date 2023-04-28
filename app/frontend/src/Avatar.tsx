import * as React from "react";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from "@fluentui/react/lib/Persona";
import {
    Dropdown,
    DropdownMenuItemType,
    IDropdownStyles,
    IDropdownOption,
    Nav,
    Tooltip,
    TooltipHost,
    TooltipDelay,
    DirectionalHint,
    ITooltipProps,
    ITooltipHostStyles,
    Popup,
    mergeStyleSets,
    FocusTrapZone,
    Layer,
    Overlay
} from "@fluentui/react";
import { useId } from "@fluentui/react-hooks";
import { useAppContext } from "./context/AppContext";
import { IRenderFunction } from "@fluentui/react/lib/Utilities";
// import { Dropdown } from "react-bootstrap";
import { useBoolean } from "@fluentui/react-hooks";

const hostStyles: Partial<ITooltipHostStyles> = { root: { display: "inline-block" } };
const popupStyles = mergeStyleSets({
    root: {
        // background: "rgba(0, 0, 0, 0.2)",
        bottom: "10%",
        left: "50%",
        // position: "fixed",
        right: "0",
        top: "0"
    },
    content: {
        background: "white",
        // left: "50%",
        right: "0%",
        maxWidth: "400px",
        // padding: "0 2em 2em",
        position: "absolute"
        // top: "50%",
        // transform: "translate(-50%, -50%)"
    }
});
export default function Avatar() {
    const app = useAppContext();
    const examplePersona: IPersonaSharedProps = {
        imageUrl: app.user?.avatar,
        text: app.user?.displayName
    };

    const tooltipProps: ITooltipProps = {
        onRenderContent: () => (
            <div>
                <Overlay />
                <Persona {...examplePersona} size={PersonaSize.size48} />
                <AuthenticatedTemplate>
                    <h1>
                        <DefaultButton onClick={app.signOut}>Sign out</DefaultButton>
                    </h1>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <h1>
                        <DefaultButton onClick={app.signIn}>Sign in</DefaultButton>
                    </h1>
                </UnauthenticatedTemplate>
            </div>
        )
    };

    return (
        <div>
            <TooltipHost
                tooltipProps={tooltipProps}
                delay={TooltipDelay.zero}
                closeDelay={600}
                directionalHint={DirectionalHint.bottomCenter}
                styles={hostStyles}
            >
                <Persona {...examplePersona} size={PersonaSize.size32} hidePersonaDetails />
            </TooltipHost>
        </div>
    );
}
