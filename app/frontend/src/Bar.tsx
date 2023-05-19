import { Label, Stack, Callout, CommandBar, ICommandBarItemProps, DefaultPalette, mergeStyleSets, ThemeProvider, PartialTheme } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import { useId } from "@fluentui/react-hooks";
import { FontIcon } from "@fluentui/react/lib/Icon";
import github from "./assets/github.svg";

const styles = mergeStyleSets({
    commandBar: {
        backgroundColor: DefaultPalette.blue,
        alignItems: "center",
        justifyContent: "center",
        height: "40px%"
    },
    button: {
        width: 130
    },
    callout: {
        background: "white",
        width: 250,
        height: 200,
        maxWidth: "100%",
        padding: "10px"
    },
    stack: {
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        padding: "10px",
        textDecoration: "none"
    }
});

export default function Bar() {
    const buttonHelpId = useId("callout-button");
    const buttonInfoId = useId("callout-button");
    const [isHelpCalloutVisible, { toggle: toggleIsHelpCalloutVisible }] = useBoolean(false);
    const [isInfoCalloutVisible, { toggle: toggleIsInfoCalloutVisible }] = useBoolean(false);

    const _items: ICommandBarItemProps[] = [
        {
            key: "help",
            text: "Help",
            iconProps: {
                iconName: "Help",
                styles: {
                    root: {
                        color: "white"
                    }
                }
            },
            style: {
                backgroundColor: "rgb(0, 120, 212)"
            },
            iconOnly: true,
            id: buttonHelpId,
            onClick: toggleIsHelpCalloutVisible
        },
        {
            key: "info",
            text: "Info",
            ariaLabel: "Info",
            iconOnly: true,
            iconProps: {
                iconName: "Info",
                styles: {
                    root: {
                        color: "white"
                    }
                }
            },
            style: {
                backgroundColor: "rgb(0, 120, 212)"
            },
            id: buttonInfoId,
            onClick: toggleIsInfoCalloutVisible
        }
    ];
    const darkTheme: PartialTheme = {
        semanticColors: {
            bodyBackground: DefaultPalette.blue,
            bodyText: "white"
        }
    };
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CommandBar items={_items} style={{ height: "100%" }} />
            </ThemeProvider>
            {isHelpCalloutVisible && (
                <Callout role="dialog" target={`#${buttonHelpId}`} className={styles.callout} setInitialFocus onDismiss={toggleIsHelpCalloutVisible}>
                    <Stack>
                        <Stack.Item>
                            <Label className={styles.stack}>
                                <img src={github} alt="Github logo" aria-label="Link to github repository" height="20px" style={{ padding: "0 5px 0 0" }} />
                                Question & Feedback
                            </Label>
                        </Stack.Item>
                        <Stack.Item className={styles.stack}>You can ask question and feedback about this application on GitHub Issues.</Stack.Item>
                        <Stack.Item className={styles.stack}>
                            <a
                                href="https://github.com/Azure/openai-at-scale/issues"
                                target={"_blank"}
                                title="Github Issues"
                                style={{ color: "rgb(1, 92, 218)" }}
                            >
                                Azure/openai-at-scale
                                <FontIcon aria-label="NavigateExternalInline" iconName="NavigateExternalInline" style={{ paddingLeft: "5px" }} />
                            </a>
                        </Stack.Item>
                    </Stack>
                </Callout>
            )}
            {isInfoCalloutVisible && (
                <Callout role="dialog" target={`#${buttonInfoId}`} className={styles.callout} setInitialFocus onDismiss={toggleIsInfoCalloutVisible}>
                    <Stack>
                        <Stack.Item>
                            <Label className={styles.stack}>
                                <img src={github} alt="Github logo" aria-label="Link to github repository" height="20px" style={{ padding: "0 5px 0 0" }} />
                                Sample code
                            </Label>
                        </Stack.Item>
                        <Stack.Item className={styles.stack}>Visit the GitHub repo to check the source code of this application.</Stack.Item>
                        <Stack.Item className={styles.stack}>
                            <a
                                href="https://github.com/Azure/openai-at-scale"
                                target={"_blank"}
                                title="Github repository link"
                                style={{ color: "rgb(1, 92, 218)" }}
                            >
                                Azure/openai-at-scale
                                <FontIcon aria-label="NavigateExternalInline" iconName="NavigateExternalInline" style={{ paddingLeft: "5px" }} />
                            </a>
                        </Stack.Item>
                    </Stack>
                </Callout>
            )}
        </>
    );
}
