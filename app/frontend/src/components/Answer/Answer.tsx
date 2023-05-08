import { useMemo } from "react";
import { Stack, IconButton } from "@fluentui/react";
import DOMPurify from "dompurify";

import styles from "./Answer.module.css";

import { AskResponse } from "../../api";
import { parseAnswerToHtml } from "./AnswerParser";
import { AnswerIcon } from "./AnswerIcon";

interface Props {
    answer: AskResponse;
}

export const Answer = ({ answer }: Props) => {
    if (answer == undefined) return null;
    if (answer.answer == undefined) return null;
    const generatedAnswer: string = answer.answer;
    const parsedAnswer = useMemo(() => parseAnswerToHtml(generatedAnswer), [answer]);
    const sanitizedAnswerHtml = DOMPurify.sanitize(parsedAnswer.answerHtml);

    return (
        <Stack className={`${styles.answerContainer}`} verticalAlign="space-between">
            <Stack.Item>
                <div className={styles.answerLogo}>
                    <AnswerIcon />
                </div>
            </Stack.Item>
            <Stack.Item grow>
                <div className={styles.answerText} dangerouslySetInnerHTML={{ __html: sanitizedAnswerHtml }}></div>
            </Stack.Item>
        </Stack>
    );
};
