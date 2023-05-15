import { useRef, useState, useEffect } from "react";
import { TextField, Slider } from "@fluentui/react";
import { Stack } from "@fluentui/react";
import { Label } from "@fluentui/react-components";
import styles from "./Chat.module.css";

import { chatApi, Approaches, AskResponse, ChatRequest, ChatTurn } from "../../api";
import { Answer, AnswerError, AnswerLoading } from "../../components/Answer";
import { QuestionInput } from "../../components/QuestionInput";
import { UserChatMessage } from "../../components/UserChatMessage";
import { ClearChatButton } from "../../components/ClearChatButton";
import { useAppContext } from "../../context/AppContext";

const Chat = () => {
    //Parameters of model
    const [maxResponse, setMaxResponse] = useState<number>(800);
    const [promptSystemTemplate, setPromptSystemTemplate] = useState<string>("");
    const [temperature, setTemperature] = useState<number>(0.5);
    const [top, setTop] = useState<number>(0.95);

    //Session settings
    const [pastMessages, setPastMessages] = useState<number>(10);
    const lastQuestionRef = useRef<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>();
    const [answers, setAnswers] = useState<[user: string, response: AskResponse][]>([]);

    //UserInfo
    const app = useAppContext();

    const makeApiRequest = async (question: string) => {
        console.log("make api request ....", question);
        lastQuestionRef.current = question;
        const nullAnswer: AskResponse = { answer: undefined };
        setAnswers([...answers, [question, nullAnswer]]);
        console.log("answers: ", answers);
        error && setError(undefined);
        setIsLoading(true);

        try {
            const history: ChatTurn[] = answers.map(a => ({ user: a[0], bot: a[1].answer }));
            const request: ChatRequest = {
                history: [...history, { user: question, bot: undefined }],
                approach: Approaches.ReadRetrieveRead,
                overrides: {
                    promptSystemTemplate: promptSystemTemplate.length === 0 ? undefined : promptSystemTemplate,
                    maxResponse: maxResponse,
                    temperature: temperature,
                    top: top
                },
                sessionConfig: {
                    pastMessages: pastMessages
                },
                userInfo: {
                    username: app.user?.displayName,
                    email: app.user?.email
                },
                accessToken: {
                    accessToken: app.accessToken?.accessToken || ""
                },
                sessionId: {
                    sessionId: app.sessionId?.sessionId || ""
                }
            };
            console.log("request: ", request);
            const result = await chatApi(request);
            console.log("answer: ", result);
            console.log([...answers, [question, result]]);
            setAnswers([...answers, [question, result]]);
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        lastQuestionRef.current = "";
        error && setError(undefined);
        setAnswers([]);
    };

    //setState for parameters setting
    const onPromptSystemTemplateChange = (_ev?: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setPromptSystemTemplate(newValue || "");
    };
    const maxResponseOnChange = (value: number) => setMaxResponse(value);
    const temperatureOnChange = (value: number) => setTemperature(value);
    const topOnChange = (value: number) => setTop(value);
    const pastMessagesOnChange = (value: number) => setPastMessages(value);

    return (
        <div className={styles.container}>
            <Stack enableScopedSelectors disableShrink horizontal horizontalAlign="center" verticalAlign="center" className={styles.stack}>
                <Stack.Item grow align="stretch" disableShrink className={styles.stackItem}>
                    <div className={styles.chatRoot}>
                        <div className={styles.chatContainer}>
                            <div className={styles.chatMessageStream}>
                                {answers.map((answer, index) => (
                                    <div key={index}>
                                        <UserChatMessage message={answer[0]} />
                                        <Answer key={index} answer={answer[1]}></Answer>
                                    </div>
                                ))}
                                {isLoading && (
                                    <>
                                        <div className={styles.chatMessageGptMinWidth}>
                                            <AnswerLoading />
                                        </div>
                                    </>
                                )}
                                {error ? (
                                    <>
                                        <div className={styles.chatMessageGptMinWidth}>
                                            <AnswerError error={error.toString()} onRetry={() => makeApiRequest(lastQuestionRef.current)} />
                                        </div>
                                    </>
                                ) : null}
                            </div>
                            <div className={styles.chatInput}>
                                <ClearChatButton className={styles.commandButton} onClick={clearChat} disabled={!lastQuestionRef.current || isLoading} />
                                <QuestionInput
                                    clearOnSend
                                    placeholder="Type a new question (e.g. does my plan cover annual eye exams?)"
                                    disabled={isLoading}
                                    onSend={question => makeApiRequest(question)}
                                />
                            </div>
                        </div>
                    </div>
                </Stack.Item>
                <Stack.Item grow align="stretch" className={styles.stackItemConfig}>
                    <div className={styles.commandsContainer}>
                        <div className={styles.chatSettingsLabel}>
                            <Label>Parameters</Label>
                        </div>
                        <TextField
                            className={styles.chatSettingsSeparator}
                            defaultValue={promptSystemTemplate}
                            label="System Prompt"
                            multiline
                            autoAdjustHeight
                            onChange={onPromptSystemTemplateChange}
                        />
                        <Slider
                            className={styles.chatSettingsSeparator}
                            label="Max response"
                            min={1}
                            max={4000}
                            step={1}
                            showValue
                            snapToStep
                            defaultValue={maxResponse}
                            onChange={maxResponseOnChange}
                        />
                        <Slider
                            className={styles.chatSettingsSeparator}
                            label="Temperature"
                            min={0}
                            max={1}
                            step={0.05}
                            showValue
                            snapToStep
                            defaultValue={temperature}
                            onChange={temperatureOnChange}
                        />
                        <Slider
                            className={styles.chatSettingsSeparator}
                            label="Top P"
                            min={0}
                            max={1}
                            step={0.05}
                            showValue
                            snapToStep
                            defaultValue={top}
                            onChange={topOnChange}
                        />
                        <h3>Session settings</h3>
                        <Slider
                            className={styles.chatSettingsSeparator}
                            label="Past message included"
                            min={0}
                            max={20}
                            step={1}
                            showValue
                            snapToStep
                            defaultValue={pastMessages}
                            onChange={pastMessagesOnChange}
                        />
                    </div>
                </Stack.Item>
            </Stack>
        </div>
    );
};

export default Chat;
