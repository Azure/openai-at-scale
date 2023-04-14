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

const Chat = () => {
    const [promptSystemTemplate, setPromptSystemTemplate] = useState<string>("");
    const [topp, setTopp] = useState<number>(0.95);
    const [temperature, setTemperature] = useState<number>(0.5);

    const lastQuestionRef = useRef<string>("");
    const chatMessageStreamEnd = useRef<HTMLDivElement | null>(null);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>();

    const [answers, setAnswers] = useState<[user: string, response: AskResponse][]>([]);

    const makeApiRequest = async (question: string) => {
        console.log("make api request ....", question);
        lastQuestionRef.current = question;

        error && setError(undefined);
        setIsLoading(true);

        try {
            const history: ChatTurn[] = answers.map(a => ({ user: a[0], bot: a[1].answer }));
            const request: ChatRequest = {
                history: [...history, { user: question, bot: undefined }],
                approach: Approaches.ReadRetrieveRead,
                overrides: {
                    promptSytemTemplate: promptSystemTemplate.length === 0 ? undefined : promptSystemTemplate,
                    temperature: temperature
                }
            };
            console.log("request: ", request);
            const result = await chatApi(request);
            console.log("answer: ", result);
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

    useEffect(() => chatMessageStreamEnd.current?.scrollIntoView({ behavior: "smooth" }), [isLoading]);

    const onPromptSystemTemplateChange = (_ev?: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setPromptSystemTemplate(newValue || "");
    };

    const temperatureOnChange = (value: number) => setTemperature(value);

    const toppOnChange = (value: number) => setTopp(value);

    return (
        <div className={styles.container}>
            <Stack enableScopedSelectors disableShrink horizontal horizontalAlign="center" verticalAlign="center" className={styles.stack}>
                <Stack.Item grow align="stretch" disableShrink className={styles.stackItem}>
                    <div className={styles.chatRoot}>
                        <div className={styles.chatContainer}>
                            {/* チャット画面 */}
                            <div className={styles.chatMessageStream}>
                                {answers.map((answer, index) => (
                                    <div key={index}>
                                        <UserChatMessage message={answer[0]} />
                                        <div className={styles.chatMessageGpt}>
                                            <Answer key={index} answer={answer[1]}></Answer>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <>
                                        <UserChatMessage message={lastQuestionRef.current} />
                                        <div className={styles.chatMessageGptMinWidth}>
                                            <AnswerLoading />
                                        </div>
                                    </>
                                )}
                                {error ? (
                                    <>
                                        <UserChatMessage message={lastQuestionRef.current} />
                                        <div className={styles.chatMessageGptMinWidth}>
                                            <AnswerError error={error.toString()} onRetry={() => makeApiRequest(lastQuestionRef.current)} />
                                        </div>
                                    </>
                                ) : null}
                                <div ref={chatMessageStreamEnd} />
                            </div>
                            {/* 質問入力画面 */}
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
                            defaultValue={topp}
                            onChange={toppOnChange}
                        />
                    </div>
                </Stack.Item>
            </Stack>
        </div>
    );
};

export default Chat;
