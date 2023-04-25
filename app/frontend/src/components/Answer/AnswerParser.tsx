type HtmlParsedAnswer = {
    answerHtml: string;
};

export function parseAnswerToHtml(answer: string): HtmlParsedAnswer {
    const fragments = answer.split(/\[([^\]]+)\]/g);

    return {
        answerHtml: fragments.join("")
    };
}
