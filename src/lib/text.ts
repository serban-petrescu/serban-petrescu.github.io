// Project descriptions are short HTML; the archive row shows a plain-text teaser.
export const stripHtml = (html: string) =>
    html
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+([.,;:!?])/g, "$1")
        .replace(/\s+/g, " ")
        .trim();

export function teaser(html: string, maxWords = 24) {
    const text = stripHtml(html);
    const sentence = text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text;
    const words = sentence.split(" ");
    return words.length <= maxWords ? sentence : `${words.slice(0, maxWords).join(" ")}…`;
}
