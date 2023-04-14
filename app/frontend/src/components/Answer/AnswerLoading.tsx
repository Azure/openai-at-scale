import { Stack } from "@fluentui/react";
import { animated, useSpring } from "@react-spring/web";

import styles from "./Answer.module.css";
import { AnswerIcon } from "./AnswerIcon";
import { ProgressIndicator } from "@fluentui/react/lib/ProgressIndicator";

export const AnswerLoading = () => {
    const animatedStyles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
    });
    const barHeight = 10;
    return (
        <animated.div style={{ ...animatedStyles }}>
            <Stack className={styles.answerContainer} verticalAlign="space-between">
                <Stack.Item grow>
                    <ProgressIndicator className={styles.isLoading} label="Finding answer ..." barHeight={barHeight} />
                </Stack.Item>
            </Stack>
        </animated.div>
    );
};
