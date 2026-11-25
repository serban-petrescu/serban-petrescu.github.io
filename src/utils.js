import React from "react";

function formatDate(date) {
    return date && date !== "Invalid date" ? date : "present";
}

export function formatPeriod({ to, from, at }) {
    return String(at ? at : formatDate(from) + " - " + formatDate(to));
}

// Paragraph breaks in JSON bodies are "\n\n"; a single <p> wrapper used to swallow them.
export function renderHtml(html = "") {
    return html
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ));
}
