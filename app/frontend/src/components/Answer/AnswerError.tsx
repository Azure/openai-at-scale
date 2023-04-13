import { Stack, PrimaryButton } from "@fluentui/react";
import { ErrorCircle24Regular } from "@fluentui/react-icons";

import styles from "./Answer.module.css";

interface Props {
    error: string;
    onRetry: () => void;
}

export const AnswerError = ({ error, onRetry }: Props) => {
    return (
        <Stack className={styles.answerContainer} verticalAlign="space-between">
            <div className={styles.answerLogo}>
                <ErrorCircle24Regular aria-hidden="true" aria-label="Error icon" primaryFill="red" />
            </div>
            <Stack.Item grow>
                <p className={styles.answerText}>
                    {error}
                    <br />
                    <PrimaryButton className={styles.retryButton} onClick={onRetry} text="Retry" />
                </p>
            </Stack.Item>
        </Stack>
    );
};
